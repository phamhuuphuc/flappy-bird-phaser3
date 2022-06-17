import AudioSources from "../Audio/audio";
import Score from "../GameObject/Score";

class EndScene extends Phaser.Scene{

    bg : Phaser.GameObjects.TileSprite;
    score : Score;
    x : number;
    highscore : number;
    audio : AudioSources;

    constructor()
    {
        super('EndScene');
    }
    init(data : Score)
    {
        this.x = data.score;
        this.highscore = data.highscore;
    }
    create()
    {
        this.createBackground();
        this.createAudio();
        this.createText();
        this.createButton();
        this.add.sprite(400,300,'snake').setScale(0.3).setOrigin(0.5,0.5);
    }
    createBackground()
    {   
        this.bg  = this.add.tileSprite(0,0,0,0,'sky').setOrigin(0,0);
        this.bg.setScale(1.8);
        this.bg.displayHeight += 80;
    }
    createAudio()
    {
        this.audio = new AudioSources(this);
        this.audio.audioBg.play();
    }
    createText()
    {
        this.score = new Score(this, 285,500, "Your score: " + this.x, {font : '30px monospace', color: 'white'});
        this.make.text({
            x : 270,
            y : 450,
            text : 'Highest Score: ' + this.highscore,
            style : {
                font : '30px monospace',
            }
        });
        var snakeChat = this.add.graphics();
        snakeChat.fillStyle(0x222222, 0.8);
        snakeChat.fillRect(410, 200, 190, 50);
        this.make.text({
            x : 420,
            y : 220,
            text : 'Stupid player !',
            style: {
                font : '20px monospace',
            }
        }).setOrigin(0,0);
    }
    createButton()
    {
        var replay = this.add.sprite(400, 600, 'button').setScale(0.6);
        replay.setInteractive();
        replay.on('pointerdown', () =>
        {
            this.audio.audioClick.play();
            this.audio.audioBg.stop();
            this.scene.start('PlayScene');
        });
        var replayText = this.make.text({
            x : 400,
            y : 600,
            text : 'Play again.',
            style : {
                font : '20px monospace',
            }
        }).setOrigin(0.5,0.5);

        var back = this.add.sprite(120, 100, 'button').setScale(0.6);
        back.setInteractive();
        back.on('pointerdown', () =>
        {
            this.audio.audioClick.play();
            this.audio.audioBg.stop();
            this.scene.start('StartScene');
        });
        var replayText = this.make.text({
            x : 120,
            y : 100,
            text : 'Back to menu',
            style : {
                font : '20px monospace',
            }
        }).setOrigin(0.5,0.5);
    }
    update(){}
}

export default EndScene;