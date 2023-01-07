import * as ex from 'excalibur';
import {getFileUrl} from './utils';
import {EnemySpritesInterface} from '../enemy/enemyInterfaces';

const flyEye = getFileUrl('./spritesheets/enemy/flying_eye.png');
const EnemiesResources = {
  flyEye: new ex.ImageSource(flyEye),
};

const Enemies: EnemySpritesInterface = {
  flyEye: {
    sprite: ex.SpriteSheet.fromImageSource({
      image: EnemiesResources.flyEye,
      grid: {
        columns: 6,
        rows: 1,
        spriteHeight: 150,
        spriteWidth: 150,
      },
    }),
    animation: {
      move: {
        frameIndices: [0, 1, 2, 3, 4, 5],
        timing: 100,
      },
    },
    damage: 10,
    health: 100,
  },
};

export {EnemiesResources, Enemies};
