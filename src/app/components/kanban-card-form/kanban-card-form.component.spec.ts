import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { KanbanCardFormComponent } from './kanban-card-form.component';
import { KanbanHandlerService } from 'src/app/services/kanban-handler.service';
import { Card } from 'src/app/models/card.model';

describe('KanbanCardFormComponent', () => {
  let component: KanbanCardFormComponent;
  let fixture: ComponentFixture<KanbanCardFormComponent>;
  let kanbanService: jasmine.SpyObj<KanbanHandlerService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('KanbanHandlerService', ['addCard']);

    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [KanbanCardFormComponent],
      providers: [
        { provide: KanbanHandlerService, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(KanbanCardFormComponent);
    component = fixture.componentInstance;
    kanbanService = TestBed.inject(KanbanHandlerService) as jasmine.SpyObj<KanbanHandlerService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addCard on form submission', () => {
    spyOn(component, 'addCard').and.callThrough();

    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button[type="submit"]') as HTMLButtonElement;
    
    button.click();

    expect(component.addCard).toHaveBeenCalled();
  });

  it('should call KanbanHandlerService.addCard with correct data', () => {
    const newCard: Card = {
      Id: -1, // This will be replaced with a random number in the component
      status: 'toApplyStatus', // Ensure this matches one of the allowed string literals
      positionTitle: 'Test Position',
      hiringManagerName: 'Test Manager',
      hiringManagerLinkedIn: '#',
      haveContactedHiringManager: false
    };

    component.newCard = { ...newCard };

    // Mock `Math.random()` to return a fixed value for predictability
    spyOn(Math, 'floor').and.returnValue(1);

    component.addCard();

    expect(kanbanService.addCard).toHaveBeenCalledWith({
      ...newCard,
      Id: 1 // The fixed value returned by `Math.floor`
    });
  });

  it('should reset the form after submission', () => {
    component.newCard = {
      Id: 2,
      status: 'appliedStatus',
      positionTitle: 'Test Position',
      hiringManagerName: 'Test Manager',
      hiringManagerLinkedIn: '#',
      haveContactedHiringManager: true
    };

    component.addCard();

    expect(component.newCard).toEqual({
      Id: -1,
      status: 'toApplyStatus',
      positionTitle: '',
      hiringManagerName: '',
      hiringManagerLinkedIn: '#',
      haveContactedHiringManager: false
    });
  });
});
