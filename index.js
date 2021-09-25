const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId;

function onStartClick() {
  intervalId = setInterval(changeColor, 1000);
  refs.startBtn.disabled = true;
}

function onStopClick() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}

function changeColor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

refs.startBtn.addEventListener('click',onStartClick);
refs.stopBtn.addEventListener('click',onStopClick);