import AudioSources from "../Audio/audio";
import Bat from "../GameObject/Bat";
import Bird  from "../GameObject/Bird";
import Bullets from "../GameObject/Bullet";
import Obstacles  from "../GameObject/Obstacle";
import Score from "../GameObject/Score";


class PlayScene extends Phaser.Scene
{
    bg : Phaser.GameObjects.TileSprite;
    obstacles : Obstacles[] = new Array;
    bat : Bat[] = new Array;
    bird : Bird;
    score : Score;
    checkScore : boolean = false;
    audio : AudioSources;
    bullet : Bullets;
    snake : Phaser.Physics.Arcade.Sprite;
    indexSnake : number = 2;

    constructor ()
    {
        super('PlayScene');
    }

    create ()
    {
        this.createBackground();
        this.createObstacle();
        this.createBird();
        this.createBat();
        this.createScore();
        this.createAudio();
        this.checkPause();
        this.checkCollision();
        this.bullet = new Bullets(this);
        this.bullet.scaleXY(0);
        this.data.set('highScore', 0);
        this.snake = this.physics.add.sprite(this.obstacles[this.indexSnake].getX(), this.obstacles[this.indexSnake].getY() - 320, 'snake').setScale(0.1);
        this.physics.add.collider(this.bird, this.snake, 
            () => { 
                    this.audio.audioHit.play();
                    this.audio.audioBat.stop();
                    if(this.score.score > this.data.get('highScore'))
                    {
                        this.score.highscore = this.score.score;
                    }else{
                        this.score.highscore = this.data.get('highscore');
                    }
                        this.scene.start('EndScene', this.score);
                }, null, this);
        this.physics.add.overlap(this.bullet, this.snake, 
            () => { 
                    this.snake.setVisible(false);
                    this.snake.x = -50;
                }, null, this);
    }
    createBat()
    {
        this.bat[0] = new Bat(this, 960, 20, 80, 70);
        this.bat[1] = new Bat(this, 1000, 40, 90, 80);
        this.bat[2] = new Bat(this, 1060, 20, 70, 60);
    }
    checkCollision()
    {
        for(let i =0; i < this.obstacles.length; i++)
        {
            this.physics.add.collider(this.bird, this.obstacles[i].obstacle_up, 
                () => { 
                        this.audio.audioHit.play();
                        this.audio.audioBat.stop();
                        if(this.score.score > this.data.get('highScore'))
                        {
                            this.score.highscore = this.score.score;
                        }else{
                            this.score.highscore = this.data.get('highscore');
                        }
                        this.scene.start('EndScene', this.score);
                    }, null, this);
            this.physics.add.collider(this.bird, this.obstacles[i].obstacle_down, 
                () => { 
                        this.audio.audioHit.play();
                        this.audio.audioBat.stop();
                        if(this.score.score > this.data.get('highScore'))
                        {
                            this.score.highscore = this.score.score;
                        }else{
                            this.score.highscore = this.data.get('highScore');
                        }
                        this.scene.start('EndScene', this.score);
                    }, null, this);
        }
    }
    checkPause()
    {
        var pauseBtn = this.add.sprite(700,100, 'button').setScale(0.3);
        pauseBtn.setInteractive();
        pauseBtn.on('pointerdown', () => {
            this.audio.audioClick.play();
            this.scene.pause('PlayScene');
            this.scene.launch('PauseScene');
        })
        var pauseBtnText = this.make.text({
            x : 700,
            y : 100,
            text : 'Pause.',
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
        this.bird = new Bird(this,200,320,'bird')
        this.bird.setGravityY(300);
    }
    createObstacle()
    {   
        this.obstacles[0] = new Obstacles(this,900, 'up1', 'down1',2);
        this.add.existing(this.obstacles[0].obstacle_up);
        this.add.existing(this.obstacles[0].obstacle_down);
        this.obstacles[1] = new Obstacles(this,1200, 'up2', 'down2',2);
        this.add.existing(this.obstacles[1].obstacle_up);
        this.add.existing(this.obstacles[1].obstacle_down);
        this.obstacles[2] = new Obstacles(this,1500, 'up3', 'down3',2);
        this.add.existing(this.obstacles[2].obstacle_up);
        this.add.existing(this.obstacles[2].obstacle_down);
        this.obstacles[3] = new Obstacles(this,1800, 'up4', 'down4',2);
        this.add.existing(this.obstacles[3].obstacle_up);
        this.add.existing(this.obstacles[3].obstacle_down);
    }
    createScore()
    {
        this.score = new Score(this,16,16, "Score: 0", {fontSize : '30px', color: 'white'});
    }
    createAudio()
    {
        this.audio = new AudioSources(this);
    }
    update ()
    {   
        console.log(this.snake.x);
        this.snake.x -= 2;
        if(this.bird.y > this.game.config.height || this.bird.y < 0)
        {
            this.audio.audioHit.play();
            this.scene.start('EndScene', this.score);
        }
        this.input.on('pointerdown', () =>
        {   
            this.audio.audioWing.play();
            this.audio.audioWing.play();
            this.bird.fly();
        })
        this.input.on('pointerup', () =>
        {   
            this.bird.drop();
        })
        this.input.keyboard.on('keydown-A', () => 
        {
            this.bullet.fireBullet(this.bird.x, this.bird.y);
        })

        this.bg.tilePositionX += 1;
        
        for(let i =0; i < this.obstacles.length; i++)
        {
            this.obstacles[i].move();
            if(this.obstacles[i].obstacle_up.x < this.bird.x)
            {
                this.checkScore = true;
            }
            if(this.obstacles[i].obstacle_up.x < -50)
            {
                if(i - 1 < 0)
                {
                    this.obstacles[i].resetX(this.obstacles[this.obstacles.length -1].getX() + this.obstacles[i].getDistance());
                }else{
                    this.obstacles[i].resetX(this.obstacles[i-1].getX() + this.obstacles[i].getDistance());
                }
                this.obstacles[i].resetY();
            }
        }
        
        this.score.addScore(this.checkScore);
        this.checkScore = false;

        for(const x of this.bat)
        {
            x.move();
            x.recreate();
        }
        if(this.bat[0].getX() < 960 && this.bat[0].getX() > 940)
        {
            this.audio.audioBat.play();
        }
        if(this.snake.x < 0)
        {
            this.snake.setVisible(true);
            this.indexSnake -= 2;
            this.snake.x = this.obstacles[this.indexSnake].getX();
            this.snake.y = this.obstacles[this.indexSnake].getY() - 320;
        }
    }
}

export default PlayScene;



