// add keypress event, 

window.addEventListener('keypress',function(event){ 
     
    // when you presss any key, query elemnt, audio have selector attribute datat-charcode = charcode of key
    let keyElement=document.querySelector("div[data-charcode='"+event.charCode.toString()+"']") ;
    let keyAudio=document.querySelector("audio[data-charcode='"+event.charCode.toString()+"']") ;

    // if not null , add traisition, play audio
    if(keyElement){
        keyElement.classList.add('transition');
        keyAudio.play();
     } 
     // que ry eleemnt have class  transition
     const transition = document.querySelector('.transition');

     // if not null , wwhen traisitionend remove class traisition
    if(transition){
        transition.addEventListener('transitionend',function(){
        keyElement.classList.remove('transition');
        });
    }  
});

    

