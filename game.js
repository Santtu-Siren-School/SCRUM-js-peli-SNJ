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
    this.load.spritesheet('enemy','assets/textures/vihollinen.png',{frameWidth: 32, frameHeight: 42});
    }
    create (){
    //knifin cooldownin laatiminen
    this.lastThrowTime = 0; 
    this.throwCooldown = 1000; 
    //Pakkotaa levelin vaihdon level2
    document.addEventListener('keydown', (event)=> {
		if (event.key === "ä") {
            nextlevelsound.play()
            this.scene.start('Level2');
            console.log('forced level change');
		}
	});
    //määritelään cursors phaserin avulla
    cursors = this.input.keyboard.createCursorKeys();
    //asetaa taustakuvan
    this.add.image(500,400, 'background').setScale(6);
    //lisää player hahmoon spire sheetin
    player = this.physics.add.sprite(100, 750, 'main_character');
    //asetaa pelaajan collisoinin mailman seinien kanssa
	player.setCollideWorldBounds(true);
    //määritelään knife
    knife = this.physics.add.group();
    //määritelee platforms staatiseksi
    platforms = this.physics.add.staticGroup();
    //määritelee bottom_of_game staatiseksi
    bottom_of_game = this.physics.add.staticGroup();
    //level1 platformien luonti
    platforms.create(350, 870, 'platform').setScale(3).refreshBody();
    platforms.create(80, 700, 'platform').setScale(2).refreshBody();
	platforms.create(300, 580, 'platform').setScale(2).refreshBody();
	platforms.create(720, 730, 'platform').setScale(6).refreshBody();
    platforms.create(780, 480, 'platform').setScale(3).refreshBody();
    platforms.create(990, 320, 'platform').setScale(3).refreshBody();
    platforms.create(1250, 230, 'platform').setScale(3).refreshBody();
    platforms.create(1060, 870, 'platform').setScale(3).refreshBody();
    platforms.create(1350, 870, 'platform').setScale(4).refreshBody();
    platforms.create(1070, 700, 'platform').setScale(3).refreshBody();
    //level1 platformien luonti loppuu
    //level1 bottom_of_game luonti
    bottom_of_game.create(100,900, 'bottom_of_game')
    //level1 bottom_of_game luonti lopuu
    //oven luonti seuraavaan tasoon
    ovi=this.physics.add.staticGroup();
    ovi.create(920,520,'ovi').setScale(0.3).refreshBody();
    // --VIHOLLISEN LUONTI--
    const rightPlatform = platforms.getChildren().at(-5);
    this.enemy = this.physics.add.sprite(
        rightPlatform.x -20,
        rightPlatform.y - 200,
        'enemy'
    );
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, bottom_of_game);
    this.physics.add.collider(player, knife);
    this.physics.add.collider(knife, platforms, (weapon) => {
        weapon.setVelocity(0, 0);
        weapon.body.allowGravity = false;
        weapon.body.immovable = true;
    });
    this.physics.add.collider(knife, this.enemy, (weapon, enemy) => {
    enemy.disableBody(true, true);
    weapon.destroy(); 
});

    this.enemy.body.setGravityY(300); // lisää painovoima
    this.enemy.setCollideWorldBounds(true); // estää vihollista putoamasta
    this.enemy.setVelocityX(50); // alku nopeus

    this.physics.add.collider(knife, bottom_of_game);
    //määritelään Pelaajan liikumis animaatiot
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
    //Pelaajan liikumisen animaatio määritely pätyy
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
        callback: () => shootBullet(cannon, bullets),
        loop: true
    });


    this.physics.add.collider(player, bullets, hitPlayer, null, this);

    //vihollisen fysiikat
    this.physics.add.collider(this.enemy, platforms);
    this.physics.add.collider(player, this.enemy, hitByEnemy, null, this); 

    //vihollisen animaatiot
    this.anims.create({
    key: 'walkLeftEnemy',
    frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 3 }),
    frameRate: 8,
    repeat: -1
    });
    this.anims.create({
        key: 'idleEnemy',
        frames: [{ key: 'enemy', frame: 4 }],
        frameRate: 1
    });
    this.anims.create({
        key: 'walkRightEnemy',
        frames: this.anims.generateFrameNumbers('enemy', { start: 5, end: 8 }),
        frameRate: 8,
        repeat: -1
    });

    this.enemy.play('walkRightEnemy');


    }

    update (){
    //katsoo onko peli loppunut
    if (gameOver == true)
	{
		this.physics.pause();
		backgroundsound.pause();
		player.anims.play('jump');
		return;
	}
    backgroundsound.play()
    //märitelään pelaajaan liityvää liikumista ja animaation pelausta
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
    else if (cursors.down.isDown) {
            player.setVelocityY(300);
            player.anims.play('jump');
        }  
    else {
        player.setVelocityX(0);
        player.anims.play('turn');
    }
    //märitelään pelaajaan liityvää liikumista ja animaation pelausta lopuu
    //????
    if (Phaser.Input.Keyboard.JustDown(shoot)) {
        const now = this.time.now;
    //knifing heittoa
    if (now - this.lastThrowTime > this.throwCooldown) {
        this.lastThrowTime = now; 
            let offset = -30;
            let spawnX = player.x + (facingRight ? offset : -offset);
            let weapon = knife.create(spawnX, player.y, 'dagger');
            weapon.setScale(0.1);
            weapon.setVelocityX(300); 
            weapon.setGravityY(-200);
             if (facingRight) {
        weapon.setVelocityX(300);
    } else {
        weapon.setVelocityX(-300);
        weapon.flipX = true; 
    }
            setTimeout(() => {
                weapon.destroy();
            }, 3000);
        }
        bullets.children.each(b => {
            if (b.active && b.x > 1580) {
                b.disableBody(true, true); 
            }
        });
        //jotakin viholisen lookumiseen liityen??
        const e = this.enemy;
        const dir = Math.sign(e.body.velocity.x) || 1;

        const probeX = e.x + dir * (e.width / 2 + 2);
        const probeY = e.y + e.height / 2 + 5;

        const groundAhead = platforms.getChildren().some(p => {
            return (
                probeX >= p.x - p.displayWidth / 2 &&
                probeX <= p.x + p.displayWidth / 2 &&
                probeY >= p.y - p.displayHeight / 2 &&
                probeY <= p.y + p.displayHeight / 2
            );
        });

        if (!groundAhead && e.body.blocked.down) {
            e.setVelocityX(-e.body.velocity.x);
            if (dir > 0) e.anims.play('walkLeftEnemy', true);
            else e.anims.play('walkRightEnemy', true);
        }

        if (e.body.blocked.left) {
            e.setVelocityX(50);
            e.anims.play('walkRightEnemy', true);
        }
        if (e.body.blocked.right) {
            e.setVelocityX(-50);
            e.anims.play('walkLeftEnemy', true);
        }

    }

    
}
}
//level2
class Level2 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level2' });}
    preload (){
    this.load.image('castle_hallway', 'assets/textures/castle_hallway.jpg');
    this.load.spritesheet('main_character','assets/textures/tikku_hahmo.png',{frameWidth: 28, frameHeight: 42});
    }
    
    create (){
    //pakotetaan levelin vaihto level3
    document.addEventListener('keydown', (event)=> {
		if (event.key === "ä") {
            nextlevelsound.play()
            this.scene.start('Level3');
            console.log('forced level change 2');
		}
	}); 
    //pakotetaan levelin vaihto level1
    document.addEventListener('keydown', (event)=> {
		if (event.key === "q") {
				nextlevelsound.play()
                this.scene.start('Level1')
				console.log('forced level change')
		}
	});
    //määritelään knife
    knife = this.physics.add.group();
    //määritelään platformit staatiseksi
    platforms = this.physics.add.staticGroup();
    //määritelään bottom_of_game staatiseksi
    bottom_of_game = this.physics.add.staticGroup();
    //määritelään cursors phaserin avulla
    cursors = this.input.keyboard.createCursorKeys();
    //lisätiin background kuva
    this.add.image(500,400, 'castle_hallway').setScale(3);
    //määritelään pelaajan spritesheet
    player = this.physics.add.sprite(100, 750, 'main_character');
    //määritelään pelaajan pysähtyminen mailman seiniin
	player.setCollideWorldBounds(true);
    //level2 platformien luonti
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
    //level2 platformien luonti päätyy
    //level2 bottom_of_game tekeminen
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
    //level2 bottom_of_game tekeminen
    //määritelään ovi
    ovi=this.physics.add.staticGroup();
    //oven luonti
    ovi.create(100,250,'ovi').setScale(0.3).refreshBody();
    this.physics.add.overlap(player, ovi, level3Transition, null, this);
    this.cameras.main.setBounds(0, 0, 2000, 900);
	this.physics.world.setBounds(0, 0, 2000, 900);
	this.cameras.main.startFollow(player);
    this.physics.add.collider(knife, bottom_of_game);
    // tykkien luonti
    this.cannons = [
    this.physics.add.image(50, 700, 'cannon'),
    this.physics.add.image(228, 350, 'cannon')
    ];

    this.cannons.forEach(c => {
        c.setImmovable(true);
        c.body.allowGravity = false;
    });
    //note: maxsize kertoo kuinka monta luotia tykki pystyy ampumaan, tähän asti parasvaihto ehto on vain listä vain paljon 0 siihen että riitää
    bullets = this.physics.add.group({
        defaultKey: 'bullet',
        maxSize: 10000000000
    });
    this.time.addEvent({
        delay: 3000,
        callback: () => {
            this.cannons.forEach(c => shootBullet(c, bullets));
        },
        loop: true
    });
    this.physics.add.collider(player, bullets, hitPlayer, null, this);
    shoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    // vihollisen luonti
    // -- VIHOLLINEN --
    const rightPlatform = platforms.getChildren().at(-2);
    this.enemy = this.physics.add.sprite(
        rightPlatform.x -20,
        rightPlatform.y - 100,
        'enemy'
    );
     this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, bottom_of_game);
    this.physics.add.collider(player, knife);
    this.physics.add.collider(knife, platforms, (weapon) => {
        weapon.setVelocity(0, 0);
        weapon.body.allowGravity = false;
        weapon.body.immovable = true;
    });
    this.physics.add.collider(knife, this.enemy, (weapon, enemy) => {
    enemy.disableBody(true, true);
    weapon.destroy(); 
});
    // fysiikka
    this.enemy.body.setGravityY(300);
    this.enemy.setCollideWorldBounds(true);
    this.enemy.setVelocityX(50);

    this.physics.add.collider(this.enemy, platforms);

    // vihollisen kosketus tappaa
    this.physics.add.collider(player, this.enemy, hitByEnemy, null, this);

    // --ANIMAATIOT VIHOLLISILLE--
    this.anims.create({
        key: 'walkLeftEnemy',
        frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 3 }),
        frameRate: 8,
        repeat: -1
    });

    this.anims.create({
        key: 'idleEnemy',
        frames: [{ key: 'enemy', frame: 4 }],
        frameRate: 1
    });

    this.anims.create({
        key: 'walkRightEnemy',
        frames: this.anims.generateFrameNumbers('enemy', {start: 5, end: 8}),
        frameRate: 8,
        repeat: -1
    });

    this.enemy.play('walkRightEnemy');

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
        else if (cursors.down.isDown) {
            player.setVelocityY(300);
            player.anims.play('jump');
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
            weapon.setVelocityX(300); 
            weapon.setGravityY(-200);
             if (facingRight) {
        weapon.setVelocityX(300);
    } else {
        weapon.setVelocityX(-300);
        weapon.flipX = true; 
    }
            setTimeout(() => {
                weapon.destroy();
            }, 3000);
        }

        const e = this.enemy;
        const dir = Math.sign(e.body.velocity.x) || 1;

        // Pieni testipiste vihollisen etureunassa
        const probeX = e.x + dir * (e.width / 2 + 2);
        const probeY = e.y + e.height / 2 + 5;

        // Tarkista onko maata edessä
        const groundAhead = platforms.getChildren().some(p => {
        return (
            probeX >= p.x - p.displayWidth / 2 &&
            probeX <= p.x + p.displayWidth / 2 &&
            probeY >= p.y - p.displayHeight / 2 &&
            probeY <= p.y + p.displayHeight / 2
        );
        });

        // jos ei maata edessä → käänny
        if (!groundAhead && e.body.blocked.down) {
        e.setVelocityX(-e.body.velocity.x);
        if (dir > 0) e.anims.play('walkLeftEnemy', true);
        else e.anims.play('walkRightEnemy', true);
        }

        // jos osuu seinään → käänny
        if (e.body.blocked.left) {
        e.setVelocityX(50);
        e.anims.play('walkRightEnemy', true);
        }
        if (e.body.blocked.right) {
        e.setVelocityX(-50);
        e.anims.play('walkLeftEnemy', true);
        }

    }
    
}
//level3
class Level3 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level3' });}
    preload (){
    this.load.image('dungeon', 'assets/textures/dungeon.png');
    this.load.image('trampoline', 'assets/textures/Trampoline.png')
    this.load.image('wall','assets/textures/wall.png')
    }
    
    create (){
        platforms = this.physics.add.staticGroup();
        bottom_of_game = this.physics.add.staticGroup();
        trampoline=this.physics.add.staticGroup();
        wall=this.physics.add.staticGroup();
        cursors = this.input.keyboard.createCursorKeys();
        this.add.image(1000,400, 'dungeon').setScale(3.5);
        player = this.physics.add.sprite(100, 750, 'main_character');
        player.setCollideWorldBounds(true);
        knife = this.physics.add.group();
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
        wall.create(443,455,'wall')
        wall.create(557,455,'wall')
        wall.create(443,755,'wall')
        wall.create(557,755,'wall')
        wall.create(1245,100,'wall')
        wall.create(1700,840,'wall')
        trampoline.create(300,850, 'trampoline').setScale(0.4).refreshBody();
        trampoline.create(650,850, 'trampoline').setScale(0.4).refreshBody();
        trampoline.create(1800,850, 'trampoline').setScale(0.4).refreshBody();
        platforms.create(500,230,'platform').setScale(2).refreshBody();
        platforms.create(900,530,'platform').setScale(2).refreshBody();
        platforms.create(1300,730,'platform').setScale(2).refreshBody();
        platforms.create(1600,730,'platform').setScale(2).refreshBody();
        platforms.create(1600,330,'platform').setScale(2).refreshBody();
        platforms.create(1300,300,'platform').setScale(2).refreshBody();
        ovi=this.physics.add.staticGroup();
        //oven luonti
        ovi.create(1300,195,'ovi').setScale(0.3).refreshBody();
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, bottom_of_game);
        this.physics.add.collider(player, wall);
        this.physics.add.collider(player, knife);
        this.cameras.main.setBounds(0, 0, 2000, 900);
        this.physics.world.setBounds(0, 0, 2000, 900);
        this.cameras.main.startFollow(player);
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
        else if (cursors.down.isDown) {
            player.setVelocityY(300);
            player.anims.play('jump');
        } 
        else {
            player.setVelocityX(0);
            player.anims.play('turn');
        }
        this.physics.add.overlap(player, trampoline, trampolinePlayer, null, this);
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
    scene: [Level1,Level2,Level3]
};
var wall;
var trampoline;
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
function shootBullet(cannonInstance, bulletsGroup) {
    const c = cannonInstance;
    const bullet = bulletsGroup.get();  // käytetään parametrina annettua ryhmää
    if (bullet) {
        bullet.enableBody(true, c.x + 40, c.y, true, true);
        bullet.setVelocityX(400);
        bullet.body.allowGravity = false;
    }
}


function hitPlayer(player, bullet) {
    bullet.disableBody(true, true); // poistaa kuulan kentältä
    gameOver = true; // asettaa pelin loppuun
    player.setTint(0xff0000); // tekee pelaajasta punaisen, visuaalinen efekti
    player.anims.play('turn'); // pysäyttää animaation

    player.scene.add.text(player.x, player.y, 'GAME OVER', {
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

function hitByEnemy(player, enemy) {
  gameOver = true;
  player.setTint(0xff0000);
  player.anims.play('turn');
  player.scene.add.text(540, 450, 'GAME OVER', {
    fontSize: '64px',
    fill: '#ff0000'
  }).setOrigin(0.5);

  player.scene.physics.pause();
  backgroundsound.pause();
}
function trampolinePlayer(player, trampoline) {
    player.setVelocityY(-600);
}