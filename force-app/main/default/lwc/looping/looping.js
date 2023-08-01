import { LightningElement } from "lwc";

export default class Looping extends LightningElement {
    users = ["Pawel", "Lukasz", "Arek", "Daria"];

    dozy = [
        {
            id: 1,
            location: "Lublin",
            size: "huge"
        },
        {
            id: 2,
            location: "Kraków",
            size: "medium"
        },
        {
            id: 3,
            location: "Łódź",
            size: "huge"
        },
        {
            id: 4,
            location: "Lublin",
            size: "small"
        }
    ];
}
