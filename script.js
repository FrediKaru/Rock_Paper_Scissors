let items = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let item = items[Math.floor(Math.random()* items.length)];
    return item;
}

/* function getComputerChoice
returns random item from a "items" list either 
‘Rock’, ‘Paper’ or ‘Scissors’. 
*/

function playRound (playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return("Noone wins, play again!")

    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerCount = playerCount + 1;
        return("You win! Rock beats scissors");
        
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerCount = playerCount+1;
        return("You win! Paper beats rock");

    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerCount = playerCount+1;
        return("You win! Paper beats rock");

    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        computerCount = computerCount+1;
        return("You Lose! Rock beats Scissors");

    } else if (computerSelection == "paper" && playerSelection == "rock") {
        computerCount = computerCount+1;
        return("You Lose! Paper beats rock");

    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        computerCount = computerCount+1;
        return("You Lose! Scissors beats paper");

    } else {
        return("Play again!")
     }
}

/* Function compares opponents players choice with computer choice and declares winner */

function game() {
    for (let round = 0; round < 5; round++){
        playRound (prompt("Rock-paper-scissors!", ""),getComputerChoice())
        console.log("player score is " + playerCount + " and computer score is " + computerCount);
    }

    if (playerCount > computerCount) {
        return("Player wins with a score of "+playerCount)
    } else if (playerCount < computerCount) {
        return("Computer wins with a score of "+computerCount)
    } else {
        return("Noone wins scores are "+ playerCount + " and " +computerCount)
    }
}

let playerCount = 0;
let computerCount = 0;

let playerSelection = "rock";

console.log(game());