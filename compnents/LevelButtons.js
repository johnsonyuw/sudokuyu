import React from 'react';
import {SudokuGrid} from './SudokuGrid';


const LevelButtons = (setGrid) => {
  const handleLevelChange = (event) => {
    const level = event.target.value;
    // Logic to change the Sudoku puzzle difficulty level
    console.log("handleLevelChange:"+level);
    setGrid(SudokuGrid);
  };

  return (
    <div className="level-buttons">
      <select onChange={handleLevelChange}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="medium">Hard</option>
        <option value="medium">Very Hard</option>
        {/* Other options for different levels */}
      </select>
    </div>
  );
};

export default LevelButtons;