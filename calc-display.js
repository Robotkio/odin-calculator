/* create buttons */

const btnAdd = document.createElement("button");
const btnSubtract = document.createElement("button");
const btnMultiply = document.createElement("button");
const btnDivide = document.createElement("button");
const btnEquals = document.createElement("button");

btnAdd.setAttribute("id", "btn-add");
btnSubtract.setAttribute("id", "btn-sub");
btnMultiply.setAttribute("id", "btn-mul");
btnDivide.setAttribute("id", "btn-div");
btnEquals.setAttribute("id", "btn-equ");

btnAdd.innerText = OP_ADD;
btnSubtract.innerText = OP_SUB;
btnMultiply.innerText = OP_MUL;
btnDivide.innerText = OP_DIV;
btnEquals.innerText = OP_EQU;

/* add them to keypad */

const KEYPAD = document.getElementById("display");

for (let btn of [btnAdd, btnSubtract, btnMultiply, btnDivide, btnEquals]) {
    KEYPAD.appendChild(btn);
}