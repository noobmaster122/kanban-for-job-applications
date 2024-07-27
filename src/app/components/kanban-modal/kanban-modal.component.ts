import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-kanban-modal',
  template: `
  <ejs-dialog #dialog [visible]="dialogVisible" [header]="'Dialog'" [width]="'300px'" [target]="'#target'" [isModal]="true" [showCloseIcon]="true" (overlayClick)="onOverlayClick()">
    <ng-template #content>
      <app-kanban-card-form [cardStatus]="dialogContent" ></app-kanban-card-form>
    </ng-template>
  </ejs-dialog>
  <div id="target"></div>
  `
})
export class KanbanModalComponent {
  @ViewChild('dialog') dialog!: DialogComponent;
  @Input() dialogVisible: boolean = false;
  @Input() dialogContent: string = '';

  openDialog(content: string) {
    this.dialogContent = content;
    this.dialogVisible = true;
    this.dialog.show();
  }

  onOverlayClick() {
    this.dialogVisible = false;
    this.dialog.hide();
  }
}
