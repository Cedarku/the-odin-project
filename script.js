let playerScore = 0;
let computerScore = 0;

const btnRock = document.querySelector(".btnRock");
btnRock.addEventListener("click", () => playGame("Rock"));

const btnPaper = document.querySelector(".btnPaper");
btnPaper.addEventListener("click", () => playGame("Paper"));

const btnScissors = document.querySelector(".btnScissors");
btnScissors.addEventListener("click", () => playGame("Scissors"));

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    console.log("Computer: " + computerChoice);
    console.log("You: " + playerChoice);
    const roundResult = playRound(playerChoice, computerChoice);
    incrementScore(roundResult);
    console.log(roundResult);
    console.log("You: " + playerScore + " Computer: " + computerScore);
    updateDisplay(playerChoice, computerChoice, roundResult, playerScore, computerScore)
}

function playRound(playerChoice, computerChoice) {
    if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) { return "You win!"; }
    else if (
        (playerChoice === "Rock" && computerChoice === "Rock") ||
        (playerChoice === "Paper" && computerChoice === "Paper") ||
        (playerChoice === "Scissors" && computerChoice === "Scissors")
      ) { return "It's a draw!"; }
    else { return "You lose!"; }
    }

function incrementScore(roundResult) {
    const winMessage = "You win!";
    const loseMessage = "You lose!";
    if (roundResult === winMessage) {
        playerScore += 1;
    } else if (roundResult === loseMessage) {
        computerScore += 1;
    }
}

function updateDisplay(playerChoice, computerChoice, roundResult, playerScore, computerScore) {
    const playerChoiceCell = document.querySelector("#playerChoice");
    const computerChoiceCell = document.querySelector("#computerChoice");
    const roundResultCell = document.querySelector("#roundResult");
    const playerScoreCell = document.querySelector("#playerScore");
    const computerScoreCell = document.querySelector("#computerScore");

    playerChoiceCell.textContent = playerChoice;
    computerChoiceCell.textContent = computerChoice;
    roundResultCell.textContent = roundResult;
    playerScoreCell.textContent = playerScore;
    computerScoreCell.textContent = computerScore;
}





/*


    for (let round = 0; round < 5; round++) {
        const computerChoice = getComputerChoice();
        const playerChoice = getplayerChoice();
        console.log(computerChoice);
        console.log(playerChoice);

        playRound(playerChoice, computerChoice)

        const roundResult = playRound(playerChoice, computerChoice);
        incrementScore(roundResult);
        console.log(roundResult);
        console.log("You: " + playerScore + " Computer: " + computerScore);
    } 
}

function finalScore(playerScore, computerScore) {
    const finalMessage = "Final result: ";
    if (playerScore > computerScore) {
        return finalMessage + "Congratulations, you win!";
    } else if (playerScore < computerScore) {
        return finalMessage + "You lose.";
    } else {
        return finalMessage + "It's a draw.";
    }
}
    
playGame();
console.log(finalScore());
*/



