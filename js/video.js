var video = document.querySelector("video");
var playBtn = document.getElementById("playBtn");
playBtn.onclick = function () {
    if (video.paused) {
        video.play();
        playBtn.innerHTML="ð";
    } else {
        video.pause();
        playBtn.innerHTML="ð";
    }
}
var full = document.getElementById("full");
var container = document.getElementById("container");
var i = 1; //å®ä¹ä¸ä¸ªåéï¼ç¨äºè®°å½æ¯å¦ä¸ºå¨å±ç¶æ
full.onclick = function () {
    i++;
    //å¯¹2åä½ï¼ä¸º0åå¨å±ï¼å¦åå³é­å¨å±
    if (i % 2 == 0) {
        //ç¹å»å¼å¯å¨å±
        if (container.requestFullScreen) {
            container.requestFullScreen()
        } else if (container.webkitRequestFullScreen) {
            container.webkitRequestFullScreen() //è°·æ­
        } else if (container.mozRequestFullScreen) {
            container.mozRequestFullScreen() //ç«ç
        } else if (div01.msRequestFullscreen) {
            container.msRequestFullscreen() //ie
        }
    } else {
        //å³é­å¨å±
        if (document.cancelFullscreen) {
            document.cancelFullscreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

}

function number1(s) {
    if (s < 10) {
        s = "0" + s
    } else {
        s = "" + s
    }
    return s;
}
var time1 = document.getElementById("time1");
var time2 = document.getElementById("time2");
var t1;
//è§é¢è·åæ¶é´åä½ä¸ºç§ï¼è¦å¯¹å®è¿è¡ä¸äºæ°æ®çå¤ç
video.oncanplay = function () {
    //è·åè§é¢æ»æ¶é¿
    t1 = video.duration;
    var h = parseInt(t1 / 3600);
    var m = parseInt(t1 % 3600 / 60);
    var s = parseInt(t1 % 60);
    //å¼æ¾ç¤ºå¨spanæ ç­¾ä¸­
    time2.innerHTML = number1(h) + ":" + number1(m) + ":" + number1(s);
}

video.ontimeupdate = function () {
    //è·åå½åè§é¢æ­æ¾çæ¶é´
    var t2 = video.currentTime;
    var h = parseInt(t2 / 3600);
    var m = parseInt(t2 % 3600 / 60);
    var s = parseInt(t2 % 60);
    time1.innerHTML = number1(h) + ":" + number1(m) + ":" + number1(s);
    progress.max = t2;
    progress.value = t2 / t1 * progress.max;
}
video.onended = function () {
    progress.value = 0;
    //ç»ææ¶æ¸0ï¼
    time1.innerHTML = "00" + ":" + "00" + ":" + "00";
}

progress.onclick = function (e) {
    //è·åå½åä½ç½®è·ç¦»ç¶çº§æå·¦è¾¹çè·ç¦»
    //left = progress.offsetLeft;
    //è·åé¼ æ è·ç¦»å±å¹æå·¦è¾¹çè·ç¦»
    //e.clientX
    //è·åé¼ æ è·ç¦»å½ååç´ æå·¦è¾¹çè·ç¦»
    var left = e.offsetX;
    console.log(left);
    console.log(t1);
    video.currentTime = left / 320 * t1;
}