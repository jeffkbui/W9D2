const MovingObject = require("./moving_object.js");
const Util = require("./util.js");


Util.inherits(Asteroid, MovingObject);

function Asteroid(options) {
  MovingObject.call(this, options);
  this.color = "#404040";
  this.radius = 20;
  this.vel = Util.randomVec(2);
}









module.exports = Asteroid;
