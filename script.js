function getComputerChoice() {
    const randomNumber = Math.floor((Math.random() * 3)) + 1;
    let choice;
    switch(randomNumber) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    return choice;
}

function getHumanChoice() {
    const choice = prompt("Choose:");
    return choice;
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

let computerScore = 0;
let humanScore = 0;

function playRound(computerSelection, humanSelection) {
    humanSelection = humanSelection.toLowerCase();

    if (humanSelection === "rock"){
        switch(computerSelection){
            case "rock":
                console.log("Draw! Both chose rock.");
                break;
            case "paper":
                console.log("You lose! Paper beats rock.");
                computerScore ++;
                break;
            case "scissors":
                console.log("You win! Rock beats scissors");
                humanScore ++;
                break;
        }
    } else if (humanSelection === "paper"){
        switch(computerSelection){
            case "rock":
                console.log("You win! Paper beats rock.");
                humanScore ++;
                break;
            case "paper":
                console.log("Draw! Both chose paper.");
                break;
            case "scissors":
                console.log("You lose! Scissors beats paper.");
                computerScore ++;
                break;
        }
    } else {
        switch(computerSelection){
            case "rock":
                console.log("You lose! Rock beats scissors.");
                computerScore ++;
                break;
            case "paper":
                console.log("You win! Scissors beats paper.");
                humanScore ++;
                break;
            case "scissors":
                console.log("Draw! Both chose scissors");
                break;
        }
    }
}
