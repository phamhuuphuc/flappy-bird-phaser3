import 'phaser';
import config from './GameConfig';

export class FlappyBird extends Phaser.Game {

    constructor(config : Phaser.Types.Core.GameConfig)
    {
        super(config);
    }
}

window.addEventListener('load', () => {
    const game = new FlappyBird(config);
});
