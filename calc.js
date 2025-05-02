const DISPLAY = document.getElementById("display");
const DISP_ARR = [];
const OP_ADD = "+";
const OP_SUB = "-";
const OP_MUL = "*";
const OP_DIV = "/";
const OP_EQU = "=";
const OPERATORS = [OP_ADD, OP_SUB, OP_MUL, OP_DIV];

let a = ["0"];
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

function operation() {
    let numA = Number(a.join(""));
    let numB = Number(b.join(""));
    let product;
    switch (operator) {
        case OP_ADD: 
            product = add(numA, numB);
            break;
        case OP_SUB: 
            product = subtract(numA, numB);
            break;
        case OP_MUL: 
            product = multiply(numA, numB);
            break;
        case OP_DIV: 
            product = divide(numA, numB);
            break;
        default:
            return NaN;
    }
    a = product.toString().split("");
    operator = undefined;
    b.length = 0;
}

function inputDigit(digit) {
    if (operator || b.length > 0) {
        b.push(digit);
    } else {
        if (a[0] == "0") {
            if (digit != "0") {
                a[0] = digit;
            }
        } else {
            a.push(digit);
        }
    }
    updateDisplay();
}

function inputOperator(newOperator) {
    operation();
    operator = newOperator;
    updateDisplay();
}

function backspace() {
    if(b.length > 0) {
        b.pop();
        updateDisplay();
        return;
    }
    if (OPERATORS.includes(operator)) { // if +, -, *, /
        operator = undefined;
        updateDisplay();
        return;
    }
    if (operator == OP_EQU) {
        operator = undefined;
    }
    if (a.length > 1) {
        a.pop();
    } else {
        a = ["0"];
    }
    updateDisplay();
}

function displayClear() {
    a = ["0"];
    b.length = 0;
    operator = undefined;
    updateDisplay();
}

function updateDisplay() {
    let dispStr = "";
    dispStr += a.join("");
    dispStr += operator && operator != OP_EQU ? ` ${operator} ` : "";
    dispStr += b.join("");
    DISPLAY.innerText = dispStr;

    console.log(a.length);
}

document.getElementById("btn-0").addEventListener("click", () => inputDigit("0"));
document.getElementById("btn-1").addEventListener("click", () => inputDigit("1"));

document.getElementById("btn-add").addEventListener("click", () => inputOperator(OP_ADD));
document.getElementById("btn-equ").addEventListener("click", () => inputOperator(OP_EQU));

document.getElementById("btn-und").addEventListener("click", backspace);
document.getElementById("btn-clr").addEventListener("click", displayClear);

updateDisplay();