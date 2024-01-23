// LevelButtons.js
import React from 'react';

const LevelButtons = ({ onDifficultyChange }) => {
  const handleLevelChange = (event) => {
    onDifficultyChange(event.target.value);
  };

  return (
    <div className="level-buttons">
      <select onChange={handleLevelChange} defaultValue="easy">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        <option value="very-hard">Very Hard</option>
        {/* 其他难度级别选项 */}
      </select>
    </div>
  );
};

export default LevelButtons;
