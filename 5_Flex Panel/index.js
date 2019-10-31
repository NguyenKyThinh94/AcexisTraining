"use strict";
let panels = document.querySelectorAll('section');

function displayPanel() {
    panels.forEach(panel => {
        panel.classList.remove('panel-flex5');
        panel.querySelector('.top-text').classList.remove('text-display');
        panel.querySelector('.botton-text').classList.remove('text-display');
    });
    this.querySelector('.top-text').classList.add('text-display');
    this.querySelector('.botton-text').classList.add('text-display');
    this.classList.add('panel-flex5');
}

panels.forEach(panel => {
    panel.addEventListener('click', displayPanel);
});