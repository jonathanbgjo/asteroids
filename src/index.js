const Asteroid = require("./asteroid.js");
const MovingObject = require("./moving_object.js")
// const Bullet = require("./bullet.js")
// const Ship  = require("./ship.js")
const Game = require("./game.js")
// const Asteroid = require("./asteroid.js")
// const Util = require("./util.js")
const GameView= require("./game_view.js")



document.addEventListener("DOMContentLoaded", function(){
    console.log("Webpack is working!")
 
    const canvasElement = document.getElementById("game-canvas")
    const ctx = canvasElement.getContext("2d")


    window.MovingObject = MovingObject
    // window.Bullet = Bullet
    // window.Ship = Ship
    window.Game = Game
    window.Asteroid = Asteroid
    // window.Util = Util
    window.GameView = GameView


    gameview = new GameView(canvasElement, ctx)
    gameview.start()
    // GameView.start(canvasElement, ctx)
    // const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    // });

    // mo.draw(ctx);

    // // const asteroid1 = new Asteroid({pos:[30,30]});
    // // asteroid1.draw(ctx)
    
});





