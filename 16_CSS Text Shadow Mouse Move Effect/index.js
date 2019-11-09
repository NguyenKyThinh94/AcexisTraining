const text = document.querySelector('.text');
const container=document.querySelector('.container');
const walk=100; //100px
 

// fucntion in here
    function shadow(event){
        const {offsetWidth: width, offsetHeight: height}= container;
        let { offsetX: x, offsetY: y} =event;
        if(this != event.target){
            x=x+event.target.offsetLeft;
            y=y+event.target.offsetTop;
        }
        let walkX=Math.round((x/width*walk)-walk/2);
        let walkY=Math.round((y/height*walk)-walk/2);
      

       
        text.style.textShadow =  (walkX)+'px '+ (walkY)+'px 0 rgba(255,0,255,0.7)';
        console.log(walkX,walkY);
        
        
    }

//add event in here
container.addEventListener('mousemove',shadow);
