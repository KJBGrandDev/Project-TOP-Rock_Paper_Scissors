

function getComputerChoice(){
    let randomNum = Math.random();

    if(randomNum >= 0.7){
        return "rock";
    } else if (randomNum >= 0.3){
        return "scissors"
    } else {
        return "paper"
    }
}

function getHumanChoice(){
    let choice = prompt("What is your move [rock, paper, scissors]: ");

    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        let caseHuman = humanChoice.toLowerCase();
        let caseComputer = computerChoice.toLowerCase();

        if(caseHuman === 'rock' && caseComputer === 'rock'){
            console.log("It's a tie! Rock vs Rock");
        } else if ((caseHuman === 'rock' && caseComputer === 'scissors')){
            humanScore++;
            console.log("Human Wins! Rock > Scissors");
        } else if ((caseHuman === 'rock' && caseComputer === 'paper')){
            computerScore++;
            console.log("Computer Wins! Rock < Paper");
        }

        if(caseHuman === 'scissors' && caseComputer === 'scissors'){
            console.log("It's a tie! Scissors vs Scissors");
        } else if ((caseHuman === 'scissors' && caseComputer === 'rock')){
            computerScore++;
            console.log("Computer Wins! Scissors < Rock");
        } else if ((caseHuman === 'scissors' && caseComputer === 'paper')){
            humanScore++;
            console.log("Human Wins! Scissors > Paper");
        }

        if(caseHuman === 'paper' && caseComputer === 'paper'){
            console.log("It's a tie! Paper vs Paper");
        } else if ((caseHuman === 'paper' && caseComputer === 'rock')){
            humanScore++;
            console.log("Human Wins! Paper > Rock");
        } else if ((caseHuman === 'paper' && caseComputer === 'scissors')){
            computerScore++;
            console.log("Computer Wins! Paper < Scissors");
        }
    }

    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        console.log(`Human Chooses: ${humanSelection}`)
        const computerSelection = getComputerChoice();
        console.log(`Computer Chooses: ${computerSelection}`)

        playRound(humanSelection,computerSelection);

        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log("-------------------------------------------------")
    }

    let winner = (humanScore > computerScore) ? 
        alert(`Human Wins! Getting a score of ${humanScore} points`) :
        alert(`Computer Wins! Getting a score of ${computerScore} points`)
}

playGame();