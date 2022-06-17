import AudioSources from "../Audio/audio";

class IntroScene extends Phaser.Scene {

    bg : Phaser.GameObjects.TileSprite;
    audio : AudioSources;

    constructor()
    {
        super('IntroScene');
    }
    
    create()
    {
        this.createBackground();
        this.audio = new AudioSources(this);
        var introductionFrame = this.add.graphics();
        introductionFrame.fillStyle(0x222222, 0.8);
        introductionFrame.fillRect(150, 150, 520, 400);
        var introductionFrameContent = this.make.text({
            x : 170,
            y : 170,
            text : 'Hello, i am a miserable mom.\n\nThis day my children was kidnapped.\n\nI known The evil snake did that.\n\nLet us help me to go through the cave \n\nto save my children.',
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
            this.scene.start('InstructionScene');
        })
        var nextSceneBtnText = this.make.text({
            x : 700,
            y : 100,
            text : 'Next.',
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
    update()
    {
        this.bg.tilePositionX += 1;
    }
}

export default IntroScene;