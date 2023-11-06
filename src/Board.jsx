import { useState } from "react";
import Square from "./Square";

function Board() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [playerValue, setPlayerValue] = useState("O");

  function handleClick(chosenIndex) {
    setBoard((prev) =>
      prev.map((squareValue, index) => {
        if (index === chosenIndex && squareValue === "") {
          setPlayerValue((prev) => (prev === "X" ? "O" : "X"));
          return playerValue;
        } else {
          return squareValue;
        }
      })
    );
  }

  return (
    <div className="board">
      {board.map((square, i) => (
        <Square handleClick={handleClick} key={i} value={square} index={i} />
      ))}
    </div>
  );
}

export default Board;
