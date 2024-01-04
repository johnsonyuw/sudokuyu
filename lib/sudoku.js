// sudoku.js
const DIGITS = "123456789";
const ROWS = "ABCDEFGHI";
const COLS = DIGITS;
let SQUARES = null;
let UNITS = null;
let SQUARE_UNITS_MAP = null;
let SQUARE_PEERS_MAP = null;
const BLANK_CHAR = '.';
const BLANK_BOARD = ".".repeat(81);
const DIFFICULTY = {
    "easy": 62,
    "medium": 53,
    "hard": 44,
    "very-hard": 35,
    "insane": 26,
    "inhuman": 17,
};

function cross(A, B) {
    const crosses = [];
    for (let a of A) {
        for (let b of B) {
            crosses.push(a + b);
        }
    }
    return crosses;
}

function getAllUnits(rows, cols) {
    const units = [];
    for (let c of cols) {
        units.push(cross(rows, c));
    }
    for (let r of rows) {
        units.push(cross(r, cols));
    }
    const rowSquares = ['ABC', 'DEF', 'GHI'];
    const colSquares = ['123', '456', '789'];
    for (let rs of rowSquares) {
        for (let cs of colSquares) {
            units.push(cross(rs, cs));
        }
    }
    return units;
}

function getSquareUnitsMap(squares, units) {
    const squareUnitsMap = {};
    for (let square of squares) {
        squareUnitsMap[square] = units.filter(unit => unit.includes(square));
    }
    return squareUnitsMap;
}

function getSquarePeersMap(squares, unitsMap) {
    const squarePeersMap = {};
    for (let square of squares) {
        const units = unitsMap[square];
        const peers = new Set();
        for (let unit of units) {
            for (let sq of unit) {
                if (sq !== square) {
                    peers.add(sq);
                }
            }
        }
        squarePeersMap[square] = Array.from(peers);
    }
    return squarePeersMap;
}

function initialize() {
    SQUARES = cross(ROWS, COLS);
    UNITS = getAllUnits(ROWS, COLS);
    SQUARE_UNITS_MAP = getSquareUnitsMap(SQUARES, UNITS);
    SQUARE_PEERS_MAP = getSquarePeersMap(SQUARES, SQUARE_UNITS_MAP);
}

function randomPuzzle(difficulty) {
    // 生成具有特定“空白”数的随机数独板
    let puzzle = BLANK_BOARD.split('');
    const emptyCells = new Set(SQUARES);
    while (emptyCells.size > difficulty) {
        let randomIndex = Math.floor(Math.random() * emptyCells.size);
        let square = Array.from(emptyCells)[randomIndex];
        puzzle[square] = DIGITS[Math.floor(Math.random() * 9)];
        emptyCells.delete(square);
    }
    return puzzle.join('');
}

function generateSudoku(difficultyLevel = "easy") {
    // 根据难度生成数独
    let difficulty = DIFFICULTY[difficultyLevel] || DIFFICULTY.easy;
    console.log("difficulty:" + difficulty);
    return randomPuzzle(difficulty);
}


// 初始化
initialize();

// 导出函数
// export { generateSudoku };
export default generateSudoku;
