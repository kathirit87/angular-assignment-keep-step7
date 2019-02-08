export class Reminder {
    reminderId: string;
    reminderName: string;
    reminderType: string;
    reminderDescription: string;
    reminderCreationDate: Date;
    reminderCreatedBy: string;

    constructor() {
        this.reminderId="";
        this.reminderName="";
        this.reminderType="";
        this.reminderDescription="";
        this.reminderCreationDate=new Date();
        this.reminderCreatedBy="";
    }
}