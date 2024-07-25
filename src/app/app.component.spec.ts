import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        KanbanComponent // Declare KanbanComponent here
      ],
      imports: [ KanbanModule ] // Import the KanbanModule here
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detect initial changes
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the Kanban component', () => {
    const kanbanDebugElement = fixture.debugElement.query(By.css('app-kanban'));
    expect(kanbanDebugElement).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toEqual('application-hunter-extension');
  });

});
