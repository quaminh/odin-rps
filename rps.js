function getComputerChoice() {
    let r = Math.random()
    if (r < 1/3) {
        return "rock"
    }
    else if (r < 2/3) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

let humanScore = 0
let computerScore = 0

const resultText = document.querySelector('.result');
const scoreText = document.querySelector('.score');

function playRound(event) {
    let playerChoice = event.target.id;
    let computerChoice = getComputerChoice();
    let outcome = 0; // 0: lose, 1: win, 2: draw
    switch (playerChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'scissors':
                    outcome = 1;
                    break;
                case 'rock':
                    outcome = 2;
            }
            break;
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    outcome = 1;
                    break;
                case 'paper':
                    outcome = 2;
            }
            break;
        case 'scissors':
            switch (computerChoice) {
                case 'paper':
                    outcome = 1;
                    break;
                case 'scissors':
                    outcome = 2;
            }
    }
    switch (outcome) {
        case 0:
            ++computerScore;
            resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}`
            break;
        case 1:
            ++playerScore;
            resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}`
            break;
        case 2:
            resultText.textContent = "Draw!";
    }
    scoreText.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}