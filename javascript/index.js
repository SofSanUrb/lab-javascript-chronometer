const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  
  minDec.innerText = chronometer.splitClick()[0]
  minUni.innerText = chronometer.splitClick()[1]        
  
}

function printSeconds() {
  secDec.innerText = chronometer.splitClick()[3]
  secUni.innerText = chronometer.splitClick()[4]
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {

  let item = document.createElement('li') 
  item.classList.add("new-item")
  let splitList = document.querySelector("#splits")

  item.innerText = minDec.innerText + minUni.innerText + ":" + secDec.innerText + secUni.innerText 
  splitList.appendChild(item)
}

function clearSplits() {
  let listLi = document.querySelectorAll(".new-item")
  let splitList = document.querySelector("#splits")
  
  for (let i = 0; i < listLi.length; i++) {
    splitList.removeChild(listLi[i])
  }
  
}

function setStopBtn() {
  btnLeft.classList.remove("start")
  btnLeft.classList.add("stop")
  btnLeft.innerText = "STOP"
}

function setSplitBtn() {
  btnRight.classList.remove("reset")
  btnRight.classList.add("split")
  btnRight.innerText = "SPLIT"
}

function setStartBtn() {
  btnLeft.classList.remove("stop")
  btnLeft.classList.add("start")
  btnLeft.innerText = "START"
}

function setResetBtn() {
  btnRight.classList.remove("split")
  btnRight.classList.add("reset")
  btnRight.innerText = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains("start")){
    setStopBtn()
    setSplitBtn()

    chronometer.startClick(printTime)
  }
  else {
    setStartBtn()
    setResetBtn()
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains("split")){
    printSplit()
  }
  else {
    chronometer.resetClick()
    clearSplits()
  }
});
