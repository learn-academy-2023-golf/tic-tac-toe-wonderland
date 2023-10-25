import React, { useState } from "react";
import Square from "./components/Square";
import handleRestart from "./components/HandleRestart";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(0);
  const [player1Wins, setPlayer1Wins] = useState(false);
  const [player2Wins, setPlayer2Wins] = useState(false);
  const [noOneWins, setnoOneWins] = useState(false);
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
          setPlayer1Wins(true)
        }, 1);
      } else if(squares[line[0]] === "⭕️" && squares[line[1]] === "⭕️" && squares[line[2]] === "⭕️"){
        setTimeout(() => {
          setPlayer2Wins(true)
        }, 1);
      } else if(squares[null] ===  -1)
      {setnoOneWins(true)
    }
    }

  }
  const mark = (index) => {
    if (player1Wins || player2Wins || noOneWins)
    return
    let updatedGrid = [...squares]
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

        {player1Wins && ( <div className="player1">
          Player 1 wins!
          </div>
        )
        }

        {player2Wins && ( <div className="player2">
          Player 2 wins!
          </div>
        )
        }

        {noOneWins && ( <div className="noOne">
          You both lose!
          </div>
        )
        }

      </div>
      <ResetButton handleRestart={handleRestart} />
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