import { LightningElement } from "lwc";

export default class HelloQuerySelector extends LightningElement {
    userNames = ["Daria", "Ola", "Monika"];

    fetchDetailHandler() {
        const elem = this.template.querySelector("h1");
        const userElements = this.template.querySelectorAll(".name");
        console.log(elem.innerText);
        Array.from(userElements).forEach((item) => {
            console.log(item.innerText);
            item.setAttribute("title", item.innerText);
        });

        // dodanie elementu do lwc:dom="manual"
        const childElement = this.template.querySelector(".child");
        const para = document.createElement("p");
        const node = document.createTextNode("Whatever it is");
        para.appendChild(node);
        childElement.appendChild(para);
    }
}
