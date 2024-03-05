function GameboardTitle(props) {
  return (
    <h1 className="gameboard__title">
      Current player:
      <span
        className={
          "gameboard__current-move_" + props.currentPlayer.toLowerCase()
        }
      >
        {' '+props.currentPlayer}
      </span>
    </h1>
  );
}
export default GameboardTitle;
