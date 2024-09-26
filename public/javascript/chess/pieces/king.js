var King = function(config){
    this.type = 'king';
    this.constructor(config);
};



King.prototype = new Piece({});

King.prototype.isValidMove = function(newPosition){

    let curCol  =  this.position.charAt(0);
    let curRow = this.position.charAt(1);

    let newCol = newPosition.col;
    let newRow = newPosition.row;
//  
    let colDiff = Math.abs(curCol.charCodeAt(0) - newCol.charCodeAt(0));
    let rowDiff = Math.abs(curRow - newRow);

    let targetPiece = this.board.getPiece(newPosition);

    if(colDiff <= 1 && rowDiff <= 1){
        if(targetPiece == null || targetPiece.color != this.color){
            if(targetPiece && targetPiece.color != this.color){
                
                targetPiece.kill(targetPiece);
            }

            return true;
        }
    }
//    I have  a doubt here   figure out later
    console.warn("Invalid move for King");

    return false;


}






King.prototype.moveTo = function(newPosition){

    if(this.isValidMove(newPosition)){
        this.position = newPosition.col + newPosition.row;
        // return true;

        this.render();


    }
    

    else{
        this.board.invalidMove();
    }



}