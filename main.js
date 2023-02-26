const choiceArray = ["Rock", "Paper", "Scissors"];
const Choices = new Map([
    ["ROCK", 0],
    ["PAPER", 1],
    ["SCISSORS", 2]
])


function getComputerChoice() {
    return Math.floor((Math.random() * 10) / (10/3));
}

function RunGame(playerSelection) {
    computerSelection = getComputerSelection();
    playerSelection = Choices.get(playerSelection.toUpper());

  
}