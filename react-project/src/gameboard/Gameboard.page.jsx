import React, { useState } from "react";
import GameboardTitle from "./Gameboard.title";
import Gameboard from "./Gameboard";

function GameboardPage() {
  const SYMBOL_X = "X";
  const SYMBOL_O = "O";

  const [boardArray, changeBoardArray] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [currentPlayer, changeCurrentPlayer] = useState(SYMBOL_X);

  return (
    <div className="gameboard__wrapper">
      <GameboardTitle currentPlayer={currentPlayer} />
      <Gameboard
        boardArray={boardArray}
        changeBoardArray={(newBoard) => {
          changeBoardArray(newBoard);
        }}
        currentPlayer={currentPlayer}
        changeCurrentPlayer={(newCurrentPlayer) => {
          changeCurrentPlayer(newCurrentPlayer);
        }}
        SYMBOL_X={SYMBOL_X}
        SYMBOL_O={SYMBOL_O}
      />
    </div>
  );
}
export default GameboardPage;
