//Game Values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

//Ui elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;
//Play again event listener
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//Listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);
  //Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  //Check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    //Worng number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //Game over
      gameOver(
        false,
        `GAME OVER, you lost. The correct number was ${winningNum}`
      );
    } else {
      //Game continues - answer wrong
      guessInput.style.borderColor = "red";
      //Tell user is the wrong number
      setMessage(`${guess} is nor correct, ${guessesLeft} guesses left`, "red");
      //Clear input
      guessInput.value = "";
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  //Disable input
  guessInput.disabled = true;
  //Change border
  guessInput.style.borderColor = color;
  //Set text color
  message.style.color = color;
  //Set message
  setMessage(msg);

  //Play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max10 - min1 + 1) + min1);
}

//Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
