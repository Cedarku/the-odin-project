let playerScore = 0;
let computerScore = 0;

const btnRock = document.querySelector(".btnRock");
btnRock.addEventListener("click", () => playGame("Rock"));
const btnPaper = document.querySelector(".btnPaper");
btnPaper.addEventListener("click", () => playGame("Paper"));
const btnScissors = document.querySelector(".btnScissors");
btnScissors.addEventListener("click", () => playGame("Scissors"));

const finalScoreTable = document.querySelector(".finalScoreTable");
finalScoreTable.style.display = "none";
const btnReplay = document.querySelector(".btnReplay");
btnReplay.style.display = "none";
btnReplay.addEventListener("click", () => { location.reload() });

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
    updateDisplay(playerChoice, computerChoice, roundResult, playerScore, computerScore);
    finalScore(playerScore, computerScore)
}

function playRound(playerChoice, computerChoice) {
    if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) { return "You win this round!"; }
    else if (
        (playerChoice === "Rock" && computerChoice === "Rock") ||
        (playerChoice === "Paper" && computerChoice === "Paper") ||
        (playerChoice === "Scissors" && computerChoice === "Scissors")
      ) { return "It's a draw!"; }
    else { return "You lose this round!"; }
    }

function incrementScore(roundResult) {
    const roundWinMessage = "You win this round!";
    const roundLoseMessage = "You lose this round!";
    if (roundResult === roundWinMessage) {
        playerScore += 1;
    } else if (roundResult === roundLoseMessage) {
        computerScore += 1;
    }
}

function updateDisplay(playerChoice, computerChoice, roundResult, playerScore, computerScore) {
        const playerChoiceCell = document.getElementById("playerChoice");
        const computerChoiceCell = document.getElementById("computerChoice");
        const roundResultCell = document.getElementById("roundResult");
        const playerScoreCell = document.getElementById("playerScore");
        const computerScoreCell = document.getElementById("computerScore");

        playerChoiceCell.textContent = playerChoice;
        computerChoiceCell.textContent = computerChoice;
        roundResultCell.textContent = roundResult;
        playerScoreCell.textContent = playerScore;
        computerScoreCell.textContent = computerScore;
}

function finalScore(playerScore, computerScore) {
    if (playerScore === 5) {
        const finalMessage = document.getElementById("finalMessage");
        finalMessage.textContent = "You win!";
    } else if (computerScore === 5) {
        const finalMessage = document.getElementById("finalMessage");
        finalMessage.textContent = "You lose!";
    } else {
        return;
    }

    const tableDisplay = document.getElementById("display");
    tableDisplay.style.display = "none";
    const choiceMenu = document.querySelector(".choiceMenu");
    choiceMenu.style.display = "none";
    const finalPlayerScore = document.getElementById("finalPlayerScore");
    const finalComputerScore = document.getElementById("finalComputerScore");
    finalPlayerScore.textContent = playerScore;
    finalComputerScore.textContent = computerScore;
    finalScoreTable.style.display = "";
    btnReplay.style.display = "";
}