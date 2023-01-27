export default function CalculateWinner(squares) {

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