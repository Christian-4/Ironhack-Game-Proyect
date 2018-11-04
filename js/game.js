function Game(canvas) {
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
  };

  Game.prototype.init = function(){
      this.draw();
  }

  Game.prototype.draw = function(){
      this.background = new Background(this);
      this.background.draw();
  }