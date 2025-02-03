let playAgain = true;  
let randomNumber = generateRandomNumber();  
let attempts = 0;  
let maxAttempts = 10;  
let playerGuess;  
let score = 100;  

const emoji10 = "\u{1F51F}";  

 
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;  
}

 
function roundEmoji(round) {
  switch (round) {
    case 0:
      return "\u0031\uFE0F\u20E3";
    case 1:
      return "\u0032\uFE0F\u20E3";
    case 2:
      return "\u0033\uFE0F\u20E3";
    case 3:
      return "\u0034\uFE0F\u20E3";
    case 4:
      return "\u0035\uFE0F\u20E3";
    case 5:
      return "\u0036\uFE0F\u20E3";
    case 6:
      return "\u0037\uFE0F\u20E3";
    case 7:
      return "\u0038\uFE0F\u20E3";
    case 8:
      return "\u0039\uFE0F\u20E3";
    case 9:
      return emoji10;
  }
}

function welcomeMessage() {
   
  alert(
    "Welcome to GuessMaster!  😎 You are about to start the game. You will be asked to guess a number between 1 and 100. 🤔"
  );
  alert(
    `Here is the rule 📜 \n  
    1. You have 10 attempts to guess the right number \n 
    2. Oh 😮 , You will get bonus points 🤩 based on how quickly you guess the correct number \n
    3. I will be subtracting 10 points per attempts. Good luck! Mwahahaha 😈!  `
  );

  alert(`You're starting score : ${score}  `);

  console.log(`Your starting score : ${score} `);
}

function goodByeMessage() {
  console.log(`Thank you for playing 😀, Hope you had a lot of fun 🎉`);
  console.log(`See you soon 👋`);
  alert(`Thank you for playing 😀, Hope you had a lot of fun 🎉`);
  alert(`See you soon 👋`);
}

 
function getPlayerGuess() {
  let guess = "";
  do {
    guess = prompt(
      `Attempt: ${roundEmoji(
        attempts
      )} / ${emoji10}  \nGuess a number between 1 and 100:`
    );

    if (guess === null) {
      return guess;
    }
    guess = parseInt(guess.trim());
  } while (isNaN(guess) || guess < 1 || guess > 100);
  return guess;
}

 
function checkGuess(playerGuess, randomNumber) {
  if (playerGuess < randomNumber) {
    return "Too low! 👇 Try again.";  
  } else if (playerGuess > randomNumber) {
    return "Too high! ☝️ Try again.";  
  } else {
    return "Correct! 🏆 You've guessed the number!";  
  }
}

function reset() {
  attempts = 0;  
  score = 100;  
  randomNumber = generateRandomNumber();  
}

 
function game() {
  welcomeMessage();
   
  while (playAgain) {
    playerGuess = getPlayerGuess();  
    if (playerGuess === null) {
      alert("Sorry 😔 , I get it if you want to stop. ");
      playAgain = false;
      break;
    }
    let result = checkGuess(playerGuess, randomNumber);  
    alert(result);
    console.log(result);  
    attempts++;  

     
    score -= 10;

     
    if (result === "Correct! 🏆 You've guessed the number!") {
      alert(`You won in ${attempts} attempts!`);
      alert(`Your score: ${score}`);

      console.log(`You won in ${attempts} attempts!`);
      console.log(`Your score: ${score}`);
       
      if (attempts <= 5) {
        alert(
          "Great job! You guessed in 5 attempts or less! Bonus points ⭐ of 5 awarded!"
        );
        console.log(
          "Great job! You guessed in 5 attempts or less! Bonus points ⭐ of 5 awarded!"
        );
        score += 5;  
      } else if (attempts < 10) {
        alert(
          "Good job! You guessed in less than 10 attempts ! Bonus points ⭐ of 3 awarded!"
        );
        console.log(
          "Good job! You guessed in less than 10 attempts ! Bonus points ⭐ of 3 awarded!"
        );
        score += 3;  
      }
      alert(`Your final score: ${score}`);
      console.log(`Your final score: ${score}`);
      playAgain = confirm(
        "Do you want to play again? (ok (yes) / cancel (no))"
      );
      reset();
    } else if (attempts >= maxAttempts) {
       
      alert(`You lost 😔! The correct number was: ${randomNumber}`);
      alert(`Your final score: ${score}`);
      console.log(`You lost 😔! The correct number was: ${randomNumber}`);
      console.log(`Your final score: ${score}`);
      playAgain = confirm("Do you want to play again? (ok(yes) / cancel (no))");
      reset();
    }
  }
}

 
game();
goodByeMessage();
