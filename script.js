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

function playGame() {
    function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "rock"){
            switch(computerChoice){
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
        } else if (humanChoice === "paper"){
            switch(computerChoice){
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
            switch(computerChoice){
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

    let computerScore = 0;
    let humanScore = 0;

    for(let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        playRound(computerSelection, humanSelection);

        console.log(
            `Player: ${humanScore}\n` +
            `Computer: ${computerScore}`
        );
    }

    if (humanScore > computerScore) {
        console.log(`You win! The score is ${humanScore}-${computerScore}.`);
    } else if (humanScore < computerScore) {
        console.log(`You lose! The score is ${computerScore}-${humanScore}.`);
    } else {
        console.log(`Draw! The score is ${computerScore}-${humanScore}.`);
    }
}

playGame();
