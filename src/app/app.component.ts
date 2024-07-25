import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-kanban></app-kanban>
    <app-kanban-card-form></app-kanban-card-form>
  `
})
export class AppComponent {
  title = 'application-hunter-extension';
}
