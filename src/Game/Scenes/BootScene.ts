class BootScene extends Phaser.Scene {
    
    constructor()
    {
        super('LoadingScene');
    }
    preload()
    {
        this.load.image('start', './images/Badge/start.png');
        this.load.image('sky','./images/Background/cave.png');
        this.load.image('up1','./images/Pipe/up1.png');
        this.load.image('up2','./images/Pipe/up2.png');
        this.load.image('up3','./images/Pipe/up3.png');
        this.load.image('up4','./images/Pipe/up4.png');
        this.load.image('down1','./images/Pipe/down1.png');
        this.load.image('down2','./images/Pipe/down2.png');
        this.load.image('down3','./images/Pipe/down3.png');
        this.load.image('down4','./images/Pipe/down4.png');
        this.load.image('button', './images/Badge/btn.png');
        this.load.image('snake', './images/Badge/snake.png');
        this.load.image('bullet', './images/Badge/bullet.png');
        this.load.image('replaybutton', './images/Badge/replay.png');

        this.load.spritesheet('bird', './images/Bird/bird.png',
                    {frameWidth : 260, frameHeight : 215}
            );
        this.load.spritesheet('fire','./images/Background/fire.png',
                    {frameWidth : 78, frameHeight : 120}
            );
        this.load.spritesheet('bat', './images/Badge/bat.png',
                    {frameWidth : 920, frameHeight : 300}
            );

        this.load.audio('hit', ["./audio/hit.mp3"]);
        this.load.audio('point', ["./audio/ping.mp3"]);
        this.load.audio('oggy', ["./audio/Oggy.mp3"]);
        this.load.audio('flap', ['./audio/wing.mp3']);
        this.load.audio('click', ['./audio/clickButton.mp3']);
        this.load.audio('bat', ['./audio/batsound.mp3']);

        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
            progressBox.fillStyle(0x222222, 0.8);
            progressBox.fillRect(240, 320, 320, 50);
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
                x: width / 2,
                y: height / 2 - 50,
                text: 'Loading...',
                style: {
                    font: '20px monospace',
                }
            });
            loadingText.setOrigin(0.5, 0.5);
            
        var percentText = this.make.text({
                x: width / 2,
                y: height / 2 - 5,
                text: '0%',
                style: {
                    font: '18px monospace',
                }
            });
            percentText.setOrigin(0.5, 0.5);
        
            
        this.load.on('progress', function(value : number) {
            percentText.setText(value*100 + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 330, value * 300, 30);
        });
            
        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
        });
    }
    
    update()
    {
        this.scene.start('StartScene');
    }
}

export default BootScene;