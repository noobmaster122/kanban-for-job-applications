import { TestBed } from '@angular/core/testing';
import { KanbanHandlerService } from './kanban-handler.service';
import { data } from './data';
import { Card } from '../models/card.model';

describe('KanbanHandlerService', () => {
  let service: KanbanHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanHandlerService);
  });

  it('should have the initial value of cardStoreSubject', () => {
    service.cardStore$.subscribe(cards => {
      expect(cards).toEqual(data);
    });
  });

  it('should add a new card to cardStoreSubject', () => {
    const newCard: Card = { 
      Id: 53534534,
      status: "toApplyStatus" ,
      positionTitle: "job title",
      hiringManagerName: "john doe",
      hiringManagerLinkedIn: "#",
      haveContactedHiringManager: false,
     };

    service.addCard(newCard);

    service.cardStore$.subscribe(cards => {
      expect(cards).toContain(newCard);
      expect(cards.length).toBe(data.length + 1); // Ensure the length is increased by 1
    });
  });
});
