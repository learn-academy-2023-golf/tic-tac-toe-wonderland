import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(0);
  const [winner, setWinner] = useState();
  
  const winConditions = () => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i = 0; i < win.length; i++){
      let line = win[i]
      if(squares[line[0]] === "❌" && squares[line[1]] === "❌" && squares[line[2]] === "❌") {
        setTimeout(() => {
          alert("Player 1 wins!")
        }, 1);
      } else if(squares[line[0]] === "⭕️" && squares[line[1]] === "⭕️" && squares[line[2]] === "⭕️"){
        setTimeout(() => {
          alert("Player 2 wins!")
        }, 1);
      }
    }

  }
  const mark = (index) => {
    if (player === 0 && squares[index] === null) {
      let updatedGrid = [...squares];
      updatedGrid[index] = "❌";
      setSquares(updatedGrid);
      setPlayer(1);
    } else if (player === 1 && squares[index] === null) {
      let updatedGrid = [...squares];
      updatedGrid[index] = "⭕️";
      setSquares(updatedGrid);
      setPlayer(0);
    }
    winConditions();
  };


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="grid">
        {squares.map((value, index) => {
          return <Square value={value} key={index} index={index} mark={mark}/>;
        })}
      </div>
    </>
  );
};

export default App;


// 0 | 1 | 2
// 3 | 4 | 5
// 6 | 7 | 8

// [0, 1, 2], [3, 4, 5], [6, 7, 8]
// [0, 3, 6], [1, 4, 7], [2, 5, 8]
// [0, 4, 8], [2, 4, 6]

// check if the squares array matches any win combinations
// squares[0] === "❌" && squares[1] === "❌" && squares[2] === "❌"
// use a loop to check the squares[] against the winConditions[]