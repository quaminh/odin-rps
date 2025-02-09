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

for (let i = 0; i < 10; ++i) {
    console.log(getComputerChoice())
}