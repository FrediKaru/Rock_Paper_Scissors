let items = ["rock", "paper", "scissors"];
let playerCount = 0;
let computerCount = 0;
let playerSelection = "rock";
const container = document.querySelector('#display');

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
    const scoreDisplay = document.createElement('h2')
    scoreDisplay.textContent = `Player: ${playerCount}    Computer: ${computerCount}`;
    container.appendChild(scoreDisplay);

    let round = 0

        const rock = document.querySelector("#rock")
        const paper = document.querySelector("#paper")
        const scissors = document.querySelector("#scissors")

rock.addEventListener('click', e => {
     console.log("You pressed rock")
     playRound("rock",getComputerChoice())
     round += 1;
     checkWinner()
})

paper.addEventListener('click', e => {
    console.log("You pressed paper")
    playRound("paper",getComputerChoice())
    round += 1;
    checkWinner()
    
})

scissors.addEventListener('click', e => {
    console.log("You pressed scissors")
    playRound("scissors",getComputerChoice())
    round += 1;
    checkWinner()
})   
    
function displayScore(){
    console.log("Player score is " + playerCount + " and computer score is " + computerCount);
    scoreDisplay.textContent = `Player: ${playerCount}      Computer: ${computerCount}`;
}

function resetScore() {
    playerCount = 0;
    computerCount = 0;
    round = 0;
}

function checkWinner() {
    if (playerCount == 5 || computerCount == 5) {
        displayScore()
        if (playerCount > computerCount) {
            scoreDisplay.textContent = `Player wins with a score of ${playerCount}`;
            resetScore()
            return;
        } else if (playerCount < computerCount) {
            scoreDisplay.textContent = `Computer wins with a score of ${computerCount}`;
            resetScore()
            return;
        } else {
            scoreDisplay.textContent = `Noone wins scores are ${playerCount} and ${computerCount}.`;
            resetScore()
            return;
        }
    } else {
        displayScore()
    }
}
}


console.log(game());
