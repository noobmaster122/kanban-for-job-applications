import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { KanbanModalComponent } from './kanban-modal.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('KanbanModalComponent', () => {
  let component: KanbanModalComponent;
  let fixture: ComponentFixture<KanbanModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanModalComponent ],
      schemas: [NO_ERRORS_SCHEMA], 
    }).compileComponents();

    fixture = TestBed.createComponent(KanbanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


});
