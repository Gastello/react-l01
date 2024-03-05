import React from "react";
import GameboardButton from "./Gameboard.button";

function Gameboard(props) {
  const emptyBoard = ["", "", "", "", "", "", "", "", ""];
  const winnerChecker = (board) => {
    const winMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winMoves.length; i++) {
      if (
        board[winMoves[i][0]] == board[winMoves[i][1]] &&
        board[winMoves[i][1]] == board[winMoves[i][2]] &&
        board[winMoves[i][0]] != ""
      ) {
        alert(`Player ${board[winMoves[i][0]]} won!`);
        boardClear();
        return;
      }
    }
    if (board.indexOf("") == -1) {
      alert("Draw!");
      boardClear();
      return;
    }
  };

  const boardClear = () => {
    props.changeBoardArray(emptyBoard);
    props.changeCurrentPlayer(props.SYMBOL_X);
  };

  const changeBoard = (index, currentPlayer) => {
    props.boardArray[index] = currentPlayer;
    props.changeBoardArray(props.boardArray);
    props.changeCurrentPlayer(
      currentPlayer == props.SYMBOL_X
        ? (currentPlayer = props.SYMBOL_O)
        : (currentPlayer = props.SYMBOL_X)
    );
    winnerChecker(props.boardArray);
  };
  return (
    <div className="gameboard">
      {props.boardArray.map((x, index) => {
        return x == props.SYMBOL_X ? (
          <GameboardButton
            key={index}
            buttonClass="gameboard__symbol-x"
            buttonSymbol={props.SYMBOL_X}
            clickFunction={() => {
              console.log("cell is busy");
            }}
          />
        ) : x == props.SYMBOL_O ? (
          <GameboardButton
            key={index}
            buttonClass="gameboard__symbol-o"
            buttonSymbol={props.SYMBOL_O}
            clickFunction={() => {
              console.log("cell is busy");
            }}
          />
        ) : (
          <GameboardButton
            key={index}
            buttonClass="gameboard__symbol"
            buttonSymbol=""
            clickFunction={() => changeBoard(index, props.currentPlayer)}
          />
        );
      })}
    </div>
  );
}
export default Gameboard;
