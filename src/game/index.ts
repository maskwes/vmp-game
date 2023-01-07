import * as ex from 'excalibur';
import {Loader} from './resources';
import {DeadSwamp} from './levels/deadSwamp';

let game: any;
const level = new DeadSwamp();

function startGame() {
  game = new ex.Engine({
    backgroundColor: ex.Color.fromHex('#5fcde4'),
    canvasElementId: 'game',
    fixedUpdateFps: 60,
    antialiasing: false,
    displayMode: ex.DisplayMode.FitScreenAndFill,
  });
  game.add('level', level);
  game.goToScene('level');
  game.start(Loader).then(() => {});
}

export {game, startGame};
