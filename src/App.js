import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(0)
  const [winner, setWinner] = useState(" ")
  const draw = (value, index) => {
    if(squares[index - 1] === null && winner === null){
      const current = player === 0 ? "X" : "O"
      squares[index - 1] = current;
      // event.target.innerText = current;
      setPlayer(player === 0 ? 1 : 0)
    }
  }
  const handleClick = (selectedIndex) => {
    const boardUpdate = [...squares]
    boardUpdate[selectedIndex] = "💎"
    setSquares(boardUpdate)
  }
  const resetGame = () => {
    setSquares(Array(9).fill(null))
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square squares={squares}
      handleClick= {handleClick}/>
      <button onClick= {resetGame} className = "button"><strong>RESET</strong></button>
    </>
  )
}

export default App