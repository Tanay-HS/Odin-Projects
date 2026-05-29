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
    if(b == 0) return "Cant divide by zero";

    return a / b;
}

function operate(a, b , operator = "+") {
    if(b === undefined) return 0;
    a = +a;
    b = +b;
    switch (operator) {
        case "+":
            return add(a, b);

        case "-":
            return subtract(a, b);

        case "*":
            return multiply(a, b);

        case "/":
            return divide(a, b);
    }
}

// ---------------------
const calci = document.querySelector("body");
calci.addEventListener('click', (e) => handleClick(e));

const display = document.querySelector(".screen");
// ----------------------------------

let a = 0, b = undefined, operator = undefined;
function handleClick(e) {
    if (e.target.tagName === 'BUTTON') {


        const btn = e.target;
        const operations = "+-/*";
        const val = e.target.textContent.trim();

        if(val === "="){
            a = operate(a, b, operator);
            display.textContent = `${a}`;
        }
        else if(val === "AC"){
            a = 0;
            b = undefined;
            operator = undefined;
            display.textContent = "";
        }
        else if (operations.includes(val)) {
            a = operate(a, b, operator);
            operator = val;
            display.textContent = `${a}`;
        }
        else {
            b = val;
        }
    }


    console.log(e);
}