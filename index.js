const rockInput = document.querySelector("#rock");
const paperInput = document.querySelector("#paper");
const scissorsInput = document.querySelector("#scissors");
const resultDiv = document.querySelector("#results");
const humanText = document.querySelector("#humanscore");
const computerText = document.querySelector("#computerscore");
const winnerHuman = document.querySelector("#winnerhuman");
const winnerComputer = document.querySelector("#winnercomputer");
const inputWon = document.querySelector("#inputwon");
const inputs = ["rock", "paper", "scissors"];

//
rockInput.addEventListener("click", function () {
  playRound(`${inputs[0]}`, getComputerChoice());
});
paperInput.addEventListener("click", function () {
  playRound(`${inputs[1]}`, getComputerChoice());
});
scissorsInput.addEventListener("click", function () {
  playRound(`${inputs[2]}`, getComputerChoice());
});

function getComputerChoice() {
  return inputs[Math.floor(Math.random() * inputs.length)];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    inputWon.innerText = "That one was a tie";
    humanScore = humanScore + 0;
    computerScore = computerScore + 0;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    inputWon.innerText = "You won that round, but will you win the war?";
    computerText.innerText++;
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    inputWon.innerText = "You won that round, but will you win the war?";
    humanText.innerText++;
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    inputWon.innerText = "You won that round, but will you win the war?";
    humanText.innerText++;
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    inputWon.innerText = "You lost that round, but will you win the war?";
    computerText.innerText++;
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    inputWon.innerText = "You lost that round, but will you win the war?";
    computerText.innerText++;
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    inputWon.innerText = "You lost that round, but will you win the war?";
    humanText.innerText++;
    humanScore++;
  } else {
    console.log("You did not enter a correct value");
  }
  if (humanScore === 5) {
    winnerHuman.innerText = "You win congrats!";
    humanScore = 0;
    computerScore = 0;
    humanText.innerText = "0";
    computerText.innerText = "0";
  } else if (computerScore === 5) {
    winnerHuman.innerText = "Computer wins";
    humanScore = 0;
    computerScore = 0;
    humanText.innerText = "0";
    computerText.innerText = "0";
  } else {
  }
}
