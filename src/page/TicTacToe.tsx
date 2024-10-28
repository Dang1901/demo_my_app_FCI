import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'


  const Square = ({value, onSquareClick}) => {
        return (
            <Button
            variant='outlined'
            onClick={onSquareClick} 
            className='square'
            sx={{
                width: 80,
                height: 80,
                fontSize: '2rem',
                fontWeight: 'boid',
                minWidth: 0
            }}
            >
                {value}
            </Button>
        )
    }

    const calculateWinner= (squares) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

const TicTacToe = () => {
    const [counter, setCouter] = useState(0)
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const handleClick = (i) => {
        if(squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquare = squares.slice()
        if(xIsNext) {
            nextSquare[i] = "X"
        } else {
            nextSquare[i] = "O"
        }
        setSquares(nextSquare)
        setXIsNext(!xIsNext)
    }

    const counterClick = () => {
        setCouter(counter + 1)
    }

  return (
    <>
        <h1>{counter}</h1>
        <Button onClick={counterClick}>submit</Button>

    <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
        {/* <Grid container spacing={1} justifyContent="center">
      {[0, 1, 2].map(row => (
        <Grid item xs={12} key={row} container spacing={1} justifyContent="center">
          {[0, 1, 2].map(col => (
            <Grid item key={col}>
              <Square value={squares[1]}/>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid> */}
    </>
    )
}


export default TicTacToe