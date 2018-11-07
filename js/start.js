window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        startGame();

      };

    var game = new Game("canvas", 1);
    function startGame(){
        game.init();
        var song = new MySound("sounds/music.mp3");
        song.play();
    };
  };