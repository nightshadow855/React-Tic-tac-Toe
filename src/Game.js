import { useState } from "react"; // importing "global" variables functionality
import calculateWinner  from "./components/CalculateWinner";
import Square from "./components/Square";

export default function Game() {
  //set the first move to be “X” by default
  const [xIsNext, setxIsNext] = useState(true);
  
  // Declaring an empty array with 9 items and filling it with "null"
  // The array will look like :
  // [null , null, null, null, null, null, null, null, null]
  
const [squares, setSquares] = useState(Array(9).fill(null));
function handleClick(i) {
  const nextSquares = squares.slice(); //creates a copy of the squares array
  
  if (squares[i] || calculateWinner(squares)) {
    return;
    
    // When you mark a square with a X or a O you are first checking to see if the square already has a X or O value. so if there is an x or o already you simply return (return early)

    // OR (||) check for a winner on every click by calling the  calculateWinner(squares) function

  }
  
  if (xIsNext) { // if xIsNext is true set the value to "X"
    nextSquares[i] = "X";
  }
  else {
    nextSquares[i] = "O"; // if xIsNext is true set the value to "O"
  }
  
  setSquares(nextSquares); //the setSquares function lets React know the state of the component has changed.This will trigger a re - render of the components that use the squares state(Board) as well as its child components(the Square components that make up the board).

  setxIsNext(!xIsNext); // Each time a player moves, xIsNext (a boolean) will be flipped to determine which player goes next and the game’s state will be saved.
}

//! display status on top of the board

const winner = calculateWinner(squares); //call the function that determines the winner and store it to a variable 
let status; // status is empty at first

if (winner) {
  status = "Winner: " + winner; // if winner == true
}

else {
  status = "Next Player: " + (xIsNext ? "X" : "O"); // if winner == false
}
function Board() {
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div><div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div><div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

  return (
    <>
    <div className="game">
      <div className="game-board">
      < Board />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
      </div>
      </>
  );
}