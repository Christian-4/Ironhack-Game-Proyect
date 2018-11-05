function Game(canvas) {
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    this.reset();
};

Game.prototype.init = function () {
    this.intervalId = setInterval(function () {
        this.framesCounter++;
        this.draw();
        this.move();
        if (this.framesCounter % 50 === 0) {
            this.generateObstacles();
        }
    }.bind(this), 1000 / this.fps);
};

Game.prototype.reset = function () {
    this.background = new Background(this);
    this.npc = new Player(this, 100, 150, "images/sprite.png");
    this.player = new Player(this, 100, 500, "images/sprite.png");
    this.obstacles = [];
    this.framesCounter = 0;
}

Game.prototype.generateObstacles = function () {
    var arrayObstacles = ["images/obstacle01.png", "images/obstacle02.png", "images/obstacle03.png"];
    this.obstacles.push(new Obstacle(this,
        40,
        40,
        this.player.y0 + this.player.h - 40 - 5,
        arrayObstacles[Math.floor(Math.random() * (arrayObstacles.length))]));
};

Game.prototype.draw = function () {
    this.background.draw();
    this.player.draw();
    this.npc.draw();
    this.npc.animateImg(6);
    this.obstacles.forEach(function (obstacle) {
        obstacle.draw();
    });
};

Game.prototype.move = function () {
    this.player.move();
    this.npc.movenpc();
    this.obstacles.forEach(function (obstacle) {
        obstacle.move();
    });
};