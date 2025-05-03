const OP_ADD = "+";
const OP_SUB = "-";
const OP_MUL = "&times;";
const OP_DIV = "&divide;";
const OP_EQU = "=";
const OP_DOT = ".";

let a = ["0"];
let b = [];
let operator; // for user input operator

updateDisplay();

/* functions */

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

/* performs whatever operation exists on the variables as they are
   first, a and b are converted to numbers
   then the formula is performed
   then the number is converted back to an array and stored in a
   the operator and b are cleared */
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

/* takes a digit and places it into a variable.
   if there's an operator the digit goes in b, otherwise it goes in a
   ignore adding decimals if the variable already has one
   then just add the digit to the relevant variable
   after that remove a leading 0 if it doesn't need to be there (ie 0123)
   after that add a leading 0 if it should be there (ie 0.123) */
function inputDigit(digit) {
    let variable = (operator && operator != OP_EQU) ? b : a;
    if (digit == OP_DOT && variable.includes(OP_DOT)) {
        return;
    }
    variable.push(digit);
    if (variable[0] == "0" && variable.length == 2 && variable[1] != OP_DOT) {
        variable.shift();
    }
    if (variable[0] == ".") {
        variable.unshift("0");
    }
    updateDisplay();
}

/* inputs the operator
   if the last character of a is a decimal, remove it
   if there's already an operator and b has numbers, perform a calculation
   then input the new operator */
function inputOperator(newOperator) {
    if (a[a.length-1] == OP_DOT) { a.pop(); }
    if (operator && b.length > 0) { operation(); }
    operator = newOperator;
    updateDisplay();
}

/* removes the rightmost character
   if b exists: take from b, if there's an operator: take the operator
   lastly, take from a. If there's 1 or no digit to take from a, leave
   it at 0 so something is always displayed. */
function backspace() {
    if(b.length > 0) {
        if (b[0] == "0" && b[1] == ".") { 
            b.pop(); 
        }
        b.pop();
        updateDisplay();
        return;
    }
    if ([OP_ADD, OP_SUB, OP_MUL, OP_DIV].includes(operator)) {
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

/* clears the display and sets variable a back to 0 */
function displayClear() {
    a = ["0"];
    b.length = 0;
    operator = undefined;
    updateDisplay();
}

/* takes whatever variables exist and puts whatever operator exists between them
   and then adds it to the display. */
function updateDisplay() {
    let dispStr = "";
    dispStr += a.join("");
    dispStr += operator && operator != OP_EQU ? ` ${operator} ` : "";
    dispStr += b.join("");
    document.getElementById("display").innerHTML = dispStr;
}

/* button click listeners */

document.getElementById("btn-0").addEventListener("click", () => inputDigit("0"));
document.getElementById("btn-1").addEventListener("click", () => inputDigit("1"));
document.getElementById("btn-2").addEventListener("click", () => inputDigit("2"));
document.getElementById("btn-3").addEventListener("click", () => inputDigit("3"));
document.getElementById("btn-4").addEventListener("click", () => inputDigit("4"));
document.getElementById("btn-5").addEventListener("click", () => inputDigit("5"));
document.getElementById("btn-6").addEventListener("click", () => inputDigit("6"));
document.getElementById("btn-7").addEventListener("click", () => inputDigit("7"));
document.getElementById("btn-8").addEventListener("click", () => inputDigit("8"));
document.getElementById("btn-9").addEventListener("click", () => inputDigit("9"));
document.getElementById("btn-dot").addEventListener("click", () => inputDigit(OP_DOT));

document.getElementById("btn-add").addEventListener("click", () => inputOperator(OP_ADD));
document.getElementById("btn-sub").addEventListener("click", () => inputOperator(OP_SUB));
document.getElementById("btn-div").addEventListener("click", () => inputOperator(OP_DIV));
document.getElementById("btn-mul").addEventListener("click", () => inputOperator(OP_MUL));
document.getElementById("btn-equ").addEventListener("click", () => inputOperator(OP_EQU));

document.getElementById("btn-und").addEventListener("click", backspace);
document.getElementById("btn-clr").addEventListener("click", displayClear);

/* keyboard listeners */

document.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "0": inputDigit("0"); break;
        case "1": inputDigit("1"); break;
        case "2": inputDigit("2"); break;
        case "3": inputDigit("3"); break;
        case "4": inputDigit("4"); break;
        case "5": inputDigit("5"); break;
        case "6": inputDigit("6"); break;
        case "7": inputDigit("7"); break;
        case "8": inputDigit("8"); break;
        case "9": inputDigit("9"); break;
        case ".": inputDigit(OP_DOT); break;
        case "+": inputOperator(OP_ADD); break;
        case "-": inputOperator(OP_SUB); break;
        case "*": inputOperator(OP_MUL); break;
        case "/": inputOperator(OP_DIV); break;
        case "Backspace":
        case "Delete":
            backspace();
            break;
        case "Enter": inputOperator(OP_EQU); break;
        case "c": displayClear(); break;
        default:
            // it's ok to do nothing
            break;
    }
});