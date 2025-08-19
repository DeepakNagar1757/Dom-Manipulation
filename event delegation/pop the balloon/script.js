let balloonContainer = document.querySelector('.balloon-container');
let target = document.getElementById('target');
let score = document.getElementById('score');
let timerDisplay = document.getElementById('timer');

let balloons = 75;
let randomTarget = null;
let scoreCount = 0;
let countdown = 60;

let timerId = null; 
let restartButton = null;

startGame();

function randomNumber() {
    return Math.floor(Math.random() * 10);
}

function startGame() {
    scoreCount = 0;
    score.innerText = scoreCount;
    timerDisplay.innerText = countdown;
    balloonContainer.innerHTML = '';

    createBalloons();
    startTimer();
}

function createBalloons() {
    let numbers = [];

    // Generate balloons and store their values
    for (let i = 0; i < balloons; i++) {
        let value = randomNumber();
        numbers.push(value);
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.innerText = value;
        balloonContainer.appendChild(balloon);
    }

    randomTarget = randomNumber();
    target.innerText = randomTarget;
}

function startTimer() {
    if (timerId) clearInterval(timerId); // checking if any past timer is running or not if yes clear it

    let timeLeft = countdown;
    timerDisplay.innerText = timeLeft;

    timerId = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            endGame();
        }
    }, 1000);
}

function endGame() {
    // alert("Time's up! Game Over!");
    balloonContainer.innerHTML = '';

    // Create restart button if it doesn't exist
    if (!restartButton) {
        restartButton = document.createElement('button');
        restartButton.innerText = 'Restart';
        restartButton.classList.add('restart-button');
        balloonContainer.appendChild(restartButton);

        restartButton.addEventListener('click', () => {
            balloonContainer.removeChild(restartButton);
            restartButton = null;
            startGame();
        });
    }
}

balloonContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('balloon')) {
        if (parseInt(e.target.innerText) === randomTarget) {
            scoreCount += 10;
            score.innerText = scoreCount;
            randomTarget = randomNumber();
            target.innerText = randomTarget;
        } else {
            alert("Wrong balloon!");
        }
    }
});
