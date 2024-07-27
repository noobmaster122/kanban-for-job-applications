import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CardSettingsModel, ColumnsModel } from '@syncfusion/ej2-angular-kanban';
import { KanbanHandlerService } from 'src/app/services/kanban-handler.service';
import { Subscription } from 'rxjs';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';


@Component({
  selector: 'app-kanban',
  //templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
  template: `
  <ejs-kanban class='kanban-custom' [dataSource]='data' keyField="status" [columns]='columns' [cardSettings]='cardSettings'>         
    <ng-template #cardSettingsTemplate let-data> 
      <div class="card-template"> 
          <div class="e-card-header">
            <h4>{{ data.positionTitle }}</h4>
          </div>
          <div class="e-card-content">
            <p><strong>LinkedIn:</strong> <a [href]="data.hiringManagerLinkedIn" target="_blank">{{ data.hiringManagerName }}</a></p>
            <p><strong>Contacted:</strong> {{ data.haveContactedHiringManager ? 'Yes' : 'No' }}</p>
          </div> 
        </div> 
    </ng-template> 
  </ejs-kanban>
  <ejs-dialog #dialog [visible]="dialogVisible" [header]="'Dialog'" [content]="dialogContent" [width]="'300px'" [target]="'#target'" [isModal]="true" (overlayClick)="onOverlayClick()">
  </ejs-dialog>
  <div id="target"></div>
  <pre>{{data | json}}</pre>
              `
})
export class KanbanComponent implements AfterViewChecked, OnInit, OnDestroy {
  @ViewChild('dialog') dialog!: DialogComponent;
  public columns: ColumnsModel[];
  public data: object[];
  public cardSettings: CardSettingsModel;
  public dialogVisible: boolean = false; // Add this property
  public dialogContent: string = ''; // Add this property
  private subscription: Subscription | null = null;


  constructor(private kanbanService: KanbanHandlerService, private cdr: ChangeDetectorRef) {
    this.columns = kanbanService.columns;
    this.data = kanbanService.data;
    this.cardSettings = kanbanService.cardSettings;
  }

  ngOnInit() {
    this.subscription = this.kanbanService.cardStore.subscribe((data: object[]) => {
      this.data = data;
    });
  }




  openDialog(keyField: string | null) {
    this.dialogContent = `This is a dialog for the ${keyField} column.`;
    this.dialogVisible = true;
    console.log(this.dialog);
    this.dialog.show();
  }
  onOverlayClick() {
    this.dialogVisible = false;
    this.dialog.hide();
  }

  ngAfterViewChecked(): void {
    // Trigger change detection to ensure the view is fully updated
    this.cdr.detectChanges();

    // Query the document for all elements with the class 'e-empty-card'
    const emptyCards = document.querySelectorAll('.e-empty-card');

    // Iterate over the NodeList and hide each element
    emptyCards.forEach((element) => {
      (element as HTMLElement).style.display = 'none';
    });

    // the eventlistneres get removed after the cards are moved in the kanban
    const triggers = document.querySelectorAll('.open-dialog-trigger');
    triggers.forEach(trigger => {
      trigger.addEventListener('click', (event) => {
        const keyField = (event.currentTarget as HTMLElement).getAttribute('data-key');
        console.log(keyField);
        this.openDialog(keyField);
      });
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}


