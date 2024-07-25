import { TestBed } from '@angular/core/testing';
import { KanbanHandlerService } from './kanban-handler.service';
import { BehaviorSubject } from 'rxjs';
import { data, columns, cardSettings } from './data';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';

describe('KanbanHandlerService', () => {
  let service: KanbanHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KanbanHandlerService]
    });
    service = TestBed.inject(KanbanHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with correct properties', () => {
    expect(service.columns).toEqual(columns);
    expect(service.data).toEqual(data);
    expect(service.cardSettings).toEqual(cardSettings);
  });

  it('should add a new card and emit updated data', (done) => {
    // Arrange
    const newCard = { id: 4, title: 'New Card', status: 'Open' };

    // Act
    service.cardStore.subscribe((updatedData) => {
      // Assert
      expect(updatedData).toContain(newCard); 
      done(); // Indicate the test is complete
    });

    // Call the method to test
    service.addCard(newCard);
  });

});
