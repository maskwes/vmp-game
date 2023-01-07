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
      collisionGroup: ex.CollisionGroupManager.groupByName('player'),
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
        console.log((this.player.pos.x - this.pos.x) * 0.01);
        this.pos.x += (((this.player.pos.x - this.pos.x) * 0.01) % 1) + 2;
      }
      if (this.player.pos.y != this.pos.y) {
        this.pos.y += (((this.player.pos.y - this.pos.y) * 0.01) % 1) + 2;
      }
    }, 50);
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
