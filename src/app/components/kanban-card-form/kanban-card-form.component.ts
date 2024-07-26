import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { KanbanHandlerService } from 'src/app/services/kanban-handler.service';


@Component({
  selector: 'app-kanban-card-form',
  // templateUrl: './kanban-card-form.component.html',
  //styleUrls: ['./kanban-card-form.component.css'],
  template: `
<form (ngSubmit)="addCard()">
  <input id="positionTitle" [(ngModel)]="newCard.positionTitle" name="positionTitle"  placeholder="Job title" required>
  <select id="status" [(ngModel)]="newCard.status" name="status" required>
    <option value="toApplyStatus">To Apply</option>
    <option value="appliedStatus">Applied</option>
    <option value="doneStatus">Done</option>
    <option value="bossFightStatus">Boss Fight</option>
    <option value="vacationStatus">Vacation</option>
  </select>  
  <input id="hiringManagerName" [(ngModel)]="newCard.hiringManagerName" placeholder="Hiring manager" name="hiringManagerName" >
  <input id="hiringManagerLinkedIn" [(ngModel)]="newCard.hiringManagerLinkedIn" placeholder="Offer link" name="hiringManagerLinkedIn" >
  <label for="haveContactedHiringManager">Have Contacted Hiring Manager:</label>
  <input id="haveContactedHiringManager" type="checkbox" [(ngModel)]="newCard.haveContactedHiringManager" name="haveContactedHiringManager">

  <button type="submit">Add Card</button>
</form>
`
})
export class KanbanCardFormComponent {
  @Input() newCard : Card = {
    Id: -1,
    status: "toApplyStatus",
    positionTitle: "",
    hiringManagerName: "",
    hiringManagerLinkedIn: "#",
    haveContactedHiringManager: false
  };

  constructor(private kanbanService: KanbanHandlerService) {}


  addCard(){
    this.newCard.Id = Math.floor(Math.random() * 1000); 
    const newlyAddedCard = this.newCard;
    this.kanbanService.addCard(this.newCard);
    this.newCard = { // Reset the form
      Id: -1,
      status: "toApplyStatus",
      positionTitle: "",
      hiringManagerName: "",
      hiringManagerLinkedIn: "#",
      haveContactedHiringManager: false
    };

    return newlyAddedCard;
  }
}
