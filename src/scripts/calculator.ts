import {makeBtn} from "./button";

let calculator = {
    buttons: [],
    addButton: function(className:string, value:string, innerHtml:string, type:string) {
        this.buttons.push(makeBtn(className, value, innerHtml, type));
    }
};

export {calculator};
