const DISPLAY = document.getElementById("display");
const DISP_ARR = [];
const OP_ADD = "+";
const OP_SUB = "-";
const OP_MUL = "*";
const OP_DIV = "/";
const operators = [OP_ADD, OP_SUB, OP_MUL, OP_DIV];

let a, b, operator; // for user input

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

function displayPush(str) {
    DISP_ARR.push(str);
    updateDisplay();
}

function displayPop() {
    DISP_ARR.pop();
    updateDisplay();
}

function displayClear() {
    DISP_ARR.length = 0;
    updateDisplay();
}

function updateDisplay() {
    DISPLAY.innerText = DISP_ARR.join(" ");
}

document.getElementById("btn-0").addEventListener("click", () => displayPush("0"));

document.getElementById("btn-und").addEventListener("click", displayPop);
document.getElementById("btn-clr").addEventListener("click", displayClear);