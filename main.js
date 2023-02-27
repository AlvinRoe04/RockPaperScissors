//Nodes
const choiceButtons = document.querySelectorAll('.choices button');
const scores = document.querySelector('.scores span');

//Scores
let totalGames = 0;
let wins = 0;
let losses = 0;
let ties = 0;


//String Arrays
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


function getScoreString(){
    return "W: " + wins + "  L: " + losses + "  Ties: " + ties + "  Total: " + totalGames;
}

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

function game(clickEvent) {
    let playerSelectionRaw = clickEvent.target.className.toUpperCase();
    let playerSelection = Choices.get(playerSelectionRaw);
    let results = getRoundResult(playerSelection);
    totalGames += 1;
    switch(results) {
        case TIE:
            ties += 1;
            break;
        case WIN:
            wins += 1;
            break;
        case LOSS:
            losses += 1;
            break;
        default:
            console.error("ERROR: Results were outside of scope of win, loss, or tie.")
    }

    if(wins >= 5) scores.innerHTML = "You WIN!!!";
    else if(losses >= 5) scores.innerHTML = 'You lose'
    else scores.innerHTML = getScoreString();
}




 

choiceButtons.forEach(button => button.addEventListener('click', e => game(e)));

