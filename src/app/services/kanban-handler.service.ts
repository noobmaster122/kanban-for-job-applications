import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { data, columns, cardSettings } from './data';
import { CardSettingsModel, ColumnsModel } from '@syncfusion/ej2-angular-kanban';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class KanbanHandlerService {
  private cardStoreSubject = new BehaviorSubject<Card[]>(data);
  public cardStore$ = this.cardStoreSubject.asObservable();
  public columns: ColumnsModel[] = columns;
  public cardSettings: CardSettingsModel = cardSettings;


  public addCard(newCard: Card) {
    const updatedData = [...this.cardStoreSubject.getValue(), newCard];
    this.cardStoreSubject.next(updatedData);
  }

}
