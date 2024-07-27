import { CardSettingsModel, ColumnsModel } from "@syncfusion/ej2-angular-kanban";
import { Card } from "../models/card.model";

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
export const columns: ColumnsModel[] = [
    {
        headerText: 'To Apply',
        keyField: 'toApplyStatus',
        template: `<div class="header-template-wrap">
                   <div class="header-text">Applied</div>
                   <div class="open-dialog-trigger" data-key="toApplyStatus">open</div>
                 </div>`,
        allowToggle: true,
    },
    {
        headerText: 'Applied',
        keyField: 'appliedStatus',
        template: `<div class="header-template-wrap">
        <div class="header-text">Applied</div>
                   <div class="open-dialog-trigger" data-key="appliedStatus">open</div>
      </div>`,
        allowToggle: true,
    },
    {
        headerText: 'HR Interview',
        keyField: 'doneStatus',
        template: `<div class="header-template-wrap">
        <div class="header-text">Applied</div>
                   <div class="open-dialog-trigger" data-key="doneStatus">open</div>
      </div>`,
        allowToggle: true,
    },
    {
        headerText: 'Boss fight with tech lead',
        keyField: 'bossFightStatus',
        template: `<div class="header-template-wrap">
        <div class="header-text">Applied</div>
                   <div class="open-dialog-trigger" data-key="bossFightStatus">open</div>
      </div>`,
        allowToggle: true,
    },
    {
        headerText: 'Can finally go on a vacation',
        keyField: 'vacationStatus',
        template: `<div class="header-template-wrap">
        <div class="header-text">Applied</div>
                   <div class="open-dialog-trigger" data-key="vacationStatus">open</div>
      </div>`,
        allowToggle: true,
    }
];
export const cardSettings: CardSettingsModel = {
    headerField: 'Id',
    contentField: 'Summary',

};
