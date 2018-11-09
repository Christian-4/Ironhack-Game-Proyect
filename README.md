# Ironhack-Game-Proyect

# Hackshow & Beers

"Hackshow & Beers" its a game created for me with canvas & javascript at Ironhack Bootcamp Web Development as proyect of first module.

The game is about a race vs differents TA'S & Teach Leader for win the axe which Ironhack gift if your proyect is the best of third module.

You can get the beers but musnt get code languages as js, node or react. Because the fridays on Ironhack at 18:00 are the Ironbeers! and is "prohibited programming".

Better get a cold beer and speak with your mates or see the proyects and.....

WAIT FOR HACKSHOW!!

## CONTROLS

Pulse repeatedly and fast the key -> for run fast.

Pulse spacebar for jump and evade code languajes.

## You can play here!

https://christian-4.github.io/Ironhack-Game-Proyect/

## Lo que mas me ha costado y mas orgulloso estoy
````
Game.prototype.ia = function () {
    var gravity = 0.4;

    if (this.npc.y >= this.npc.y0) {
        this.npc.vy = 1;
        this.npc.y = this.npc.y0;
    } else {
        this.npc.vy += gravity;
        this.npc.y += this.npc.vy;
    };
    this.obstaclesNpc.forEach(
        function (obstacle) {
            if (this.npc.x + this.npc.w >= obstacle.x - obstacle.w &&
                this.npc.x + this.npc.w <= obstacle.x + obstacle.w * 2) {
                if (obstacle.type === 0) {
                    obstacle.x = 0;
                    var ohyeah = new MySound("sounds/ohyeah.mp3");
                    ohyeah.play();
                } else {
                    this.npc.y -= 10;
                }
            }
        }.bind(this)
    );
};
````
## Futuras mejoras

Refactorizar el código, añadir personajes para el jugador, poner mas obstáculos y diferentes.

## Que cambiaría si empezara de nuevo

La forma de escribir el código, ir refactorizandolo mientras lo voy escribiendo ya que no esta refactorizado.
