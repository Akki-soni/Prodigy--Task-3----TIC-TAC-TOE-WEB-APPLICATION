let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  const resetButton = document.getElementById("reset-button");

  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      if (gameOver) return;
      if (gameBoard[index] !== "") return;

      gameBoard[index] = currentPlayer;
      cell.innerHTML = currentPlayer;

      checkWinner();

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
  });

  resetButton.addEventListener("click", () => {
    gameOver = false;
    currentPlayer = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.innerHTML = "";
    });
  });
});

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      gameBoard[a] === gameBoard[b] &&
      gameBoard[b] === gameBoard[c] &&
      gameBoard[a] !== ""
    ) {
      gameOver = true;
      alert(`Player ${gameBoard[a]} wins!`);
      return;
    }
  }

  if (!gameBoard.includes("")) {
    gameOver = true;
    alert("It's a tie!");
  }
}
