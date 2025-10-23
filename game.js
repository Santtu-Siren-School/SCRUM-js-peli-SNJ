var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var platforms;
function preload ()
{
    this.load.image('background', 'background.png');
    this.load.spritesheet('main_character','tikku_hahmo.png',{frameWidth: 32, frameHeight: 48});
    this.load.image('platform', 'assets/Platformit.png');
}
function create ()
{
    this.add.image(400,300, 'background').setScale(4);
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 1000, 'Platformit').setScale(2).refreshBody();
}

function update ()
{
}