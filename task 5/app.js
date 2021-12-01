const screens = document.querySelectorAll('.screen');
const startBtn = document.getElementById('start');
const timeList = document.querySelector('.time-list');
const timeEl = document.getElementById('time');
const board = document.getElementById('board');

let time = 0;
let score = 0;
const COLOR_ARRAY = [
    'radial-gradient(#a9aed7, #494471)',
    'radial-gradient(#a9d7b9, #3b6f33)',
    'radial-gradient(#d7a9c0, #653a4b)',
    'radial-gradient(#d4d7a9, #777500)',
    'radial-gradient(#d7c2a9, #8f4402',
    'radial-gradient(#a9d3d7, #0d1e3f)',
];

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-btn')) {
        time = +e.target.dataset.time;
        screens[1].classList.add('up');
        startGame();
    }
});

board.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        e.target.remove();
        score++;
        createRandomCircle();
    }
});

function startGame() {
    setTime(time);
    createRandomCircle();
    const intervalId = setInterval(() => decreaseTime(intervalId), 1000);
}

function decreaseTime(intervalId) {
    if (time === 0) {
        clearInterval(intervalId);

        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(val) {
    timeEl.innerHTML = `00:${val}`;
}

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h2>Счёт: <span class = "primary">${score}</span></h2>`;
}

function createRandomCircle() {
    const size = getRandomNumber(7, 40);
    const { width: w, height: h } = board.getBoundingClientRect();

    circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.height = `${size}px`;
    circle.style.width = `${size}px`;
    circle.style.top = `${getRandomNumber(0, h - size)}px`;
    circle.style.left = `${getRandomNumber(0, w - size)}px`;
    circle.style.background =
        COLOR_ARRAY[getRandomNumber(0, COLOR_ARRAY.length - 1)];
    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
