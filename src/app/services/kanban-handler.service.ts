import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { data,columns,cardSettings } from './data';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { Column } from '../models/column.model';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class KanbanHandlerService {
  public cardStore = new EventEmitter<object[]>();
  public columns: Column[] = columns;
  public data: Card[] = data;
  public cardSettings: CardSettingsModel = cardSettings;


  constructor() {
    this.updateKanbanCards();
  }

  private updateKanbanCards(){
    this.cardStore.emit(this.data);
  }

  // Add a new card
  addCard(newCard: Card) {
    this.data = [...this.data, newCard];
    this.updateKanbanCards();
  }

  // Additional methods for updating or removing cards
}
