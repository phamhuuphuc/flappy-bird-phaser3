import AudioSources from "../Audio/audio";


class Score extends Phaser.GameObjects.Text{

    score : number;
    add : boolean;
    highscore : number;
    audio : AudioSources;

    constructor(scene: Phaser.Scene, x: number, y: number, text: string | string[] = "Score", style: Phaser.Types.GameObjects.Text.TextStyle)
    {
        super(scene,x,y,text,style);
        this.add = true;
        this.score = 0;
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
        this.highscore = 0;
        this.audio = new AudioSources(scene);
    }
    getScore() : number
    {
        return this.score;
    }
    addScore(add : boolean)
    {
        if(add)
        {
            if(this.add)
            {
                this.score += 1;
                this.text = "Score: " + this.score;
                this.audio.audioScore.play();
            }
            this.add = false;
        }else{
            this.add = true;
        }
    }
}

export default Score;