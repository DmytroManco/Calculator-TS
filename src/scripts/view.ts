import {calculator} from "./calculator";
import {controller as ctr} from "./presenter";

let fragment = document.createDocumentFragment();
let container = document.getElementById('calculator');

let view = {
    render: function () {
        for(let i = 0; i < calculator.buttons.length; i++) {
            if(calculator.buttons[i].className === 'screen') {
                calculator.buttons[i].setAttribute('disabled', 'disabled');
            }
            fragment.appendChild(calculator.buttons[i]);
        }
        container.appendChild(fragment);
    }
};

ctr.addNewButton('reset', 'C', 'C', 'button');
ctr.addNewButton('operator', '**', '^', 'button');
ctr.addNewButton('screen', '', '', 'input');
ctr.addNewButton('btn', 7, 7, 'button');
ctr.addNewButton('btn', 8, 8, 'button');
ctr.addNewButton('btn', 9, 9, 'button');
ctr.addNewButton('operator', '+', '+', 'button');
ctr.addNewButton('btn', 4, 4, 'button');
ctr.addNewButton('btn', 5, 5, 'button');
ctr.addNewButton('btn', 6, 6, 'button');
ctr.addNewButton('operator', '-', '-', 'button');
ctr.addNewButton('btn', 1, 1, 'button');
ctr.addNewButton('btn', 2, 2, 'button');
ctr.addNewButton('btn', 3, 3, 'button');
ctr.addNewButton('operator', '/', '/', 'button');
ctr.addNewButton('btn', 0, 0, 'button');
ctr.addNewButton('btn', '.', '.', 'button');
ctr.addNewButton('equally', '=', '=', 'button');
ctr.addNewButton('operator', '*', '*', 'button');

export { view };