import { operate } from "./operate.js";

const display = document.querySelector(".display");
const btnNumber = document.querySelectorAll(".btn-number");
const btnOperator = document.querySelectorAll(".btn-operator");
const btnEquals = document.querySelector(".btn-equals");
const btnClearEntry = document.querySelector(".btn-utility");
const btnAllClear = document.querySelector(".btn-danger");
const decimal = document.querySelector("#decimal");

let a = "";
let b = "";
let operator = "";
let shouldResetDisplay = false;

function updateDisplay() {
    const fullExpression = a + operator + b;
    const displayText = fullExpression === "" ? "0" : fullExpression;
    display.textContent = displayText;
    if (displayText.length > 19) {
        display.style.fontSize = "1.5rem";
    } else if (displayText.length > 9) {
        display.style.fontSize = "1.8rem";
    } else {
        display.style.fontSize = "2.2rem"; // Tamaño por defecto
    }
}

function handleNumber(number) {
    const MAX_DIGITS = 9;
    if (shouldResetDisplay) {
        a = number === "." ? "0." : number;
        shouldResetDisplay = false;
        updateDisplay();
        return;
    }
    if(operator === "") {
        if (number === "." && a.includes(".")) return;
        if (a.length >= MAX_DIGITS && number !== ".") return;
        if (a === "" || a === "0") {
            a = number === "." ? "0." : number;
        } else {
            a += number;
        }
    } else {
        if (number === "." && b.includes(".")) return;
        if (b.length >= MAX_DIGITS && number !== ".") return;
        if (b === "" || b === "0") {
            b = number === "." ? "0." : number;
        } else {
            b += number;
        }
    }
    updateDisplay();
}

function handleOperator(mathOperator) {
    if (a === "") return;
    if (a !== "" && operator !== "" && b !== "") {
    handleEquals();
    shouldResetDisplay = false;
    } else if (shouldResetDisplay) {
        shouldResetDisplay = false;
    }
    operator = mathOperator;
    updateDisplay();
}

function handleEquals() {
    if (a !== "" && operator !== "" && b !== "") {
        const result = operate(operator, a, b);
        if (result === "NaN" || Number.isNaN(result)) {
            display.textContent = "Nice try! 🐸";
            a = "";
            b = "";
            operator = "";
            shouldResetDisplay = true;
            return;
            }
        const roundedResult = Math.round(Number(result) * 100000) / 100000;
        a = String(roundedResult);
        operator = "";
        b = "";
        shouldResetDisplay = true;
        updateDisplay();
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

if (btnAllClear) {
    btnAllClear.addEventListener("click", () => {
        a = "";
        b = "";
        operator = "";
        shouldResetDisplay = false;
        updateDisplay();
    });
}

if (btnClearEntry) {
    btnClearEntry.addEventListener("click", () => {
        if (shouldResetDisplay) {
            a = "";
            shouldResetDisplay = false;
            updateDisplay();
            return;
        }
        if (b !== "") {
            b = b.slice(0, -1);
        } else if (operator !== "") {
            operator = "";
        } else if (a !== "") {
            a = a.slice(0, -1);
        }
        updateDisplay();
    });
}