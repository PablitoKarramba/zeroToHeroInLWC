import { LightningElement, api } from "lwc";

export default class P2cAlertComponent extends LightningElement {
    @api message; // this property can listen to data from parent
    @api cardTitle;
    @api number;
    @api isValid;
}
