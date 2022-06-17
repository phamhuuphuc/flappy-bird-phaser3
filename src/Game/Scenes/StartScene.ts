import AudioSources from "../Audio/audio";
import Bat from "../GameObject/Bat";
import Bird from "../GameObject/Bird";
import Fire from "../GameObject/fire";


class StartScene extends Phaser.Scene {
    bird : Bird;
    bg : Phaser.GameObjects.TileSprite;
    images : Phaser.GameObjects.Image;
    audio : AudioSources;
    fire : Fire;
    bat : Bat;

    constructor()
    {
        super({key: 'StartScene'});
    }
    create()
    {
        this.createAudio();
        this.createBackground();
        this.createBird();
        this.createFire();
        this.createText();
        this.createButton();
    }
    createBird()
    {
        this.bird = new Bird(this,150,320,'bird');
        this.add.existing(this.bird);
        this.bird.play('hover');
    }
    createFire()
    {
        this.fire = new Fire(this,600,600,100,300);
        this.fire = new Fire(this,210,600,100,300);
    }
    createBackground()
    {
        this.bg  = this.add.tileSprite(0,0,0,0,'sky').setOrigin(0,0);
        this.bg.setScale(1.8);
        this.bg.displayHeight += 80;
    }
    createText()
    {
        this.images = this.add.image(200,200,'start').setOrigin(0,0);
        this.images.setScale(0.7);
    }
    createAudio()
    {
        this.audio = new AudioSources(this);
        this.audio.audioBg.play();
    }
    createButton()
    {   
        var menu  = this.add.graphics();
        menu.fillStyle(0x222222, 0.8);
        menu.fillRect(255, 350, 300, 310);
        var menuText = this.make.text({
            x : 400,
            y : 370,
            text: 'Menu',
            style : {
                font: '30px monospace',
            }
        }).setOrigin(0.5,0.5);
        var play = this.add.sprite(405,430,'button').setScale(0.6);
        play.setInteractive()
        play.on('pointerdown', () => 
        {   
            this.audio.audioClick.play();
            this.audio.audioBg.stop();
            this.scene.start('PlayScene');
        });
        var playText = this.make.text({
            x : 400,
            y : 430,
            text : 'Play Now',
            style : {
                font: '22px monospace',
            }
        }).setOrigin(0.5,0.5);

        var introduction = this.add.sprite(405,520,'button').setScale(0.6);
        introduction.setInteractive()
        introduction.on('pointerdown', () => 
        {
            this.audio.audioClick.play();
            this.audio.audioBg.stop();
            this.scene.start('IntroScene', this.bg);
        });
        var introductionText = this.make.text({
            x : 400,
            y : 520,
            text : 'Introduction',
            style : {
                font: '22px monospace',
            }
        }).setOrigin(0.5,0.5);

        var instruction = this.add.sprite(405,610,'button').setScale(0.6);
        instruction.setInteractive()
        instruction.on('pointerdown', () => 
        {
            this.audio.audioClick.play();
            this.audio.audioBg.stop();
            this.scene.start('InstructionScene');
        });
        var instructionText = this.make.text({
            x : 400,
            y : 610,
            text : 'Instruction',
            style : {
                font: '22px monospace',
            }
        }).setOrigin(0.5,0.5);
    }
    update()
    {
        this.bg.tilePositionX += 1;
        this.bird.hover();
    }
}

export default StartScene;