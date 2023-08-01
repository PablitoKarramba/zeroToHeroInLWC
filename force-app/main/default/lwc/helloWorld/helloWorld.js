import { LightningElement } from "lwc";

export default class HelloWorld extends LightningElement {
    fullName = "Hello World!";
    title = "";

    changeHandler(event) {
        this.title = event.target.value;
    }

    address = {
        city: "Krakow",
        country: "Poland"
    };

    trackHandler(event) {
        this.address = { ...this.address, city: event.target.value };
    }

    users = ["pawel", "lukasz", "arek"];
    num1 = 3;
    num2 = 25;

    get firstUser() {
        return this.users[0];
    }

    get multiply() {
        return this.num1 * this.num2;
    }
}
