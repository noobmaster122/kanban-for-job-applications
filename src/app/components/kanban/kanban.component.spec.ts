import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { KanbanComponent } from './kanban.component';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { ChangeDetectorRef } from '@angular/core';

describe('KanbanComponent', () => {
  let component: KanbanComponent;
  let fixture: ComponentFixture<KanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanComponent ],
      imports: [ KanbanModule ],
      providers: [ ChangeDetectorRef ]
    })
    .compileComponents();
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
    // Trigger ngAfterViewChecked manually
    component.ngAfterViewChecked();
    fixture.detectChanges();

    const emptyCards = document.querySelectorAll('.e-empty-card');
    emptyCards.forEach((element) => {
      expect((element as HTMLElement).style.display).toBe('none');
    });
  });

});
