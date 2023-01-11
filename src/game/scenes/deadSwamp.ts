import Phaser from 'phaser';
import {getFileUrl} from '../resources/utils';

export default class DeadSwamp extends Phaser.Scene {
  constructor() {
    super('dead-swamp');
  }

  preload() {
    this.load.image(
      'tileSet',
      getFileUrl('../assets/levels/deadSwamp/deadSwampTileSet.png')
    );
    this.load.tilemapTiledJSON(
      'tileMap',
      getFileUrl('../assets/levels/deadSwamp/deadSwamp.json')
    );
  }

  create() {
    this.createMap();
    console.log('create');
  }

  createMap() {
    const map = this.make.tilemap({
      key: 'tileMap',
      tileWidth: 32,
      tileHeight: 32,
    });
    const tileset = map.addTilesetImage('deadSwampTileSet', 'tileSet');
    const layer = map.createLayer('ground', tileset, 0, 0);
  }
}
