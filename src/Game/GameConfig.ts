import  PlayScene  from './Scenes/PlayScene';
import  StartScene from './Scenes/StartScene';
import  EndScene from './Scenes/EndScene';
import  BootScene from './Scenes/BootScene';
import IntroScene from './Scenes/IntroScene';
import InstructionScene from './Scenes/InstructionScene';
import PauseScene from './Scenes/PauseScene';


const config : Phaser.Types.Core.GameConfig = {
    title: 'Flappy Bird',
    type: Phaser.CANVAS,
    backgroundColor: '#8D5620',
    width: 800,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
    },
    scene: [BootScene,StartScene,IntroScene,InstructionScene,PlayScene,PauseScene,EndScene],
    
};

export default config;