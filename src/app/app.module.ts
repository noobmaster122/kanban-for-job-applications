import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KanbanComponent } from './kanban/kanban.component';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';

@NgModule({
  declarations: [
    AppComponent,
    KanbanComponent
  ],
  imports: [
    BrowserModule,
    KanbanModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
