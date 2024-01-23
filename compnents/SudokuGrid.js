// SudokuGrid.js
import React, { useState, useEffect } from 'react';
import SudokuCell from './SudokuCell'; // 确保路径是否正确

const SudokuGrid = ({ sudokuBoard }) => {
  const [grid, setGrid] = useState(sudokuBoard);

  useEffect(() => {
    setGrid(sudokuBoard);
  }, [sudokuBoard]);

  const handleCellChange = (value, row, col) => {
    // 更新格子的值
  };

  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => (
            <SudokuCell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onChange={(value) => handleCellChange(value, rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuGrid;
