import MovingObject from './moving_object.js';
import Util from './util.js';
import Asteroid from './asteroid.js';
import Game from './game.js';
import GameView from './game_view.js';


window.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext("2d");
  // const mo = new MovingObject(
  //   { pos: [250, 250], vel: [10, 10], radius: 10, color: "#F23123" }
  // );
  // mo.draw(ctx);

  const newGame = new GameView(ctx);
  newGame.start();

  const game11 = new Game();


  const ast = new Asteroid(
    { pos: [250, 250], game: game11}
  );
  console.log(ast);
  
});



window.MovingObject = MovingObject;