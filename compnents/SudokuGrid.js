import React, { useState } from 'react';
import SudokuCell from './SudokuCell';


const SudokuGrid = () => {
  const [grid, setGrid] = useState(Array(9).fill(Array(9).fill(null))); // 9x9 grid initialized with null

  const handleCellChange = (value, row, col) => {
    // Logic to update the grid state when a cell's value changes
  };

  const solveSudoku = () => {
    // Logic to solve the Sudoku puzzle
    console.log("solveSudoku");
  };

  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => (
            <SudokuCell key={colIndex} value={cell} onChange={(value) => handleCellChange(value, rowIndex, colIndex)} />
          ))}
        </div>
      ))}
    </div>
  );
};

export { SudokuGrid };


