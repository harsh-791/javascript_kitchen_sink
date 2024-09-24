var Pawn = function(config){
    this.type = 'pawn';
    this.constructor(config);
};



Pawn.prototype = new Piece({});
Pawn.prototype.moveTo = function(targetPosition){
    console.log(this);
    console.log(targetPosition);
    const color = this.color;
    const direction = color === 'white'? 1  : -1;
    
    this.position = targetPosition.col + targetPosition.row; 
    this.render();
}