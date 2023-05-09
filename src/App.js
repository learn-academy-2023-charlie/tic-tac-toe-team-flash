import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
// import Calculator from './components/'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)
  const [winningPlayer, setWinningPlayer] = useState(false)

  const winCombos = [[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
]

const checkWinner = (squares) => {
  for (let i=0; i<winCombos.length; i++) {
    const [a, b, c] = winCombos[i];
    if (squares[a] && squares [a] === squares[b] && squares[a] === squares[c]){
      setWinningPlayer(squares[a])
    }
  }
}
  
  const handleClick = (i) => {
    if (squares[i]) {
      return
    }

    squares[i] = isX ? 'X' : 'O'
    setSquares(squares)
    setIsX(!isX)
  }

  const winner = checkWinner(squares)
  let status

  if (winningPlayer) {
    return alert("you won!")
  } else {
    status = 'Next player: ' + (isX ? 'X' : 'O');
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