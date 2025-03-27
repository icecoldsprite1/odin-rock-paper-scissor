console.log("Hello World")
playGame();

function getComputerChoice() {
    let choiceArray = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors");
    return choice;
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    let hC = humanChoice.toLowerCase();
    if (hC === computerChoice) {
        console.log("tie");
    } else if (hC === "rock" && computerChoice === "scissors") {
        console.log("You win!");
        humanScore++;
    } else if (hC === "scissors" && computerChoice === "paper") {
        console.log("You win!");
        humanScore++;
    } else if (hC === "paper" && computerChoice === "rock") {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }
    return [humanScore, computerScore];
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let result;

    result = playRound(getHumanChoice(), getComputerChoice(), humanScore, computerScore);
    humanScore = result[0];
    computerScore = result[1];

    result = playRound(getHumanChoice(), getComputerChoice(), humanScore, computerScore);
    humanScore = result[0];
    computerScore = result[1];

    result = playRound(getHumanChoice(), getComputerChoice(), humanScore, computerScore);
    humanScore = result[0];
    computerScore = result[1];

    result = playRound(getHumanChoice(), getComputerChoice(), humanScore, computerScore);
    humanScore = result[0];
    computerScore = result[1];

    result = playRound(getHumanChoice(), getComputerChoice(), humanScore, computerScore);
    humanScore = result[0];
    computerScore = result[1];

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }

    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
}
