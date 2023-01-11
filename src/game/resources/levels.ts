import {TiledMapResource} from '@excaliburjs/plugin-tiled';
// forest assets
import deadSwampTileMap from '../assets/levels/deadSwamp.tmx';
import deadSwampTileSet from '../assets/levels/deadSwamp/deadSwampTileSet.png';

const LevelsResources = {
  deadSwamp: new TiledMapResource(deadSwampTileMap),
};

function convertLevelsResourcesPath() {
  for (const level in LevelsResources) {
    LevelsResources[level as keyof typeof LevelsResources].convertPath = (
      tmxLocation,
      relativePath
    ) => {
      return convertTileMapPath(tmxLocation, relativePath, deadSwampTileSet);
    };
  }
}

convertLevelsResourcesPath();

function convertTileMapPath(
  tmxLocation: string,
  relativePath: string,
  tileset: any
) {
  const resourceName = relativePath.split('/').at(-1)?.split('.')[0];
  if (tileset.includes(resourceName)) {
    return tileset;
  }
}

export {LevelsResources};
