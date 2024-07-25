import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { KanbanCardFormComponent } from './kanban-card-form.component';
import { KanbanHandlerService } from 'src/app/services/kanban-handler.service';
import { of } from 'rxjs';

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
    const newCard = {
      Id: 1,
      Title: 'Test Title',
      Status: 'Test Status',
      Summary: '',
      Type: '',
      Priority: '',
      Tags: '',
      Estimate: null,
      Assignee: '',
      RankId: null
    };
    component.newCard = newCard;


    const returnedCard = component.addCard();

    expect(kanbanService.addCard).toHaveBeenCalledWith(returnedCard);
    expect(returnedCard).toEqual(newCard);
  });

  it('should reset the form after submission', () => {
    const initialCard = {
      Id: 1,
      Title: '',
      Status: '',
      Summary: '',
      Type: '',
      Priority: '',
      Tags: '',
      Estimate: null,
      Assignee: '',
      RankId: null
    };

    component.newCard = {
      Id: 2,
      Title: 'Test Title',
      Status: 'Test Status',
      Summary: '',
      Type: '',
      Priority: '',
      Tags: '',
      Estimate: null,
      Assignee: '',
      RankId: null
    };

    component.addCard();

    expect(component.newCard).toEqual(initialCard);
  });
});
