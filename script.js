'use strict';

// Check button 
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

const displayMessage = message => document.querySelector('.message')
    .textContent = message;


document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    if (score > 1) {

        // When no input
        if (!guess) {
            displayMessage('⛔ No number!');
            --score;
            document.querySelector('.score').textContent = score;
        }

        //When guess number not matched to the secret number
        else if (guess !== secretNumber) {
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');

            --score;
            document.querySelector('.score').textContent = score;
        }

        //When guess number match the secret number
        else if (guess === secretNumber) {
            const presentScore = Number(document.querySelector('.score').textContent);

            if (presentScore > highScore) highScore = presentScore;

            document.querySelector('.highscore').textContent = highScore;
            document.querySelector('.number').textContent = secretNumber;
            displayMessage('🎉 Correct Number');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

        }
    }

    // When score is less than 1
    else {
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
    }

});



// Again button / Reset game
const resetGame = document.querySelector('.again');
resetGame.addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});
