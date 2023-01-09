import * as ex from 'excalibur';
import {Loader} from './resources';
import {DeadSwamp} from './levels/deadSwamp';

let game: any;

function startGame() {
  if (game) {
    window.location.reload();
  }
  game = new ex.Engine({
    backgroundColor: ex.Color.fromHex('#5fcde4'),
    canvasElementId: 'game',
    fixedUpdateFps: 60,
    antialiasing: false,
    displayMode: ex.DisplayMode.FitScreenAndFill,
  });

  game.add('level', new DeadSwamp());
  game.goToScene('level');
  game.start(Loader).then(() => {});
}

export {startGame};
