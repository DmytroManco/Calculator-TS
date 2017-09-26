import {calculator} from "./calculator";
import {compute} from "./compute";
import {Keys} from "./keys";

let equation:string = '';

let controller = {

    addNewButton: function (className, value, innerHtml, type) {
        calculator.addButton(className, value, innerHtml, type);
    },

    addClick: function (el, input) {
        el.addEventListener('click', function (e) {
            let target = e.target;

            if (target.tagName !== 'BUTTON') {
                return false;
            }

            if (target.className === 'reset') {
                input.value = '';
                equation = '';
            }

            if (target.className === 'equally') {
                input.value = compute(equation);
                equation = input.value;
            }

            if (target.className === 'btn' || target.className === 'operator') {
                input.value += target.innerText;
                equation += target.value;
            }
        })
    },

    keysEvent: function (input) {
        document.body.addEventListener('keypress', function (e) {
            switch (e.keyCode) {
                case Keys.zero: input.value += 0;
                    equation += 0;
                    break;
                case Keys.one: input.value += 1;
                    equation += 1;
                    break;
                case Keys.two: input.value += 2;
                    equation += 2;
                    break;
                case Keys.three: input.value += 3;
                    equation += 3;
                    break;
                case Keys.four: input.value += 4;
                    equation += 4;
                    break;
                case Keys.five: input.value += 5;
                    equation += 5;
                    break;
                case Keys.six: input.value += 6;
                    equation += 6;
                    break;
                case Keys.seven: input.value += 7;
                    equation += 7;
                    break;
                case Keys.eight: input.value += 8;
                    equation += 8;
                    break;
                case Keys.nine: input.value += 9;
                    equation += 9;
                    break;
                case Keys.dot:
                    input.value += '.';
                    equation += '.';
                    break;
                case Keys.minus:
                    input.value += '-';
                    equation += '-';
                    break;
                case Keys.plus:
                    input.value += '+';
                    equation += '+';
                    break;
                case Keys.multiple:
                    input.value += '*';
                    equation += '*';
                    break;
                case Keys.divide:
                    input.value += '/';
                    equation += '/';
                    break;
                case Keys.power:
                    input.value += '^';
                    equation += '**';
                    break;
                case Keys.enter:
                    input.value = compute(equation);
                    equation = input.value;
                    break;
            }
        })
    }
};

export { controller };