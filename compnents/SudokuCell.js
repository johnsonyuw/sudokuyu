import React from 'react';

const SudokuCell = ({ value, onChange }) => {
  return (
    <input
      className="sudoku-cell"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SudokuCell;