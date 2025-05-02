const DISPLAY = document.getElementById("display");
const DISP_ARR = [];
const OP_ADD = "+";
const OP_SUB = "-";
const OP_MUL = "*";
const OP_DIV = "/";
const OPERATORS = [OP_ADD, OP_SUB, OP_MUL, OP_DIV];
const DEFAULT_A = ["0"];

let a = DEFAULT_A;
let b = [];
let operator; // for user input

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operation(a, b, operator) {
    switch (operator) {
        case OP_ADD: return add(a, b);
        case OP_SUB: return subtract(a, b);
        case OP_MUL: return multiply(a, b);
        case OP_DIV: return divide(a, b);
    }
}

function inputDigit(digit) {
    if (operator) {
        b.push(digit);
    } else {
        if (b) {
            b.push(digit);
        } else {
            a.push(digit);
        }
    }
    updateDisplay();
}

function backspace() {
    if(b.length > 0) {
        b.pop();
    } else if (operator) {
        operator = undefined;
    } else if (a.length > 1) {
        a.pop();
    } else {
        a = DEFAULT_A;
    }
    updateDisplay();
}

function displayClear() {
    a = DEFAULT_A;
    b.length = 0;
    operator = undefined;
    updateDisplay();
}

function updateDisplay() {
    let dispStr = "";
    dispStr += a.join("");
    dispStr += operator ? ` ${operator} ` : "";
    dispStr += b.join("");
    DISPLAY.innerText = dispStr;
}

document.getElementById("btn-0").addEventListener("click", () => inputDigit("0"));

document.getElementById("btn-und").addEventListener("click", backspace);
document.getElementById("btn-clr").addEventListener("click", displayClear);

updateDisplay();