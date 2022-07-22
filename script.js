
let items = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let item = items[Math.floor(Math.random()* items.length)];
    return item;
}

/* function getComputerChoice
returns random item from a "items" list either 
‘Rock’, ‘Paper’ or ‘Scissors’. 
*/