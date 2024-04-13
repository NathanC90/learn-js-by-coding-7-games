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
    getResult();
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

function getResult(){
    if (userChoice === 'rock' && computerChoice === 'paper') {
        result.innerText = 'Computer wins! Paper beats rock.';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        result.innerText = 'You win! Rock beats Scissors.';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        result.innerText = 'You win! Paper beats rock.';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        result.innerText = 'Computer wins! Scissors beat paper.';
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        result.innerText = 'Computer wins! Rock beats scissors.';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        result.innerText = 'You win! Scissors beat paper.';
    } else {
        result.innerText = `It's a tie.`;
    }
}