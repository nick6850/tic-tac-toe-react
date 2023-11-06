import { useEffect, useState } from "react";
import Square from "./Square";
import patterns from "./patterns";

function Board() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [playerValue, setPlayerValue] = useState("X");

  useEffect(() => {
    patterns.forEach((pattern) => {
      if (
        board[pattern[0]] &&
        board[pattern[1]] &&
        board[pattern[2]] &&
        board[pattern[0]] == board[pattern[1]] &&
        board[pattern[1]] == board[pattern[2]] &&
        board[pattern[0]] == board[pattern[2]]
      ) {
        alert(`${board[pattern[0]]} won!`);
        setBoard(["", "", "", "", "", "", "", "", ""]);
      }
    });

    if (board.filter((square) => square === "").length === 0) {
      alert(`That's a tie!`);
      setBoard(["", "", "", "", "", "", "", "", ""]);
    }
  }, [board]);

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
