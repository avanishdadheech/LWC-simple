import { LightningElement } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    displayDiv = false;

    cityList = ['Jaipur', 'Bangluru', 'Hyderabad', 'Mumbai'];

    showDivHandler(event) {
        this.displayDiv = event.target.checked;
    }

}