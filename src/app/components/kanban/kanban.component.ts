import { AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { CardSettingsModel, ColumnsModel } from '@syncfusion/ej2-angular-kanban';
import { KanbanHandlerService } from 'src/app/services/kanban-handler.service';
import { Subscription } from 'rxjs';
import { KanbanModalComponent } from '../kanban-modal/kanban-modal.component';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-kanban',
  styleUrls: ['./kanban.component.css'],
  template: `
  <ejs-kanban class='kanban-custom' height="400" width="100%" [dataSource]='data' [columns]='columns' keyField="status" [cardSettings]='cardSettings' enableTooltip='true'>         
    <ng-template #cardSettingsTemplate let-data> 
      <div class="card-template e-tooltip-text"> 
        <span>{{ data.positionTitle | truncate:8 }}</span>
        <span  [ngClass]="{'avatar-contacted': data.haveContactedHiringManager, 'avatar-not-contacted': !data.haveContactedHiringManager}"
        class="avatar"><a [href]="data.hiringManagerLinkedIn" target="_blank">🧑</a></span>
      </div> 
    </ng-template> 
    <ng-template #tooltipTemplate >
        <div class='e-kanbanTooltipTemp'>
            hello world
        </div>
    </ng-template>
  </ejs-kanban>
  <app-kanban-modal #modal></app-kanban-modal>
  `
})
export class KanbanComponent implements AfterViewChecked, OnDestroy {
  @ViewChild('modal') modal!: KanbanModalComponent;
  
  public columns: ColumnsModel[] = [];
  public data: Card[] = [];
  public cardSettings: CardSettingsModel;
  private subscription: Subscription = new Subscription();

  constructor(private kanbanService: KanbanHandlerService, private cdr: ChangeDetectorRef) {
    this.columns = this.kanbanService.columns;
    this.cardSettings = this.kanbanService.cardSettings;
    this.subscription.add(this.kanbanService.cardStore$.subscribe((data: Card[]) => {
      this.data = data;
      console.log("Data updated:", data);
    }));
  }

  openDialog(keyField: string) {
    this.modal.openDialog(keyField);
  }

  ngAfterViewChecked(): void {
    const emptyCards = document.querySelectorAll('.e-empty-card');
    emptyCards.forEach((element) => {
      (element as HTMLElement).style.display = 'none';
    });

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
