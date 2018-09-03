const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === 'bomb'){
    return userInput;
  }
  else{
    console.log("Please choose a valid option");
  }
};

const getComputerChoice = () => {
  let compNum = Math.floor(Math.random() * 3);
  switch (compNum) {
    case 0 :
      return 'rock';
      break;
    case 1 :
      return 'paper';
      break;
    case 2 :
      return 'scissors';
      break;
  }
  
}

const determineWinner = (userChoice , computerChoice) => {
  if (userChoice === computerChoice){
    return `You both chose ${userChoice}. The game is a tie`;
  }
  if (userChoice === 'bomb'){
    return 'You win. Everything exploded';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return `The computer chose ${computerChoice}. You lose`;
    }
    else {
      return `The computer chose ${computerChoice}. You win!`;
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return `The computer chose ${computerChoice}. You lose`;
    }
    else {
      return `The computer chose ${computerChoice}. You win!`;
    }
  }
  
  if (userChoice === 'scissors'){
    if (computerChoice === 'paper'){
      return `The computer chose ${computerChoice}. You lose`;
    }
    else {
      return `The computer chose ${computerChoice}. You win!`;
    }
  }
  
  
}

function playGame(){
  let userChoice = getUserChoice('bomb');
  console.log("userChoice: ", userChoice);
  let computerChoice = getComputerChoice();
  console.log("computerChoice: ", computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
