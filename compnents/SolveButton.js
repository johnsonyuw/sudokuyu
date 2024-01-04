import React from 'react';

const SolveButton = ({ onSolve }) => {
  return (
    <button className="solve-button" onClick={onSolve}>
      Solve!
    </button>
  );
};

export default SolveButton;