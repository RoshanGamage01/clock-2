const SEC = document.getElementById('sec');
const MIN = document.getElementById('min');
const HH = document.getElementById('hh');
const DTIME = document.getElementById('time');

function clock(){
  const TIME = new Date();
  var sec = TIME.getSeconds();
  var hh = TIME.getHours();
  var min = TIME.getMinutes();
  if(sec < 10){
    DTIME.innerHTML = `${hh}:${min}:0${sec}`
  }else if(hh < 10){
    DTIME.innerHTML = `0${hh}:${min}:${sec}`
  }else if(min < 10){
    DTIME.innerHTML = `${hh}:0${min}:${sec}`
  }
  else{
    DTIME.innerHTML = `${hh}:${min}:${sec}`
  }
  
  setTimeout(()=>{
    clock()
    SEC.style = `transform: rotate(${sec*6}deg)`
    MIN.style = `transform: rotate(${min*6}deg)`
    HH.style = `transform: rotate(${hh*30}deg)`
  }, 1000);
}

clock();