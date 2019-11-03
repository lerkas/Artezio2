'use strict';

(function() {
    let clear = document.getElementById('clear');
    let display = document.getElementById('display');
    let equals = document.getElementById('equals');
    let currentNum = '';
    let firstNum = '';
    let result;
    let operator;

    class Choose {
        constructor(selector) {
            this.elems = document.querySelectorAll(selector);
        }
        on(event, callback) {
            for (let i = 0; i < this.elems.length; i++) {
                this.elems[i].addEventListener(event, callback);
            }
        }
    }

    // Клик по любому операнду (цифре)
    (new Choose('.number')).on('click', function() {
        if (result) {
            currentNum = this.innerHTML;
            result = '';
        } else {
            currentNum += this.innerHTML;
        }
        display.innerHTML = currentNum;
    });

    // Клик по любому оператору
    (new Choose('.operator')).on('click', function() {
        firstNum = currentNum;
        currentNum = '';
        operator = this.innerHTML;
    });

    // Клик по кнопке "равно"
    equals.addEventListener('click', function() {
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
    });

    clear.addEventListener('click', function() {
        firstNum = '';
        currentNum = '';
        display.innerHTML = '0';
    });
}());