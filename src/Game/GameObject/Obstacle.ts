const obstacleWidth = 90;
const obstacleHeight = 450;
const blank = 160;
const distance = 300;


class Obstacle extends Phaser.Physics.Arcade.Image{

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture)
    {
        super(scene,x,y,texture);
        this.setDisplaySize(obstacleWidth, obstacleHeight);
        this.scene.physics.world.enable(this);
        this.setGravity(0);
    }
    move(speed : number) : void
    {   
        this.x -= speed;
    }
    getX() : number
    {
        return this.x;
    }
    getY() : number
    {
        return this.y;
    }
    resetX(x : number) : void
    {
        this.x = x;
    }
    resetY(y : number) : void
    {
        this.y = y;
    }
}

class Obstacles {
    obstacle_up : Obstacle;
    obstacle_down : Obstacle;
    distance : number = distance;
    blank : number = blank;
    width : number = obstacleWidth;
    height : number = obstacleHeight;
    speed : number;
    
    constructor(scene : Phaser.Scene, x : number, texture_up : string, texture_down : string, speed : number)
    {   
        let y = Math.floor(Math.random() * (380 - 200) + 200);
        this.obstacle_up = new Obstacle(scene,x,y + obstacleHeight,texture_up);
        this.obstacle_down = new Obstacle(scene,x, y - blank,texture_down);
        this.speed = speed;
    }
    move()
    {
        this.obstacle_up.move(this.speed);
        this.obstacle_down.move(this.speed);
    }
    getSpeed() : number
    {
        return this.speed;
    }
    setSpeed(speed : number)
    {
        this.speed = speed;
    }
    getX() : number
    {
        return this.obstacle_up.getX();
    }
    getY() : number
    {
        return this.obstacle_up.getY();
    }
    resetX(x : number) : void
    {
        this.obstacle_up.setX(x);
        this.obstacle_down.setX(x);
    }
    resetY() : void
    {   
        let y = Math.floor(Math.random() * (380 - 80) + 80);   // 30
        this.obstacle_up.resetY(y + obstacleHeight);
        this.obstacle_down.resetY(y - blank);
    }
    getDistance() : number
    {
        return this.distance;
    }
}

export default Obstacles;