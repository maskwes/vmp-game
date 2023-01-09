import * as ex from 'excalibur';

export class HealthBar extends ex.Actor {
  healthBarWidth: number = 100;
  healthBarHeight: number = 10;

  constructor() {
    super({
      name: 'healthbar',
      color: ex.Color.Green,
      pos: new ex.Vector(20, 20),
    });
    this.transform.coordPlane = ex.CoordPlane.Screen;
    this.body.collisionType = ex.CollisionType.PreventCollision;
    this.graphics.anchor = ex.Vector.Zero;
    this.graphics.use(
      new ex.Canvas({
        draw: ctx => this.draw(ctx),
        cache: false,
        width: this.healthBarWidth + 20,
        height: this.healthBarHeight + 50,
      })
    );
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = this.color.toString();
    ctx.fillStyle = this.color.toString();
    ctx.lineWidth = 3;
    ctx.font = 'normal 20px Open Sans';
    ctx.fillText('HP', 0, 30);
    ctx.strokeRect(0, 35, this.healthBarWidth + 10, this.healthBarHeight + 10);
    ctx.fillRect(5, 40, this.healthBarWidth, this.healthBarHeight);
  }
}
