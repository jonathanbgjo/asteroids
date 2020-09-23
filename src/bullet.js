const MovingObject = require("./moving_object.js")
const Util = require("./util.js")


function Bullet(){
    
}


// Bullet.prototype = Object.create(MovingObject.prototype);
// Bullet.prototype.constructor = Bullet;
Util.inherits(Bullet, MovingObject)


module.exports = Bullet;