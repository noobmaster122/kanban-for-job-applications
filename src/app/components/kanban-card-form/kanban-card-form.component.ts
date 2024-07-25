import { Component, Input } from '@angular/core';
import { KanbanHandlerService } from 'src/app/services/kanban-handler.service';

@Component({
  selector: 'app-kanban-card-form',
  // templateUrl: './kanban-card-form.component.html',
  styleUrls: ['./kanban-card-form.component.css'],
  template: `
<form (ngSubmit)="addCard()">
  <label for="title">Title:</label>
  <input id="title" [(ngModel)]="newCard.Title" name="title" required>
  <input id="title" [(ngModel)]="newCard.Status" name="status" required>

  <!-- Add fields for other card properties -->

  <button type="submit">Add Card</button>
</form>
`
})
export class KanbanCardFormComponent {
  @Input() newCard = {
    Id: 1,
    Title: '',
    Status: '',
    Summary: '',
    Type: '',
    Priority: '',
    Tags: '',
    Estimate: null,
    Assignee: '',
    RankId: null
  };

  constructor(private kanbanService: KanbanHandlerService) {}


  addCard(){
    this.newCard.Id = Math.floor(Math.random() * 1000); // Simple ID generation for demo
    const newlyAddedCard = this.newCard;
    this.kanbanService.addCard(this.newCard);
    this.newCard = { // Reset the form
      Id: 1,
      Title: '',
      Status: '',
      Summary: '',
      Type: '',
      Priority: '',
      Tags: '',
      Estimate: null,
      Assignee: '',
      RankId: null
    };

    return newlyAddedCard;
  }
}
