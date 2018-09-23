var tictacArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var compSequence = [4, 0, 2, 6, 8, 1, 3, 5, 7];
var compPlaying = true;
var compMoveId = 2;
var moveIdentifiers = ["?", "X", "O"];
var movesTurn = 1;

  function onLoad() {
    ResetBoard();}

  function cellClicked(divId) {
    if (tictacArray[divId] == 0) {
      setCellToCurrentMove(divId);}
      else {alert("Please make a different selection.");}}

  function setCellToCurrentMove(cellId) {
    tictacArray[cellId] = movesTurn;
    endTurn();}

  function endTurn() {
    updatetictacDisplay();
    if (endGame() == true) {
      SetGameStatus();}
        else {movesTurn == 1 ? movesTurn = 2 : movesTurn = 1;
          if (compPlaying == true) {
            if (movesTurn == compMoveId) {
            MakeNextMove();}}}}

    function SetGameStatus() {
        if (CheckWinner() == true) {
            document.getElementById("winner").innerHTML = "That's it! Player " + movesTurn + " is the winner!";}
        else {document.getElementById("winner").innerHTML = "Cat's Game! It's a draw!";}}

  function MakeNextMove() {
    var compCanWin = false;
    var moveCanWin = false;
    for (var i = 0; i < 9; i++) {
      if (tictacArray[i] == 0) {
        tictacArray[i] = movesTurn;
        if (CheckWinner()) {
          compCanWin = true;
          break;}
          else {
          tictacArray[i] = 0;}}}
    if (compCanWin == false) {
      for (i = 0; i < 9; i++) {
        if (tictacArray[i] == 0) {
          tictacArray[i] = movesTurn == 1 ? 2 : 1;
          if (CheckWinner()) {
            moveCanWin = true;
            tictacArray[i] = movesTurn;
            break;}
            else {tictacArray[i] = 0;}}}
      if (moveCanWin == false) {
        for (i = 0; i < compSequence.length; i++) {
          if (tictacArray[compSequence[i]] == 0) {
            tictacArray[compSequence[i]] = movesTurn;
            break;}}}}
    endTurn();}

  function allCellsTaken() {
    var allCellsHaveBeenTaken = true;
    for (var i = 0; i < 9; i++) {
      if (tictacArray[i] == 0) {
        allCellsHaveBeenTaken = false;
        break;}}
    return allCellsHaveBeenTaken;}

  function endGame() {
    if (CheckWinner() == true) {
      return true; }
      else {
      if (allCellsTaken() == true) {
        return true;}
        else {
        return false;}}}

  function CheckWinner() {
    if (
      tictacArray[0] == tictacArray[1] && tictacArray[1] == tictacArray[2] && tictacArray[0] > 0 ||
      tictacArray[3] == tictacArray[4] && tictacArray[4] == tictacArray[5] && tictacArray[3] > 0 ||
      tictacArray[6] == tictacArray[7] && tictacArray[7] == tictacArray[8] && tictacArray[6] > 0 ||
      tictacArray[0] == tictacArray[3] && tictacArray[3] == tictacArray[6] && tictacArray[0] > 0 ||
      tictacArray[1] == tictacArray[4] && tictacArray[4] == tictacArray[7] && tictacArray[1] > 0 ||
      tictacArray[2] == tictacArray[5] && tictacArray[5] == tictacArray[8] && tictacArray[2] > 0 ||
      tictacArray[0] == tictacArray[4] && tictacArray[4] == tictacArray[8] && tictacArray[0] > 0 ||
      tictacArray[2] == tictacArray[4] && tictacArray[4] == tictacArray[6] && tictacArray[2] > 0
    ) {
      return true;}
    else {
      return false;}}

  function updatetictacDisplay() {
    for (var i = 0; i < 9; i++) {
      document.getElementById("" + i).innerHTML = moveIdentifiers[tictacArray[i]];}}

  function ResetBoard() {
    for (var i = 0; i < 9; i++) {
      tictacArray[i] = 0;}
    updatetictacDisplay();}

   function ResetWinner() {
    document.getElementById("winner").innerHTML=" "
    }