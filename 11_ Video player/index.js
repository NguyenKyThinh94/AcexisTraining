let video = document.querySelector('video');
let previous25sBT=document.getElementById('previous25s');
let playButton=document.getElementById('playButton');
let next25sBT=document.getElementById('next25s');
let playerBar=document.getElementById('playerBar');
let volumeBar=document.getElementById('volumeBar');
let speedSelect=document.getElementById('speedSelect');

function changeRangeInput(obj){
    obj.style.setProperty('background','linear-gradient(to left, #eee, #eee '+(100-obj.value)+'%, yellow '+(100-obj.value)+'%)'); 
}
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
    let ranger=(video.currentTime/video.duration).toFixed(2);
    ranger=ranger*100;
    playerBar.value=ranger;
    if(ranger>=100){
        video.pause();
        playButton.innerHTML='<i class="fas fa-play"></i>';
    }
    changeRangeInput(playerBar);
    
}
function next25s(){
    video.currentTime+=25;
    
}
function previous25s(){
    video.currentTime-=25;
    
}

function changeTime(){
    video.currentTime=(playerBar.value*video.duration/100).toFixed(0);
    changeRangeInput(playerBar);
}
function changeVolume(){
    
    video.volume=(volumeBar.value*1/100).toFixed(1);
    changeRangeInput(volumeBar);
    console.log(video.volume);
}
function changeSpeed(){
    video.playbackRate = parseFloat(speedSelect.value);
}

video.ontimeupdate=handelBar;
video.addEventListener('play',handelBar);
playButton.addEventListener('click', playVideo);
next25sBT.addEventListener('click',next25s);
previous25sBT.addEventListener('click',previous25s);
playerBar.addEventListener('change',changeTime);
playerBar.addEventListener('mousedown',()=> video.pause());
playerBar.addEventListener('mouseup',()=> video.play());
volumeBar.addEventListener('change',changeVolume);
speedSelect.addEventListener('change',changeSpeed);
