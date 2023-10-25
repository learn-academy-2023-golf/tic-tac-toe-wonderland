import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
   
   const [squares, setSquares] = useState(Array(9).fill(null))
  
   const mark = (index) => {
    let updatedGrid = [...squares]
    updatedGrid[index] = "❌"
    setSquares(updatedGrid)
    
   }
  return(
  
   <>
      <h1>Tic Tac Toe</h1>
      <div className='grid'>{squares.map ((value, index) => {
        return(
          <Square 
          value={value}
          key={index}
          index={index}
          mark={mark}
          />


        )
      }
   
  )
}</div>
 </>
  )
}
 
export default App