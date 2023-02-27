const choiceArray = ["Rock", "Paper", "Scissors"];
const Choices = new Map([
    ["ROCK", 0],
    ["PAPER", 1],
    ["SCISSORS", 2]
])
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const Results = {
    Tie: "Tie!",
    Win: "You win!",
    Lose: "You lose."
}
const VictoryConditions = {
    Paper: "Paper covers rock.",
    Rock: "Rock breaks scissors.",
    Scissors: "Scissors cuts paper."
}


function getComputerChoice() {
    return Math.floor((Math.random() * 10) / (10/3));
}

function getRoundResult(playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = Choices.get(playerSelection.toUpperCase());
    let result;
    let interaction = "";
    
    if(computerSelection === playerSelection) {
        result = Results.Tie;
        interaction = "You both selected " + choiceArray[playerSelection] + ".";
    }
    
    else if(playerSelection === ROCK){
        result = computerSelection === SCISSORS ? Results.Win : Results.Lose;
        interaction = result === Results.Win ? VictoryConditions.Rock : VictoryConditions.Paper;
    }
    else if(playerSelection === PAPER){
        result = computerSelection === ROCK ? Results.Win : Results.Lose;
        interaction = result === Results.Win ? VictoryConditions.Paper : VictoryConditions.Scissors;
    }
    else if(playerSelection === SCISSORS){
        result = computerSelection === PAPER ? Results.Win : Results.Lose;
        interaction = result === Results.Win ? VictoryConditions.Scissors : VictoryConditions.Rock;
    }

    return result + " " + interaction;    
}