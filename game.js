// Retrieving the playarea div element
let playarea = document.getElementById("playarea");

// Retrieving all grid positions as seperate variables to attach event listeners to

let pos1_1 = document.getElementById("pos1-1");
let pos2_1 = document.getElementById("pos2-1");
let pos3_1 = document.getElementById("pos3-1");
let pos1_2 = document.getElementById("pos1-2");
let pos2_2 = document.getElementById("pos2-2");
let pos3_2 = document.getElementById("pos3-2");
let pos1_3 = document.getElementById("pos1-3");
let pos2_3 = document.getElementById("pos2-3");
let pos3_3 = document.getElementById("pos3-3");

// And putting them all in an array for maintainability
let positions = [
  pos1_1,
  pos1_2,
  pos1_3,
  pos2_1,
  pos2_2,
  pos2_3,
  pos3_1,
  pos3_2,
  pos3_3,
];
// Retrieving the player id

let playertext = document.getElementById("player");

// Setting a variable to set either player 1 or player 2's turn
let player = 1;

// Adding event listeners to every gridposition variable

pos1_1.addEventListener("click", oneOne);
pos2_1.addEventListener("click", twoOne);
pos3_1.addEventListener("click", threeOne);
pos1_2.addEventListener("click", oneTwo);
pos2_2.addEventListener("click", twoTwo);
pos3_2.addEventListener("click", threeTwo);
pos1_3.addEventListener("click", oneThree);
pos2_3.addEventListener("click", twoThree);
pos3_3.addEventListener("click", threeThree);

// Functions referenced by the event listener above

function oneOne() {
  // Checks if it's player one's turn, and if the position the player clicked on has not already been clicked
  if (
    player === 1 &&
    !pos1_1.classList.contains("x") &&
    !pos1_1.classList.contains("y")
  ) {
    // If the statement for player 1 is true it adds the x class and switches the player to player 2
    pos1_1.classList.add("x");
    player = 2;
  }
  //   Checks if the player is player 2, and if the position has already been clicked
  else if (
    player === 2 &&
    !pos1_1.classList.contains("x") &&
    !pos1_1.classList.contains("y")
  ) {
    // If the statement is true, adds the y class and switches the player 2 one
    pos1_1.classList.add("y");
    player = 1;
  }
  //   Fallback else statement for if neither is true to alert the players the other player already has clicked the square
  else {
    alert("POSITION ALREADY IN USE!");
  }
  //   Triggers the checkIfEnd() function, see line 246 for said functiom
  checkIfEnd();
}

// Every function under this until like 246/the checkIfEnd() function is the same as the function above but for every square
// that the player can press

function twoOne() {
  if (
    player === 1 &&
    !pos2_1.classList.contains("x") &&
    !pos2_1.classList.contains("y")
  ) {
    pos2_1.classList.add("x");
    player = 2;
  } else if (
    player === 2 &&
    !pos2_1.classList.contains("x") &&
    !pos2_1.classList.contains("y")
  ) {
    pos2_1.classList.add("y");
    player = 1;
  } else {
    alert("POSITION ALREADY IN USE!");
  }
  checkIfEnd();
}

function threeOne() {
  if (
    player === 1 &&
    !pos3_1.classList.contains("x") &&
    !pos3_1.classList.contains("y")
  ) {
    pos3_1.classList.add("x");
    player = 2;
  } else if (
    player === 2 &&
    !pos3_1.classList.contains("x") &&
    !pos3_1.classList.contains("y")
  ) {
    pos3_1.classList.add("y");
    player = 1;
  } else {
    alert("POSITION ALREADY IN USE!");
  }
  checkIfEnd();
}

function oneTwo() {
  if (
    player === 1 &&
    !pos1_2.classList.contains("x") &&
    !pos1_2.classList.contains("y")
  ) {
    pos1_2.classList.add("x");
    player = 2;
  } else if (
    player === 2 &&
    !pos1_2.classList.contains("x") &&
    !pos1_2.classList.contains("y")
  ) {
    pos1_2.classList.add("y");
    player = 1;
  } else {
    alert("POSITION ALREADY IN USE!");
  }
  checkIfEnd();
}

function twoTwo() {
  if (
    player === 1 &&
    !pos2_2.classList.contains("x") &&
    !pos2_2.classList.contains("y")
  ) {
    pos2_2.classList.add("x");
    player = 2;
  } else if (
    player === 2 &&
    !pos2_2.classList.contains("x") &&
    !pos2_2.classList.contains("y")
  ) {
    pos2_2.classList.add("y");
    player = 1;
  } else {
    alert("POSITION ALREADY IN USE!");
  }
  checkIfEnd();
}

function threeTwo() {
  if (
    player === 1 &&
    !pos3_2.classList.contains("x") &&
    !pos3_2.classList.contains("y")
  ) {
    pos3_2.classList.add("x");
    player = 2;
  } else if (
    player === 2 &&
    !pos3_2.classList.contains("x") &&
    !pos3_2.classList.contains("y")
  ) {
    pos3_2.classList.add("y");
    player = 1;
  } else {
    alert("POSITION ALREADY IN USE!");
  }
  checkIfEnd();
}

function oneThree() {
  if (
    player === 1 &&
    !pos1_3.classList.contains("x") &&
    !pos1_3.classList.contains("y")
  ) {
    pos1_3.classList.add("x");
    player = 2;
  } else if (
    player === 2 &&
    !pos1_3.classList.contains("x") &&
    !pos1_3.classList.contains("y")
  ) {
    pos1_3.classList.add("y");
    player = 1;
  } else {
    alert("POSITION ALREADY IN USE!");
  }
  checkIfEnd();
}

function twoThree() {
  if (
    player === 1 &&
    !pos2_3.classList.contains("x") &&
    !pos2_3.classList.contains("y")
  ) {
    pos2_3.classList.add("x");
    player = 2;
  } else if (
    player === 2 &&
    !pos2_3.classList.contains("x") &&
    !pos2_3.classList.contains("y")
  ) {
    pos2_3.classList.add("y");
    player = 1;
  } else {
    alert("POSITION ALREADY IN USE!");
  }
  checkIfEnd();
}

function threeThree() {
  if (
    player === 1 &&
    !pos3_3.classList.contains("x") &&
    !pos3_3.classList.contains("y")
  ) {
    pos3_3.classList.add("x");
    player = 2;
  } else if (
    player === 2 &&
    !pos3_3.classList.contains("x") &&
    !pos3_3.classList.contains("y")
  ) {
    pos3_3.classList.add("y");
    player = 1;
  } else {
    alert("POSITION ALREADY IN USE!");
  }
  checkIfEnd();
}

// The function to check if the game should end
function checkIfEnd() {
  // Checks if there are three positions next to each other that contain the x class
  if (
    (pos1_1.classList.contains("x") &&
      pos1_2.classList.contains("x") &&
      pos1_3.classList.contains("x")) ||
    (pos2_1.classList.contains("x") &&
      pos2_2.classList.contains("x") &&
      pos2_3.classList.contains("x")) ||
    (pos3_1.classList.contains("x") &&
      pos3_2.classList.contains("x") &&
      pos3_3.classList.contains("x")) ||
    (pos1_1.classList.contains("x") &&
      pos2_1.classList.contains("x") &&
      pos3_1.classList.contains("x")) ||
    (pos1_2.classList.contains("x") &&
      pos2_2.classList.contains("x") &&
      pos3_2.classList.contains("x")) ||
    (pos1_3.classList.contains("x") &&
      pos2_3.classList.contains("x") &&
      pos3_3.classList.contains("x")) ||
    (pos1_1.classList.contains("x") &&
      pos2_2.classList.contains("x") &&
      pos3_3.classList.contains("x")) ||
    (pos1_3.classList.contains("x") &&
      pos2_2.classList.contains("x") &&
      pos3_1.classList.contains("x"))
  ) {
    // If true alerts the players that player 1 won
    alert("PLAYER 1 (ONE/X) WINS!");
    // Then waits 5 seconds before clearing the board again
    setTimeout(() => {
      for (let i = 0; i < positions.length; i++) {
        positions[i].classList.remove("x");
        positions[i].classList.remove("y");
      }
      alert("BOARD CLEARED!");
    }, 5000);
  }
  //   If not true, checks if player 2 has 3 positions next to eachother
  else if (
    (pos1_1.classList.contains("y") &&
      pos1_2.classList.contains("y") &&
      pos1_3.classList.contains("y")) ||
    (pos2_1.classList.contains("y") &&
      pos2_2.classList.contains("y") &&
      pos2_3.classList.contains("y")) ||
    (pos3_1.classList.contains("y") &&
      pos3_2.classList.contains("y") &&
      pos3_3.classList.contains("y")) ||
    (pos1_1.classList.contains("y") &&
      pos2_1.classList.contains("y") &&
      pos3_1.classList.contains("y")) ||
    (pos1_2.classList.contains("y") &&
      pos2_2.classList.contains("y") &&
      pos3_2.classList.contains("y")) ||
    (pos1_3.classList.contains("y") &&
      pos2_3.classList.contains("y") &&
      pos3_3.classList.contains("y")) ||
    (pos1_1.classList.contains("y") &&
      pos2_2.classList.contains("y") &&
      pos3_3.classList.contains("y")) ||
    (pos1_3.classList.contains("y") &&
      pos2_2.classList.contains("y") &&
      pos3_1.classList.contains("y"))
  ) {
    // if true alerts the players player 2 won and waits 5 seconds before clearing the board
    alert("PLAYER 2 (TWO/Y) WINS!");
    setTimeout(() => {
      for (let i = 0; i < positions.length; i++) {
        positions[i].classList.remove("x");
        positions[i].classList.remove("y");
      }
      alert("BOARD CLEARED!");
    }, 5000);
  }
  //   Else calls a function called checkIfNoWin()
  else {
    checkIfNoWin();
  }
}

function checkIfNoWin() {
  // Makes 2 variables so we can count
  let xAmount = 0;
  let yAmount = 0;

  // For loop to go through all position variables
  for (let i = 0; i < positions.length; i++) {
    // If any of the positions have the x class triggers the code in the block
    if (positions[i].classList.contains("x")) {
      // Adds 1 to the xAmount counter
      xAmount++;
    }
    // Does the same but for the y class
    else if (positions[i].classList.contains("y")) {
      yAmount++;
    }
  }

  // Checks if the sum of the 2 counters is equal to or bigger than 9 to check if there are any ampty spaces
  if (xAmount + yAmount >= 9) {
    // If true alerts the players it's a stalemate
    alert("NO ONE WINS!");
    // Resets the board after 5 seconds
    setTimeout(() => {
      for (let i = 0; i < positions.length; i++) {
        positions[i].classList.remove("x");
        positions[i].classList.remove("y");
      }
      alert("BOARD CLEARED!");
    }, 5000);
  }
}

// Function to update the current player text at the top of the screen
function currentPlayer() {
  // Checks if it's player 1, if yes sets the text to player x, if not, sets the text to player y
  if (player === 1) {
    playertext.innerText = "The current player is: Player X (Player One!)";
  } else {
    playertext.innerText = "The current player is: Player Y (Player Two!)";
  }
}

// Interval to update the playerdata each fourth of a second
let playerdata = setInterval(currentPlayer, 250);
