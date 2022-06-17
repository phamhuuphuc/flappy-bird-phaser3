class AudioSources {
    audioBg : Phaser.Sound.BaseSound;
    audioScore : Phaser.Sound.BaseSound;
    audioWing : Phaser.Sound.BaseSound;
    audioClick : Phaser.Sound.BaseSound;
    audioHit : Phaser.Sound.BaseSound;
    audioBat : Phaser.Sound.BaseSound;

    constructor(scene : Phaser.Scene)
    {
        this.audioBg = scene.sound.add('oggy', {loop : true});
        this.audioWing = scene.sound.add('flap', {loop : false});
        this.audioScore= scene.sound.add('point', {loop : false});
        this.audioClick = scene.sound.add('click', {loop : false});
        this.audioHit = scene.sound.add('hit', {loop : false});
        this.audioBat = scene.sound.add('bat', {loop : false});
    }

}

export default AudioSources;