let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex]
    console.log(computerChoice)
    return computerChoice;
}



function getHumanChoice() {
    const choice = prompt("Enter value");
    console.log(choice)
    return choice.toLowerCase()
}



function playRound(humanChoice,computerChoice) {


    if (humanChoice === computerChoice) {
        console.log("It's a tie");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||    
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("You win this round");
        humanScore++;
    } else {
        console.log("You lose this round");
        computerScore++;
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        console.log(`Current Scores - You: ${humanScore}, Computer: ${computerScore}`);
    }
    console.log("--- Final Results ---");
    console.log(`Your total score: ${humanScore}`);
    console.log(`Computer's total score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame()






