const OP_ADD = "+";
const OP_SUB = "-";
const OP_MUL = "*";
const OP_DIV = "/";
const OP_EQU = "=";
const operators = [OP_ADD, OP_SUB, OP_MUL, OP_DIV, OP_EQU];

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
    if (isNaN(a) || 
        isNaN(b) || 
        !operators.includes(operator)) {
        return NaN;
    }
    switch (operator) {
        case OP_ADD: return add(a, b);
        case OP_SUB: return subtract(a, b);
        case OP_MUL: return multiply(a, b);
        case OP_DIV: return divide(a, b);
    }
}