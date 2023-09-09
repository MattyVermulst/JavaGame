let playerScore = 0;
let computerScore = 0;
const rounds = 3;
const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
const game = document.querySelector('.game');
const buttons = [...document.querySelectorAll('.options button')];
const scoreboard = document.getElementById('combined-scores');
const outcome = document.getElementById('outcome');
const playerResult = document.getElementById('player-result');
const computerResult = document.getElementById('computer-result');
const reset = document.getElementById('reset');

const initGame = () => {
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            playRound(e.target.innerText);
        });

        reset.addEventListener('click', () => resetGame());
    });
};

const playRound = (playerChoice) => {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    playerResult.innerText = playerChoice;
    computerResult.innerText = randomChoice;
    compareResults(playerChoice, randomChoice);
};

const compareResults = (player, computer) => {
    if (player === computer) {
        outputResult('Tie');
    } else if (player === 'Rock') {
        if (computer === 'Lizard' || computer === 'Scissors') {
            outputResult('Won');
        } else if (computer === 'Paper' || computer === 'Spock') {
            outputResult('Lost');
        }
    } else if (player === 'Paper') {
        if (computer === 'Rock' || computer === 'Spock') {
            outputResult('Won');
        } else if (computer === 'Scissors' || computer === 'Lizard') {
            outputResult('Lost');
        }
    } else if (player === 'Scissors') {
        if (computer === 'Paper' || computer === 'Lizard') {
            outputResult('Won');
        } else if (computer === 'Spock' || computer === 'Rock') {
            outputResult('Lost');
        }
    } else if (player === 'Lizard') {
        if (computer === 'Spock' || computer === 'Paper') {
            outputResult('Won');
        } else if (computer === 'Rock' || computer === 'Scissors') {
            outputResult('Lost');
        }
    } else if (player === 'Spock') {
        if (computer === 'Rock' || computer === 'Scissors') {
            outputResult('Won');
        } else if (computer === 'Paper' || computer === 'Lizard') {
            outputResult('Lost');
        }
    } else {
        outputResult('Tie');
    }
};
const outputResult = (result) => {
    outcome.innerText = result;

    switch (result) {
        case 'Won':
            playerScore++;
            break;
        case 'Lost':
            computerScore++;
            break;
    }

    scoreboard.innerText = playerScore + ' - ' + computerScore;

    if (playerScore === 3 || computerScore === 3) {
        gameOver();
    }
};

const gameOver = () => {
    game.classList.add('game-over');
    outcome.innerText = playerScore > computerScore ? 'You Win!' : 'You Lose :(';
};
const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    scoreboard.innerText = '0 - 0';
    outcome.innerText = '';
    game.classList.remove('game-over');
};

initGame();