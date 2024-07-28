import { AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CardSettingsModel, ColumnsModel } from '@syncfusion/ej2-angular-kanban';
import { KanbanHandlerService } from 'src/app/services/kanban-handler.service';
import { Subscription } from 'rxjs';
import { KanbanModalComponent } from '../kanban-modal/kanban-modal.component';
import { columns as columnsData } from 'src/app/services/data';

@Component({
  selector: 'app-kanban',
  styleUrls: ['./kanban.component.css'],
  template: `
  <ejs-kanban class='kanban-custom' [dataSource]='data' [columns]='columns' keyField="status" [cardSettings]='cardSettings'>         
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
  <app-kanban-modal #modal></app-kanban-modal>
  `
})
export class KanbanComponent implements AfterViewChecked, OnInit, OnDestroy {
  @ViewChild('modal') modal!: KanbanModalComponent;
  
  public columns!: ColumnsModel[];
  public data!: object[];
  public cardSettings!: CardSettingsModel;
  private subscription: Subscription | null = null;

  constructor(private kanbanService: KanbanHandlerService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.columns = this.kanbanService.columns;

    this.subscription = this.kanbanService.cardStore.subscribe((data: object[]) => {
      this.data = data;
    });

  }

  ngAfterViewInit(){
    this.data = this.kanbanService.data;
    this.cardSettings = this.kanbanService.cardSettings;
    console.log("am data", this.data);

  }

  openDialog(keyField: string) {
    this.modal.openDialog(keyField);
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
    const emptyCards = document.querySelectorAll('.e-empty-card');
    emptyCards.forEach((element) => {
      (element as HTMLElement).style.display = 'none';
    });

    //this causes an infinite loop
    //only do this logic if no triggers are found
    const triggers = document.querySelectorAll('.open-dialog-trigger');
    triggers.forEach(trigger => {
      trigger.addEventListener('click', (event) => {
        const keyField = (event.currentTarget as HTMLElement).getAttribute('data-key');

        this.openDialog(keyField || 'toApplyStatus');
      });
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
