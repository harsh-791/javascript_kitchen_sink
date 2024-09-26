var Queen = function(config) {
    this.type = 'queen';
    Piece.call(this, config); // Call the parent constructor
};

// Inherit from Piece
Queen.prototype = Object.create(Piece.prototype);
Queen.prototype.constructor = Queen;

// Define the queen's move logic
Queen.prototype.moveTo = function(targetPosition) {
    const currentCol = this.position[0];
    const currentRow = parseInt(this.position[1], 10);
    const targetCol = targetPosition.col;
    const targetRow = parseInt(targetPosition.row, 10);

    const colDiff = Math.abs(currentCol.charCodeAt(0) - targetCol.charCodeAt(0));
    const rowDiff = Math.abs(currentRow - targetRow);

    // The queen can move in straight lines (row, column, or diagonal)
    if (colDiff === rowDiff || currentCol === targetCol || currentRow === targetRow) {
        // Check for valid move (implement collision detection or other rules here)
        const targetPiece = this.board.getPieceAt(targetPosition);
        if (targetPiece) {
            if (targetPiece.color !== this.color) {
                // If target piece is of opposite color, capture it
                this.kill(targetPiece);
                console.log(`Captured ${targetPiece.type} at ${targetPosition.col}${targetPosition.row}`);
            } else {
                console.warn("Invalid move! You can't capture your own piece.");
                return false;
            }
        }
        // Move the queen to the new position
        this.position = targetPosition.col + targetPosition.row;
        this.render();
        this.board.switchPlayer();
    } else {
        console.warn("Invalid move for a queen!");
    }
};
