import { LightningElement } from "lwc";

export default class LifecycleParent extends LightningElement {
    isChildVisible = false;
    constructor() {
        super();
        console.log("Parent constructor call");
    }

    connectedCallback() {
        console.log("connectedCallback method called from parent");
    }

    initialRender = true;
    renderedCallback() {
        if (!this.initialRender) {
            return;
        }
        console.log("renderedCallback method called from parent");
        this.initialRender = false;
    }

    errorCallback(error, stack) {
        console.log(error.message);
        console.log(stack);
    }

    handleClick() {
        this.isChildVisible = !this.isChildVisible;
    }
}
