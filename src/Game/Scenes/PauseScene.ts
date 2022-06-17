import AudioSources from "../Audio/audio";

class PauseScene extends Phaser.Scene {

    audio : AudioSources;

    constructor()
    {
        super('PauseScene');
    }
    create()
    {   
        this.audio = new AudioSources(this);
        var menu = this.add.graphics();
        menu.fillStyle(0x222222, 0.8);
        menu.fillRect(255,220,300,250);
        var exitBtn = this.add.sprite(400,410, 'button').setScale(0.5);
        exitBtn.setInteractive();
        exitBtn.on('pointerdown', () => {
            this.audio.audioClick.play();
            this.scene.stop('PlayScene');
            this.scene.stop('PauseScene');
            this.scene.start('StartScene');
        });
        var exitBtnText = this.make.text({
            x : 400,
            y : 410,
            text : 'Exit.',
            style: {
                font: '18px monospace',
            }
        }).setOrigin(0.5,0.5);
        var resumeBtn = this.add.sprite(400,340, 'button').setScale(0.5);
        resumeBtn.setInteractive();
        resumeBtn.on('pointerdown', () => {
            this.audio.audioClick.play();
            this.make.text({
                x : 200,
                y : 300,
                text : '3',
                style : {
                    font : '20px monospace',
                }
            })
            this.scene.stop('PauseScene');
            this.scene.resume('PlayScene');
        });
        var resueBtnText = this.make.text({
            x : 400,
            y : 340,
            text : 'Resume.',
            style: {
                font: '18px monospace',
            }
        }).setOrigin(0.5,0.5);
        var restartBtn = this.add.sprite(400,270, 'button').setScale(0.5);
        restartBtn.setInteractive();
        restartBtn.on('pointerdown', () => {
            this.audio.audioClick.play();
            this.scene.stop('PlayScene');
            this.scene.stop('PauseScene');
            this.scene.start('PlayScene');
        });
        var restartBtnText = this.make.text({
            x : 400,
            y : 270,
            text : 'Restart.',
            style: {
                font: '18px monospace',
            }
        }).setOrigin(0.5,0.5);
    }
}

export default PauseScene;