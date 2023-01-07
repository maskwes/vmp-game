import * as ex from 'excalibur';
import {getFileUrl} from './utils';

const evilWizard = getFileUrl('./spritesheets/heroes/evilWizard.png');
const HeroesResources = {
  evilWizard: new ex.ImageSource(evilWizard),
};

const evilWizardSpriteSheet = ex.SpriteSheet.fromImageSource({
  image: HeroesResources.evilWizard,
  grid: {
    columns: 8,
    rows: 2,
    spriteHeight: 150,
    spriteWidth: 150,
  },
});

export {HeroesResources, evilWizardSpriteSheet};
