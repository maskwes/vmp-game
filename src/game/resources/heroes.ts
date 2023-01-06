import * as ex from 'excalibur';

const getImageUrl = (path: string) => {
  return new URL(path, import.meta.url).href;
};
const evilWizard = getImageUrl('./spritesheets/heroes/evilWizard.png');
const Resources = {
  evilWizard: new ex.ImageSource(evilWizard),
};

const loader = new ex.Loader();

const evilWizardSpriteSheet = ex.SpriteSheet.fromImageSource({
  image: Resources.evilWizard,
  grid: {
    columns: 8,
    rows: 2,
    spriteHeight: 150,
    spriteWidth: 150,
  },
});

for (const res in Resources) {
  loader.addResource((Resources as any)[res]);
}

export {Resources, loader, evilWizardSpriteSheet};
