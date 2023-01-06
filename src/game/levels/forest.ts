import * as ex from 'excalibur';
import {Player} from '../player/player';

export class Forest extends ex.Scene {
  constructor() {
    super();
  }

  onInitialize(_engine: ex.Engine) {
    super.onInitialize(_engine);
    const actor = new Player(_engine.halfDrawWidth - 200, 300 - 30, 1);
    _engine.add(actor);
  }
}
