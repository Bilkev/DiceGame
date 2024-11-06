// // Step 1: Generate random numbers for both players (1 to 6)
// let randomNumber1 = Math.floor(Math.random() * 6) + 1;
// let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// // Step 2: Create file paths for both random dice images
// let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
// let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

// // Step 3: Select the <img> elements for Player 1 and Player 2
// let image1 = document.querySelector(".img1");  // Left image for Player 1
// let image2 = document.querySelector(".img2");  // Right image for Player 2

// // Step 4: Set the src attribute of both <img> elements using dot notation  
// image1.src = randomDiceImage1;
// image2.src = randomDiceImage2;

// // Determine the winner and update the <h1> text
// let header = document.querySelector("h1"); // Selects the <h1> element

// if (randomNumber1 > randomNumber2) {
//   header.textContent = "🚩 You Win!";
// } else if (randomNumber2 > randomNumber1) {
//   header.textContent = "Computer Wins! 🚩";
// } else {
//   header.textContent = "It's a Draw!";
// }

// Function to roll the dice and update the images and winner
function rollDice() {
    // Generate random numbers for both players
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
    // Set image sources for both players
    let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
    let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
  
    // Select the <img> elements and set their src attributes
    document.querySelector(".img1").src = randomDiceImage1;
    document.querySelector(".img2").src = randomDiceImage2;
  
    // Determine the winner and update the <h1> text
    let header = document.querySelector("h1"); // Selects the <h1> element
    if (randomNumber1 > randomNumber2) {
      header.textContent = "🚩 You Win!";
    } else if (randomNumber2 > randomNumber1) {
      header.textContent = "Computer Wins! 🚩";
    } else {
      header.textContent = "It's a Draw!";
    }
  }
  
  // Add event listener to the button to trigger the rollDice function on click
  document.querySelector(".btn").addEventListener("click", rollDice);
  
