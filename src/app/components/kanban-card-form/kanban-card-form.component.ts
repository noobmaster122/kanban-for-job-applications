import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { KanbanHandlerService } from 'src/app/services/kanban-handler.service';

@Component({
  selector: 'app-kanban-card-form',
  styleUrls: ['./kanban-card-form.component.css'],
  template: `
    <form (ngSubmit)="addCard()">
      <input type="text" id="positionTitle" [(ngModel)]="newCard.positionTitle" name="positionTitle"  placeholder="Job title" required>  
      <input type="text" id="hiringManagerName" [(ngModel)]="newCard.hiringManagerName" placeholder="Hiring manager" name="hiringManagerName" >
      <input type="text" id="hiringManagerLinkedIn" [(ngModel)]="newCard.hiringManagerLinkedIn" placeholder="Offer link" name="hiringManagerLinkedIn" >
      <div class="checkbox-container">
        <input id="haveContactedHiringManager" type="checkbox" [(ngModel)]="newCard.haveContactedHiringManager" name="haveContactedHiringManager">
        <label for="haveContactedHiringManager">Have Contacted Hiring Manager</label>
      </div>
      <button type="submit">Add Card</button>
    </form>
  `
})
export class KanbanCardFormComponent {
  @Input() newCard: Card = {
    Id: 432,
    status: "toApplyStatus",
    positionTitle: "",
    hiringManagerName: "",
    hiringManagerLinkedIn: "#",
    haveContactedHiringManager: false,
  };
  @Input() cardStatus = 'toApplyStatus';

  constructor(private kanbanService: KanbanHandlerService) {}

  addCard() {
    this.newCard.Id = Math.floor(Math.random() * 1000); // Simple ID generation for demo
    this.newCard.status = this.cardStatus as "toApplyStatus" | "appliedStatus" | "doneStatus" | "bossFightStatus" | "vacationStatus";
    const newlyAddedCard = this.newCard;
    this.kanbanService.addCard(this.newCard);
    this.newCard = { // Reset the form
      Id: -1,
      status: "toApplyStatus",
      positionTitle: "",
      hiringManagerName: "",
      hiringManagerLinkedIn: "#",
      haveContactedHiringManager: false,
    };

    //return newlyAddedCard;
  }
}
