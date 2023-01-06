import * as ex from 'excalibur';
import {evilWizardSpriteSheet} from '../resources/heroes';

export class Player extends ex.Actor {
  handleKeyEvent = {};

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
    // Setup visuals
    const left = ex.Animation.fromSpriteSheet(
      evilWizardSpriteSheet,
      [8, 9, 10, 11, 12, 13, 14],
      100
    );
    left.flipHorizontal = true;

    left.scale = new ex.Vector(2, 2);
    const right = ex.Animation.fromSpriteSheet(
      evilWizardSpriteSheet,
      [8, 9, 10, 11, 12, 13, 14],
      100
    );
    right.scale = new ex.Vector(2, 2);
    const idle = ex.Animation.fromSpriteSheet(
      evilWizardSpriteSheet,
      [1, 2, 3, 4, 5, 6, 7],
      100
    );
    idle.scale = new ex.Vector(2, 2);
    // Register animation
    this.graphics.add('left', left);
    this.graphics.add('right', right);
    this.graphics.add('idle', idle);
    this.graphics.use('idle');
    _engine.input.pointers.on('move', res => this.handlePointerEvent(res));
  }

  handlePointerEvent(position: any) {
    this.vel.x = 0;
    this.vel.y = 0;
    if (this.pos.y != position.worldPos.y) {
      this.pos.y += (position.worldPos.y - this.pos.y) / 200;
    }
    if (this.pos.x != position.worldPos.x) {
      this.pos.x += (position.worldPos.x - this.pos.x) / 200;
    }
  }

  onPreUpdate(_engine: ex.Engine, delta: number) {
    // Reset x velocity
    this.vel.x = 0;
    this.vel.y = 0;

    // Player input
    if (_engine.input.keyboard.isHeld(ex.Input.Keys.Left)) {
      this.vel.x = -150;
    }

    if (_engine.input.keyboard.isHeld(ex.Input.Keys.Right)) {
      this.vel.x = 150;
    }

    if (_engine.input.keyboard.isHeld(ex.Input.Keys.Down)) {
      this.vel.y = 150;
    }

    if (_engine.input.keyboard.isHeld(ex.Input.Keys.Up)) {
      this.vel.y = -150;
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
