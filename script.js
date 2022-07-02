'use strict';

let buttons = document.querySelectorAll('.slot'),
      stop = document.querySelector('.stop'),
      score = document.querySelector('.score'),
      start = document.querySelector('.begin');

let i = 0;
function animationButtons() {
    buttons[i].classList.toggle('green'); 
    setTimeout(function () {
        buttons[i].classList.toggle('green');
        i++;
        if (i < buttons.length) {
            animationButtons();
            
        } else {
            i = 0;
            animationButtons();
        }
    }, 200);
};

function scoreListener () {
    if (buttons[5].classList.length == "3") {
        score.innerHTML = (+score.outerText) + 100;
    } else {
        score.innerHTML = (+score.outerText) - 100;
    }
}

stop.addEventListener('click', (score) => {
    
    scoreListener();
});

function startGame () {
    animationButtons();
    start.style.backgroundColor = "gray";
    start.style.Color = "black";
    start.innerHTML = "СТОП";
    start.removeEventListener('click', startGame);
    start.addEventListener('click', endGame);
}

function endGame () {
    buttons[i].classList.toggle('green');
    i = -1;
    score.innerHTML = 0;
    start.style.backgroundColor = "rgb(0, 0, 200)";
    start.style.Color = "orange";
    start.innerHTML = "Start";
    start.removeEventListener('click', endGame);
    start.removeEventListener('click', startGame);

}

start.addEventListener('click', startGame);