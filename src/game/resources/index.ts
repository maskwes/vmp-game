import * as ex from 'excalibur';
import {LevelsResources} from './levels';
import {HeroesResources} from './heroes';
import {EnemiesResources} from './enemies';

const Resources = Object.assign(
  HeroesResources,
  LevelsResources,
  EnemiesResources
);
const Loader = new ex.Loader();

for (const res in Resources) {
  Loader.addResource((Resources as any)[res]);
}

export {Resources, Loader};
