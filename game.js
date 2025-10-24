var config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 900,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var platforms;
var bottom_of_game;
var gameOver;
var jumping = 0;
const backgroundsound = new Audio('background_music.mp3');
var player;
var weapon;
let cannon;
let bullets;
function preload ()
{
    this.load.image('background', 'assets/textures/background.png');
    this.load.spritesheet('main_character','assets/textures/tikku_hahmo.png',{frameWidth: 28, frameHeight: 42});
    this.load.image('platform', 'assets/textures/Platformit.png');
    this.load.image('bottom_of_game', 'assets/textures/bottom_of_game.png');
    this.load.image('weapon', 'assets/textures/tikari.png');
    this.load.image('cannon', 'assets/textures/cannon.png');
    this.load.image('bullet', 'assets/textures/cannon_ball.png');

}
function create ()
{
    cursors = this.input.keyboard.createCursorKeys();
    this.add.image(500,400, 'background').setScale(6);
    player = this.physics.add.sprite(100, 450, 'main_character');
	player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, bottom_of_game);
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
    this.anims.create({
        key: 'jump',
        frames: [{key: 'main_character', frame: 9}],
        frameRate: 1
    });
    platforms = this.physics.add.staticGroup();
    this.physics.add.collider(player, platforms);
    platforms.create(350, 870, 'platform').setScale(3).refreshBody();
    platforms.create(100, 700, 'platform').setScale(2);
	platforms.create(320, 560, 'platform').setScale(2);
	platforms.create(700, 730, 'platform').setScale(6);
    bottom_of_game = this.physics.add.staticGroup();
    this.physics.add.collider(player, bottom_of_game);
    bottom_of_game.create(350,870, 'bottom_of_game')
    this.cameras.main.setBounds(0, 0, 2000, 900);
	this.physics.world.setBounds(0, 0, 2000, 900);

	this.cameras.main.startFollow(player);


    cannon = this.physics.add.image(100, 300, 'cannon');
    cannon.setImmovable(true);

    bullets = this.physics.add.group({
        defaultKey: 'bullet',
        maxSize: 10
    });

    this.time.addEvent({
        delay: 3000,     
        callback: shootBullet, 
        callbackScope: this,  
        loop: true             
    });
}


function shootBullet() {
    const bullet = bullets.get();

    if (bullet) {
        bullet.enableBody(true, cannon.x + 40, cannon.y, true, true);

        bullet.setVelocityX(400);
    }
}



function update ()
{
    if (gameOver == true)
	{
		this.physics.pause();
		backgroundsound.pause();
		player.anims.play('jump');
		return;
	}
    backgroundsound.play()
    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else if (cursors.up.isDown&&player.body.touching.down)
    {
        jumping=1;
        player.setVelocityY(-300);
        player.anims.play("jump");
    }
    else if (jumping=1) 
    {
        player.setVelocityX(0);
        player.anims.play("jump");
        if (player.body.touching.down) {
            jumping=0;
            player.setVelocityX(0);
            player.anims.play('turn');
        }
    }
    else
    {
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    bullets.children.each(b => {
        if (b.active && b.x > 1080) {
            b.disableBody(true, true); 
        }
    });
}