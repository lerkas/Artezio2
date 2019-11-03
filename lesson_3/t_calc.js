'use strict';

(function() {
    let clear = document.getElementById('clear');
    let display = document.getElementById('display');
    let equals = document.getElementById('equals');
    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');
    let currentNum = '';
    let firstNum = '';
    let result;
    let operator;

    // Клик по любому операнду (цифре)
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function() {
            if (result) {
                currentNum = this.innerHTML;
                result = '';
            } else {
                currentNum += this.innerHTML;
            }
            display.innerHTML = currentNum;
        });
    }

    // Клик по любому оператору
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function() {
            firstNum = currentNum;
            currentNum = '';
            operator = this.innerHTML;
        });
    }

    // Клик по кнопке "равно"
    equals.onclick = function calculate() {
        firstNum = parseFloat(firstNum);
        currentNum = parseFloat(currentNum);
        switch (operator) {
            case '/':
                result = (firstNum / currentNum).toFixed(2);
                break;
            case '*':
                result = firstNum * currentNum;
                break;
            case '-':
                result = firstNum - currentNum;
                break;
            case '+':
                result = firstNum + currentNum;
                break;
            default:
                result = currentNum;
        }
        // Если разделить на ноль
        if (!isFinite(result)) {
            result = 'Не делай так ;)';
        }
        display.innerHTML = result;
        firstNum = '';
        currentNum = result;
    }

    clear.onclick = function clearAll() {
        firstNum = '';
        currentNum = '';
        display.innerHTML = '0';
    }
}());