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
    if (b == 0) return "Cant divide by zero";

    return a / b;
}

function operate(a, b, operator = "+") {
    if (b === undefined) return 0;
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
        const currentKey = btn.textContent.trim();

        // 1. EQUALS SIGN
        if (currentKey === "=") {
            if (a !== undefined && b !== undefined && operator !== undefined) {
                a = operate(a, b, operator);
                display.textContent = `${a}`;
                b = undefined;
                operator = undefined;
            }
        }
        // 2. CLEAR BUTTON
        else if (currentKey === "AC") {
            a = 0;
            b = undefined;
            operator = undefined;
            display.textContent = "0";
        }
        // 3. OPERATOR BUTTONS (With multi-operator fix!)
        else if (operations.includes(currentKey)) {
            if (b === undefined) {
                // User is swapping operators before typing the second number
                operator = currentKey;
            } else if (a !== undefined && b !== undefined) {
                // User is chaining a calculation (e.g., 5 + 5 + ...)
                a = operate(a, b, operator);
                display.textContent = `${a}`;
                b = undefined;
                operator = currentKey;
            }
        }
        // 4. NUMBER DIGITS
        else {
            if (operator === undefined) {
                a = (a === 0) ? currentKey : String(a) + currentKey;
                display.textContent = a;
            } else {
                b = (b === undefined) ? currentKey : String(b) + currentKey;
                display.textContent = b;
            }
        }
    }
}

