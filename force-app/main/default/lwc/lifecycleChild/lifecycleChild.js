import { LightningElement } from "lwc";
import LightningAlert from "lightning/alert";

export default class LifecycleChild extends LightningElement {
    constructor() {
        super();
        console.log("Child constructor call");
    }

    connectedCallback() {
        console.log("connectedCallback method called from child");
        // example of using disconnectedCallback window.addEventListener("click", this.handleClick);
        throw new Error("Loading of child failed");
    }

    initialRender = true;
    renderedCallback() {
        if (!this.initialRender) {
            return;
        }
        console.log("renderedCallback method called from child");
        this.initialRender = false;
    }

    disconnectedCallback() {
        // example of using disconnectedCallback cd: window.removeEventListener("click", this.handleClick);
        LightningAlert.open({
            message: "disconnectedCallback method called from child",
            theme: "error",
            label: "Error!"
        });
        console.log("disconnectedCallback method called from child");
    }
}
