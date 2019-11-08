
let form =document.querySelector('form');
let ul =document.querySelector('ul');
let listIterm = JSON.parse(localStorage.getItem('iterm')) || [];

function fillCheckbox(){
    let checkboxs=document.querySelectorAll('[type="checkbox"]')  ;
    listIterm.forEach((iterm,index) => {
        let icon=ul.childNodes[index].querySelector('label i');
        if(!iterm.done) {
            icon.setAttribute('style','display: none');
            checkboxs[index].checked=false;
        } else {
            icon.setAttribute('style','');
            checkboxs[index].checked=true;
        }
    });
}
function reder(){
    let ulListIterm =document.querySelector('.list-iterm');
    ulListIterm.innerHTML='';
    listIterm.forEach((iterm,index) => {
        let node=document.createElement('li');
        node.classList.add('iterm');
        node.setAttribute('data-done', iterm.done);
        node.setAttribute('data-index', index);
        node.innerHTML=
            '<label for="itermInput'+index+'">'+
            '<i class="fas fa-check-double"></i>'+
            '</label>'+
            '<input type="checkbox"  name="" id="itermInput'+index+'" >'+
            '<p class="menu">'+iterm.iterm+'</p>';
            ulListIterm.appendChild(node);
    });   
    fillCheckbox()
}

function addToList(){
    let itermIput=document.querySelector('[type="text"]');
    let iterm=itermIput.value;
    let itermobj={
        iterm,
        done: false
    }
    listIterm.push(itermobj);
    localStorage.setItem('iterm', JSON.stringify(listIterm));
    reder();
}
function aupdateLisst(e){
   
        let checkboxs=document.querySelectorAll('[type="checkbox"]')  ;
        checkboxs.forEach((checkbox,index) => {
                listIterm[index].done= checkbox.checked;
        });     
    localStorage.setItem('iterm', JSON.stringify(listIterm));
     fillCheckbox();
    }


function init(){
    reder();
    form .addEventListener('submit',addToList);
    ul.addEventListener('click', aupdateLisst)
    
}
init()


