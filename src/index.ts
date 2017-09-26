import {controller as ctr} from "./scripts/presenter";
import {view} from "./scripts/view";
import './style/style.scss';
view.render();
let screen = document.querySelector('.screen');
let container:HTMLElement = document.getElementById('calculator');

ctr.addClick(container, screen);
ctr.keysEvent(screen);