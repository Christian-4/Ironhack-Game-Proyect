window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        startGame();
      };

    var game = new Game("canvas");
    function startGame(){
        game.init();
    };
  };