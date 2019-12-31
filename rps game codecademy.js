function getUserChoice(userInput) {
  userInput = prompt("Play rock, paper, scissors! Type one of those three choices");
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput ==="bomb") {
    return userInput;
  } else {
    alert("Your choices are rock, paper, or scissors");
    getUserChoice();
  }
};

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if 
    (randomNumber === 1) {
      return "paper";
    } else if
    (randomNumber === 2) {
      return "scissors";
    }
};

var tieScore = 0;
var loseScore = 0;
var winScore = 0;

function determineWinner(userChoice, computerChoice) { //switch case statements for refactor
  if (userChoice === computerChoice) {
    alert("It's a tie!");
    if (tieScore <= 8) {
      tieScore ++;
      document.getElementById("tieScore").innerHTML = ("Total Ties: " + tieScore); 
      var delayInMilliseconds = 500;
      setTimeout(function() {
        playGame();
  }, delayInMilliseconds);
    } else {
      tieScore ++;
      document.getElementById("tieScore").innerHTML = ("Total Ties: " + tieScore); 
      var delayInMilliseconds = 500;
      setTimeout(function() {
        endGame();
  }, delayInMilliseconds);
    } 
    return ("It's a tie!");
  } else if (userChoice === "rock" && computerChoice === "paper") {
    alert("You lose");
    if (loseScore <= 8) {
      loseScore ++;
      document.getElementById("loseScore").innerHTML = ("Total Losses: " + loseScore); 
      var delayInMilliseconds = 500;
      setTimeout(function() {
        playGame();
  }, delayInMilliseconds);
    } else {
      loseScore ++;
      document.getElementById("loseScore").innerHTML = ("Total Losses: " + loseScore); 
      var delayInMilliseconds = 500;
      setTimeout(function() {
        endGame();
  }, delayInMilliseconds);
    }
    return ("You lose");
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    alert("You win!");
    if (winScore <= 8) {
      winScore ++;
      document.getElementById("winScore").innerHTML = ("Total Wins: " + winScore);
      var delayInMilliseconds = 500;
      setTimeout(function() {
        playGame();
  }, delayInMilliseconds);
    } else {
      winScore ++;
      document.getElementById("winScore").innerHTML = ("Total Wins: " + winScore); 
      var delayInMilliseconds = 500;
      setTimeout(function() {
        endGame();
  }, delayInMilliseconds);
    }
    return ("You win!");
  } else if (userChoice === "paper" && computerChoice === "rock") {
    alert("You win!");
    if (winScore <= 8) {
      winScore ++;
      document.getElementById("winScore").innerHTML = ("Total Wins: " + winScore); 
      var delayInMilliseconds = 500;
      setTimeout(function() {
        playGame();
  }, delayInMilliseconds);
    } else {
      winScore ++;
      document.getElementById("winScore").innerHTML = ("Total Wins: " + winScore); 
      var delayInMilliseconds = 500;
      setTimeout(function() {
        endGame();
  }, delayInMilliseconds);
    }
    return ("You win!");
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    alert("You lose");
    if (loseScore <= 8) {
      loseScore ++;
      document.getElementById("loseScore").innerHTML = ("Total Losses: " + loseScore); 
      var delayInMilliseconds = 500;
      setTimeout(function() {
        playGame();
  }, delayInMilliseconds);
    } else {
      loseScore ++;
      document.getElementById("loseScore").innerHTML = ("Total Losses: " + loseScore); 
      var delayInMilliseconds = 500;
      setTimeout(function() {
        endGame();
  }, delayInMilliseconds);
    }
    return ("You lose");
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    alert("You lose");
    if (loseScore <= 8) {
      loseScore ++;
      document.getElementById("loseScore").innerHTML = ("Total Losses: " + loseScore); 
      var delayInMilliseconds = 500;
      setTimeout(function() {
        playGame();
  }, delayInMilliseconds);
    } else {
      loseScore ++;
      document.getElementById("loseScore").innerHTML = ("Total Losses: " + loseScore); 
      var delayInMilliseconds = 500;
      setTimeout(function() {
        endGame();
  }, delayInMilliseconds);
    }
    return ("You lose");
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    alert("You win!");
    if (winScore <= 8) {
      winScore ++;
      document.getElementById("winScore").innerHTML = ("Total Wins: " + winScore); 
      var delayInMilliseconds = 500;
      setTimeout(function() {
        playGame();
  }, delayInMilliseconds);
    } else {
      winScore ++;
      document.getElementById("winScore").innerHTML = ("Total Wins: " + winScore); 
      var delayInMilliseconds = 500;
      setTimeout(function() {
        endGame();
  }, delayInMilliseconds);
    }
    return ("You win!");
  } else if (userChoice === "bomb") {
    alert("You win!");
    if (winScore <= 8) {
      winScore ++;
      document.getElementById("winScore").innerHTML = ("Total Wins: " + winScore); 
      var delayInMilliseconds = 500;
      setTimeout(function() {
        playGame();
  }, delayInMilliseconds);
    } else {
      winScore ++;
      document.getElementById("winScore").innerHTML = ("Total Wins: " + winScore); 
      var delayInMilliseconds = 500;
      setTimeout(function() {
        endGame();
  }, delayInMilliseconds);
    }
    return ("You win!");
  }
};


function playGame() {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  console.log("you: " + userChoice);
  console.log("computer: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  // var playAgain = confirm("Play again?");
  //   if (playAgain === true) {
  //     playGame();
  //   } else if (playAgain === false) {
  //     alert("Thanks for playing!");
  //   }
  
};

function endGame () {
  alert ("Game Over! Thanks for playing! Reload page to play again");
};

function hide() {
  document.getElementById("container").style.display = "none";
};