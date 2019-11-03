'use strict';

(function() {
    let display = document.getElementById('display');
    let currentNum = '';
    let firstNum = '';
    let result;
    let operator;

    // Класс выбора кнопки клика
    class Choose {
        constructor(selector) {
            if (selector.charAt(0) === '#') {
                this.elems = document.querySelector(selector);
            }
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
    (new Choose('#equals')).on('click', function() {
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

    // Клик по кнопке "C"
    (new Choose('#clear')).on('click', function() {
        firstNum = '';
        currentNum = '';
        display.innerHTML = '0';
    });
}());