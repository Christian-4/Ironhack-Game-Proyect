function Game(canvas) {
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    this.reset();
};

Game.prototype.init = function () {
    this.intervalId = setInterval(function () {
        this.draw();
        this.move();
    }.bind(this), 1000 / this.fps);
};

Game.prototype.reset = function () {
    this.background = new Background(this);
    this.npc = new Player(this, 100, 150, );
    this.player = new Player(this, 100, 500, );
}

Game.prototype.draw = function () {
    this.background.draw();
    this.player.draw();
    this.npc.draw();
};

Game.prototype.move = function () {
    this.player.move();
    this.npc.movenpc();
};