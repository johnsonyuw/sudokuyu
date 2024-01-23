// IndexPage.js
import React, { useState } from 'react';
import { Flex } from "@chakra-ui/react";
import SudokuGrid from './../compnents/SudokuGrid'; // 注意路径是否正确
import LevelButtons from './../compnents/LevelButtons'; // 注意路径是否正确
import SolveButton from './../compnents/SolveButton'; // 注意路径是否正确
import generate from './../lib/sudoku'; // 注意路径是否正确
import supabase from './../lib/supabase'; // 注意路径是否正确

import './../styles/Sudoku.css'; // 确保CSS文件路径正确

const IndexPage = () => {
  const [sudokuBoard, setSudokuBoard] = useState(Array(9).fill(Array(9).fill('')));
  const [difficulty, setDifficulty] = useState("easy");

  const startNewGame = () => {
    // 使用generate函数生成数独游戏
    const newBoard = generate(difficulty);
    // 转换字符串为二维数组的逻辑需要实现
    setSudokuBoard(/* 转换后的二维数组 */);
  };

  const handleLevelChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
  };

  // Refresh按钮的事件处理函数
  const handleRefresh = () => {
    setSudokuBoard(Array(9).fill(Array(9).fill('')));
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh">
      <div className="sudoku-app">
        <h1>Sudoku</h1>
        <LevelButtons onDifficultyChange={handleLevelChange} />
        <button className="refresh-button button" onClick={handleRefresh}>Refresh</button>
        <SudokuGrid sudokuBoard={sudokuBoard} />
        <div className="bottom-buttons">
          <button className="button" onClick={startNewGame}>New Game</button>
          <SolveButton className="solve-button button" />
          {/* Show Candidates按钮逻辑还需要实现 */}
        </div>
      </div>
    </Flex>
  );
};

export default IndexPage;
