import ex from 'excalibur';
import {TiledMapResource} from '@excaliburjs/plugin-tiled';
// import map
import deadSwampTileMap from '../../../assets/levels/deadSwamp.tmx';
import deadSwampTileSet from '../../../assets/levels/deadSwamp/deadSwampTileSet.png';
import {Enemies} from '../../enemies';

const TileMap = new TiledMapResource(deadSwampTileMap);
const enemies = [
  {
    count: 30,
    enemy: [Enemies.flyEye],
  },
  {
    count: 30,
    enemy: [Enemies.flyEye],
  },
  {
    count: 30,
    enemy: [Enemies.flyEye],
  },
];
export const Loader = new ex.Loader();
