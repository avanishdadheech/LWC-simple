import { LightningElement, track } from 'lwc';
import { createRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountCreateLDS extends LightningElement {
    accountName;
    accountPhone;
    accountWebsite;
    output_message;
    disableButton = true;
    accountNameChangeHandler(event) {
        this.accountName = event.target.value;
        this.output_message = '';
        this.disableButton = false;
        // if (this.disableButton) then  { this.disableButton = false; }
    }

    accountPhoneChangeHandler(event) {
        this.accountPhone = event.target.value;
        //   disableButton = false;
    }

    accountWebsiteChangeHandler(event) {
        this.accountWebsite = event.target.value;
    }

    createAccount() {
        const fields = { 'Name': this.accountName, 'Phone': this.accountPhone, 'Website': this.accountWebsite };
        const recordInput = { apiName: 'Account', fields };

        createRecord(recordInput).then(response => {
            console.log('Account has been created : ', response.id);
            this.accountName = '';
            this.accountPhone = '';
            this.accountWebsite = '';
            this.output_message = '-->   Account has been created successfully ID: ' + response.id;
            this.disableButton = true;

            const toastEvent = new ShowToastEvent({
                title: 'Accounts Created',
                message: 'Account has been created successfully ID: ' + response.id,
                variant: 'success',
            });
            this.dispatchEvent(toastEvent);
        }).catch(error => {
            console.error('Error in creating account : ', error.body.message);
            const toastEvent = new ShowToastEvent({
                title: 'ERROR',
                message: error.body.message,
                variant: 'error',
            });
            this.dispatchEvent(toastEvent);
        });
    }

}