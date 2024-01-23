// SudokuCell.js
import React from 'react';

const SudokuCell = ({ value, onChange, isInitial }) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue === "" || /^[1-9]$/.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <input
      className="sudoku-cell"
      value={value}
      onChange={handleChange}
      maxLength="1"
      disabled={isInitial} // 初始数字不能修改
      style={{ color: isInitial ? 'black' : value.correct ? 'green' : 'red' }}
    />
  );
};

export default SudokuCell;
