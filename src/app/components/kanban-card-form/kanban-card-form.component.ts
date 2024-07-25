import { Component, Input } from '@angular/core';
import { KanbanHandlerService } from 'src/app/services/kanban-handler.service';


@Component({
  selector: 'app-kanban-card-form',
  // templateUrl: './kanban-card-form.component.html',
  //styleUrls: ['./kanban-card-form.component.css'],
  template: `
<form (ngSubmit)="addCard()">
  <label for="title">Title:</label>
  <input id="positionTitle" [(ngModel)]="newCard.positionTitle" name="positionTitle" required>
  <input id="status" [(ngModel)]="newCard.status" name="status" required>
  <input id="hiringManagerName" [(ngModel)]="newCard.hiringManagerName" name="hiringManagerName" >
  <input id="hiringManagerLinkedIn" [(ngModel)]="newCard.hiringManagerLinkedIn" name="hiringManagerLinkedIn" >
  <input id="haveContactedHiringManager" [(ngModel)]="newCard.haveContactedHiringManager" name="haveContactedHiringManager" required>
  <!-- Add fields for other card properties -->

  <button type="submit">Add Card</button>
</form>
`
})
export class KanbanCardFormComponent {
  @Input() newCard = {
    Id: -1,
    status: "",
    positionTitle: "",
    hiringManagerName: "",
    hiringManagerLinkedIn: "#",
    haveContactedHiringManager: false
  };

  constructor(private kanbanService: KanbanHandlerService) {}


  addCard(){
    this.newCard.Id = Math.floor(Math.random() * 1000); // Simple ID generation for demo
    const newlyAddedCard = this.newCard;
    this.kanbanService.addCard(this.newCard);
    this.newCard = { // Reset the form
      Id: -1,
      status: "",
      positionTitle: "",
      hiringManagerName: "",
      hiringManagerLinkedIn: "#",
      haveContactedHiringManager: false
    };

    return newlyAddedCard;
  }
}
