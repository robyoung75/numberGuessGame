

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below: generates a random number 0 - 9
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
  
}

//console.log(generateTarget());
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    const humanDifference = Math.abs(secretTarget - humanGuess);
    const computerDifference = Math.abs(secretTarget - computerGuess);
  return humanDifference <= computerGuess;
  
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
}
