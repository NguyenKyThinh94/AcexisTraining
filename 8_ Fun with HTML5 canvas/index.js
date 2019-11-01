let canvas=document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
canvas.style.height=window.innerHeight +'px';
canvas.style.width=window.innerWidth + 'px';
ctx.strokeStyle = "#BADA55";
ctx.moveTo(0, 0);
ctx.lineTo(window.innerWidth, window.innerHeight);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';


