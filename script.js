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

function getHumanChoice () {
    
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) { return "You win!"; }
    else if (
        (humanChoice === "Rock" && computerChoice === "Rock") ||
        (humanChoice === "Paper" && computerChoice === "Paper") ||
        (humanChoice === "Scissors" && computerChoice === "Scissors")
      ) { return "It's a draw!"; }
    else { return "You lose!"; }
    }

    function incrementScore(roundResult) {
    const winMessage = "You win!";
    const loseMessage = "You lose!";
    
    if (roundResult === winMessage) {
        humanScore += 1;
    } else if (roundResult === loseMessage) {
        computerScore += 1;
    }}

    /*for (let round = 0; round < 5; round++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        console.log(computerChoice);
        console.log(humanChoice);

        playRound(humanChoice, computerChoice)

        const roundResult = playRound(humanChoice, computerChoice);
        incrementScore(roundResult);
        console.log(roundResult);
        console.log("You: " + humanScore + " Computer: " + computerScore);
    } */
}

function finalScore(humanScore, computerScore) {
    const finalMessage = "Final result: ";
    if (humanScore > computerScore) {
        return finalMessage + "Congratulations, you win!";
    } else if (humanScore < computerScore) {
        return finalMessage + "You lose.";
    } else {
        return finalMessage + "It's a draw.";
    }
}
    
playGame();
console.log(finalScore());



