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

function getHumanChoice() {
    let play = "";
    while (play !== "rock" && play !== "paper" && play !== "scissors") {
        play = prompt("Play 'rock'|'paper'|'scissors'")
        play = play.toLowerCase()
    }
    return play;
}

function playRound(humanChoice, computerChoice) {
    let outcome = 0 // 0: Lose, 1: Win, 2: Draw
    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                outcome = 2
                break
            case "scissors":
                outcome = 1
        }
    }
    else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                outcome = 1
                break
            case "paper":
                outcome = 2
        }
    }
    else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "paper":
                outcome = 1
                break
            case "scissors":
                outcome = 2
        }
    }

    if (outcome === 0) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
    else if (outcome === 1) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    }
    else {
        console.log("Draw!")
    }
    return outcome
}

let humanScore = 0
let computerScore = 0

for (let i = 1; i <= 5; ++i) {
    console.log(`Round ${i}:`)
    let result = playRound(getHumanChoice(), getComputerChoice())
    if (result === 0) {
        ++computerScore
    }
    else if (result === 1) {
        ++humanScore
    }
}

console.log(`Final Scores:\n Player: ${humanScore}\n Computer: ${computerScore}`)
