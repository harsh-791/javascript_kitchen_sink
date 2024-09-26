var King = function(config){
    this.type = 'king';
    this.constructor(config);
};



King.prototype = new Piece({});

King.prototype.moveTo = function(newPosition){
    if(this.isValid(newPosition)){
        this.position = newPosition.col + newPosition.row;
        
        this.render();
        this.board.switchPlayer();
    } else {
        this.board.invalidMove();
    }
};