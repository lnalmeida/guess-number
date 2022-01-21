'use strict';

const message = document.querySelector('.message');
const btnAgain = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const scoreText = document.querySelector('.score');
const highscoreText = document.querySelector('.highscore');

let randomNumber = Math.trunc(Math.random() * 20)+1;
console.log(`Número secreto: ${randomNumber}`);
let score = 20;
scoreText.innerText = score;
let highscore = 0
highscoreText.innerText = highscore;

const checkNumber = (guessValue) => {
        if(!guessValue) {
           message.innerText = 'Digite um número'; 
        } else if (guessValue === randomNumber) {
            message.innerText = 'Você Acertou';
            document.body.classList.add('win');
            number.innerText = randomNumber;
            if (score > highscore) {
                highscore = score;
                highscoreText.innerText = highscore;
            } 
        } else if (guessValue > randomNumber) {
            if (score > 1) {
                score--;
                message.innerText = 'Muito alto';
                scoreText.innerText = score;
            } else {
                endGame();
            }
        } else if (guessValue < randomNumber) {
            if (score > 1) {
                score--;
                message.innerText = 'Muito baixo';
                scoreText.innerText = score;
            } else {
                endGame();
            }
        }     
}


const resetGame = () => {
    if (score === 0) {
        score = 20
    }
    randomNumber = Math.trunc(Math.random() * 20)+1;
    console.log(`Número secreto: ${randomNumber}`);
    number.innerText = '?';
    document.body.classList.remove('win');
    message.innerText = 'Escolha um número entre 0 e 20';
    guess.value = '';
    scoreText.innerText = score;
}

const endGame = () => {
    message.innerText = 'Você perdeu';
    scoreText.innerText = '0';
    if(score == 0) {
        score = 20;
    }
}



btnAgain.addEventListener('click', resetGame);
btnCheck.addEventListener('click', () => checkNumber(Number(guess.value)));


