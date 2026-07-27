import { operate } from "./operate.js";

const display = document.querySelector(".display");
const btnNumber = document.querySelectorAll(".btn-number");
const btnOperator = document.querySelectorAll(".btn-operator");
const btnEquals = document.querySelector(".btn-equals");

let a = "";
let b = "";
let operator = "";

function updateDisplay() {
    display.textContent = `${a}${operator}${b}`;
}

function handleNumber(number) {
    if(operator === "") {
        if (a === "" || a === "0") {
        a = number;
        } else {
            a += number;
        }
    } else {
        if (b === "" || b === "0") {
            b = number;
        } else {
            b += number;
        }
    }
    updateDisplay();
}

function handleOperator(mathOperator) {
    if (a === "") return;
    operator = mathOperator;
    updateDisplay();
}

function handleEquals() {
    if (a !== "" && operator !== "" && b !== "") {
        const result = operate(operator, a, b);
        a = String(result);
        operator = "";
        b = "";
        display.textContent = a;
    }
}

btnNumber.forEach(button => {
    button.addEventListener("click", (event) => {
        const inputNumber = event.target.dataset.number;
        handleNumber(inputNumber);
    });
});

btnOperator.forEach(button => {
    button.addEventListener("click", (event) => {
        const inputOperator = event.target.dataset.operator;
        handleOperator(inputOperator);
    });
});

if (btnEquals) {
    btnEquals.addEventListener("click", handleEquals);
}