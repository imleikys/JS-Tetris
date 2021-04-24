import Game from './src/game.js';
import View from './src/view.js';

const root = document.querySelector('#root');

const game = new Game();
const view = new View(root, { 
  width: 320,
  height: 640,
  rows: 20,
  columns: 10,
});

window.game = game;
window.view = view;

document.addEventListener('keydown', event => {
  switch (event.keyCode) {
    case 37: // left arrow
      game.movePieceLeft();
      view.render(game.getState());
      break;
    case 38: // up arrow
      game.rotatePiece();
      view.render(game.getState());
      break;
    case 39: // right arrow
      game.movePieceRight();
      view.render(game.getState());
      break;
    case 40: // down arrow
      game.movePieceDown();
      view.render(game.getState());
      break;
  }
});