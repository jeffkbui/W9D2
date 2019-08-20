const Asteroid = require("./asteroid.js");
const MovingObject = require("./moving_object.js");


function Game () {

  this.DIM_X = 800; 
  this.DIM_Y = 800; 
  this.NUM_ASTEROIDS = 20; 
  this.asteroids = [];

  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(this.addAsteroids() );
  }
}


Game.prototype.addAsteroids = function() {
  return new Asteroid( 
    { pos : [Math.random() * 800, Math.random() * 800], game: this }
  );
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, 800, 800);
  this.asteroids.forEach(function (el) {
    el.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach ( function(el) {
    el.move();
  });
};

Game.prototype.wrap = function(pos) {
  
  let newPos = pos;
  
  if (pos[0] < 1) newPos = [799, 800 - pos[1]];
  if (pos[0] > 799) newPos = [1, 800 - pos[1]];
  if (pos[1] < 1) newPos = [800 - pos[0], 799];
  if (pos[1] > 799) newPos = [800 - pos[0], 1];
  return newPos;
};

module.exports = Game;