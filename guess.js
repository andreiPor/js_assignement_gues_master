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
    alert("Welcome to GuessMaster!  😎 You are about to start the game. After you close this message, you will be asked to guess a number between 1 and 100. 🤔");

    let randomNumber = generateRandomNumber(); // Generate the random number to be guessed
    let attempts = 0; // Initialize attempt counter
    let maxAttempts = 10; // Set maximum attempts to 10
    let playerGuess; // Variable to store the player's guess
    let score = 100; // Initialize score, starting at 100

    // Loop for up to 10 attempts
    while (attempts < maxAttempts) {
        playerGuess = getPlayerGuess(); // Get the player's guess
        let result = checkGuess(playerGuess, randomNumber); // Check if the guess is correct
        console.log(result); // Display the result of the guess
        attempts++; // Increase the attempt counter

        // Decrease score as attempts increase
        score -= 10;

        // If the guess is correct, end the game
        if (result === "Correct! You've guessed the number!") {
            console.log(`You won in ${attempts} attempts!`);
            console.log(`Final score: ${score}`);

            // Adding bonus points based on the number of attempts
            if (attempts <= 5) {
                console.log("Great job! You guessed in 5 attempts or less! Bonus points awarded!");
                score += 5; // Bonus points for guessing in 5 attempts or less
            } else if (attempts <= 10) {
                console.log("Good job! You guessed in 10 attempts or less! Bonus points awarded!");
                score += 3; // Bonus points for guessing in 10 attempts or less
            } else {
                console.log("You guessed in more than 10 attempts. Bonus points are minimal.");
                score += 1; // Small bonus if more than 10 attempts
            }

            console.log(`Your final score: ${score}`);
            return; // End the game when the player wins
        }
    }

    // If the player used all attempts and didn't guess correctly
    console.log(`You lost! The correct number was: ${randomNumber}`);
    console.log(`Final score: ${score}`);
}

// Start the game
game();
