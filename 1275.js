// Question:

// 1275. Find Winner on a Tic Tac Toe Game
// Easy

// 120

// 46

// Add to List

// Share
// Tic - tac - toe is played by two players A and B on a 3 x 3 grid.

// Here are the rules of Tic - Tac - Toe:

// Players take turns placing characters into empty squares(" ").
// The first player A always places "X" characters, while the second player B always places "O" characters.
// "X" and "O" characters are always placed into empty squares, never on filled ones.
// The game ends when there are 3 of the same(non - empty) character filling any row, column, or diagonal.
// The game also ends if all squares are non - empty.
// No more moves can be played if the game is over.
// Given an array moves where each element is another array of size 2 corresponding
// to the row and column of the grid where they mark their respective character in the order in which A and B play.

// Return the winner of the game if it exists(A or B), in case the game ends in a
// draw return "Draw", if there are still movements to play return "Pending".

// You can assume that moves is valid(It follows the rules of Tic - Tac - Toe),
// the grid is initially empty and A will play first.



//   Example 1:

// Input: moves = [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]
// Output: "A"
// Explanation: "A" wins, he always plays first.
// "X  "    "X  "    "X  "    "X  "    "X  "
// "   " -> "   " -> " X " -> " X " -> " X "
// "   "    "O  "    "O  "    "OO "    "OOX"





// Answer:

var tictactoe = function (moves) {
  let output = '';
  const len = moves.length;

  // Check for win, draw, or pending
  if (len <= 9 || len > 4) {
    let board = [['', '', ''], ['', '', ''], ['', '', '']];
    let plays = moves;
    // Build board
    moves.forEach((turn, idx) => {
      if (idx % 2 === 0) {
        board[turn[0]][turn[1]] = 'X';
      } else {
        board[turn[0]][turn[1]] = 'O';
      }
    })
    // helper function, check for wins
    const checkWin = (player, row0, col0, row1, col1, row2, col2) => {
      if (board[row0][col0] === player && board[row1][col1] === player && board[row2][col2] === player) {
        return true;
      } else { return false; }
    };
    // Loop through Rows and Columns
    for (let i = 0; i < 3; i++) {
      // Rows
      if (checkWin('X', i, 0, i, 1, i, 2)) { output = 'A'; }
      if (checkWin('O', i, 0, i, 1, i, 2)) { output = 'B'; }
      // Columns
      if (checkWin('X', 0, i, 1, i, 2, i)) { output = 'A'; }
      if (checkWin('O', 0, i, 1, i, 2, i)) { output = 'B'; }
    }

    // Diagonal right
    if (checkWin('X', 0, 0, 1, 1, 2, 2)) { output = 'A'; }
    if (checkWin('O', 0, 0, 1, 1, 2, 2)) { output = 'B'; }
    // Diagonal left
    if (checkWin('X', 2, 0, 1, 1, 0, 2)) { output = 'A'; }
    if (checkWin('O', 2, 0, 1, 1, 0, 2)) { output = 'B'; }

  } if (len === 9 && output === '') {
    output = 'Draw';
  } else if (output === '') { output = 'Pending'; }

  return output;
};
