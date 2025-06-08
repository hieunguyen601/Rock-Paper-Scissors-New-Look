
function computerRandomChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
};

function hasPlayerWonTheRound(player,computer) {
    return (
        (player === 'Rock' && computer === 'Scissors') ||
        (player === 'Paper' && computer === 'Rock') ||
        (player === 'Scissors' && computer === 'Paper')
    );
}

playerScore = 0;
computerScore = 0;

const rockButtonElement = document.querySelector('.rockButton');
const paperButtonElement = document.querySelector('.paperButton');
const scissorsButtonElement = document.querySelector('.scissorsButton');

function getRoundResults(userOption) {
    const computerResult = computerRandomChoice();
    if (hasPlayerWonTheRound(userOption,computerResult)) {
        playerScore++;
        return `Player chose ${userOption} beats computer ${computerResult}`;
    } else if (computerResult === userOption) {
        return `It's a tie! Player and computer both chose ${userOption}`;
    } else {
        computerScore++;
        return `Computer chose ${computerResult} beats player ${playerScore}`;
    }
}


const playerScoreSpanElement = document.querySelector('.playerScore');
const computerScoreSpanElement = document.querySelector('.computerScore');
const resultElement = document.querySelector('.result-js');
const winnerMessage = document.querySelector('.winner-message');
const resetGameButton = document.querySelector('.playAgain-button');
const optionContainer = document.querySelector('.information-container');

function showResults(userOption) {
    resultElement.innerText = getRoundResults(userOption);
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;


    if (playerScore === 3 || computerScore === 3) {
    winnerMessage.innerText = `${
        playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    resetGameButton.style.display = 'block';
    optionContainer.style.display = 'none';
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerHTML = computerScore;

    resetGameButton.style.display = 'none';
    optionContainer.style.display = 'block';

    winnerMessage.innerText = '';
    resultElement.innerText = '';
};

resetGameButton.addEventListener('click', resetGame);

rockButtonElement.addEventListener('click',  () => {
    showResults('Rock');
});

paperButtonElement.addEventListener('click', () => {
    showResults('Paper');
});

scissorsButtonElement.addEventListener('click', () => {
    showResults('Scissors');
});