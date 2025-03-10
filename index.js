let humanScore = 0
let computerScore = 0
const winningScore = 5

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
        
        result = "It's a tie!"
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||    
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        
        humanScore++;
        result = "You win this round"
    } else {
        
        computerScore++;
        result = "You lose this round"
    }
        return result;
}


const btn1 = document.createElement("button");

btn1.textContent = "Rock";
btn1.addEventListener("click", function() {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(`Current Scores - You: ${humanScore}, Computer: ${computerScore}`);
    updateScoreDisplay(result,humanChoice,computerChoice);
})

const btn2 = document.createElement("button");
btn2.textContent = "Paper";
btn2.addEventListener("click", function() {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(`Current Scores - You: ${humanScore}, Computer: ${computerScore}`);
    updateScoreDisplay(result,humanChoice,computerChoice);
})

const btn3 = document.createElement("button");

btn3.textContent = "Scissors";
btn3.addEventListener("click", function() {
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(`Current Scores - You: ${humanScore}, Computer: ${computerScore}`);
    updateScoreDisplay(result,humanChoice, computerChoice);
})

document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);

const scoreText = document.createElement("p");
scoreText.textContent = "Scores - You: 0, Computer: 0";
document.body.appendChild(scoreText);

const resultText = document.createElement("p");
document.body.appendChild(resultText);

const resultDiv = document.createElement("div");
resultDiv.style.marginTop = "20px";
document.body.appendChild(resultDiv);

function updateScoreDisplay(result, humanChoice,computerChoice) {
    resultText.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${result}`;
    scoreText.textContent = `Scores - You: ${humanScore}, Computer: ${computerScore}`;
    checkWinner();
}

function checkWinner() {
    if (humanScore === winningScore) {
        resultText.textContent = "Congratulations! You won the game!";
        disableButtons();
    } else if (computerScore === winningScore) {
        resultText.textContent = "Game Over! Computer wins!";
        disableButtons();
    }
}

function disableButtons() {
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
}


// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         const humanChoice = getHumanChoice();
//          const computerChoice = getComputerChoice();
//          playRound(humanChoice,computerChoice);
//          console.log(`Current Scores - You: ${humanScore}, Computer: ${computerScore}`);
//      }
//      console.log("--- Final Results ---");
//      console.log(`Your total score: ${humanScore}`);
//      console.log(`Computer's total score: ${computerScore}`);

//      if (humanScore > computerScore) {
//          console.log("You win the game!");
//      } else if (humanScore < computerScore) {
//       console.log("You lose the game!");
//    } else {
//         console.log("The game is a tie!");
//    }
//  }

// playGame()
