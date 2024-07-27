import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { KanbanHandlerService } from 'src/app/services/kanban-handler.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-kanban',
  //templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
  template: `
  <ejs-kanban class='kanban-custom' [dataSource]='data' keyField="status" [columns]='columns' [cardSettings]='cardSettings'>         
  </ejs-kanban>
  <pre>{{data | json}}</pre>
              `
})
export class KanbanComponent implements AfterViewChecked  {
  public columns: object[];
  public data: object[];
  public cardSettings: CardSettingsModel;
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

  ngAfterViewChecked(): void {
      // Trigger change detection to ensure the view is fully updated
      this.cdr.detectChanges();

      // Query the document for all elements with the class 'e-empty-card'
      const emptyCards = document.querySelectorAll('.e-empty-card');      

      // Iterate over the NodeList and hide each element
      emptyCards.forEach((element) => {
        (element as HTMLElement).style.display = 'none';
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe(); 
    }
  }
}


