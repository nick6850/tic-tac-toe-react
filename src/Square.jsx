import React from "react";

function Square({ value, index, handleClick }) {
  return (
    <div className="square" onClick={() => handleClick(index)}>
      {value}
    </div>
  );
}

export default Square;
