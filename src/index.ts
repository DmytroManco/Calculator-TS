import {controller as ctr} from "./scripts/presenter";
import {view} from "./scripts/view";
import './style/style.scss';

let container = document.getElementById('calculator');

view.render();
let screen = document.querySelector('.screen');
ctr.keysEvent(screen);
ctr.addClick(container, screen);