"use strict";

function getDeg(input,rangInput,rangOutput){
    return ((input/rangInput)*rangOutput-90).toFixed(0);    
}
function get0hour(){
    var now= new Date();
    var d = new Date(now.getFullYear(),now.getMonth(),now.getDate());
    return d.getTime();
}
function setHour(){
    let hourHand= document.getElementById('hourHand');
    let now =new Date();
    let second= parseInt(now.getTime()-get0hour()) ;
    let deg= getDeg(second,12*60*60*1000,360);
    hourHand.style.transform= 'rotate('+ deg.toString() +'deg)';

}
function setMinute(){
    let minuteHand= document.getElementById('minuteHand');
    let now =new Date();
    let second= parseInt(now.getTime()-get0hour());
    let deg= getDeg(second,60*60*1000,360);
    minuteHand.style.transform= 'rotate('+ deg.toString() +'deg)';
}
function setSecond(){
    let secondHand= document.getElementById('secondHand');
    let now =new Date();
    let second= parseInt(now.getTime()-get0hour());
    let deg= getDeg(second,60*1000,360);
    secondHand.style.transform= 'rotate('+ deg.toString() +'deg)';
}
function setdigitalClock(){
    let now = new Date();
    let hourStr=now.toString().substr(16,5);
    let digitalClock=document.getElementById('digitalClock');
    digitalClock.innerHTML=hourStr;
}
setInterval(function () {
    setHour();
    setMinute();
    setSecond();
    setdigitalClock();
}, 1000);
