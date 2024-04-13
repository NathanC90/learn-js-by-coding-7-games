const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const result = document.getElementById("result");

const buttonEl = document.querySelectorAll("button");

let userChoice;
let computerChoice;

buttonEl.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerText = userChoice;
    generateComputerChoice();
}))

function generateComputerChoice(){
    let randomNumber = Math.floor( Math.random() * 3 ) + 1;
    
    switch(randomNumber){
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }
    computerChoiceDisplay.innerText = computerChoice;
}