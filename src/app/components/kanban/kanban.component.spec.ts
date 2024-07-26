import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { KanbanComponent } from './kanban.component';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { ChangeDetectorRef } from '@angular/core';
import { KanbanHandlerService } from 'src/app/services/kanban-handler.service';
import { EventEmitter } from '@angular/core';
import { of } from 'rxjs';
import { Card } from 'src/app/models/card.model';

describe('KanbanComponent', () => {
  let component: KanbanComponent;
  let fixture: ComponentFixture<KanbanComponent>;
  let kanbanService: jasmine.SpyObj<KanbanHandlerService>;
  let changeDetectorRef: jasmine.SpyObj<ChangeDetectorRef>;

  beforeEach(async () => {
    // Create spies for EventEmitters
    const spyCardData = new EventEmitter<Card[]>();
    const spyColumnsData = new EventEmitter<any[]>();
    const spyCardSettingsData = new EventEmitter<any>();

    const spyKanbanService = jasmine.createSpyObj('KanbanHandlerService', [], {
      cardData: spyCardData,
      columnsData: spyColumnsData,
      cardSettingsData: spyCardSettingsData
    });

    const spyChangeDetectorRef = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);

    await TestBed.configureTestingModule({
      declarations: [KanbanComponent],
      imports: [KanbanModule],
      providers: [
        { provide: KanbanHandlerService, useValue: spyKanbanService },
        { provide: ChangeDetectorRef, useValue: spyChangeDetectorRef }
      ]
    }).compileComponents();

    kanbanService = TestBed.inject(KanbanHandlerService) as jasmine.SpyObj<KanbanHandlerService>;
    changeDetectorRef = TestBed.inject(ChangeDetectorRef) as jasmine.SpyObj<ChangeDetectorRef>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detect initial changes
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display Kanban board', () => {
    const kanbanElement = fixture.debugElement.query(By.css('ejs-kanban'));
    expect(kanbanElement).toBeTruthy();
  });

  it('should hide empty cards', () => {
    // Simulate view updates and trigger change detection
    fixture.detectChanges(); // Ensure the view is fully initialized
    component.ngAfterViewChecked();
    fixture.detectChanges(); // Apply any changes

    // Test that empty cards are hidden
    const emptyCards = document.querySelectorAll('.e-empty-card');
    emptyCards.forEach((element) => {
      expect((element as HTMLElement).style.display).toBe('none');
    });
  });

  it('should update data on service data changes', () => {
    const mockData: Card[] = [{ 
      Id: 1, 
      status: 'toApplyStatus', 
      positionTitle: 'Test Title', 
      hiringManagerName: 'Test Manager', 
      hiringManagerLinkedIn: '#', 
      haveContactedHiringManager: false 
    }];

    kanbanService.cardData.emit(mockData); // Emit mock data

    // Trigger ngOnInit lifecycle method to simulate component initialization
    component.ngOnInit();
    fixture.detectChanges(); // Detect changes

    // Check if data is updated in the component
    expect(component.data).toEqual(mockData);
  });

  it('should update columns on service columns data changes', () => {
    const mockColumns = [{ headerText: 'To Apply', keyField: 'toApplyStatus' }];
    
    kanbanService.columnsData.emit(mockColumns); // Emit mock columns

    // Trigger ngOnInit lifecycle method to simulate component initialization
    component.ngOnInit();
    fixture.detectChanges(); // Detect changes

    // Check if columns are updated in the component
    expect(component.columns).toEqual(mockColumns);
  });

  it('should update card settings on service settings data changes', () => {
    const mockCardSettings = { headerField: 'positionTitle', contentField: 'hiringManagerName' };
    
    kanbanService.cardSettingsData.emit(mockCardSettings); // Emit mock card settings

    // Trigger ngOnInit lifecycle method to simulate component initialization
    component.ngOnInit();
    fixture.detectChanges(); // Detect changes

    // Check if card settings are updated in the component
    expect(component.cardSettings).toEqual(mockCardSettings);
  });

  it('should unsubscribe on component destroy', () => {
    const unsubscribeSpy = spyOn(component['subscription'], 'unsubscribe');

    component.ngOnDestroy();

    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});
