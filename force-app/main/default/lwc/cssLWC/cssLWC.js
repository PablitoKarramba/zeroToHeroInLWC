import { LightningElement } from "lwc";

export default class CssLWC extends LightningElement {
    percent = 0;
    changeHandler(event) {
        this.percent = event.target.value;
    }

    get percentage() {
        return `width: ${this.percent}%;`;
    }

    renderedCallback() {
        const style = document.createElement("style");
        style.innerText = `c-shadom-dom-styling .slds-button{
            background: red;
            color: white;
        }`;
        this.template.querySelector("lightning-button").appendChild(style);
    }
}
