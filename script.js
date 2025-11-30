const display = document.querySelector(".display");
const startBtn = document.getElementById("startbtn");
const stopBtn = document.getElementById("stopbtn");
const resetBtn = document.getElementById("resetbtn");

let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

// 1️⃣ Start
startBtn.addEventListener("click", function () {
    if (!interval) {  
        interval = setInterval(startTimer, 1000);
    }
});

function startTimer() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    display.textContent = 
        `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

// 2️⃣ Stop
stopBtn.addEventListener("click", function () {
    clearInterval(interval);
    interval = null;  
});

// 3️⃣ Reset
resetBtn.addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    display.textContent = "00:00:00";
});

function format(num) {
    return num < 10 ? "0" + num : num;
}