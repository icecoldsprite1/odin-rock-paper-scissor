console.log("Hello World")
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choiceArray = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[randomIndex];
}

function getHumanChoice(button) {
    return button.textContent;
} 

function playRound(humanChoice, computerChoice) {
    let hC = humanChoice.toLowerCase();
    let resultMsg = "";
    if (hC === computerChoice) {
        resultMsg = "tie";
    } else if (hC === "rock" && computerChoice === "scissors") {
        resultMsg = "You win"
        humanScore++;
    } else if (hC === "scissors" && computerChoice === "paper") {
        resultMsg = "You win"
        humanScore++;
    } else if (hC === "paper" && computerChoice === "rock") {
        resultMsg = "You win"
        humanScore++;
    } else {
        resultMsg = "You lose"
        computerScore++;
    }
    document.querySelector("#result").textContent = `Results: ${resultMsg}`;
    let whoWon = (humanScore > computerScore) ? "Human" : "Computer";
    if (humanScore == 5) {
        document.querySelector("#winner").textContent = `Winner: ${whoWon}`;
    } else if (computerScore == 5) {
        document.querySelector("#winner").textContent = `Winner: ${whoWon}`;
    }
}



const choices = document.querySelectorAll("button");
choices.forEach((choice) => {
    choice.addEventListener("click", function(event) {
        playRound(getHumanChoice(event.target), getComputerChoice())
    });
})


