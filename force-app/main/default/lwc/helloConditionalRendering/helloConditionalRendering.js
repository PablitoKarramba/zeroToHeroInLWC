import { LightningElement } from "lwc";

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false;
    data;

    handleClick() {
        this.isVisible = !this.isVisible;
    }

    changeHandler(event) {
        this.data = event.target.value;
    }

    get helloMethod() {
        return this.data === "okoń";
    }
}
