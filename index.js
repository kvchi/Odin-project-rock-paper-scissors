const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');

let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a tie!";
    }
    else{
        switch(playerChoice) {
            case 'rock':
                result =(computerChoice === 'scissors') ? "You Win!" : "You Lose!";
                break;
                 case 'paper':
                result =(computerChoice === 'rock') ? "You Win!" : "You Lose!";
                break;
                 case 'scissors':
                result =(computerChoice === 'paper') ? "You Win!" : "You Lose!";
                break;

              }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("winText", "loseText", "tieText");

    switch(result){
        case 'You Win!':
            resultDisplay.classList.add("winText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case 'You Lose!':
            resultDisplay.classList.add("loseText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case 'It\'s a tie!':
            resultDisplay.classList.add("tieText");
            break;
    }

}


