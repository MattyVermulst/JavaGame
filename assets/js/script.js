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
