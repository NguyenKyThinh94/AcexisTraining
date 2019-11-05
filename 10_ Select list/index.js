let listiterm =document.querySelector('.listiterm');
let itermCheckboxs=listiterm.querySelectorAll('input');
let lastCheck;
let betwen = false;

function handelCheckbox(event){
    if(event.shiftKey && lastCheck){
        itermCheckboxs.forEach( (itermCheckbox) => {
            if(itermCheckbox == this || itermCheckbox==lastCheck){
                betwen=!betwen;
            }
            if(betwen){
                itermCheckbox.checked = true; 
            }
        })
    }    
    lastCheck=this;
}
itermCheckboxs.forEach( (itermCheckbox) => itermCheckbox.addEventListener('click',handelCheckbox))