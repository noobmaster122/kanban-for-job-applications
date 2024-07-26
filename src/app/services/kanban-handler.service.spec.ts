import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { KanbanHandlerService } from './kanban-handler.service';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { Card } from '../models/card.model';
import { fakeAsync, tick } from '@angular/core/testing';

describe('KanbanHandlerService', () => {
  let service: KanbanHandlerService;
  let httpMock: HttpTestingController;

  const mockColumns = [{ id: 1, name: 'Column 1' }];
  const mockCards: Card[] = [
    {
      Id: 8912,
      status: "toApplyStatus",
      positionTitle: "dev web",
      hiringManagerName: "hamouda",
      hiringManagerLinkedIn: "#",
      haveContactedHiringManager: false
    },
    {
      Id: 74125,
      status: "toApplyStatus",
      positionTitle: "dev web",
      hiringManagerName: "hamouda",
      hiringManagerLinkedIn: "#",
      haveContactedHiringManager: false
    }
  ];
  const mockCardSettings: CardSettingsModel = { headerField: 'header', contentField: 'content' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [KanbanHandlerService]
    });
    service = TestBed.inject(KanbanHandlerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a new card and emit updated data', fakeAsync(() => {
    const newCard: Card = {
      Id: 7895,
      status: "toApplyStatus",
      positionTitle: "dev web",
      hiringManagerName: "hamouda",
      hiringManagerLinkedIn: "#",
      haveContactedHiringManager: false
    };

    service.cardData.subscribe((updatedCards) => {
      if (updatedCards.length > mockCards.length) {
        expect(updatedCards).toContain(newCard);
        tick();
      }
    });

    service.addCard(newCard);

    const reqPost = httpMock.expectOne(req => req.method === 'POST' && req.url.endsWith('/cards'));
    expect(reqPost.request.method).toBe('POST');
    reqPost.flush(newCard);

    // After adding the card, we assume the service fetches the updated card list again
    const reqGet = httpMock.expectOne(req => req.method === 'GET' && req.url.endsWith('/cards'));
    reqGet.flush([...mockCards, newCard]);

    tick();
  }));
});
