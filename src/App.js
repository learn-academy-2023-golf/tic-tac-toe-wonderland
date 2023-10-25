import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(0);

  const mark = (index) => {
    if (player === 0) {
      let updatedGrid = [...squares];
      updatedGrid[index] = "❌";
      setSquares(updatedGrid);
      setPlayer(1);
    } else if (player === 1) {
      let updatedGrid = [...squares];
      updatedGrid[index] = "⭕️";
      setSquares(updatedGrid);
      setPlayer(0);
    }
  };
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="grid">
        {squares.map((value, index) => {
          return <Square value={value} key={index} index={index} mark={mark} />;
        })}
      </div>
    </>
  );
};

export default App;
