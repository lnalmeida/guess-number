'use strict';

const message = document.querySelector('.message');
const btnAgain = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

let randomNumber = Math.floor(Math.random() * 20)+1;
console.log(`Número secreto: ${randomNumber}`);
let scoreNumber = 0;
let highscoreNumber = window.localStorage.getItem('highscore');
highscore.innerText = highscoreNumber;

const checkNumber = (guessValue) => {
    console.log(guessValue);
    score.innerText = scoreNumber;
    if (parseInt(guessValue) === randomNumber) {
        message.innerText = 'Você acertou!';
        document.body.classList.toggle('win');
        scoreNumber+=10;
        if (scoreNumber > highscoreNumber) {
            window.localStorage.setItem('highscore', scoreNumber);
            highscore.innerText = highscoreNumber;
        } 
        score.innerText = scoreNumber;
    } else if (parseInt(guessValue) > randomNumber) {
        message.innerText = 'Muito alto!';
    } else {
        message.innerText = 'Muito baixo!';
    }
}


const resetGame = () => {
    randomNumber = Math.floor(Math.random() * 20)+1;
    document.body.classList.toggle('win');
    message.innerText = 'Escolha um número entre 0 e 20';
    highscore.innerText = highscoreNumber;
    guess.value = '';
}



btnAgain.addEventListener('click', resetGame);
btnCheck.addEventListener('click', () => checkNumber(guess.value));


