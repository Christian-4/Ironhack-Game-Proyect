window.onload = function () {
    document.getElementById("start-button").onclick = function () {
        displayCanvas();
        setCanvasDimensions();
        window.onresize = setCanvasDimensions;
        startGame();
    };

    function setCanvasDimensions() {
        var canvasDOMElement = document.querySelector('canvas');
        canvasDOMElement.setAttribute("height", window.innerHeight);
        canvasDOMElement.setAttribute("width", window.innerWidth);
    }

    function displayCanvas() {
        var instructionsDOMElement = document.querySelector('#instructions');
        instructionsDOMElement.style.display = "none";
        var canvasDOMElement = document.querySelector('#canvas');
        canvasDOMElement.style.display = "block";
    }

    var game = new Game("canvas", 1);
    function startGame() {
        game.init();
        var song = new MySound("sounds/music.mp3");
        song.play();
    };
};