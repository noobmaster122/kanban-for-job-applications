import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map } from 'rxjs';
//import { data,columns,cardSettings } from './data';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class KanbanHandlerService {
  public cardData = new EventEmitter<object[]>();
  public columnsData = new EventEmitter<object[]>();
  public cardSettingsData = new EventEmitter<CardSettingsModel>();
  public columns: object[] = [];
  public cards: object[] = [];
  public cardSettings: CardSettingsModel = { headerField: '', contentField: '' };
  private apiUrl = 'http://localhost:3212'; // URL to the JSON server



  constructor(private http: HttpClient) {
    this.fetchInitialData();
  }

  private fetchInitialData(): void {
    const columns$ = this.http.get<object[]>(`${this.apiUrl}/columns`);
    const cards$ = this.http.get<object[]>(`${this.apiUrl}/cards`);
    const cardSettings$ = this.http.get<CardSettingsModel>(`${this.apiUrl}/cardSettings`);

    forkJoin([columns$, cards$, cardSettings$])
      .pipe(
        map(([columns, cards, cardSettings]) => {
          this.columns = columns;
          this.cards = cards;
          this.cardSettings = cardSettings;
          this.columnsData.emit(this.columns);
          this.cardData.emit(this.cards);
          this.cardSettingsData.emit(this.cardSettings);
        })
      )
      .subscribe();
  }

  private updateKanbanCards(){
    this.cardData.emit(this.cards);
  }

  // Add a new card
  addCard(newCard: object) {
    this.http.post<object>(`${this.apiUrl}/cards`, newCard).subscribe(addedCard => {
      this.cards = [...this.cards, addedCard];
      this.updateKanbanCards();
    });
  }

}
