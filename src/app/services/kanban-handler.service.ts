import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { data,columns,cardSettings } from './data';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';

@Injectable({
  providedIn: 'root'
})
export class KanbanHandlerService {
  public cardStore = new EventEmitter<object[]>();
  public columns: object[] = columns;
  public data: object[] = data;
  public cardSettings: CardSettingsModel = cardSettings;


  constructor() {
    this.updateKanbanCards();
  }

  private updateKanbanCards(){
    this.cardStore.emit(this.data);
  }

  // Add a new card
  addCard(newCard: object) {
    this.data = [...this.data, newCard];
    this.updateKanbanCards();
  }

  // Additional methods for updating or removing cards
}
