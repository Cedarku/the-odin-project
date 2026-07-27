import { operate } from "./operate.js";

const display = document.querySelector(".display");
const btnNumber = document.querySelectorAll(".btn-number");

let a = "";
function aNumber(number) {
    if (a === "" || a === "0") {
        a = number;
    } else {
        a += number;
    }

    display.textContent = a;
}



btnNumber.forEach( button => {
    button.addEventListener("click", (event) => {
        const getNumber = event.target.dataset.number;

        aNumber(getNumber);
    });
});