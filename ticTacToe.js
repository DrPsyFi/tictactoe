//////// Global Scope Variables ///////////
let cellSelect = document.querySelector('.TicTacToeBoard');
board = [[null, null, null],[null, null, null],[null, null, null]];



////////////// BOARD WIN CODES BELOW //////////////

function checkRow(board, row) {
  let rowResponse = board[row][0];
  for(var i = 0; i < 3; i++) {
    if(board[row][i] !== rowResponse || board[row][i] === null) {
      console.log("checkRow")
      return false;
    }
  }
  return true;
}

/////////////////Horizontal Win Calulator////////////

function checkCol(board, col) {
  let colResponse = board[0][col];
  for(var i = 0; i < 3; i++) {
    if(board[i][col] !== colResponse || board[i][col] === null){
      console.log("checkCol")
      return false;
    }
  }
  return true;
}

/////////////// Negitive Diagonal Calculator //////////

function checkNegDiag(board) {
  let diagResponse = board[0][0];
  for(var i = 0; i < 3; i++) {
    if(board[i][i] !== diagResponse || board[i][i] === null){
      console.log("checkNegDiag")
      return false;
    }
  }
  return true;
}

///////////////////// Positive Win Calculator ///////
function checkPosDiag(board) {
  let diagResponse = board[0][2];
  if (board[1][1] !== diagResponse || board[1][1] === null){
    console.log("checkPosDiag")
    return false
  }else if (board[2][0] !== diagResponse || board[1][1] === null) {
    return false
  }
  return true;
  }

//////////////////////////////////////////////////////// ///////////

/////// Function that calls to check if there is a winner //////////

function checkForWin(board, row, col ) {
  console.log("start Win Check")
////////////////// Row Check /////////////////////////
  if(checkRow(board, 0)) {
    return true
  }
  else if(checkRow(board, 1)) {
    return true
  }
  else if(checkRow(board, 2)) {
    return true
  }
///////////////////Col Check/////////////////////////
  else if(checkCol(board, 0)) {
    return true
  }
  else if(checkCol(board, 1)) {
    return true
  }
  else if(checkCol(board, 2)) {
    return true
  }
////////////////// Neg Check //////////////////////////
  else if(checkNegDiag(board)) {
    return true
  }
/////////////////// Pos Check //////////////////////////////
  else if(checkPosDiag(board)) {
    return true;
  }
  else {
    return false
  }

  console.log("End Win Check")

};
///////////////////////////////////////////////////////////


////////////// Selection of Player One //////////////////

let currentPlayer = firstUp(0,1);
function firstUp(min,max) {
  let players = [ 0, 1]
  var min = Math.ceil(min);
  var max = Math.floor(max);
  var plyrIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  let player = players[plyrIndex]
  return player
}

////////////////////////////////////////////////////////

/////////////////  Board Message Update    ////////////

function updateMessage(message){
  let messagePlayer = document.querySelector(".message")
  if(currentPlayer === 0) {
    messagePlayer.innerHTML=  "The Rebels " + message

  } else {
    messagePlayer.innerHTML=  "The Imperials " + message
  }
};
/////////////////////////////////////////////////////////////

///////////////// Board Update //////////////////////

function updateBoard(row, col) {
  board[row][col] = currentPlayer
  console.log(board);
}
///////////////////////////////////////////////////////

////////// Cell Open Check /////////////////////////////

function cellOpen(row, col) {
  if(board[row][col] === null) {
    return true;
  } else {
    return false;
  }
}
//////////////////////////////////////////////////////////

////////////// Boad Setup Events /////////////////////////

function setupEvents() {
  updateMessage("goes first!!!")

///////////////// Mouseover Event //////////////////////////////

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
///////////////////////////////////////////////////////////

///////////////////// Mouseout Event //////////////////////

  cellSelect.addEventListener('mouseout', function(event) {
    let row = parseInt(event.target.classList[0][3])
    let col = parseInt(event.target.classList[0][7])

    if(cellOpen(row, col)) {
      event.target.style.backgroundImage = "none"
    }
  });
///////////////////////////////////////////////////////////

//////////////////// Mouseclick Event ////////////////////
  cellSelect.addEventListener('click', function(event) {
      let row = parseInt(event.target.classList[0][3])
      let col = parseInt(event.target.classList[0][7])

      console.log("Click Listener");

      if(cellOpen(row, col)) {
        updateBoard(row,col)
        if (checkForWin(board)) {
          return updateMessage("win the Battle!")
        }

        if (currentPlayer === 0) {
         event.target.style.backgroundImage = "url('rebel.jpeg')"
         currentPlayer = 1
        } else {
          event.target.style.backgroundImage = "url('Empire.jpg')"
          currentPlayer = 0
        }
        updateMessage("are next!!!")
      }
    })


};
////////////////////////////////////////////////////////////////
setupEvents()
