function Obstacle(game, w, h, y, img, type) {
    this.game = game;
    this.w = w;
    this.h = h;
    this.dx = 3;
    this.img = new Image();
    this.img.src = img;
    this.x = this.game.canvas.width;
    this.y = y;
    this.type = type;
};

Obstacle.prototype.draw = function () {
    this.game.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h);
};

Obstacle.prototype.move = function () {
    this.x -= this.dx;
};