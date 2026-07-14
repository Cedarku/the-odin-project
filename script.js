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

const btnRocks = document.querySelector(".btnRocks");
btnRocks.addEventListener("click", function() {
    const computerChoice = getComputerChoice();
    const playerSelection = "Rock";
    playRound(playerSelection, computerChoice)});

const btnPaper = document.querySelector(".btnPaper");
btnPaper.addEventListener("click", function() {
    const computerChoice = getComputerChoice();
    const playerSelection = "Paper";
    playRound(playerSelection, computerChoice)});

const btnScissors = document.querySelector(".btnScissors");
btnScissors.addEventListener("click", function() {
    const computerChoice = getComputerChoice();
    const playerSelection = "Scissors";
    playRound(playerSelection, computerChoice)});

function playGame () {
    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerSelection, computerChoice) {
    if (
        (playerSelection === "Rock" && computerChoice === "Scissors") ||
        (playerSelection === "Paper" && computerChoice === "Rock") ||
        (playerSelection === "Scissors" && computerChoice === "Paper")
    ) { return "You win!"; }
    else if (
        (playerSelection === "Rock" && computerChoice === "Rock") ||
        (playerSelection === "Paper" && computerChoice === "Paper") ||
        (playerSelection === "Scissors" && computerChoice === "Scissors")
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
    }}

    /*for (let round = 0; round < 5; round++) {
        const computerChoice = getComputerChoice();
        const playerSelection = getplayerSelection();
        console.log(computerChoice);
        console.log(playerSelection);

        playRound(playerSelection, computerChoice)

        const roundResult = playRound(playerSelection, computerChoice);
        incrementScore(roundResult);
        console.log(roundResult);
        console.log("You: " + playerScore + " Computer: " + computerScore);
    } */
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



