import {makeBtn} from "./button";

let calculator = {
    buttons: [],
    addButton: function(className, value, innerHtml, type) {
        this.buttons.push(makeBtn(className, value, innerHtml, type));
    }
};

export {calculator};
