import * as ex from 'excalibur';
import {Player} from '../player/player';
import {LevelsResources} from '../resources/levels';
import {TiledObjectGroup} from '@excaliburjs/plugin-tiled';
import {spawnEnemy} from '../enemy/enemy';
import {Enemies} from '../resources/enemies';
import {HealthBar} from '../player/health-bar';
import router from '../../router';

export class DeadSwamp extends ex.Scene {
  private player: ex.Actor;

  constructor() {
    super();
  }

  onInitialize(_engine: ex.Engine) {
    LevelsResources?.deadSwamp.addTiledMapToScene(_engine.currentScene);
    this.player = new Player(
      LevelsResources?.deadSwamp.ex.camera.x,
      LevelsResources?.deadSwamp.ex.camera.y,
      1
    );
    _engine.currentScene.camera.strategy.lockToActor(this.player);
    _engine.add(this.player);
    const healthBar = new HealthBar();
    _engine.add(healthBar);
    this.spawn(_engine);
  }

  onPreUpdate(_engine: ex.Engine, _delta: number) {}

  spawn(_engine: ex.Engine) {
    spawnEnemy(
      Enemies.flyEye,
      1,
      this.player.pos.x,
      this.player.pos.x,
      this.player,
      _engine
    );
  }
}
