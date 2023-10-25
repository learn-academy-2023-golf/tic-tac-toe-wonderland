import React, { useState, useEffect } from "react";
import Square from "./components/Square";
import HandleRestart from "./components/HandleRestart";
import "./App.css";
import ChooseMarker1 from "./components/ChooseMarker1";
import ChooseMarker2 from "./components/ChooseMarker2";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(1);
  const [player1Wins, setPlayer1Wins] = useState(false);
  const [player2Wins, setPlayer2Wins] = useState(false);
  const [noOneWins, setnoOneWins] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("")

  const options1 = [
  {
    label: "❌",
    value: "❌",
  },
  {
    label: "🚫",
    value: "🚫",
  },
];

const options2 = [
  {
    label: "⭕️",
    value: "⭕️",
  },
  {
    label: "✅",
    value: "✅",
  },
];

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
    for (let i = 0; i < win.length; i++) {
      let line = win[i];
      if (
        squares[line[0]] === selectedOption1 &&
        squares[line[1]] === selectedOption1 &&
        squares[line[2]] === selectedOption1
      ) {
        setTimeout(() => {
          setPlayer1Wins(true);
        }, 1);
      } else if (
        squares[line[0]] === selectedOption2 &&
        squares[line[1]] === selectedOption2 &&
        squares[line[2]] === selectedOption2
      ) {
        setTimeout(() => {
          setPlayer2Wins(true);
        }, 1);
      } else if (squares.indexOf(null) === -1) {
        setnoOneWins(true);
      }
    }
  };
  const mark = (index) => {
    if (player1Wins || player2Wins || noOneWins) return;
    let updatedGrid = [...squares];
    if (player === 1 && squares[index] === null) {
      let updatedGrid = [...squares];
      updatedGrid[index] = selectedOption1;
      setSquares(updatedGrid);
      setPlayer(2);
    } else if (player === 2 && squares[index] === null) {
      let updatedGrid = [...squares];
      updatedGrid[index] = selectedOption2;
      setSquares(updatedGrid);
      setPlayer(1);
    }
  };

  const restartGame = () => {
    setPlayer(1);
    setPlayer1Wins(false);
    setPlayer2Wins(false);
    setSquares(Array(9).fill(null));
    setnoOneWins(false);
  };

  useEffect(() => {
    winConditions();
  }, [squares]);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="menus"> <h4> Choose your marker: </h4> <ChooseMarker1 selectedOption1={selectedOption1} setSelectedOption1={setSelectedOption1} options1={options1} />
       <h4> Choose your marker: </h4> <ChooseMarker2 selectedOption2={selectedOption2} setSelectedOption2={setSelectedOption2} options2={options2} />
      </div>
      <p>Current Turn - Player {player}</p>
      <div className="grid">
        {squares.map((value, index) => {
          return <Square value={value} key={index} index={index} mark={mark} />;
        })}

        {player1Wins && <div className="player1">Player 1 wins!</div>}

        {player2Wins && <div className="player2">Player 2 wins!</div>}

        {noOneWins && <div className="noOne">You both lose!</div>}
      </div>
      <h5>
      <HandleRestart restartGame={restartGame} />
      </h5>
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
