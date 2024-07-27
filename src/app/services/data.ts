import { CardSettingsModel } from "@syncfusion/ej2-angular-kanban";
import { Card } from "../models/card.model";
import { Column } from "../models/column.model";

export const data: Card[] = [
    {
        Id: 432,
        status: 'toApplyStatus',
        positionTitle: "Développeur java",
        hiringManagerName: "John doe",
        hiringManagerLinkedIn: "#",
        haveContactedHiringManager: false,
    }
];

// Define the columns
export const columns: Column[] = [
    { headerText: 'To Apply', keyField: 'toApplyStatus' },
    { headerText: 'Applied', keyField: 'appliedStatus' },
    { headerText: 'HR Interview', keyField: 'doneStatus' },
    { headerText: 'Boss fight with tech lead', keyField: 'bossFightStatus' },
    { headerText: 'Can finally go on a vacation', keyField: 'vacationStatus' }
];
export const cardSettings: CardSettingsModel = {
    headerField: 'Id',
    contentField: 'Summary',

};
