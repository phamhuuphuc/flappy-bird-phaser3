class Bullet extends Phaser.Physics.Arcade.Sprite
{
    constructor (scene : Phaser.Scene, x : number, y : number)
    {
        super(scene, x, y, 'bullet');
    }

    fire (x : number, y : number)
    {
        this.body.reset(x, y);

        this.setActive(true);
        this.setVisible(true);
        this.setDisplaySize(50,50);
        this.setVelocityX(500);
    }

    preUpdate (time : number, delta : number)
    {
        super.preUpdate(time, delta);

        if (this.x > 600)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
}

class Bullets extends Phaser.Physics.Arcade.Group
{
    constructor (scene : Phaser.Scene)
    {
        super(scene.physics.world, scene);
        this.createMultiple({
            frameQuantity: 1,
            key: 'bullet',
            active: false,
            visible: false,
            classType: Bullet
        });
        
    }

    fireBullet (x : number , y : number)
    {
        let bullet = this.getFirstDead(false);
        if (bullet)
        {
            bullet.fire(x, y);
        }
    }
}

export default Bullets;