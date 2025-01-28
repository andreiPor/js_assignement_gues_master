// Function to generate a random number between 1 and 100
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1; // Generates a number from 1 to 100
}

// Function to get the player's guess and validate it
function getPlayerGuess() {
  let guess = parseInt(prompt("Guess a number between 1 and 100:")); // Prompt the player for input
  // Loop until a valid number is entered (between 1 and 100)
  while (isNaN(guess) || guess < 1 || guess > 100) {
    guess = parseInt(prompt("Please enter a valid number between 1 and 100:"));
  }
  return guess;
}

// Function to check if the player's guess is too low, too high, or correct
function checkGuess(playerGuess, randomNumber) {
  if (playerGuess < randomNumber) {
    return "Too low! Try again."; // The guess is too low
  } else if (playerGuess > randomNumber) {
    return "Too high! Try again."; // The guess is too high
  } else {
    return "Correct! 🏆 You've guessed the number!"; // The guess is correct
  }
}

// Main game function to control the game flow
function game() {
  // Display welcome message with alert before starting the game
  alert(
    "Welcome to GuessMaster!  😎 You are about to start the game. You will be asked to guess a number between 1 and 100. 🤔"
  );
  alert(
    "Here is the rule 📜 \n  You have 10 attempts to guess the right number"
  );
  alert(
    "Oh 😮 , I almost forgot you will get bonus points 🤩 if you manage to guess the number with fewer attempts."
  );
  alert(
    "Oh 😮 , I almost forgot I will be subtracting 10 points per attempts. Good luck! Mwahahaha 😈! "
  );

  let playAgain = true; // Variable to control the game loop
  let randomNumber = generateRandomNumber(); // Generate the random number to be guessed
  let attempts = 0; // Initialize attempt counter
  let maxAttempts = 10; // Set maximum attempts to 10
  let playerGuess; // Variable to store the player's guess
  let score = 100; // Initialize score, starting at 100

  console.log(`Your starting score : ${score} `);

  // Loop for up to 10 attempts
  while (playAgain) {
    playerGuess = getPlayerGuess(); // Get the player's guess
    let result = checkGuess(playerGuess, randomNumber); // Check if the guess is correct
    console.log(result); // Display the result of the guess
    attempts++; // Increase the attempt counter

    // Decrease score as attempts increase
    score -= 10;

    // If the guess is correct, end the game
    if (result === "Correct! 🏆 You've guessed the number!") {
      console.log(`You won in ${attempts} attempts!`);
      console.log(`Your score: ${score}`);
      // Adding bonus points based on the number of attempts
      if (attempts <= 5) {
        console.log(
          "Great job! You guessed in 5 attempts or less! Bonus points ⭐ of 5 awarded!"
        );
        score += 5; // Bonus points for guessing in 5 attempts or less
      } else if (attempts <= 10) {
        console.log(
          "Good job! You guessed in 10 attempts or less! Bonus points ⭐ of 3 awarded!"
        );
        score += 3; // Bonus points for guessing in 10 attempts or less
      } else {
        console.log(
          "You guessed in more than 10 attempts. Bonus points ⭐ of 1 awarded."
        );
        score += 1; // Small bonus if more than 10 attempts
      }

      console.log(`Your final score: ${score}`);
      playAgain = confirm("Do you want to play again? (ok(yes) / cancle(no))");
      attempts = 0; // Reset the attempts counter
      score = 100; // Reset the score
    } else if (attempts > maxAttempts) {
      // If the player used all attempts and didn't guess correctly
      console.log(`You lost 😔! The correct number was: ${randomNumber}`);
      console.log(`Your final score: ${score}`);
      playAgain = confirm("Do you want to play again? (ok(yes) / cancle(no))");
      attempts = 0; // Reset the attempts counter
      score = 100; // Reset the score
    }
  }
}

// Start the game
game();
console.log(`Thank you for playing 😀, Hope you had a lot of fun 🎉`);
console.log(`See you soon 👋`);
