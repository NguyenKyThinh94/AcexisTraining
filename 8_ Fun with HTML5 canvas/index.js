const canvas = document.getElementById('mydraw');
const ctx = canvas.getContext('2d');
let isDraw =false;
let lastX=0;
let lastY=0;      
let widthLine=0; 
let hsue= 0;
let drecter =true;
canvas.setAttribute('height',window.innerHeight.toString()+ 'px');
canvas.setAttribute('width',window.innerWidth.toString()+ 'px');

ctx.lineJoin = "round";
ctx.lineCap = "round";


function writeLine(event){
    console.log('hsl('+hsue+',100%,50%)');
    
    if(!isDraw) return;
    ctx.strokeStyle = 'hsl('+hsue+',100%,50%)';
    ctx.lineWidth= widthLine;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();
    lastX=event.offsetX;
    lastY=event.offsetY;
    if(widthLine >=100 || widthLine < 1 ) {
        drecter= !drecter;
    }
    if(drecter){
        widthLine++;
    } else {
        widthLine--;
    }
    (hsue == 360 )?hsue=0:hsue++;
}
canvas.addEventListener('mousemove',writeLine)
canvas.addEventListener('mousedown', (event) => {
    isDraw=true;
    lastX=event.offsetX;
    lastY=event.offsetY;
    widthLine=1;
    hsue=1;
    });
canvas.addEventListener('mouseup',() => isDraw=false);
