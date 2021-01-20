class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      callback()
  }, 1000)}

  getMinutes() {
    if(this.currentTime != 0){
      return Math.floor(this.currentTime/60);
    }
    else {
      return 0;
    }
    
  }

  getSeconds() {
    if(this.currentTime != 0) {
      return Math.floor(this.currentTime%60);
    }
    else {
      return 0
    }
  }

  twoDigitsNumber(number) {
    if (number < 10){
      return "0" + number
    }
    else {
      return number.toString()
    }
  }

  stopClick() {
    clearInterval(this.intervalID)
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`;
  }
}
