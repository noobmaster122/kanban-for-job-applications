import { CardSettingsModel } from "@syncfusion/ej2-angular-kanban";

export const data: object[] = [
    {
        Id: 1,
        Title: 'Task 1',
        Status: 'toApplyStatus',
        Summary: 'Analyze the new requirements gathered from the customer.',
        Type: 'Story',
        Priority: 'Low',
        Tags: 'Analyze,Customer',
        Estimate: 3.5,
        Assignee: 'Nancy Davloio',
        RankId: 1
    },
    {
        Id: 2,
        Title: 'Task 2',
        Status: 'doneStatus',
        Summary: 'Analyze the new requirements gathered from the customer.',
        Type: 'Story',
        Priority: 'Low',
        Tags: 'Analyze,Customer',
        Estimate: 3.5,
        Assignee: 'Nancy Davloio',
        RankId: 1
    },

];

// Define the columns
export const columns: object[] = [
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
