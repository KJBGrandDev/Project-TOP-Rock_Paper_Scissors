//Query Selector for Text UI
const displayPlayerScore = document.querySelector('#displayPlayerScore');
const displayComputerScore = document.querySelector('#displayComputerScore');
const displayPlayerChoice = document.querySelector('#displayPlayerChoice');
const displayComputerChoice = document.querySelector('#displayComputerChoice');
const displayRoundWinner = document.querySelector('#displayRoundWinner');

//Query Selector for Choices
const choiceBtn = document.querySelectorAll('[data-choice]');

const WINNING_CONDITIONS = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
}

const GAME_STATE = {
    humanScore: 0,
    computerScore: 0,
    humanMove: ''
}

choiceBtn.forEach(button => {
    button.addEventListener('click', () => {
        GAME_STATE.humanMove = button.dataset.choice;
        playGame();
    });
});

function getComputerChoice(){
    const choices = ['rock', 'scissors', 'paper'];
    const randomNum = Math.random();
    //1.0 - 0.7 = rock
    if(randomNum >= 0.7) return choices[0];
    //0.69 - 0.3 = scissors
    if(randomNum >= 0.3) return choices[1];
    //0.3 -> 0 = paper
    return choices[2];
}

function playRound(human,computer){
    if(human === computer){
        displayRoundWinner.textContent = `It's a tie! Both picked ${human}`;
        return;
    }

    if(WINNING_CONDITIONS[human] === computer){
        GAME_STATE.humanScore++;
        displayRoundWinner.textContent = `Human Wins! ${human} > ${computer}`
    } else {
        GAME_STATE.computerScore++;
        displayRoundWinner.textContent = `Computer Wins! ${human} < ${computer}`
    }
}

function playGame(){
    const humanSelection = GAME_STATE.humanMove;
    const computerSelection = getComputerChoice();

    displayPlayerChoice.textContent = humanSelection;
    displayComputerChoice.textContent = computerSelection;

    playRound(humanSelection,computerSelection);

    displayPlayerScore.textContent = GAME_STATE.humanScore;
    displayComputerScore.textContent = GAME_STATE.computerScore;

    if(GAME_STATE.humanScore === 5 || GAME_STATE.computerScore === 5){
        const winner = GAME_STATE.humanScore === 5 ? 'Human' : 'Computer';
        alert(`${winner} wins the entire match!`);
        resetGame();
    }
}

function resetGame(){
    GAME_STATE.humanScore = 0;
    GAME_STATE.computerScore = 0;
    GAME_STATE.humanMove = '--';

    displayPlayerScore.textContent = 0;
    displayComputerScore.textContent = 0;
    displayRoundWinner.textContent = '--';
    displayPlayerChoice.textContent = '--';
    displayComputerChoice.textContent = '--';
}