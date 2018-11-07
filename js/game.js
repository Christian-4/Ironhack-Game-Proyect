function Game(canvas, level) {
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    this.level = level;
    this.reset();
};

Game.prototype.init = function () {
    this.intervalId = setInterval(function () {
        this.winOrLose();
        this.deleteObstacles();
        this.framesCounter++;
        this.draw();
        this.move();
        if (this.framesCounter % 100 === 0 && this.player.x <= (this.canvas.width / 1.5)) {
            this.generateObstacles();
        }
        this.ia();
        if (this.collision()) {
            this.gameOver();
        }
    }.bind(this), 1000 / this.fps);
};

Game.prototype.reset = function () {
    this.levels();
    this.player = new Player(this, 100, 500, "images/sprite.png");
    this.obstacles = [];
    this.framesCounter = 0;
};

Game.prototype.stop = function () {
    clearInterval(this.intervalId);
}

Game.prototype.gameOver = function () {
    this.stop();
    if (confirm("GAME OVER. Play again?")) {
        this.reset();
        this.init();
    }
};

Game.prototype.generateObstacles = function () {
    var arrayObstacles = ["images/obstacle01.png", "images/obstacle02.png", "images/obstacle03.png", "images/obstacle04.png"];
    this.obstacles.push(new Obstacle(this,
        45,
        45,
        this.player.y0 + this.player.h - 45,
        arrayObstacles[Math.floor(Math.random() * (arrayObstacles.length))]));

    this.obstacles.push(new Obstacle(this,
        45,
        45,
        this.npc.y0 + this.npc.h - 45,
        arrayObstacles[Math.floor(Math.random() * (arrayObstacles.length))]));
};

Game.prototype.deleteObstacles = function () {
    this.obstacles = this.obstacles.filter(function (obstacle) {
        return obstacle.x >= 100;
    });
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

Game.prototype.winOrLose = function () {
    if (this.player.x >= this.canvas.width) {
        if (this.level == 1) {
            this.player.x = 100;
            this.levelUp();
        };
        if (this.level == 2) {
            this.player.x = 100;
            this.levelUp();
        };
        if (this.level == 3) {
            this.player.x = 100;
            this.levelUp();
        };
        if (this.level == 4) {
            this.player.x = 100;
            this.levelUp();
        };
        if (this.level == 5) {
            this.player.x = 100;
            this.levelUp();
        };
        if (this.level == 6) {
            this.stop();
            alert("U won the HACKSHOW! ⛏⛏⛏⛏");
        };
    };
    if (this.npc.x >= this.canvas.width) {
        this.gameOver();
    };
};

Game.prototype.levels = function () {
    switch (this.level) {
        case 1:
            this.npc = new Player(this, 100, 150, "images/sprite.png", 0.5);
            this.background = new Background(this, "images/background.jpg");
            break;
        case 2:
            this.npc = new Player(this, 100, 150, "images/sprite.png", 0.6);
            this.background = new Background(this, "images/background.jpg");
            break;
        case 3:
            this.npc = new Player(this, 100, 150, "images/sprite.png", 0.7);
            this.background = new Background(this, "images/background.jpg");
            break;
        case 4:
            this.npc = new Player(this, 100, 150, "images/sprite.png", 0.8);
            this.background = new Background(this, "images/background.jpg");
            break;
        case 5:
            this.npc = new Player(this, 100, 150, "images/sprite.png", 0.9);
            this.background = new Background(this, "images/background.jpg");
            break;
        case 6:
            this.npc = new Player(this, 100, 150, "images/sprite.png", 1.1);
            this.background = new Background(this, "images/backgroundfinal.jpg");
            break;
    };
};

Game.prototype.levelUp = function () {
    setTimeout(
        function () {
            this.level++;
            this.reset();
        }.bind(this),
        50
    );
};

Game.prototype.collision = function () {
    return this.obstacles.some(function (obstacle) {
        return (
            ((this.player.x + this.player.w) >= obstacle.x &&
                (obstacle.x + obstacle.w) >= this.player.x &&
                (this.player.y + this.player.h) > obstacle.y &&
                (obstacle.y + obstacle.h) > this.player.y)
        );
    }.bind(this));
};

Game.prototype.ia = function () {
    this.obstacles.forEach(function (obstacle) {
        if ((this.npc.x + this.npc.w) >= (obstacle.x - obstacle.w)) {
            this.npc.y -= 2.25;
            if ((this.npc.x + this.npc.w) > (obstacle.x + obstacle.w)) {
                this.npc.y += 3;
                if (this.npc.y > this.npc.y0) {
                    this.npc.y = this.npc.y0;
                }
            }
        }
    }.bind(this));
}