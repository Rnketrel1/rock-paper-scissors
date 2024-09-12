const inputs = ["rock", "paper", "scissors"];
function getComputerChoice() {
  return inputs[Math.floor(Math.random() * inputs.length)];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("Tie");
    humanScore = humanScore + 0;
    computerScore = computerScore + 0;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("Computer wins paper beats rock");
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win scissors beats paper");
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win rock beats scissors");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("Computer wins scissors beats paper");
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("Computer wins rock beats scissors");
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win paper beats rock");
    humanScore++;
  } else {
    console.log("You did not enter a correct value");
  }
}

function playGame(i) {
  for (let i = 0; i < 5; i++) {
    let humanSelection = prompt("Enter a value");
    const computerSelection = getComputerChoice();
    let round = playRound(humanSelection, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
  }
}
playGame();
function result() {
  if (humanScore > computerScore) {
    console.log("You win congrats!");
  } else {
    console.log("Computer wins");
  }
}
result();
