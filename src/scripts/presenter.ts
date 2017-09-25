import {calculator} from "./calculator";
import {compute} from "./compute";

let equation = '';

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
                case 48: input.value += 0;
                    equation += 0;
                    break;
                case 49: input.value += 1;
                    equation += 1;
                    break;
                case 50: input.value += 2;
                    equation += 2;
                    break;
                case 51: input.value += 3;
                    equation += 3;
                    break;
                case 52: input.value += 4;
                    equation += 4;
                    break;
                case 53: input.value += 5;
                    equation += 5;
                    break;
                case 54: input.value += 6;
                    equation += 6;
                    break;
                case 55: input.value += 7;
                    equation += 7;
                    break;
                case 56: input.value += 8;
                    equation += 8;
                    break;
                case 57: input.value += 9;
                    equation += 9;
                    break;
                case 46:
                    input.value += '.';
                    equation += '.';
                    break;
                case 45:
                    input.value += '-';
                    equation += '-';
                    break;
                case 43:
                    input.value += '+';
                    equation += '+';
                    break;
                case 42:
                    input.value += '*';
                    equation += '*';
                    break;
                case 47:
                    input.value += '/';
                    equation += '/';
                    break;
                case 94:
                    input.value += '^';
                    equation += '**';
                    break;
                case 13:
                    input.value = compute(equation);
                    equation = input.value;
                    break;
            }
        })
    }
};

export { controller };