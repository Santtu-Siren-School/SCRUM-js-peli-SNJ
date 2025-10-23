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

function preload ()
{
    this.load.image('testbackground', 'testbackground.png');
    this.load.spritesheet('main_character','tikku_hahmo.png',{frameWidth: 32, frameHeight: 48});
}
function create ()
{
    this.add.image(400,300, 'testbackground');
}

function update ()
{
}