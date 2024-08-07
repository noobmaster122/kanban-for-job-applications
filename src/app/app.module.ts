import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { KanbanCardFormComponent } from './components/kanban-card-form/kanban-card-form.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { KanbanModalComponent } from './components/kanban-modal/kanban-modal.component';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KanbanComponent,
    KanbanCardFormComponent,
    KanbanModalComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    KanbanModule,
    FormsModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
