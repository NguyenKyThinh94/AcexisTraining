"use strict";
function get(){
    let sizing = this.dataset.pixel || '';
    document.documentElement.style.setProperty('--'+this.name,this.value+sizing);  
}

function getAtributes(){
    let input = document.querySelectorAll('input');
    console.log(input);
    input.forEach(function(element){
        element.addEventListener('change',get);
        element.addEventListener('mousemove',get)
    }) 
}
getAtributes();


