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
const backgroundsound = new Audio('background_music.mp3');
var player
function preload ()
{
    this.load.image('background', 'background.png');
    this.load.spritesheet('main_character','tikku_hahmo.png',{frameWidth: 32, frameHeight: 48});
    this.load.image('platform', 'Platformit.png');
}
function create ()
{
    this.add.image(400,300, 'background').setScale(4);
	player = this.physics.add.sprite(100, 450, 'main_character');
	player.setBounce(0.2);
	player.setCollideWorldBounds(true);
	this.anims.create({
		key: 'left',
		frames: this.anims.generateFrameNumbers('main_character', { start: 0, end: 3 }),
		frameRate: 10,
		repeat: -1
	});
	this.anims.create({
		key: 'turn',
		frames: [ { key: 'main_character', frame: 4 } ],
		frameRate: 1
	});
	this.anims.create({
		key: 'right',
		frames: this.anims.generateFrameNumbers('main_character', { start: 5, end: 8 }),
		frameRate: 10,
		repeat: -1
	});
    platforms = this.physics.add.staticGroup();
    platforms.create(400,568, 'Platformit').setScale(2).refreshBody();
    platforms.create(50, 250, 'Platformit');
       
}

function update ()
{
    backgroundsound.play()
}