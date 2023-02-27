const choiceArray = ["Rock", "Paper", "Scissors"];
const Choices = new Map([
    ["ROCK", 0],
    ["PAPER", 1],
    ["SCISSORS", 2]
])
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const TIE = 0;
const WIN = 1;
const LOSS = 2;

const ResultTexts = ["Tie!", "You win!", "You lose!"];
const VictoryConditions = ["Rock breaks scissors.", "Paper covers rock.", "Scissors cuts paper."];
const LosingConditions = [VictoryConditions[PAPER], VictoryConditions[SCISSORS], VictoryConditions[ROCK]];


function getComputerChoice() {
    return Math.floor((Math.random() * 10) / (10/3));
}



function getRoundResult(playerSelection) { //This method counts on the playerSelection parameter being a number according to the constants above. This should be done when input is received.
    computerSelection = getComputerChoice();
    let result;
    
    if(computerSelection === playerSelection) 
        result = TIE;
    else if(playerSelection === ROCK)
        result = computerSelection === SCISSORS ? WIN : LOSS;
    else if(playerSelection === PAPER)
        result = computerSelection === ROCK ? WIN : LOSS;
    else if(playerSelection === SCISSORS)
        result = computerSelection === PAPER ? WIN : LOSS;

    return result;    
}

function game(numOfRounds) {
    let wins = 0;

    for(let i = 0; i < numOfRounds; i++){
        let playerSelectionRaw = prompt("Rock, paper, or scissors?");
        let playerSelection = Choices.get(playerSelectionRaw.toUpperCase());
        let results = getRoundResult(playerSelection);
        let resultText = ResultTexts[results];
        let condition;

        switch(results) {
            case TIE:
                condition = "You both picked " + choiceArray[playerSelection] + ".";
                break;
            case WIN:
                condition = VictoryConditions[playerSelection];
                break;
            case LOSS:
                condition = LosingConditions[playerSelection];
                break;
            default:
                console.error("ERROR: Results were outside of scope of win, loss, or tie.")
        }
        
        console.log(resultText + " " + condition);
        wins += results === LOSS ? -1 : results;
    }

    if(wins > 0) console.log("You won the game!");
    else if(wins === 0) console.log("You tied wins and losses.");
    else console.log("Sorry. You lost the game.");
}