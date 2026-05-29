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

function operate(a, b , operator = "+") {
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

let a = 0, b, operator = undefined, isFirstClick = true;
function handleClick(e) {
    if (e.target.tagName === 'BUTTON') {


        const btn = e.target;
        const operations = "+-/*";
        const val = e.target.textContent.trim();

        if (operations.includes(val)) {
            // Display a
            operator = val;
        }
        else {
            b = val;
            a = operate(a, b, operator);
        }
    }


    console.log(e);
}