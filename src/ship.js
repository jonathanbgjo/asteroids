const MovingObject = require("./moving_object.js")
const Util = require("./util.js")


function Ship(){
    
}


// Ship.prototype = Object.create(MovingObject.prototype);
// Ship.prototype.constructor = Ship
Util.inherits(Ship, MovingObject)


module.exports = Ship;