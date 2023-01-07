import {SpriteSheet} from 'excalibur';

export interface EnemyConfig {
  sprite: SpriteSheet;
  animation: EnemyAnimations;
  damage: number;
  health: number;
}

interface EnemyAnimations {
  move: EnemyAnimationConfig;
  death?: EnemyAnimationConfig;
}

interface EnemyAnimationConfig {
  timing: number;
  frameIndices: Array<number>;
}

export interface EnemySpritesInterface {
  [key: string]: EnemyConfig;
}
