import ex from 'excalibur';
import {TiledMapResource} from '@excaliburjs/plugin-tiled';
// import map
import deadSwampTileMap from './deadSwamp.tmx';
import deadSwampTileSet from './deadSwampTileSet.png';
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
