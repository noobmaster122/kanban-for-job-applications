import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { KanbanCardFormComponent } from './components/kanban-card-form/kanban-card-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    KanbanComponent,
    KanbanCardFormComponent
  ],
  imports: [
    BrowserModule,
    KanbanModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
