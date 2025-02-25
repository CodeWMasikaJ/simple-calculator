const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = null;
let firstOperand = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('number') || value === '.') {
            currentInput += value;
            display.value = currentInput;
        } else if (button.classList.contains('operator')) {
            if (firstOperand === null) {
                firstOperand = parseFloat(currentInput);
            } else {
                calculate();
            }
            operator = value;
            currentInput = '';
        } else if (button.classList.contains('equal')) {
            calculate();
            operator = null;
        } else if (button.classList.contains('clear')) {
            currentInput = '';
            operator = null;
            firstOperand = null;
            display.value = '';
        }
    });
});

function calculate() {
    if (operator && currentInput !== '') {
        const secondOperand = parseFloat(currentInput);
        let result;
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
        }
        display.value = result;
        currentInput = result.toString();
        firstOperand = result;
    }
}