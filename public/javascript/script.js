const socket = io();

// // Unicode characters for chess pieces
// const pieces = {
//     white: {
//       king: '♔',
//       queen: '♕',
//       rook: '♖',
//       bishop: '♗',
//       knight: '♘',
//       pawn: '♙',
//     },

//     black: {
//       king: '♚',
//       queen: '♛',
//       rook: '♜',
//       bishop: '♝',
//       knight: '♞',
//       pawn: '♟',
//     }
//   };

  
//   // Setup
//   const initialBoard = [
//     ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
//     ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
//     ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
//   ];
  
  
//   // board UI
//   function createBoard() {
//     const board = document.getElementById('chessboard');
//     board.innerHTML = '';
  
//     for (let row = 0; row < 8; row++) {
//       for (let col = 0; col < 8; col++) {

//         const square = document.createElement('div');
//         square.classList.add('square');
//         square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
        
//         square.setAttribute('data-row', row);
//         square.setAttribute('data-col', col);
        
//         square.innerHTML = initialBoard[row][col];
//         square.addEventListener('click', selectSquare);
//         board.appendChild(square);
//       }
//     }
//   }
  
//   // Highlighting square
//   let selectedSquare = null;
  
//   function selectSquare(event) {
//     const square = event.target;
  
//     if (selectedSquare) {
//       selectedSquare.classList.remove('highlight');
//     }
  
//     if (selectedSquare === square) {
//       selectedSquare = null;
//     } else {
//       selectedSquare = square;
//       selectedSquare.classList.add('highlight');
//     }
//   }
  
  
  
// createBoard();