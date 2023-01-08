import * as ex from 'excalibur';
import {EnemyConfig} from './enemyInterfaces';
import {game} from '../index';

export class Enemy extends ex.Actor {
  public enemyConfig: EnemyConfig;
  private player: ex.Actor;

  constructor(
    x: number,
    y: number,
    enemyConfig: EnemyConfig,
    player: ex.Actor
  ) {
    super({
      x: x,
      y: y,
      collisionType: ex.CollisionType.Active,
      collisionGroup: ex.CollisionGroupManager.groupByName('enemy'),
      collider: ex.Shape.Box(32, 50, ex.Vector.Half, ex.vec(0, 3)),
    });
    this.player = player;
    this.enemyConfig = enemyConfig;
  }

  onInitialize(_engine: ex.Engine) {
    const leftMove = ex.Animation.fromSpriteSheet(
      this.enemyConfig.sprite,
      this.enemyConfig.animation.move.frameIndices,
      this.enemyConfig.animation.move.timing
    );
    this.graphics.add('move', leftMove);
    this.graphics.use('move');
    setInterval(() => {
      if (this.player.pos.x != this.pos.x) {
        this.pos.x += this.getSpeed(this.player.pos.x - this.pos.x);
      }
      if (this.player.pos.y != this.pos.y) {
        this.pos.y += this.getSpeed(this.player.pos.y - this.pos.y);
      }
    }, 50);
  }

  getSpeed(differencePosition: number) {
    return differencePosition < 0 ? -2 : 2;
  }
}

export function spawnEnemy(
  enemyConfig: EnemyConfig,
  count: number,
  x: number,
  y: number,
  player: ex.Actor
) {
  const r = 800;
  const asd = r / count;
  for (let i = 0; i < count; i++) {
    game.add(
      new Enemy(
        r * Math.cos(asd * i) + x,
        r * Math.sin(asd * i) + y,
        enemyConfig,
        player
      )
    );
  }
}
