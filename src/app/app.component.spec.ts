import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { KanbanComponent } from './components/kanban/kanban.component'; // Adjust the import path
import { KanbanHandlerService } from './services/kanban-handler.service'; // Adjust the import path
import { DialogModule } from '@syncfusion/ej2-angular-popups'; // Import Syncfusion Dialog Module
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        KanbanComponent // Declare KanbanComponent if used in the template
      ],
      schemas: [NO_ERRORS_SCHEMA] 
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Apply initial data bindings
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

});
