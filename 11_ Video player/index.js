let video = document.querySelector('video');
let previous25sBT=document.getElementById('previous25s');
let playButton=document.getElementById('playButton');
let next25sBT=document.getElementById('next25s');
let playerBar=document.querySelector('#playerBar hoverPlayer');
let volumeRanger=document.querySelector('#volumeRanger hoverPlayer');
let root=document.querySelector(':root');



function playVideo(){
    if(video.paused){
        video.play();
        this.innerHTML='<i class="fas fa-pause"></i>';

    }else{
        video.pause();
        this.innerHTML='<i class="fas fa-play"></i>';
    } 
}
function handelBar(){
    let ranger=(video.currentTime/video.duration).toFixed(4)*100;
    root.style.setProperty('--playBar',ranger.toString()+'%');
}
function next25s(){
    video.currentTime+=25;
}
function previous25s(){
    video.currentTime-=25;
}

video.ontimeupdate=handelBar;
video.addEventListener('play',handelBar);
playButton.addEventListener('click', playVideo);
next25sBT.addEventListener('click',next25s);
previous25sBT.addEventListener('click',previous25s);