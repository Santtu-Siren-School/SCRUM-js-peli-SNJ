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
    this.load.image('cannon_back', 'assets/textures/cannon_back.png')
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
		if (event.key === "2") {
            nextlevelsound.play()
            this.scene.start('Level2');
            console.log('forced level change2');
		}
	});
    document.addEventListener('keydown', (event)=> {
		if (event.key === "3") {
            nextlevelsound.play()
            this.scene.start('Level3');
            console.log('forced level change3');
		}
	});
    document.addEventListener('keydown', (event)=> {
		if (event.key === "4") {
            nextlevelsound.play()
            this.scene.start('Level4');
            console.log('forced level change4');
		}
	});
    //määritelään cursors phaserin avulla
    cursors = this.input.keyboard.createCursorKeys();
    //asetaa taustakuvan
    this.add.image(910,400, 'background').setScale(1.5);
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
    platforms.create(1240, 230, 'platform').setScale(3).refreshBody();
    platforms.create(1060, 870, 'platform').setScale(3).refreshBody();
    platforms.create(1350, 870, 'platform').setScale(4).refreshBody();
    platforms.create(1070, 700, 'platform').setScale(3).refreshBody();
    //level1 platformien luonti loppuu
    //level1 bottom_of_game luonti
    bottom_of_game.create(100,900, 'bottom_of_game')
    bottom_of_game.create(430,626, 'bottom_of_game').setScale(0.45).refreshBody();
    //level1 bottom_of_game luonti lopuu
    //oven luonti seuraavaan tasoon
    ovi=this.physics.add.staticGroup();
    ovi.create(920,520,'ovi').setScale(0.3).refreshBody();
    // --VIHOLLISEN LUONTI--
const rightPlatform = platforms.getChildren().at(2);
this.enemy = this.physics.add.sprite(
  rightPlatform.x - 10,
  rightPlatform.y - 100,
  'enemy'
);
//vihollisen koko ja elämäpisteet
this.enemy.setScale(2);
this.enemy.body.setSize(this.enemy.width, this.enemy.height);
this.enemy.body.setOffset(0, 0);
this.enemy.lives = 3;

// Käytä Phaserin dataa (stabiilimpi kuin plain property)
// Debug: seuraa kutsuja disableBody-metodille (näytetään pinosta löytyvä trace)
{
  const originalDisable = this.enemy.disableBody?.bind(this.enemy);
  if (originalDisable) {
    this.enemy.disableBody = (...args) => {
      console.groupCollapsed('TRACE: enemy.disableBody called');
      console.trace(); // näyttää kutsupinon
      console.groupEnd();
      return originalDisable(...args);
    };
  }
}

// Colliders
this.physics.add.collider(player, platforms);
this.physics.add.collider(player, bottom_of_game);
this.physics.add.collider(player, knife);
    this.physics.add.collider(knife, platforms, (weapon) => {
    weapon.setVelocity(0, 0);   
    weapon.body.allowGravity = false; 
    weapon.body.immovable = true;     
});
this.physics.add.collider(knife, this.enemy, (weapon, enemy) => {
    if (!enemy.active) {
        return; // Ei tehdä mitään, jos vihollinen on jo kuollut
    }
    enemy.lives -= 1; // Vähennetään vihollisen elämää
    weapon.destroy();  // Poistetaan veitsi

    if (enemy.lives <= 0) {
        // Vihollinen kuolee
        enemy.setTint(0xff0000); // Näyttää vihollisen punaisena hetken
        setTimeout(() => {
            enemy.setTint(0xffffff); // Palautetaan väri takaisin normaaliksi
            enemy.destroy(); // Poistetaan vihollinen
        }, 500); // Vihollinen on punainen 0.5 sekuntia ennen kuin se poistetaan
    }
}, null, this);
// jos puukko osuu alustaan -> pysäytä puukko

    this.enemy.body.setGravityY(300); // lisää painovoima
    this.enemy.setCollideWorldBounds(true); // estää vihollista putoamasta
    this.enemy.setVelocityX(50); // alku nopeus
    this.enemy.direction = 1;

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

    //luodaan tykit ja tehdään niin että se ei tipu vaan pysyy paikallaan
    

 this.cannons = [
    this.physics.add.image(50, 830, 'cannon'),
    this.physics.add.image(50, 200, 'cannon')
    ];

    this.cannons.forEach(c => {
        c.setImmovable(true);
        c.body.allowGravity = false;
    });
bullets = this.physics.add.group({
    defaultKey: 'bullet',
    maxSize: 10000000000
});

    //tykin ampumis aika
   this.time.addEvent({
        delay: 3000,
        callback: () => {
            this.cannons.forEach(c => shootBullet(c, bullets));
        },
        loop: true
    });

// tykki joka ampuu toiseen suuntaan
cannon_back = this.physics.add.image(2000, 550, 'cannon_back');
cannon_back.setImmovable(true);
cannon_back.body.allowGravity = false;

cannon_back_bullets = this.physics.add.group({
    defaultKey: 'bullet',
    maxSize: 10000000000
});

this.time.addEvent({
    delay: 5000,
    callback: () => shootBullet_cannon_back(cannon_back, cannon_back_bullets),
    loop: true
});


// törmäykset luoteihin
this.physics.add.collider(player, bullets, hitPlayer, null, this);
this.physics.add.collider(player, cannon_back_bullets, hitPlayer, null, this);


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
        setTimeout(() => { weapon.destroy(); }, 3000);
        }
    }
        bullets.children.each(b => {
            if (b.active && b.x > 1580) {
                b.disableBody(true, true); 
            }
        });


//vihollisen kääntymis ominaisuus että pysyy platformin päällä
const e = this.enemy;
if (!e || !e.body || !e.active) {
    // Ei vihollista — ohitetaan viholliseen liittyvä logiikka
} else {
    // Reunantunnistus (probe)
const checkDistanceX = e.direction * (e.body.width / 2 + 5);
const probeX = e.x + checkDistanceX;
const probeY = e.y + e.body.height / 2 + 1;
    // Onko maata suoraan edessä?
    let groundAhead = false;
    platforms.getChildren().forEach(p => {
        const left = p.x - p.displayWidth / 2;
        const right = p.x + p.displayWidth / 2;
        const top = p.y - p.displayHeight / 2;

        if (probeX >= left && probeX <= right && Math.abs(probeY - top) < 5) {
            groundAhead = true;
        }
    });

   if (!groundAhead && e.body.blocked.down) {
    e.direction *= -1;
    e.setVelocityX(50 * e.direction);
    e.play(e.direction > 0 ? 'walkRightEnemy' : 'walkLeftEnemy', true);
    }
    if (e.body.blocked.left) {
        e.direction = 1;
        e.setVelocityX(50);
        e.play('walkRightEnemy', true);
    }
    if (e.body.blocked.right) {
        e.direction = -1;
        e.setVelocityX(-50);
        e.play('walkLeftEnemy', true);
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
    this.load.image('platform', 'assets/textures/Platformit.png');
    this.load.image('bottom_of_game', 'assets/textures/bottom_of_game.png');
    this.load.image('dagger', 'assets/textures/tikari.png');
    this.load.image('cannon', 'assets/textures/cannon.png');
    this.load.image('cannon_up', 'assets/textures/cannon_up.png')
    this.load.image('bullet', 'assets/textures/cannon_ball.png');
    this.load.image('ovi','assets/textures/ovi.png')
    this.load.spritesheet('enemy','assets/textures/vihollinen.png',{frameWidth: 32, frameHeight: 42});
    this.load.image('spike','assets/textures/spikes.png');
    }
    
    create (){
    gameOver=false;
    //pakotetaan levelin vaihto level3
    document.addEventListener('keydown', (event)=> {
		if (event.key === "3") {
            nextlevelsound.play()
            this.scene.start('Level3');
            console.log('forced level change 3');
		}
	}); 
    //pakotetaan levelin vaihto level1
    document.addEventListener('keydown', (event)=> {
		if (event.key === "1") {
				nextlevelsound.play()
                this.scene.start('Level1')
				console.log('forced level change1')
		}
	});
    document.addEventListener('keydown', (event)=> {
		if (event.key === "4") {
            nextlevelsound.play()
            this.scene.start('Level4');
            console.log('forced level change4');
		}
	});
    this.lastThrowTime = 0; 
    this.throwCooldown = 1000; 
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

    // Pieni alku-invulnerabiliteetti, jotta mahdolliset välittömät osumat ei aiheuta GAME OVERia
    if (player && player.setData) {
        player.setData('invulnerable', true);
        this.time.delayedCall(500, () => {
            if (player && player.setData) player.setData('invulnerable', false);
        });
    }

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
    this.physics.add.image(228, 380, 'cannon')
    ];

    this.cannons.forEach(c => {
        c.setImmovable(true);
        c.body.allowGravity = false;
    });
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

cannon_up = this.physics.add.image(700, 840, 'cannon_up');
cannon_up.setImmovable(true);
cannon_up.body.allowGravity = false;

cannon_up_bullets = this.physics.add.group({
    defaultKey: 'bullet',
    maxSize: 10000000000
});

this.time.addEvent({
    delay: 5000,
    callback: () => shootBullet_cannon_up(cannon_up, cannon_up_bullets),
    loop: true
});
 this.physics.add.collider(player, cannon_up_bullets, hitPlayer, null, this);
    //note: maxsize kertoo kuinka monta luotia tykki pystyy ampumaan, tähän asti parasvaihto ehto on vain listä vain paljon 0 siihen että riitää
    shoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    // vihollisen luonti
    // -- VIHOLLINEN --
    const rightPlatform = platforms.getChildren().at(-2);
    this.enemy = this.physics.add.sprite(
        rightPlatform.x -20,
        rightPlatform.y - 100,
        'enemy'
    );
    this.enemy.setScale(2);
    this.enemy.body.setSize(this.enemy.width, this.enemy.height);
    this.enemy.body.setOffset(0, 0);

    // Asetetaan vihollisen hp ja muut tarvittavat arvot (kuten Level1:ssä)
    this.enemy.setData('hp', 3);
    this.enemy.setData('isHit', false);
    this.enemy.direction = 1;

    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, bottom_of_game);
    this.physics.add.collider(player, knife);
    this.physics.add.collider(knife, platforms, (weapon) => {
        weapon.setVelocity(0, 0);
        weapon.body.allowGravity = false;
        weapon.body.immovable = true;
    });

    // Turvallinen osuman käsittely knife -> enemy (vähentää hp:tä, ei tuhoa yhdellä osumalla)
    this.physics.add.collider(knife, this.enemy, (weapon, en) => {
        if (!en || !en.active) return;
        let curHp = en.getData('hp');
        if (typeof curHp !== 'number') {
            en.setData('hp', 3);
            curHp = 3;
        }
        if (en.getData('isHit')) {
            if (weapon && weapon.disableBody) weapon.disableBody(true, true);
            else if (weapon && weapon.destroy) weapon.destroy();
            return;
        }
        en.setData('isHit', true);
        if (weapon && weapon.disableBody) weapon.disableBody(true, true);
        else if (weapon && weapon.destroy) weapon.destroy();

        curHp = curHp - 1;
        en.setData('hp', curHp);

        en.setTint(0xff0000);
        this.time.delayedCall(180, () => {
            if (en && en.clearTint) en.clearTint();
            en.setData('isHit', false);
        });

        if (curHp <= 0) {
            en.disableBody(true, true);
        }
    }, null, this);

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

    // piikkien luonti
    this.spikes = this.physics.add.staticGroup();
    this.spikes.create(720, 867, 'spike').setScale(0.8).refreshBody();
    this.spikes.create(1025, 867, 'spike').setScale(0.8).refreshBody();
    this.spikes.create(425, 867, 'spike').setScale(0.8).refreshBody();
    this.physics.add.collider(player, this.spikes, hitBySpike, null, this);

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
         setTimeout(() => { weapon.destroy(); }, 3000);
        }
    }
    
 const e = this.enemy;
if (!e || !e.body || !e.active) {
    // Ei vihollista — ohitetaan viholliseen liittyvä logiikka
} else {
    // Reunantunnistus
    const probeX = e.x + e.direction * (e.width / 2 + 6);
    const probeY = e.body.bottom + 2;
    //const probeY = e.y + e.height / 2 + 2;

    // Onko maata suoraan edessä?
    let groundAhead = false;

    platforms.getChildren().forEach(p => {
        const bounds = p.getBounds();
        // Yksinkertaistettu ja anteeksiantavampi tarkistus
        if (
            probeX >= bounds.left - 5 &&
            probeX <= bounds.right + 5 &&
            probeY >= bounds.top - 10 &&
            probeY <= bounds.top + 25
        ) {
            groundAhead = true;
        }
    });


    // vihollinen ei voi kääntyä jatkuvasti vaan siinä on pakollinen viive

    if (!this.enemy.lastTurnTime) this.enemy.lastTurnTime = 0;
    if (this.time.now - this.enemy.lastTurnTime > 500) {
        if (!groundAhead && e.body.blocked.down) {
            e.direction *= -1;
            e.setVelocityX(50 * e.direction);
            e.play(e.direction > 0 ? 'walkRightEnemy' : 'walkLeftEnemy', true);
            this.enemy.lastTurnTime = this.time.now;
        }
    }

    if (e.body.blocked.left) {
        e.direction = 1;
        e.setVelocityX(50);
        e.play('walkRightEnemy', true);
    }
    if (e.body.blocked.right) {
        e.direction = -1;
        e.setVelocityX(-50);
        e.play('walkLeftEnemy', true);
    }

    

}



    }

    
}
//level3
class Level3 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level3' });}
    preload (){
    this.load.image('cannon_up', 'assets/textures/cannon_up.png')
    this.load.image('dungeon', 'assets/textures/dungeon.png');
    this.load.image('trampoline', 'assets/textures/Trampoline.png')
    this.load.image('wall','assets/textures/wall.png')
    this.load.image('cannon', 'assets/textures/cannon.png');
    this.load.image('dagger', 'assets/textures/tikari.png'); 
    }
    
    create (){
    //pakotetaan levelin vaihto level4
    document.addEventListener('keydown', (event)=> {
		if (event.key === "4") {
            nextlevelsound.play()
            this.scene.start('Level4');
            console.log('forced level change 3');
		}
	});
        document.addEventListener('keydown', (event)=> {
		if (event.key === "2") {
				nextlevelsound.play()
                this.scene.start('Level2')
				console.log('forced level change2')
		}
	});
        document.addEventListener('keydown', (event)=> {
		if (event.key === "1") {
				nextlevelsound.play()
                this.scene.start('Level1')
				console.log('forced level change1')
		}
	}); 
    this.lastThrowTime = 0; 
    this.throwCooldown = 1000; 
        solid_snake_door=this.physics.add.staticGroup(); 
        platforms = this.physics.add.staticGroup();
        bottom_of_game = this.physics.add.staticGroup();
        trampoline=this.physics.add.staticGroup();
        wall=this.physics.add.staticGroup();
        cursors = this.input.keyboard.createCursorKeys();
        this.add.image(1000,400, 'dungeon').setScale(3.5);
        player = this.physics.add.sprite(100, 750, 'main_character');
        player.setCollideWorldBounds(true);
        knife = this.physics.add.group();
        shoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
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
const rightPlatform = platforms.getChildren().at(0);
this.enemy = this.physics.add.sprite(
  rightPlatform.x - 10,
  rightPlatform.y - 100,
  'enemy'
);
this.enemy.setScale(2);
this.enemy.body.setSize(this.enemy.width, this.enemy.height);
this.enemy.body.setOffset(0, 0);
        //invisible,invisible
        solid_snake_door.create(1600,220).setScale(0.001).refreshBody();
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, bottom_of_game);
        this.physics.add.collider(player, wall);
        this.physics.add.collider(player, knife);
    this.physics.add.collider(knife, platforms, (weapon) => {
        weapon.setVelocity(0, 0);
        weapon.body.allowGravity = false;
        weapon.body.immovable = true;
    });
    this.physics.add.collider(knife, wall, (weapon) => {
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
        this.enemy.direction = 1;
        this.physics.add.collider(knife, bottom_of_game);
        this.physics.add.collider(knife, wall);
        this.cameras.main.setBounds(0, 0, 2000, 900);
        this.physics.world.setBounds(0, 0, 2000, 900);
        this.cameras.main.startFollow(player);
        this.physics.add.overlap(player, ovi, level4Transition, null, this);
        this.physics.add.overlap(player, solid_snake_door, level1trhow, null, this);
        //tykin luonti
        this.cannons = [
            this.physics.add.image(620, 420, 'cannon'),
            this.physics.add.image(620, 650, 'cannon'),
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
        //cannon_up luonti
        this.cannons_up = [
            this.physics.add.image(1450, 840, 'cannon_up'),
            this.physics.add.image(1100, 840, 'cannon_up'),
        ];

        this.cannons_up.forEach(c => {
            c.setImmovable(true);
            c.body.allowGravity = false;
        });
        //note: maxsize kertoo kuinka monta luotia tykki pystyy ampumaan, tähän asti parasvaihto ehto on vain listä vain paljon 0 siihen että riitää
        cannon_up_bullets = this.physics.add.group({
            defaultKey: 'bullet',
            maxSize: 10000000000
        });
        this.time.addEvent({
            delay: 1000,
            callback: () => {
                this.cannons_up.forEach(c => shootBullet_cannon_up(c, cannon_up_bullets));
            },
            loop: true
        });
        this.physics.add.collider(player, cannon_up_bullets, hitPlayer, null, this);
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
        const now = this.time.now;
    //knife heittoa
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
    } setTimeout(() => { weapon.destroy(); }, 3000);
        }
    }
    
        this.physics.add.overlap(player, trampoline, trampolinePlayer, null, this);
        const e = this.enemy;
if (!e || !e.body || !e.active) {
    // Ei vihollista — ohitetaan viholliseen liittyvä logiikka
} else {
    // Reunantunnistus (probe)
const checkDistanceX = e.direction * (e.body.width / 2 + 5);
const probeX = e.x + checkDistanceX;
const probeY = e.y + e.body.height / 2 + 1;
    // Onko maata suoraan edessä?
    let groundAhead = false;
    platforms.getChildren().forEach(p => {
        const left = p.x - p.displayWidth / 2;
        const right = p.x + p.displayWidth / 2;
        const top = p.y - p.displayHeight / 2;

        if (probeX >= left && probeX <= right && Math.abs(probeY - top) < 5) {
            groundAhead = true;
        }
    });

   if (!groundAhead && e.body.blocked.down) {
    e.direction *= -1;
    e.setVelocityX(50 * e.direction);
    e.play(e.direction > 0 ? 'walkRightEnemy' : 'walkLeftEnemy', true);
    }
    if (e.body.blocked.left) {
        e.direction = 1;
        e.setVelocityX(50);
        e.play('walkRightEnemy', true);
    }
    if (e.body.blocked.right) {
        e.direction = -1;
        e.setVelocityX(-50);
        e.play('walkLeftEnemy', true);
    }
}


    }

    
}

//level 4
class Level4 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level4' });}
    preload() {
        this.load.image('wind', 'assets/textures/Wind.png');
        this.load.image('spiralsaircase', 'assets/textures/spiralsaircase.png');
        this.load.image('sky', 'assets/textures/sky.jpg');
        this.load.image('trampoline', 'assets/textures/Trampoline.png')
        this.load.image('dagger', 'assets/textures/tikari.png');
        this.load.image('cannon', 'assets/textures/cannon.png');
        this.load.image('cannon_up', 'assets/textures/cannon_up.png')
    }
    create() {
        document.addEventListener('keydown', (event)=> {
		if (event.key === "3") {
            nextlevelsound.play()
            this.scene.start('Level3');
            console.log('forced level change3');
		}
	});
    document.addEventListener('keydown', (event)=> {
		if (event.key === "2") {
            nextlevelsound.play()
            this.scene.start('Level2');
            console.log('forced level change2');
		}
	});
    document.addEventListener('keydown', (event)=> {
		if (event.key === "1") {
            nextlevelsound.play()
            this.scene.start('Level1');
            console.log('forced level change1');
		}
	});
        document.addEventListener('keydown', (event)=> {
		if (event.key === "i") {
            player.setVelocityY(-600);
            console.log('changed players velocity (up,600)');
		}
	    });
        document.addEventListener('keydown', (event)=> {
		if (event.key === "k") {
            player.setVelocityY(600);
            console.log('changed players velocity (down,600)');
		}
	    });
        document.addEventListener('keydown', (event)=> {
		if (event.key === "l") {
            player.setVelocityX(2000);
            console.log('changed players velocity (right,2000)');
		}
	    });
        document.addEventListener('keydown', (event)=> {
		if (event.key === "j") {
            player.setVelocityX(-2000);
            console.log('changed players velocity (left,2000)');
		}
	    });
        this.lastThrowTime = 0; 
        this.throwCooldown = 1000;
        wind=this.physics.add.staticGroup();
        platforms = this.physics.add.staticGroup();
        bottom_of_game = this.physics.add.staticGroup();
        trampoline=this.physics.add.staticGroup();
        low_power_trampoline=this.physics.add.staticGroup();
        wall=this.physics.add.staticGroup();
        cursors = this.input.keyboard.createCursorKeys();
        knife = this.physics.add.group();
        shoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.add.image(0,0,'sky').setScale(10);
        this.add.image(100,1700, 'castle_hallway').setScale(2);
        this.add.image(1700,1700,'spiralsaircase').setScale(3);
        player = this.physics.add.sprite(100, 1950, 'main_character');
        player.setCollideWorldBounds(true);
        bottom_of_game.create(100,2000, 'bottom_of_game')
        bottom_of_game.create(300,2000, 'bottom_of_game')
        bottom_of_game.create(500,2000, 'bottom_of_game')
        bottom_of_game.create(700,2000, 'bottom_of_game')
        bottom_of_game.create(900,2000, 'bottom_of_game')
        bottom_of_game.create(1100,2000, 'bottom_of_game')
        bottom_of_game.create(1300,2000, 'bottom_of_game')
        bottom_of_game.create(1500,2000, 'bottom_of_game')
        bottom_of_game.create(1700,2000, 'bottom_of_game')
        bottom_of_game.create(1900,2000, 'bottom_of_game')
        //
        bottom_of_game.create(100,1300, 'bottom_of_game')
        bottom_of_game.create(300,1300, 'bottom_of_game')
        bottom_of_game.create(500,1300, 'bottom_of_game')
        bottom_of_game.create(700,1300, 'bottom_of_game')
        bottom_of_game.create(900,1300, 'bottom_of_game')
        bottom_of_game.create(1100,1300, 'bottom_of_game')
        bottom_of_game.create(1200,1300, 'bottom_of_game')
        //
        bottom_of_game.create(1230,1600, 'bottom_of_game')
        //
        wall.create(1338,1438, 'wall')
        wall.create(1338,1138, 'wall')
        wall.create(1338,838, 'wall')
        wall.create(1338,538, 'wall')
        wall.create(1338,238, 'wall')
        wall.create(1338,38, 'wall')
        wall.create(0,1900,'wall')
        wall.create(0,1700,'wall')
        wall.create(0,1490,'wall')
        wall.create(440,1700,'wall')
        wall.create(440,2000,'wall')
        //
        trampoline.create(300,1950, 'trampoline').setScale(0.5).refreshBody();
        //
        low_power_trampoline.create(1530,1250, 'trampoline').setScale(0.5).refreshBody();
        low_power_trampoline.create(1530,420, 'trampoline').setScale(0.5).refreshBody();
        //
        platforms.create(500, 1500, 'platform').setScale(2).refreshBody();
        platforms.create(800, 1500, 'platform').setScale(2).refreshBody();
        platforms.create(1100, 1600, 'platform').setScale(2).refreshBody();
        platforms.create(1530, 1870, 'platform').setScale(2).refreshBody();
        platforms.create(1800, 1760, 'platform').setScale(2).refreshBody();
        platforms.create(1530, 1600, 'platform').setScale(2).refreshBody();
        platforms.create(1800, 1450, 'platform').setScale(2).refreshBody();
        platforms.create(1530, 1300, 'platform').setScale(2).refreshBody();
        platforms.create(1800, 920, 'platform').setScale(2).refreshBody();
        platforms.create(1530, 800, 'platform').setScale(2).refreshBody();
        platforms.create(1800,650,'platform').setScale(2).refreshBody();
        platforms.create(1530,500,'platform').setScale(2).refreshBody();
        platforms.create(1800,200,'platform').setScale(2).refreshBody();
        //
        wind.create(1530,710, 'wind').setScale(0.4).refreshBody();
        wind.create(1530,670, 'wind').setScale(0.4).refreshBody();
        wind.create(1530,630, 'wind').setScale(0.4).refreshBody();
        wind.create(1530,1520, 'wind').setScale(0.4).refreshBody();
        wind.create(1800,1370, 'wind').setScale(0.4).refreshBody();
        //
        ovi=this.physics.add.staticGroup();
        //oven luonti
        ovi.create(1800,90,'ovi').setScale(0.3).refreshBody();
        //
        const rightPlatform = platforms.getChildren().at(0);
        this.enemy = this.physics.add.sprite(
        rightPlatform.x - 10,
        rightPlatform.y - 100,
        'enemy'
        );
    this.enemy.setScale(2);
    this.enemy.body.setSize(this.enemy.width, this.enemy.height);
    this.enemy.body.setOffset(0, 0);
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, bottom_of_game);
        this.physics.add.collider(player, wall);
        this.cameras.main.setBounds(0, 0, 2000, 2000);
        this.physics.world.setBounds(0, 0, 2000, 2000);
        this.cameras.main.startFollow(player);
        this.physics.add.overlap(player, trampoline, trampolinePlayer, null, this);
        this.physics.add.overlap(player, low_power_trampoline, low_power_trampolinePlayer, null, this);
        this.physics.add.overlap(player, wind, windPlayer, null, this);
        this.physics.add.collider(player, knife);
    this.physics.add.collider(knife, platforms, (weapon) => {
        weapon.setVelocity(0, 0);
        weapon.body.allowGravity = false;
        weapon.body.immovable = true;
    });
    this.physics.add.collider(knife, wall, (weapon) => {
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
        this.enemy.direction = 1;
        this.physics.add.collider(knife, bottom_of_game);
        this.physics.add.collider(knife, wall);
        //tykin luonti
        this.cannons = [
            this.physics.add.image(20, 1350, 'cannon'),
            this.physics.add.image(500, 1900, 'cannon'),
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
            delay: 2000,
            callback: () => {
                this.cannons.forEach(c => shootBullet(c, bullets));
            },
            loop: true
        });
        this.physics.add.collider(player, bullets, hitPlayer, null, this);
        //cannon_up luonti
        this.cannons_up = [
            this.physics.add.image(600, 1950, 'cannon_up'),
            this.physics.add.image(640, 1950, 'cannon_up'),
            this.physics.add.image(680, 1950, 'cannon_up'),
            this.physics.add.image(1700, 1950, 'cannon_up'),
            this.physics.add.image(1950, 1950, 'cannon_up'),
        ];

        this.cannons_up.forEach(c => {
            c.setImmovable(true);
            c.body.allowGravity = false;
        });
        //note: maxsize kertoo kuinka monta luotia tykki pystyy ampumaan, tähän asti parasvaihto ehto on vain listä vain paljon 0 siihen että riitää
        cannon_up_bullets = this.physics.add.group({
            defaultKey: 'bullet',
            maxSize: 10000000000
        });
        this.time.addEvent({
            delay: 1200,
            callback: () => {
                this.cannons_up.forEach(c => shootBullet_cannon_up(c, cannon_up_bullets));
            },
            loop: true
        });
        this.physics.add.collider(player, cannon_up_bullets, hitPlayer, null, this);
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
    update(){
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
            if (player.windActive) {
                const windAcceleration = 10;
                const maxWindSpeed = 200;
                if (player.body.velocity.x < maxWindSpeed) {
                    player.setVelocityX(player.body.velocity.x + windAcceleration);
                }
            }
            else {
            player.setVelocityX(0)
            player.anims.play('turn');
            }
        }

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
         setTimeout(() => { weapon.destroy(); }, 3000);
        }
        
    }
   const e = this.enemy;
if (!e || !e.body || !e.active) {
    // Ei vihollista — ohitetaan viholliseen liittyvä logiikka
} else {
    // Reunantunnistus (probe)
const checkDistanceX = e.direction * (e.body.width / 2 + 5);
const probeX = e.x + checkDistanceX;
const probeY = e.y + e.body.height / 2 + 1;
    // Onko maata suoraan edessä?
    let groundAhead = false;
    platforms.getChildren().forEach(p => {
        const left = p.x - p.displayWidth / 2;
        const right = p.x + p.displayWidth / 2;
        const top = p.y - p.displayHeight / 2;

        if (probeX >= left && probeX <= right && Math.abs(probeY - top) < 5) {
            groundAhead = true;
        }
    });

   if (!groundAhead && e.body.blocked.down) {
    e.direction *= -1;
    e.setVelocityX(50 * e.direction);
    e.play(e.direction > 0 ? 'walkRightEnemy' : 'walkLeftEnemy', true);
    }
    if (e.body.blocked.left) {
        e.direction = 1;
        e.setVelocityX(50);
        e.play('walkRightEnemy', true);
    }
    if (e.body.blocked.right) {
        e.direction = -1;
        e.setVelocityX(-50);
        e.play('walkLeftEnemy', true);
    }
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
    scene: [Level1,Level2,Level3,Level4]
};
var solid_snake_door;
var wind;
var cannon_up;
var cannon_up_bullets;
var cannon_back;
var cannon_back_bullets;
var wall;
var trampoline;
var low_power_trampoline;
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
function shootBullet_cannon_up(cannon_upInstance, cannon_up_bulletsGroup) {
    const c = cannon_upInstance;
    const cannon_up_bullets = cannon_up_bulletsGroup.get();  // käytetään parametrina annettua ryhmää
    if (cannon_up_bullets) {
        cannon_up_bullets.enableBody(true, c.x, c.y-40, true, true);
        cannon_up_bullets.setVelocityY(-400);
        cannon_up_bullets.body.allowGravity = false;
    }
}
function shootBullet_cannon_back(cannon_backInstance, cannon_back_bulletsGroup) {
    const c = cannon_backInstance;
    const cannon_back_bullets = cannon_back_bulletsGroup.get();  // käytetään parametrina annettua ryhmää
    if (cannon_back_bullets) {
        cannon_back_bullets.enableBody(true, c.x, c.y-40, true, true);
        cannon_back_bullets.setVelocityX(-400);
        cannon_back_bullets.body.allowGravity = false;
    }
}


function hitPlayer(player, bullet) {
    // Jos pelaajalla on invulnerabiliteetti (esim. juuri spawnattu taso), ohitetaan osuma
    if (player && player.getData && player.getData('invulnerable')) {
        if (bullet && bullet.disableBody) bullet.disableBody(true, true);
        return;
    }
    this.scene.start(this.scene.key)
}

function level2Transition() {
    nextlevelsound.play()
    this.scene.start('Level2')
}
function level3Transition() {
    nextlevelsound.play()
    this.scene.start('Level3')
}
function level4Transition() {
    nextlevelsound.play()
    this.scene.start('Level4')
}
function hitByEnemy(player, enemy) {
    this.scene.start(this.scene.key)
}
function trampolinePlayer(player, trampoline) {
    player.setVelocityY(-600);
}
function low_power_trampolinePlayer(player, low_power_trampoline) {
    player.setVelocityY(-450);
}
function hitBySpike(player, spike) {
    this.scene.start(this.scene.key)
}
function windPlayer(player, wind) {
    //console.log("player has activated wind at",wind);
    player.windActive = true;
    setTimeout(() => { player.windActive = false; }, 10);
}
function level1trhow(player, solid_snake_door) {
    this.scene.start('Level1')
}