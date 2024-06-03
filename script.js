const chessboard = document.getElementById("chessboard");

const pieces = {
    "R": "rook",
    "N": "knight",
    "B": "bishop",
    "Q": "queen",
    "K": "king",
    "P": "pawn"
};

const initialPosition = [
    "rnbqkbnr",
    "pppppppp",
    "        ",
    "        ",
    "        ",
    "        ",
    "PPPPPPPP",
    "RNBQKBNR"
];

function createBoard() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const cell = document.createElement("div");
            cell.className = "cell " + ((i + j) % 2 === 0 ? "white" : "black");
            
            const pieceCode = initialPosition[i][j];
            if (pieceCode !== " ") {
                const piece = document.createElement("div");
                piece.className = "piece";
                piece.style.backgroundImage = `url('pieces/${pieces[pieceCode]}.png')`;
                cell.appendChild(piece);
            }
            
            chessboard.appendChild(cell);
        }
    }
}

createBoard();
