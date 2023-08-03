import { LightningElement } from "lwc";

export default class QuizApp extends LightningElement {
    selected = {};

    score = 0;
    isSubmitted = false;

    myQuestions = [
        {
            id: 1,
            question: "Which city is the best in Poland?",
            answers: {
                a: "Lublin",
                b: "Kraków",
                c: "Sanok"
            },
            correctAnswer: "a"
        },
        {
            id: 2,
            question: "How much for bread",
            answers: {
                a: "10zł",
                b: "5zł",
                c: "15zł"
            },
            correctAnswer: "b"
        },
        {
            id: 3,
            question: "Czy Ala ma kota",
            answers: {
                a: "ma",
                b: "nie ma",
                c: "kot ma Ale"
            },
            correctAnswer: "a"
        }
    ];

    changeHandler(event) {
        // console.log("name:", event.target.name);
        // console.log("value:", event.target.value);
        // const name = event.target.name;
        // const value = event.target.value;
        const { name, value } = event.target;
        this.selected = { ...this.selected, [name]: value };
    }

    clickHandler(event) {
        const button = event.target.label;
        if (button === "Submit") {
            // Calculate correct answers
            event.preventDefault();
            let correct = this.myQuestions.filter((item) => this.selected[item.id] === item.correctAnswer);
            this.score = correct.length;
            this.isSubmitted = true;
        } else if (button === "Reset") {
            this.selected = {};
            this.score = 0;
            this.isSubmitted = false;
        }
    }

    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }

    get isQuizCorrect() {
        return `${this.myQuestions.length === this.score ? "slds-text-color_success" : "slds-text-color_error"}`;
    }
}
