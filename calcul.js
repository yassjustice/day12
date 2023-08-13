console.log("hi");
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "Scissors"
  ) {
    return userInput;
  } else {
    console.log("Error");
  }
};
let userwants = prompt("Chose (Rock/Paper/Scissors");
console.log("Computer choice: "+ getUserChoice(userwants));
function getComputerChoice() {
  let compchoice = Math.floor(Math.random() * 3);
  let compChoiceStr;
  if (compchoice == 0) {
    compChoiceStr = "rock";
  } else if (compchoice == 1) {
    compChoiceStr = "paper";
  } else if (compchoice == 2) {
    compChoiceStr = "scissors";
  }
  return compChoiceStr;
}
console.log("Computer choice: "+ getComputerChoice());
function determineWinner(userChoice, compChoiceStr) {
  let game;
  if (userChoice == compChoiceStr) {
    game = "TIE";
  } else if (userChoice == "rock" && compChoiceStr == "scissors") {
    game = "user won";
  } else if (userChoice == "rock" && compChoiceStr == "paper") {
    game = "computer won";
  } else if (userChoice == "scissors" && compChoiceStr == "paper") {
    game = "user won";
  } else if (userChoice == "scissors" && compChoiceStr == "rock") {
    game = "computer won";
  } else if (userChoice == "paper" && compChoiceStr == "scissors") {
    game = "computer won";
  } else if (userChoice == "paper" && compChoiceStr == "rock") {
    game = "user won";
  }
  return game;
}

console.log(determineWinner(getUserChoice("paper"), getComputerChoice()));
