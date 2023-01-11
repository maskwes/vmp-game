import Phaser from 'phaser';

export function startGame(gameContainerId: string, scene: Phaser.Scene) {
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: gameContainerId,
    backgroundColor: '#33A5E7',
    scale: {
      mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
    },
    scene: [scene],
  });
  return game;
}
