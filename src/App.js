//! For the sake of simplicity all components reside in the same file


import { useState } from "react"; // importing "global" variables functionality


//! Child Component "Square"

// Accepts props from "Board" parent component
// {value} is a prop passed down from "Board"
// {onSquareClick} is a function passed down from the parent component "Board"

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>{value}</ button>
      );
}

//! Parent Component "Board"

export default function Board() {

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

  return (

    
    //! value = {squares[index]} = Assigning squares value to the contents of the array above (initially null) by using the array index  
    
    //! onSquareClick={() => handleClick(0)}  = Arrow function that calls handleClick function
    
    // Now your Board component needs to pass the "value" , "onSquareClick" props down to each of the Square components it renders

    <>
    <div className="status">{status}</div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
  </>
      
  );

}

//! Component for Declaring a winner


function calculateWinner(squares) {

// posibble outcomes for a winner inside an array

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

  //! The outer for loop iterates through each of the winning combinations in the lines array. On each iteration, it uses array destructuring to assign the three indices of the squares that make up that combination to the variables a, b, and c. Then, it checks if the value of the square at index a is truthy and if it is equal to the value of the square at indices b and c. If all of these conditions are true, it returns the value of the square at index a. This means that if the value of the square at indices a, b, and c are the same, it returns that value as the winner.

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];  // array destructing
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
