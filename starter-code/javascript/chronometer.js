// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = 0;
    this.seconds = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(() => {
        this.currentTime++;
        this.setTime();
        printTime();
    }, 1000);

};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime - this.setMinutes() * 60;

};

Chronometer.prototype.twoDigitsNumber = function (number) {
    const str = number.toString();
    if (str.length < 2) {
        return `0${str}`;
    } else {
        return str;
    }

};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    this.setMilliseconds();
};

Chronometer.prototype.setMilliseconds = function () {
    console.log(this.currentTime * 1000);
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.setTime();
    printTime();
};

Chronometer.prototype.splitClick = function () {

};