function makeBtn(className:string, value:string, innerHtml:string, type:string){
    let el = <HTMLInputElement>document.createElement(type);
    el.classList.add(className);
    el.value = value;
    el.innerHTML = innerHtml;
    return el;
}

export {makeBtn};