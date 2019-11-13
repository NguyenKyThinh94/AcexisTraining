const video = document.getElementById('videoWebcam');
const audio = document.getElementById('snapAudio');
const canvas = document.getElementById('videoCanvas');
const ouputInmage = document.getElementById('ouputInmage');
const ctx = canvas.getContext('2d');
const constraints = {
    audio: false,
    video: {
        width: {
            ideal: 1000
        },
        height: {
            ideal: 500
        }
    }
}

function changeRangeInput(obj) {
    obj.style.setProperty('background', 'linear-gradient(to left, #eee, #eee ' + (100 - obj.value) + '%, yellow ' + (100 - obj.value) + '%)');
}

function getVideo() {
    navigator.mediaDevices.getUserMedia(constraints)
        .then((mediaStream) => {
            video.srcObject = mediaStream;
            video.onloadedmetadata = function (e) {
                video.play();
            };
        })
        .catch((err) => console.log(err.name + ": " + err.message));
}

function redEffectPixel(pixels) {
    for (i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 200;
        pixels.data[i + 1] = pixels.data[i + 1] - 50;
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
    }
    return pixels;

}

function rgpSplit(pixels) {
    for (i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0];
        pixels.data[i + 1] = pixels.data[i + 1];
        pixels.data[i + 150] = pixels.data[i + 2];
    }
    return pixels;

}

function drawCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    const playcanvas = setInterval(function () {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);
        pixels = rgpSplit(pixels);
        ctx.putImageData(pixels, 0, 0);
        ctx.globalAnpha = 0.8;
    }, 50)
}

function takePhoto(event) {
    if (event.shiftKey) {
        audio.currentTime = 0;
        audio.play();
        //clearInterval(playcanvas) ;
        let photo = canvas.toDataURL('image/jpeg', 1.0);
        let link = document.createElement('a');
        let img = document.createElement('img');

        link.href = photo;
        link.setAttribute('download', 'w3logo')
        link.setAttribute('style', 'padding: 5px')
        img.src = photo;
        img.setAttribute('style', 'width: 100px;height: 50px;');

        link.appendChild(img);

        ouputInmage.appendChild(link);
    }
}
getVideo();


video.addEventListener('canplay', drawCanvas);
window.addEventListener('mousedown', takePhoto);