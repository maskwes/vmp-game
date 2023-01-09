import * as ex from 'excalibur';
import {evilWizardSpriteSheet} from '../resources/heroes';
import {debounce} from '../resources/utils';
import {Enemy} from '../enemy/enemy';
import router from '../../router';

export class Player extends ex.Actor {
  public health: number = 100;
  public ammo: number = 0;
  public speed: number = 2;
  public weapons: [any];
  public skills: [any];

  constructor(x: number, y: number, public dir: number) {
    super({
      name: 'Hero',
      pos: new ex.Vector(x, y),
      collisionGroup: ex.CollisionGroupManager.groupByName('enemy'),
      collisionType: ex.CollisionType.Active,
      collider: ex.Shape.Box(32, 50, ex.Vector.Half, ex.vec(0, -1)),
    });
  }

  onInitialize(_engine: ex.Engine) {
    const playerScale = 1;
    // Setup visuals
    const left = ex.Animation.fromSpriteSheet(
      evilWizardSpriteSheet,
      [8, 9, 10, 11, 12, 13, 14],
      100
    );
    left.flipHorizontal = true;
    left.scale = new ex.Vector(playerScale, playerScale);

    const right = ex.Animation.fromSpriteSheet(
      evilWizardSpriteSheet,
      [8, 9, 10, 11, 12, 13, 14],
      100
    );
    right.scale = new ex.Vector(playerScale, playerScale);

    const idle = ex.Animation.fromSpriteSheet(
      evilWizardSpriteSheet,
      [1, 2, 3, 4, 5, 6, 7],
      100
    );
    idle.scale = new ex.Vector(playerScale, playerScale);
    // Register animation
    this.graphics.add('left', left);
    this.graphics.add('right', right);
    this.graphics.add('idle', idle);
    this.graphics.use('idle');
    this.on('postcollision', evt => this.onPreCollision(evt));
  }

  onPreCollision(evt: any) {
    if (evt.other instanceof Enemy) {
      console.log('asdas');
      this.health -= evt.other?.damage;
    }
  }

  onPreUpdate(_engine: ex.Engine, delta: number) {
    if (this.health < 1) {
      this.kill();
    }
    // Reset x velocity
    this.vel.x = 0;
    this.vel.y = 0;
    // Player speed
    const speed = 60;

    // Player input
    if (
      _engine.input.keyboard.isHeld(ex.Input.Keys.Left) ||
      _engine.input.keyboard.isHeld(ex.Input.Keys.A)
    ) {
      this.vel.x = -speed;
    }

    if (
      _engine.input.keyboard.isHeld(ex.Input.Keys.Right) ||
      _engine.input.keyboard.isHeld(ex.Input.Keys.D)
    ) {
      this.vel.x = speed;
    }

    if (
      _engine.input.keyboard.isHeld(ex.Input.Keys.Down) ||
      _engine.input.keyboard.isHeld(ex.Input.Keys.S)
    ) {
      this.vel.y = speed;
    }

    if (
      _engine.input.keyboard.isHeld(ex.Input.Keys.Up) ||
      _engine.input.keyboard.isHeld(ex.Input.Keys.W)
    ) {
      this.vel.y = -speed;
    }

    // Change animation based on velocity
    if (this.vel.x < 0) {
      this.graphics.use('left');
    }
    if (this.vel.x > 0) {
      this.graphics.use('right');
    }
    if (this.vel.x === 0) {
      this.graphics.use('idle');
    }
  }
}
