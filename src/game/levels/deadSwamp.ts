import * as ex from 'excalibur';
import {Player} from '../player/player';
import {LevelsResources} from '../resources/levels';
import {game} from '../index';
import {TiledObjectGroup} from '@excaliburjs/plugin-tiled';
import {spawnEnemy} from '../enemy/enemy';
import {Enemies} from '../resources/enemies';

export class DeadSwamp extends ex.Scene {
  private player: ex.Actor;

  constructor() {
    super();
  }

  onInitialize(_engine: ex.Engine) {
    LevelsResources?.deadSwamp.addTiledMapToScene(game.currentScene);
    this.player = new Player(
      LevelsResources?.deadSwamp.ex.camera.x,
      LevelsResources?.deadSwamp.ex.camera.y,
      1
    );
    game.currentScene.camera.strategy.lockToActor(this.player);
    _engine.add(this.player);
    this.spawn();
    console.log(-1 + 2);
  }

  spawn() {
    setInterval(() => {
      spawnEnemy(
        Enemies.flyEye,
        1,
        this.player.pos.x,
        this.player.pos.x,
        this.player
      );
    }, 15000);

    /*setTimeout(() => {
                              spawnEnemy(
                                Enemies.flyEye,
                                20,
                                this.player.pos.x,
                                this.player.pos.x,
                                this.player
                              );
                              this.spawn();
                            }, 5000);*/
  }
}
