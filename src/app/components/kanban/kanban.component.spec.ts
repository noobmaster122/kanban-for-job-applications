import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KanbanComponent } from './kanban.component';
import { KanbanHandlerService } from 'src/app/services/kanban-handler.service';
import { of } from 'rxjs';
import { Card } from 'src/app/models/card.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { KanbanModalComponent } from '../kanban-modal/kanban-modal.component';
import { By } from '@angular/platform-browser';

describe('KanbanComponent', () => {
  let component: KanbanComponent;
  let fixture: ComponentFixture<KanbanComponent>;
  let mockKanbanService: jasmine.SpyObj<KanbanHandlerService>;

  const mockData: Card[] = [
    {       Id: 535345,
      status: "toApplyStatus" ,
      positionTitle: "job title",
      hiringManagerName: "john doe",
      hiringManagerLinkedIn: "#",
      haveContactedHiringManager: false, },
    {       Id: 535334,
      status: "toApplyStatus" ,
      positionTitle: "job title",
      hiringManagerName: "john doe",
      hiringManagerLinkedIn: "#",
      haveContactedHiringManager: false, }
  ];

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('KanbanHandlerService', ['columns', 'cardSettings', 'cardStore$']);

    // Mock the cardStore$ observable to return mock data
    spy.cardStore$ = of(mockData);

    await TestBed.configureTestingModule({
      declarations: [ KanbanComponent, KanbanModalComponent ],
      providers: [
        { provide: KanbanHandlerService, useValue: spy }
      ],
      schemas: [NO_ERRORS_SCHEMA] // Ignore unknown elements and attributes
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Apply any initial data bindings
  });

  it('should use initial data from the service', () => {
    expect(component.data).toEqual(mockData);
  });

  it('should hide .e-empty-card elements and ensure they do not show text', () => {
    fixture.detectChanges(); // Ensure any updates are applied

    const emptyCards = fixture.debugElement.queryAll(By.css('.e-empty-card'));
    emptyCards.forEach(card => {
      expect(card.nativeElement.style.display).toBe('none');
    });
  });
});
