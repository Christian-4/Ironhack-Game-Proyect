function Player(game, x, y, img) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.y0 = y;
    this.vy = 2;
    this.img = new Image();
    this.img.src = img;
    this.img.frames = 8;
    this.img.frameIndex = 0;
    this.w = 75;
    this.h = 125;
};

Player.prototype.draw = function () {
    this.game.ctx.drawImage(
        this.img,
        this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
        0,
        Math.floor(this.img.width / this.img.frames),
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h);
};

Player.prototype.animateImg = function (speed) {
    if (this.game.framesCounter % speed === 0) {
        this.img.frameIndex += 1;
        if (this.img.frameIndex > 7) this.img.frameIndex = 0;
    };
};

var RIGHT = 39;
var SPACE = 32;

Player.prototype.move = function () {
    document.onkeyup = function (event) {
        event.preventDefault();
        if (event.keyCode === RIGHT) {
            this.animateImg(1);
            this.x += 10;
        };
    }.bind(this);

    document.onkeydown = function (event) {
        event.preventDefault();
        if (event.keyCode === SPACE && this.y == this.y0) {
            this.y -= 100;
        };
    }.bind(this);

    if (this.y >= this.y0) {
        this.y = this.y0;
    } else {
        this.y += this.vy;
    };
};

Player.prototype.movenpc = function () {
    this.x += 0.5;
};