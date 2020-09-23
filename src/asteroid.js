const MovingObject = require("./moving_object.js")
const Util = require("./util.js")

const COLOR = ['blue', 'green', 'yellow', 'purple'];
const RADIUS = 50;

function random_item(items){
    return items[Math.floor(Math.random()*items.length)];   
}




function Asteroid (param){
    MovingObject.call(this, { pos: param["pos"], vel: Util.randomVec(5), color: random_item(COLOR), radius: RADIUS, game: param["game"]});
}

// Asteroid.prototype = Object.create(MovingObject.prototype);
// Asteroid.prototype.constructor = Asteroid;

Util.inherits(Asteroid, MovingObject)

module.exports = Asteroid;


// https://open.appacademy.io/learn/swe-in-person/javascript/prototypal-inheritance