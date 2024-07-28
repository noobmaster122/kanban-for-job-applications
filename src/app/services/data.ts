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
        headerText: 'To Apply<div class="open-dialog-trigger" data-key="toApplyStatus">open</div>',
        keyField: 'toApplyStatus',
        // template: `<div class="header-template-wrap">
        //            <div class="header-text">To apply</div>
        //            <div class="open-dialog-trigger" data-key="toApplyStatus">open</div>
        //          </div>`,
        allowToggle: true,
    },
    {
        headerText: 'Applied<div class="open-dialog-trigger" data-key="appliedStatus">open</div>',
        keyField: 'appliedStatus',
    //     template: `<div class="header-template-wrap">
    //     <div class="header-text">Applied</div>
    //                <div class="open-dialog-trigger" data-key="appliedStatus">open</div>
    //   </div>`,
        allowToggle: true,
    },
    {
        headerText: 'HR Interview<div class="open-dialog-trigger" data-key="doneStatus">open</div>',
        keyField: 'doneStatus',
    //     template: `<div class="header-template-wrap">
    //     <div class="header-text">HR Interview</div>
    //                <div class="open-dialog-trigger" data-key="doneStatus">open</div>
    //   </div>`,
        allowToggle: true,
    },
    {
        headerText: 'Boss fight with tech lead <div class="open-dialog-trigger" data-key="bossFightStatus">open</div>',
        keyField: 'bossFightStatus',
    //     template: `<div class="header-template-wrap">
    //     <div class="header-text">Boss fight</div>
    //                <div class="open-dialog-trigger" data-key="bossFightStatus">open</div>
    //   </div>`,
        allowToggle: true,
    },
    {
        headerText: 'Can finally go on a vacation <div class="open-dialog-trigger" data-key="vacationStatus">open</div>',
        keyField: 'vacationStatus',
    //     template: `<div class="header-template-wrap">
    //     <div class="header-text">Viva la vida</div>
    //                <div class="open-dialog-trigger" data-key="vacationStatus">open</div>
    //   </div>`,
        allowToggle: true,
    }
];
export const cardSettings: CardSettingsModel = {
    headerField: 'Id',
    contentField: 'Summary',

};
