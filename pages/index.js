import React from 'react';
// import SudokuGrid from './../compnents/SudokuGrid.js';
// import LevelButtons from './../compnents/LevelButtons';
// import SolveButton from './../compnents/SolveButton';
import generateSudoku from './../lib/sudoku';

import '../styles/Sudoku.css';

const IndexPage = () => {

  const sudokuBoard = generateSudoku("medium"); // 指定难度
  console.log(sudokuBoard); // 输出生成的数独盘面

  return (
    <div className="sudoku-app">
      {/* <h1>Sudoku Demo</h1>
      <LevelButtons />
      <SudokuGrid />
      <SolveButton /> */}
    </div>
  );
};

export default IndexPage;