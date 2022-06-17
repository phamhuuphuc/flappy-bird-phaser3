class Bird extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture)
    {
        super(scene,x,y,texture);
        this.setDisplaySize(75,55);
        this.createAnimation();
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
    }

    createAnimation()
    {
        this.anims.create({
            key: 'fly',
            frames: this.scene.anims.generateFrameNumbers('bird', { start: 3, end: 0 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({         
            key: 'drop',
            frames: this.scene.anims.generateFrameNumbers('bird', {start: 1, end: 4}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'hover',
            frames: this.scene.anims.generateFrameNumbers('bird', {start: 0, end: 4}),
            frameRate: 12,
            repeat: -1
        })
       
    }
    fly()
    {
        this.anims.play('fly');
        this.setVelocityY(-150);
    }
    hover()
    {   
        this.anims.play('hover',true);
    }
    drop()
    {   
        this.anims.play('drop');
    }
}

export default Bird;

