import * as ex from 'excalibur';
import {loader} from './resources/heroes';
import {Forest} from './levels/forest';

let game;
const level = new Forest();

export function startGame() {
  game = new ex.Engine({
    backgroundColor: ex.Color.fromHex('#5fcde4'),
    canvasElementId: 'game',
    fixedUpdateFps: 60,
    antialiasing: false,
    displayMode: ex.DisplayMode.FitScreenAndFill,
  });
  game.add('level', level);
  game.goToScene('level');
  game.start(loader).then(r => console.log('asdas'));
}
