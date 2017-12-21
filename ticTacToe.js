//Input - Board condition;
//Output- winner, player next turn, would you like to play again?
//Create Board-
// Create 8 win conditions
//let board = [[null, null, null],[null, null, null], [null, null, null]];

// BOARD CHECH CODE BELOW
let cellSelect = document.querySelector('.TicTacToeBoard');

function checkRow(board, row) {
  let rowResponse = board[row][0];
  for(var i = 0; i < 3; i++) {
    if(board[row][i] !== rowResponse || board[row][i] === null) {
      return false;
    }
  }
  return true;
}

function checkCol(board, col) {
  let colResponse = board[0][col];
  for(var i = 0; i < 3; i++) {
    if(board[i][col] !== colResponse || board[i][col] === null){
      return false;
    }
  }
  console.log(board);
  return true;
}

function checkNegDiag(board) {
  let diagResponse = board[0][0];
  for(var i = 0; i < 3; i++) {
  if(board[i][i] !== diagResponse || board[i][i] === null){
    return false;
  }
  }

  return true;
}

function checkPosDiag(board) {
  // for(var i = 0; i < 3; i++) {
  //   for(var j = 2; j >= 0; j--) {
  let diagResponse = board[0][2];
  if (board[1][1] !== diagResponse || board[1][1] === null){
    return false
  }else if (board[2][0] !== diagResponse || board[1][1] === null) {
    return false
  } else {

  return true;
  }
};
// Player Select and Message Functions
var board = [[null, null, null],[null, null, null],[null, null, null]];

let currentPlayer = firstUp(0,1);
function firstUp(min,max) {
  let players = [ 0, 1]
  var min = Math.ceil(min);
  var max = Math.floor(max);
  var plyrIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  let player = players[plyrIndex]
  return player
}

  console.log(currentPlayer)

function updateMessage(){
  let messagePlayer = document.querySelector(".message")
  if(currentPlayer === 0) {
    messagePlayer.innerHTML=  "The Rebels goes first!!"

  } else {
    messagePlayer.innerHTML=  "The Imperials goes first!!"
  }
  // let messagePlayer = document.querySelector(".message")
  // messagePlayer.innerHTML= player + " go first!!"

};



function updateDateBoard(row, col) {
  board[row][col] = currentPlayer
}

function cellOpen(row, col) {
  if(board[row][col] === null) {
    return true;
  } else {
    return false;
  }
}

function setupEvents() {
  updateMessage()

  cellSelect.addEventListener('mouseover', function(event) {
    let row = parseInt(event.target.classList[0][3])
    let col = parseInt(event.target.classList[0][7])

    if(cellOpen(row, col)) {
      if (currentPlayer === 0) {
        event.target.style.backgroundImage = "url('rebel.jpeg')"
      } else {
        event.target.style.backgroundImage = "url('Empire.jpg')"
      }
    }
  });
  //Mouseout EL
  cellSelect.addEventListener('mouseout', function(event) {
    let row = parseInt(event.target.classList[0][3])
    let col = parseInt(event.target.classList[0][7])

    if(cellOpen(row, col)) {
      event.target.style.backgroundImage = "none"
    }
  });
  // PLAYER TURN
  cellSelect.addEventListener('click', function(event) {
      let row = parseInt(event.target.classList[0][3])
      let col = parseInt(event.target.classList[0][7])

      console.log("Click Listener");


      if(cellOpen(row, col)) {
        updateDateBoard(row,col)
        if (currentPlayer === 0) {
         event.target.style.backgroundImage = "url('rebel.jpeg')"
         currentPlayer = 1
        } else {
          event.target.style.backgroundImage = "url('Empire.jpg')"
          currentPlayer = 0
        }
      }
    })

};

setupEvents()
