// Accepts props from "Board" parent component
// {value} is a prop passed down from "Board"
// {onSquareClick} is a function passed down from the parent component "Board"

export default function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>{value}</ button>
      );
}