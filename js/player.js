function Player(game, x, y){
    this.game = game;
    this.x = x;
    this.y = y;
    this.y0 = y;
    this.vy = 1;
};

Player.prototype.draw = function(){
    this.game.ctx.fillRect(this.x,this.y, 50, 100);
};

var RIGHT = 39;
var SPACE = 32;

Player.prototype.move = function(){
    document.onkeyup = function(event){
        event.preventDefault();
        if (event.keyCode === RIGHT)
        this.x += 10;
    }.bind(this);

    document.onkeydown = function(event){
        event.preventDefault();
        if (event.keyCode === SPACE && this.y == this.y0)
        this.y -= 80;
        this.vy += 1;
    }.bind(this);

    if (this.y >= this.y0){
        this.vy = 1;
        this.y = this.y0;
    } else {
        this.y += this.vy;
    }
};

Player.prototype.movenpc = function(){
    this.x += 0.5; 
}