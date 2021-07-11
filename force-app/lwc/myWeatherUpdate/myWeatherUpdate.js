import { LightningElement } from 'lwc';
import myCityWeatherClass from '@salesforce/apex/myCityWeatherClass.myCityWeatherClass';

export default class MyWeatherUpdate extends LightningElement {
    cardTitle = 'Latest Weather Information REST API WebService Callout v1.0';
    temprature;
    city = 'Noida';
    connectedCallback() {
        myCityWeatherClass({ mycity: this.city })
            .then(result => {
                this.temprature = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
    onCityChange(event) {
        this.city = event.target.value;
        this.temprature = '';
    }
    getWeather(event) {
        myCityWeatherClass({ mycity: this.city })
            .then(result => {
                this.temprature = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}