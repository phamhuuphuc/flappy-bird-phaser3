
class Bat {

    bat : Phaser.Physics.Arcade.Sprite;
    initialY : number;

    constructor(scene : Phaser.Scene, x : number, y : number, w : number, h : number)
    {
        this.initialY = y;
        this.bat = scene.physics.add.sprite(x, y, 'bat');
        this.bat.setDisplaySize(w, h);
        scene.physics.world.enable(this.bat);
        scene.add.existing(this.bat);
        this.createAnims();
        this.bat.play('fly');
    }
    createAnims()
    {
        this.bat.anims.create({
            key: 'fly',
            frames: this.bat.anims.generateFrameNumbers('bat', { start: 0, end: 2 }),
            frameRate: 6,
            repeat: -1
        })
    }
    move()
    {
        this.bat.setVelocityY(40);
        this.bat.setVelocityX(-700);
    }
    recreate()
    {
        if(this.bat.x < 0)
        {   
            this.bat.y = this.initialY;
            this.bat.x = 8000;
        } 
    }
    getX() : number 
    {
        return this.bat.x;
    }
}

export default Bat;