import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  template: `
  <div>
    <app-kanban></app-kanban>
    <app-kanban-card-form></app-kanban-card-form>
  </div>`
})
export class AppComponent {
  title = 'application-hunter-extension';
}
