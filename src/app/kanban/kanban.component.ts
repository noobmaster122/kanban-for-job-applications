import { Component } from '@angular/core';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';

@Component({
  selector: 'app-kanban',
  //templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
  template: `<ejs-kanban >
                <e-columns style="margin-top:50px;">
                  <e-column headerText='To do' keyField='Open'></e-column>
                  <e-column headerText='In Progress' keyField='InProgress'></e-column>
                  <e-column headerText='Testing' keyField='Testing'></e-column>
                  <e-column headerText='Done' keyField='Close'></e-column>
                </e-columns>
            </ejs-kanban>`
})
export class KanbanComponent {

}
