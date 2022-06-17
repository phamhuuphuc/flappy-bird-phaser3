import AudioSources from "../Audio/audio";
import Bird from "../GameObject/Bird";

class InstructionScene extends Phaser.Scene {

    bg : Phaser.GameObjects.TileSprite;
    bird : Bird;
    audio : AudioSources;

    constructor()
    {
        super('InstructionScene');
    }
    
    create()
    {
        this.createBackground();
        this.audio = new AudioSources(this);

        var instructionnFrame = this.add.graphics();
        instructionnFrame.fillStyle(0x222222, 0.8);
        instructionnFrame.fillRect(150, 150, 520, 400);

        this.createBird();

        var instructionFrameContent = this.make.text({
            x : 255,
            y : 170,
            text : 'To help her, you only need to \n\nclick your mouse.\n\nEach time click, she will fly upward.\n\nNow let\'s get started !',
            style : {
                font : '20px monospace',
            }
        });
        var backBtn = this.add.sprite(100,100, 'button').setScale(0.3);
        backBtn.setInteractive();
        backBtn.on('pointerdown', () => {
            this.audio.audioClick.play();
            this.scene.start('StartScene');
        });
        var backText = this.make.text({
            x : 100,
            y : 100,
            text : 'Back.',
            style : {
                font: '18px monospace',
            }
        }).setOrigin(0.5,0.5);

        var nextSceneBtn = this.add.sprite(700,100, 'button').setScale(0.3);
        nextSceneBtn.setInteractive();
        nextSceneBtn.on('pointerdown', () => {
            this.audio.audioClick.play();
            this.scene.start('PlayScene');
        })
        var nextSceneBtnText = this.make.text({
            x : 700,
            y : 100,
            text : 'Play.',
            style: {
                font: '18px monospace',
            }
        }).setOrigin(0.5,0.5);
    }
    createBackground()
    {
        this.bg  = this.add.tileSprite(0,0,0,0,'sky').setOrigin(0,0);
        this.bg.setScale(1.8);
        this.bg.displayHeight += 80;
    }
    createBird()
    {
        this.bird = new Bird(this,200,220,'bird')
        this.add.existing(this.bird);
    }
    update()
    {
        this.bg.tilePositionX += 1;
    }
}

export default InstructionScene;