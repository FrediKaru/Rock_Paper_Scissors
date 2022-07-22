let items = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let item = items[Math.floor(Math.random()* items.length)];
    return item;
}

/* function getComputerChoice
returns random item from a "items" list either 
‘Rock’, ‘Paper’ or ‘Scissors’. 
*/

function gameRound (playerSelection,computerSelection) {
    if (playerSelection === computerSelection){
        return("Noone wins, play again!")

    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return("You win! Rock beats scissors");
        
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return("You win! Paper beats rock");

    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return("You win! Paper beats rock");

    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        return("You Lose! Rock beats Scissors");

    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return("You Lose! Paper beats rock");

    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return("You Lose! Scissors beats paper");
    }
     else {
        return("Play again!")
     }
}

/* Function compares opponents players choice with computer choice and declares winner */