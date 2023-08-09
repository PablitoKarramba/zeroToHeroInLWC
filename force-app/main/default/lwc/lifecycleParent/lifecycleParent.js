import { LightningElement } from "lwc";
import signinTemplate from "./signinTemplate.html";
import signupTemplate from "./signupTemplate.html";
import lifecycleParent from "./lifecycleParent.html";

export default class LifecycleParent extends LightningElement {
    isChildVisible = false;
    selectedButton = "";
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

    handleClick(event) {
        this.selectedButton = event.target.label;

        if (this.selectedButton === "Show child" || this.selectedButton === "Hide child") {
            this.isChildVisible = !this.isChildVisible;
        }
    }

    submitHandler(event) {
        console.log(`${event.target.label} is a success`);
    }

    render() {
        return this.selectedButton === "Sign up"
            ? signupTemplate
            : this.selectedButton === "Sign in"
            ? signinTemplate
            : lifecycleParent;
    }
}
