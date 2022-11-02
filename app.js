var milisec = 0;
var sec = 0;
var min = 0;
var milisecheading = document.getElementById('milisec')
var secheading = document.getElementById('sec')
var minheading = document.getElementById('min')

var interval ;
var lap = '';

function time(){
    milisec++
    milisecheading.innerHTML = milisec;

    if(milisec > 100){
        sec++
        secheading.innerHTML = sec + ":";
        milisec = 0
    }
    else if(sec > 60){
        min++
        minheading.innerHTML = min + ":";
        sec = 0
    }
}
function starttime(){
    interval = setInterval(time,10)
    var startbtn = document.getElementById('startbtn')
    var pausebtn = document.getElementById('pausebtn')
    var resetbtn = document.getElementById('resetbtn')
    startbtn.disabled = true
    pausebtn.disabled = false
    resetbtn.disabled = false
}
function pausetime(){
    clearInterval(interval)
    var pausebtn = document.getElementById('pausebtn')
    var startbtn = document.getElementById('startbtn')
    startbtn.disabled = false
    pausebtn.disabled = true
}
function resettime(){
    var resetbtn = document.getElementById('resetbtn')
    resetbtn.disabled = true
    milisec = 0;
    sec = 0;
    min = 0;
    milisecheading.innerHTML = milisec
    secheading.innerHTML = sec
    minheading.innerHTML = min
    pausetime()
    laptime.innerHTML = ""
}

function laprecord(){
    var laptime = document.getElementById('laptime')
    lap = laptime.innerHTML
    laptime.innerHTML = min + ":" +  sec + ":" + milisec +'<br>' + lap
}