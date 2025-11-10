//level1
class Level1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level1' });
}
    preload (){
    this.load.image('background', 'assets/textures/background.png');
    this.load.spritesheet('main_character','assets/textures/tikku_hahmo.png',{frameWidth: 28, frameHeight: 42});
    this.load.image('platform', 'assets/textures/Platformit.png');
    this.load.image('bottom_of_game', 'assets/textures/bottom_of_game.png');
    this.load.image('dagger', 'assets/textures/tikari.png');
    this.load.image('cannon', 'assets/textures/cannon.png');
    this.load.image('bullet', 'assets/textures/cannon_ball.png');
    this.load.image('ovi','assets/textures/ovi.png')
    this.load.image('dungeon','assets/textures/dungeon.png')
    }
    create (){
    cursors = this.input.keyboard.createCursorKeys();
    this.add.image(500,400, 'background').setScale(6);
    player = this.physics.add.sprite(100, 750, 'main_character');
	player.setCollideWorldBounds(true);
    knife = this.physics.add.group();
    platforms = this.physics.add.staticGroup();
    this.physics.add.collider(player, platforms);
    platforms.create(350, 870, 'platform').setScale(3).refreshBody();
    platforms.create(80, 700, 'platform').setScale(2).refreshBody();
	platforms.create(300, 580, 'platform').setScale(2).refreshBody();
	platforms.create(720, 730, 'platform').setScale(6).refreshBody();
    platforms.create(780, 480, 'platform').setScale(3).refreshBody();
    platforms.create(990, 320, 'platform').setScale(3).refreshBody();
    platforms.create(1230, 230, 'platform').setScale(3).refreshBody();
    platforms.create(1060, 870, 'platform').setScale(3).refreshBody();
    platforms.create(1350, 870, 'platform').setScale(4).refreshBody();
    platforms.create(1070, 700, 'platform').setScale(3).refreshBody();
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, bottom_of_game);
    this.physics.add.collider(knife, platforms);
    this.physics.add.collider(knife, bottom_of_game);
    this.physics.add.collider(knife, platforms, (weapon) => {
    weapon.destroy();
    });
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
    bottom_of_game = this.physics.add.staticGroup();
    this.physics.add.collider(player, bottom_of_game);
    bottom_of_game.create(100,900, 'bottom_of_game')
    ovi=this.physics.add.staticGroup();
    ovi.create(920,520,'ovi').setScale(0.3).refreshBody();
    this.physics.add.overlap(player, ovi, level2Transition, null, this);
    this.cameras.main.setBounds(0, 0, 2000, 900);
	this.physics.world.setBounds(0, 0, 2000, 900);
	this.cameras.main.startFollow(player);
    shoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


    cannon = this.physics.add.image(50, 830, 'cannon');
    cannon.setImmovable(true);
    cannon.body.allowGravity = false;

    bullets = this.physics.add.group({
        defaultKey: 'bullet',
        maxSize: 10000000000
    });

    this.time.addEvent({
        delay: 5000,     
        callback: shootBullet, 
        callbackScope: this,  
        loop: true             
    });

    this.physics.add.collider(player, bullets, hitPlayer, null, this);

    }

    update (){

    if (gameOver == true)
	{
		this.physics.pause();
		backgroundsound.pause();
		player.anims.play('jump');
		return;
	}
    backgroundsound.play()
    if (cursors.up.isDown && player.body.touching.down) {
        jumping = 1;
        player.setVelocityY(-300);
        player.anims.play("jump");
    }
    if (jumping === 1) {
        player.anims.play("jump", true);
        player.setVelocityX(0);
        if (player.body.touching.down) {
            jumping = 0;
            player.setVelocityX(0);
            player.anims.play('turn');
        }
    }
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play('left', true);
        facingRight = false;
    } 
    else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true);
        facingRight = true;
    } 
    else {
        player.setVelocityX(0);
        player.anims.play('turn');
    }
    if (Phaser.Input.Keyboard.JustDown(shoot)) {
            let offset = -30;
            let spawnX = player.x + (facingRight ? offset : -offset);
            let weapon = knife.create(spawnX, player.y, 'dagger');
            weapon.setScale(0.1);
            weapon.setVelocityX(400); 
            weapon.setGravityY(-200);
             if (facingRight) {
        weapon.setVelocityX(400);
    } else {
        weapon.setVelocityX(-400);
        weapon.flipX = true; 
    }
            setTimeout(() => {
                weapon.destroy();
            }, 1000);
        }
        bullets.children.each(b => {
            if (b.active && b.x > 1580) {
                b.disableBody(true, true); 
            }
        });
    }

    
}
//level2
class Level2 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level2' });}
    preload (){
    this.load.image('castle_hallway', 'assets/textures/castle_hallway.jpg');
    this.load.spritesheet('main_character','assets/textures/tikku_hahmo.png',{frameWidth: 28, frameHeight: 42});
    this.load.image('platform', 'assets/textures/Platformit.png');
    this.load.image('bottom_of_game', 'assets/textures/bottom_of_game.png');
    this.load.image('dagger', 'assets/textures/tikari.png');
    this.load.image('cannon', 'assets/textures/cannon.png');
    this.load.image('bullet', 'assets/textures/cannon_ball.png');
    this.load.image('ovi','assets/textures/ovi.png');
    }
    create (){
    platforms = this.physics.add.staticGroup();
    bottom_of_game = this.physics.add.staticGroup();
    cursors = this.input.keyboard.createCursorKeys();
    this.add.image(500,400, 'castle_hallway').setScale(3);
    player = this.physics.add.sprite(100, 750, 'main_character');
	player.setCollideWorldBounds(true);
    knife = this.physics.add.group();
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, bottom_of_game);
    this.physics.add.collider(knife, platforms);
    this.physics.add.collider(knife, bottom_of_game);
    this.physics.add.collider(knife, platforms, (weapon) => {
    weapon.destroy();
    });
    this.physics.add.collider(player, platforms);
    platforms.create(300,800, 'platform').setScale(2).refreshBody();
    platforms.create(550,800, 'platform').setScale(2).refreshBody();
    platforms.create(870,800, 'platform').setScale(2).refreshBody();
    platforms.create(1200,800, 'platform').setScale(2).refreshBody();
    platforms.create(1450,740, 'platform').setScale(2).refreshBody();
    platforms.create(1700,580, 'platform').setScale(2).refreshBody();
    platforms.create(1300,480, 'platform').setScale(2).refreshBody();
    platforms.create(900,480, 'platform').setScale(2).refreshBody();
    platforms.create(500,480, 'platform').setScale(2).refreshBody();
    platforms.create(100,350, 'platform').setScale(2).refreshBody();
    this.physics.add.collider(player, bottom_of_game);
    bottom_of_game.create(100,900, 'bottom_of_game')
    bottom_of_game.create(300,900, 'bottom_of_game')
    bottom_of_game.create(500,900, 'bottom_of_game')
    bottom_of_game.create(700,900, 'bottom_of_game')
    bottom_of_game.create(900,900, 'bottom_of_game')
    bottom_of_game.create(1100,900, 'bottom_of_game')
    bottom_of_game.create(1300,900, 'bottom_of_game')
    bottom_of_game.create(1500,900, 'bottom_of_game')
    bottom_of_game.create(1700,900, 'bottom_of_game')
    bottom_of_game.create(1900,900, 'bottom_of_game')
    ovi=this.physics.add.staticGroup();
    ovi.create(100,250,'ovi').setScale(0.3).refreshBody();
    this.physics.add.overlap(player, ovi, level3Transition, null, this);
    this.cameras.main.setBounds(0, 0, 2000, 900);
	this.physics.world.setBounds(0, 0, 2000, 900);
	this.cameras.main.startFollow(player);
    cannon = this.physics.add.image(50, 700, 'cannon');
    cannon.setImmovable(true);
    cannon.body.allowGravity = false;
    bullets = this.physics.add.group({
        defaultKey: 'bullet',
        maxSize: 10000000000
    });
    this.time.addEvent({
        delay: 2000,     
        callback: shootBullet, 
        callbackScope: this,  
        loop: true             
    });
    this.physics.add.collider(player, bullets, hitPlayer, null, this);
    shoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update (){
        if (gameOver == true)
        {
            this.physics.pause();
            backgroundsound.pause();
            player.anims.play('jump');
            return;
        }
        backgroundsound.play()
    if (cursors.up.isDown && player.body.touching.down) {
            jumping = 1;
            player.setVelocityY(-300);
            player.anims.play("jump");
        }
        if (jumping === 1) {
            player.anims.play("jump", true);
            player.setVelocityX(0);
            if (player.body.touching.down) {
                jumping = 0;
                player.setVelocityX(0);
                player.anims.play('turn');
            }
        }
        if (cursors.left.isDown) {
            player.setVelocityX(-160);
            player.anims.play('left', true);
            facingRight = false;
        } 
        else if (cursors.right.isDown) {
            player.setVelocityX(160);
            player.anims.play('right', true);
            facingRight = true;
        } 
        else {
            player.setVelocityX(0);
            player.anims.play('turn');
        }
      if (Phaser.Input.Keyboard.JustDown(shoot)) {
            let offset = -30;
            let spawnX = player.x + (facingRight ? offset : -offset);
            let weapon = knife.create(spawnX, player.y, 'dagger');
            weapon.setScale(0.1);
            weapon.setVelocityX(400); 
            weapon.setGravityY(-200);
             if (facingRight) {
        weapon.setVelocityX(400);
    } else {
        weapon.setVelocityX(-400);
        weapon.flipX = true; 
    }
            setTimeout(() => {
                weapon.destroy();
            }, 1000);
        }
    }
    
}
var config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 900,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 270 },
            debug: false
        }
    },
    scene: [Level1,Level2]
};
var ovi;
var cursors;
var game = new Phaser.Game(config);
var platforms;
var bottom_of_game;
var gameOver;
var jumping = 0;
const backgroundsound = new Audio('assets/sound/background_music.mp3');
const nextlevelsound=new Audio('assets/sound/level_finish_sound.wav');
var player;
var weapon;
var knife;
var shoot;
let cannon;
let bullets;
let facingRight = true;
// funktiot tänne
function shootBullet() {
    const bullet = bullets.get();

    if (bullet) {
        bullet.enableBody(true, cannon.x + 40, cannon.y, true, true);

        bullet.setVelocityX(400);

        bullet.body.allowGravity = false;
    }
}

function hitPlayer(player, bullet) {
    bullet.disableBody(true, true); // poistaa kuulan kentältä
    gameOver = true; // asettaa pelin loppuun
    player.setTint(0xff0000); // tekee pelaajasta punaisen, visuaalinen efekti
    player.anims.play('turn'); // pysäyttää animaation

    player.scene.add.text(540, 450, 'GAME OVER', {
        fontSize: '64px',
        fill: '#ff0000'
    }).setOrigin(0.5);

    player.scene.physics.pause();

    backgroundsound.pause();
}

function level2Transition() {
    nextlevelsound.play()
    this.scene.start('Level2')
}
function level3Transition() {
    nextlevelsound.play()
    this.scene.start('Level3')
}