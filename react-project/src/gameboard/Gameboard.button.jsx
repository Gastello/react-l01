function GameboardButton(props) {
  return (
    <button
      onClick={props.clickFunction}
      id={props.buttonKey}
      className={props.buttonClass}
    >
      {props.buttonSymbol}
    </button>
  );
}
export default GameboardButton;
