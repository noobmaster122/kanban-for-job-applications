import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanModalComponent } from './kanban-modal.component';

describe('KanbanModalComponent', () => {
  let component: KanbanModalComponent;
  let fixture: ComponentFixture<KanbanModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KanbanModalComponent]
    });
    fixture = TestBed.createComponent(KanbanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
