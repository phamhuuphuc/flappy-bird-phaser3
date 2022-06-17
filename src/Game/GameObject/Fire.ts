class Fire {

    fire : Phaser.Physics.Arcade.Sprite;

    constructor(scene : Phaser.Scene, x : number, y : number, w : number, h : number)
    {
        this.fire = scene.physics.add.sprite(x, y, 'fire');
        this.fire.displayHeight = h;
        this.fire.displayWidth = w;
        scene.add.existing(this.fire);
        this.createAnim();
        this.fire.play('burst');
    }

    createAnim()
    {
        this.fire.anims.create({
            key: 'burst',
            frames: this.fire.anims.generateFrameNumbers('fire', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        })
    }
}

export default Fire;