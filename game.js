//intro
class Intro extends Phaser.Scene {
    constructor() {
        super({ key: 'Intro' });}
                preload (){
            //kaikki textuurien lataus tänne
            this.load.image('background', 'assets/textures/background.png');
            this.load.spritesheet('main_character','assets/textures/tikku_hahmo.png',{frameWidth: 30, frameHeight: 42});
            this.load.image('platform', 'assets/textures/Platformit.png');
            this.load.image('bottom_of_game', 'assets/textures/bottom_of_game.png');
            this.load.image('dagger', 'assets/textures/tikari.png');
            this.load.image('dagger2', 'assets/textures/tikari2.png');
            this.load.image('cannon', 'assets/textures/cannon.png');
            this.load.image('cannon_back', 'assets/textures/cannon_back.png')
            this.load.image('bullet', 'assets/textures/cannon_ball.png');
            this.load.image('ovi','assets/textures/ovi.png');
            this.load.image('dungeon','assets/textures/dungeon.png');
            this.load.spritesheet('enemy','assets/textures/vihollinen.png',{frameWidth: 32, frameHeight: 42});
            this.load.image('castle_hallway', 'assets/textures/castle_hallway.jpg');
            this.load.image('cannon_up', 'assets/textures/cannon_up.png');
            this.load.image('spike','assets/textures/spikes.png');
            this.load.image('dungeon', 'assets/textures/dungeon.png');
            this.load.image('trampoline', 'assets/textures/Trampoline.png')
            this.load.image('wall','assets/textures/wall.png');
            this.load.image('wind', 'assets/textures/Wind.png');
            this.load.image('spiralsaircase', 'assets/textures/spiralsaircase.png');
            this.load.image('sky', 'assets/textures/sky.jpg');
            this.load.image('tower_thingy1', 'assets/textures/tower_thingy_1.png');
            this.load.image('tower_thingy3', 'assets/textures/tower_thingy_3.png');
            this.load.image('tower_thingy2', 'assets/textures/tower_thingy_2.png');
            this.load.image('tower_thingy4', 'assets/textures/tower_thingy_4.png');
            this.load.image('sky_level5', 'assets/textures/boosfight_background_sunset.png');
            this.load.image('level5_level1', 'assets/textures/level5_level1.png')
            this.load.image('solid_snake','assets/textures/solid-snake.jpg')
            this.load.spritesheet('boss_level5','assets/textures/boss-spirehseet.png',{frameWidth: 37, frameHeight: 42})
            this.load.image('dialogue1_boss','assets/textures/Boss_fight_dialogue1.png')
            this.load.image('dialogue2_boss','assets/textures/Boss_fight_dialogue2.png')
            this.load.image('dialogue3_boss','assets/textures/Boss_fight_dialogue3.png')
            this.load.image('dialogue4_boss','assets/textures/Boss_fight_dialogue4.png')
            this.load.image('dialogue5_boss','assets/textures/Boss_fight_dialogue5.png')
            this.load.image('dialogue6_boss','assets/textures/Boss_fight_dialogue6.png')
            this.load.image('dialogue7_boss','assets/textures/Boss_fight_dialogue7.png')
            this.load.image('dialogue8_boss','assets/textures/Boss_fight_dialogue8.png')
            this.load.image('dialogue9_boss','assets/textures/Boss_fight_dialogue9.png')
            this.load.image('dialogue10_boss','assets/textures/Boss_fight_dialogue10.png')
            this.load.image('dialogue11_boss','assets/textures/Boss_fight_dialogue11.png')
            this.load.image('fireball','assets/textures/fireball.png')
            this.load.image('level1','assets/textures/level1_button.png')
            this.load.image('level2','assets/textures/level2_button.png')
            this.load.image('level3','assets/textures/level3_button.png')
            this.load.image('level4','assets/textures/level4_button.png')
            this.load.image('level5','assets/textures/level5_button.png')
            this.load.image('boss_wall', 'assets/textures/boss_wall.png')
            this.load.image('boss_spike', 'assets/textures/spikes_boss.png')
            this.load.image('lightbeam', 'assets/textures/lightbeam.png')
            this.load.image('cutscene_knife1', 'assets/textures/cutscene_knife.png')
            this.load.image('cutscene_knife2', 'assets/textures/cutscene_knife2.png')
            this.load.image('cutscene_knife3', 'assets/textures/cutscene_knife3.png')
            this.load.image('cutscene_knife4', 'assets/textures/cutscene_knife4.png')
            this.load.image('cutscene_knife5', 'assets/textures/cutscene_knife5.png')
            this.load.image('cutscene_knife6', 'assets/textures/cutscene_knife6.png')
            this.load.image('cutscene_knife7', 'assets/textures/cutscene_knife7.png')
            this.load.image('cutscene_knife8', 'assets/textures/cutscene_knife8.png')
            this.load.image('cutscene_knife9', 'assets/textures/cutscene_knife9.png')
            this.load.image('cutscene_knife10', 'assets/textures/cutscene_knife10.png')
            this.load.image('cutscene_knife11', 'assets/textures/cutscene_knife11.png')
            this.load.image('cutscene_knife12', 'assets/textures/cutscene_knife12.png')
            this.load.image('cutscene_knife13', 'assets/textures/cutscene_knife13.png')
            this.load.image('cutscene_knife14', 'assets/textures/cutscene_knife14.png')
            this.load.image('cutscene_knife15', 'assets/textures/cutscene_knife15.png')
            this.load.image('cutscene_knife16', 'assets/textures/cutscene_knife16.png')
            this.load.image('cutscene_knife17', 'assets/textures/cutscene_knife17.png')
            this.load.image('cutscene_knife18', 'assets/textures/cutscene_knife18.png')
            this.load.image('cutscene_knife19', 'assets/textures/cutscene_knife19.png')
            this.load.image('cutscene_knife20', 'assets/textures/cutscene_knife20.png')
            this.load.image('cutscene_knife21', 'assets/textures/cutscene_knife21.png')
            this.load.image('cutscene_knife22', 'assets/textures/cutscene_knife22.png')
            this.load.image('cutscene_knife23', 'assets/textures/cutscene_knife23.png')
            this.load.image('cutscene_knife24', 'assets/textures/cutscene_knife24.png')
            this.load.image('end1_0', 'assets/textures/cutscene_end1_0.png')
            this.load.image('end1_1', 'assets/textures/cutscene_end1_1.png')
            this.load.image('end1_2', 'assets/textures/cutscene_end1_2.png')
            this.load.image('end1_3', 'assets/textures/cutscene_end1_3.png')
            this.load.image('end1_4', 'assets/textures/cutscene_end1_4.png')
            this.load.image('end1_5', 'assets/textures/cutscene_end1_5.png')
            this.load.image('end1_6', 'assets/textures/cutscene_end1_6.png')
            this.load.image('end1_7', 'assets/textures/cutscene_end1_7.png')
            this.load.image('intro_1','assets/textures/intro_cutscene_1.png')
            this.load.image('intro_2','assets/textures/intro_cutscene_2.png')
            this.load.image('intro_3','assets/textures/intro_cutscene_3.png')
            this.load.image('tutorial', 'assets/textures/tutorial_button.png')
            this.load.image('tutorial_background', 'assets/textures/tutorial_background.png')
            this.load.image('credit_screen', 'assets/textures/credit_Screen.png')
            this.load.image('end2_1', 'assets/textures/cutscene_end2_1.png')
            this.load.image('end2_2', 'assets/textures/cutscene_end2_2.png')
            this.load.image('end2_3', 'assets/textures/cutscene_end2_3.png')
            this.load.image('end2_4', 'assets/textures/cutscene_end2_4.png')
            this.load.image('end2_5', 'assets/textures/cutscene_end2_5.png')
            this.load.image('end2_6', 'assets/textures/cutscene_end2_6.png')
            this.load.image('end2_7', 'assets/textures/cutscene_end2_7.png')
            this.load.image('end2_8', 'assets/textures/cutscene_end2_8.png')
            this.load.image('end2_9', 'assets/textures/cutscene_end2_9.png')
            this.load.image('end2_10', 'assets/textures/cutscene_end2_10.png')
            this.load.image('end2_11', 'assets/textures/cutscene_end2_11.png')
            this.load.image('end2_12', 'assets/textures/cutscene_end2_12.png')
            this.load.image('end2_13', 'assets/textures/cutscene_end2_13.png')
            this.load.image('end2_14', 'assets/textures/cutscene_end2_14.png')
            this.load.image('end2_1D', 'assets/textures/cutscene_end2_1D.png')
            this.load.image('end2_2D', 'assets/textures/cutscene_end2_2D.png')
        }
        create() {
            let intro1img=this.add.image(550,500, 'intro_1').setScale(0.6);
            setTimeout(() => {intro1img.destroy(); let intro2img=this.add.image(550,500,'intro_2').setScale(0.6);setTimeout(() => {intro2img.destroy(); let intro3img=this.add.image(550,500,'intro_3').setScale(0.6);setTimeout(() => {intro3img.destroy();this.scene.start('MainMenu')}, 3000); }, 3000); }, 3000); 
        }
}
//mainmenu
class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenu' });}
        create(){
            this.add.image(1000,1000, 'sky_level5').setScale(1);
            const level1_button=this.add.image(100,100,'level1').setInteractive();
            const level2_button=this.add.image(200,100,'level2').setInteractive();
            const level3_button=this.add.image(300,100,'level3').setInteractive();
            const level4_button=this.add.image(400,100,'level4').setInteractive();
            const level5_button=this.add.image(500,100,'level5').setInteractive();
            const cutscene_knife_button=this.add.image(100,200,'level1').setInteractive();
            const end1_button=this.add.image(200,200,'level2').setInteractive();
            const tutorial_button=this.add.image(300,200,'tutorial').setInteractive();
            const credit_button=this.add.image(400,200,'level3').setInteractive();
            const end2_button=this.add.image(500,200,'level4').setInteractive();
            level1_button.on('pointerdown', () => {
                this.scene.start('Level1'),
                console.log("game start at level1");
            });
            level2_button.on('pointerdown', () => {
                this.scene.start('Level2'),
                console.log("game start at level2");
            });
            level3_button.on('pointerdown', () => {
                this.scene.start('Level3'),
                console.log("game start at level3");
            });
            level4_button.on('pointerdown', () => {
                this.scene.start('Level4'),
                console.log("game start at level4");
            });
            level5_button.on('pointerdown', () => {
                this.scene.start('Level5'),
                console.log("game start at level5");
            });
            cutscene_knife_button.on('pointerdown', () => {
                this.scene.start('Cutscene_knife'),
                console.log("Cutscene_knife_play");
            });
            end1_button.on('pointerdown', () => {
                this.scene.start('end1'),
                console.log("end1_play");
            });
            credit_button.on('pointerdown', () => {
                this.scene.start('credit_scene'),
                console.log("credit_scene");
            });
              tutorial_button.on('pointerdown', () => {
                this.scene.start('tutorial'),
                console.log("tutorial");
            });
            end2_button.on('pointerdown', () => {
                this.scene.start('end2'),
                console.log("end2_play");
            });
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
            //boss animaatiota
            this.anims.create({
                key: 'idlebossphase1',
                frames: [{ key: 'boss_level5', frame: 3 }],
            });
            this.anims.create({
                key: 'idlebossphase2',
                frames: [{ key: 'boss_level5', frame: 4 }],
            });
            this.anims.create({
                key: 'bossphase1attack',
                frames: this.anims.generateFrameNumbers('boss_level5', { start: 0, end: 2 }),
                frameRate: 2,
                repeat: -1
            });
            this.anims.create({
                key: 'bossphase2attack',
                frames: this.anims.generateFrameNumbers('boss_level5', { start: 4, end: 6 }),
                frameRate: 2,
                repeat: 1
            });
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
        }
        update(){}
}
class Tutorial extends Phaser.Scene {
    constructor() {
        super({ key: 'tutorial' });}
    preload (){
    }
    create (){
    //knife cooldownin laatiminen
    this.lastThrowTime = 0; 
    this.throwCooldown = 1000;
    //määritelään cursors phaserin avulla
    cursors = this.input.keyboard.createCursorKeys();
    //asetaa taustakuvan
    this.add.image(4740,-700, 'tutorial_background').setScale(5.5);
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
    //tutorial platformien luonti
    platforms.create(2550, 770, 'platform').setScale(3).refreshBody();
    platforms.create(4200, 770, 'platform').setScale(3).refreshBody();
    platforms.create(6000, 670, 'platform').setScale(6).refreshBody();
    platforms.create(6000, 470, 'platform').setScale(6).refreshBody();
    platforms.create(6200, 670, 'platform').setScale(6).refreshBody();
    platforms.create(6200, 470, 'platform').setScale(6).refreshBody();
    platforms.create(6500, 670, 'platform').setScale(6).refreshBody();
    platforms.create(6500, 470, 'platform').setScale(6).refreshBody();
    platforms.create(5650, 770, 'platform').setScale(3).refreshBody();
    platforms.create(5350, 610, 'platform').setScale(3).refreshBody();
    platforms.create(5650, 450, 'platform').setScale(3).refreshBody();
    platforms.create(8100, 670, 'platform').setScale(6).refreshBody();
    platforms.create(8100, 470, 'platform').setScale(6).refreshBody();
    platforms.create(8300, 670, 'platform').setScale(6).refreshBody();
    platforms.create(8300, 470, 'platform').setScale(6).refreshBody();
    platforms.create(8600, 670, 'platform').setScale(6).refreshBody();
    platforms.create(8600, 470, 'platform').setScale(6).refreshBody();
    //tutorial platformien luonti loppuu
    //tutorial bottom_of_game luonti
    bottom_of_game.create(300,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(800,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(1300,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(1700,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(2200,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(2700,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(3200,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(3700,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(4200,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(4700,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(5200,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(5700,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(6200,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(6700,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(7200,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(7700,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(8200,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(8700,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(9200,900, 'bottom_of_game').setScale(3).refreshBody();
    bottom_of_game.create(9700,900, 'bottom_of_game').setScale(3).refreshBody();
    this.guide1Text = this.add.text(10, 10, "Welcome to your journey to greatness. You're a young teen\n hellbent on conquering the world.\n But before you can do that, you must first depose the\n current king living in the castle, he is very evil.\n You must complete four levels to get to him.\n But before you get to level 1, let us first show you\n how to play the game. See your character? He's currently\n not doing anything. Use arrow keys to make him move.\n Press left to go left and right to go right.\n No shit sherlock. More guides are coming\n as you progress through this tutorial.", {
        fontSize: '30px',
        fill: '#000000ff'
    })
     this.guide1Text = this.add.text(2150, 10, "Seems like something\n is blocking your way.\n Press up to jump.", {
        fontSize: '30px',
        fill: '#000000ff'
    })
       this.guide2Text = this.add.text(3800, 10, "Uh oh!\nWe found a big bad guy!\n Press space to shoot a\n knife at him.\n He needs 3 hits\n to perish.", {
        fontSize: '30px',
        fill: '#000000ff'
    })
        this.guide3Text = this.add.text(5300, 10, "That definitely is a wall!\nBut don't worry,\nyou can get up using\n these other platforms.", {
        fontSize: '30px',
        fill: '#000000ff'
    })
      this.guide4Text = this.add.text(6500, 10, "Press down to\n fall faster.", {
        fontSize: '30px',
        fill: '#000000ff'
    })
       this.guide5Text = this.add.text(9400, 10, "You beat the tutorial!\n Go through that door to\n get to the first level.\n May your adventure begin!", {
        fontSize: '30px',
        fill: '#000000ff'
    })
        this.guide6Text = this.add.text(7700, 10, "What about now if\n you can't get up?\n Use your trusty knife\n to climb the wall.\n Shoot a knife at\n the wall, it lingers\n there for 3 seconds.\n In those 3 seconds,\n you can stand on it\n and jump higher than you\n you normally would.", {
        fontSize: '30px',
        fill: '#000000ff'
    })
    //tutorial bottom_of_game luonti lopuu
    //oven luonti seuraavaan tasoon
    ovi=this.physics.add.staticGroup();
    ovi.create(9950,790,'ovi').setScale(0.3).refreshBody();
    // --VIHOLLISEN LUONTI--
    this.enemies = this.physics.add.group();
const rightPlatform = platforms.getChildren().at(1);
this.enemy = this.enemies.create(rightPlatform.x - 10, rightPlatform.y - 300, 'enemy');
//vihollisen koko ja elämäpisteet
this.enemy.setScale(4);
this.enemy.body.setSize(this.enemy.width, this.enemy.height);
this.enemy.body.setOffset(0, 0);
this.enemy.refreshBody();
this.enemy.maxHp = 150;
this.enemy.hp = 150;

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
this.physics.add.collider(knife, this.enemies, (weapon, enemy) => {


    if (!enemy.active) return;

    // tuplahittisuojan EI pidä käyttää delayta
    if (enemy.wasHit) return;
    enemy.wasHit = true;

     if (enemy.hp > 0) {
    enemy_hit.play();
    enemy.hp -= 50;
    enemy.setTint(0x550000);
    this.time.delayedCall(150, () => enemy.clearTint());
    }
    if (enemy.hp <= 0) {
    enemy_death.play();
    if (enemy.hpBar) enemy.hpBar.destroy();
    if (enemy.hpBarBG) enemy.hpBarBG.destroy();
    enemy.hpBar = null;
    enemy.hpBarBG = null;
    enemy.disableBody(true, true);
    return;
}
    // tuhoa veitsi välittömästi
    weapon.disableBody(true, true);

    // vapauta hit-lukko seuraavalle _uudelle_ veitselle
    this.time.delayedCall(1, () => enemy.wasHit = false);
});
// jos puukko osuu alustaan -> pysäytä puukko

    this.enemy.body.setGravityY(300); // lisää painovoima
    this.enemy.setCollideWorldBounds(true); // estää vihollista putoamasta
    this.enemy.setVelocityX(80); // alku nopeus
    this.enemy.direction = 1;
    this.enemy.body.mass = 10;

    this.physics.add.collider(knife, bottom_of_game);
    //Pelaajan liikumisen animaatio määritely pätyy
    this.physics.add.overlap(player, ovi, level1Transition, null, this);
    this.cameras.main.setBounds(0, 0, 10000, 900);
	this.physics.world.setBounds(0, 0, 10000, 900);
	this.cameras.main.startFollow(player);
    shoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    //luodaan tykit ja tehdään niin että se ei tipu vaan pysyy paikallaan
    

    //vihollisen fysiikat
    this.physics.add.collider(this.enemy, platforms);
    this.physics.add.collider(player, this.enemy, tutorialDeath, null, this); 
        this.enemyHpOffset = 80;

    // luodaan HP-palkki taustineen
    this.enemy.hpBarBG = this.add.rectangle(this.enemy.x, this.enemy.y - this.enemyHpOffset, 40, 6, 0x000000);
    this.enemy.hpBar = this.add.rectangle(this.enemy.x, this.enemy.y - this.enemyHpOffset, 40, 6, 0xff0000);

    // scroll factor, jotta palkki liikkuu kameran mukana
    this.enemy.hpBar.setScrollFactor(1);
    this.enemy.hpBarBG.setScrollFactor(1);

    this.enemy.play('walkRightEnemy');
    }

    update (){
         tutorial_music.play();
    //katsoo onko peli loppunut
    if (gameOver == true)
	{
		this.physics.pause();
		backgroundsound.pause();
		player.anims.play('jump');
		return;
	}
    //märitelään pelaajaan liityvää liikumista ja animaation pelausta
    if (cursors.up.isDown && player.body.touching.down) {
        jumping = 1;
        player.setVelocityY(-300);
        player.anims.play("jump");
        jump.play();
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
        if (cursors.left.isDown || cursors.right.isDown) {
    player.setVelocityX(cursors.left.isDown ? -160 : 160);
    player.anims.play(cursors.left.isDown ? 'left' : 'right', true);
    facingRight = cursors.right.isDown;

    if (footsteps.paused) {
        footsteps.play(); 
    }
} else {
    player.setVelocityX(0);
    player.anims.play('turn');

    if (!footsteps.paused) {
        footsteps.pause();  
        footsteps.currentTime = 0; 
    }
}

 if (cursors.down.isDown) {
            player.setVelocityY(300);
            player.anims.play('jump');
        } 
    //märitelään pelaajaan liityvää liikumista ja animaation pelausta lopuu
    //????
    if (Phaser.Input.Keyboard.JustDown(shoot)) {
        const now = this.time.now;
    //knife heittoa
    if (now - this.lastThrowTime > this.throwCooldown) {
        knife_throw.play()
        this.lastThrowTime = now; 
            let offset = -30;
            let spawnX = player.x + (facingRight ? offset : -offset);
            let weapon = knife.create(spawnX, player.y, 'dagger');
            weapon.setScale(0.1);
            weapon.setVelocityX(300); 
            weapon.setGravityY(-200);
            weapon.body.isSensor = true;
             if (facingRight) {
        weapon.setVelocityX(300);
    } else {
        weapon.setVelocityX(-300);
        weapon.flipX = true; 
    }
        setTimeout(() => { weapon.destroy(); }, 3000);
        }
    }
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
        enemy.play()
        e.direction *= -1;
        e.setVelocityX(80 * e.direction);
        e.play(e.direction > 0 ? 'walkRightEnemy' : 'walkLeftEnemy', true);
        }
        if (e.body.blocked.left) {
            e.direction = 1;
            e.setVelocityX(80);
            e.play('walkRightEnemy', true);
        }
        if (e.body.blocked.right) {
            e.direction = -1;
            e.setVelocityX(-80);
            e.play('walkLeftEnemy', true);
        }
    }
        if (this.enemy.hpBar && this.enemy.hpBarBG && this.enemy.active) {
        this.enemy.hpBarBG.x = this.enemy.x;
        this.enemy.hpBarBG.y = this.enemy.y - this.enemyHpOffset;

        this.enemy.hpBar.width = 40 * (this.enemy.hp / this.enemy.maxHp);
        this.enemy.hpBar.x = this.enemy.x - (40 * (1 - this.enemy.hp / this.enemy.maxHp)) / 2;
        this.enemy.hpBar.y = this.enemy.y - this.enemyHpOffset;
    }

    }
}
//level1
class Level1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level1' });
}

    // asetan kellon muuttujan
    init() {
        this.registry.set('totalTime', this.registry.get('totalTime') ?? 0 );
        this.registry.set('deaths', this.registry.get('deaths') ?? 0 );
    }

    preload (){
    }
    create (){
    tutorial_music.pause();
    boss_fight_background_music.pause();
    //knife cooldownin laatiminen
    this.lastThrowTime = 0; 
    this.throwCooldown = 1000;
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
    this.enemies = this.physics.add.group();
const rightPlatform = platforms.getChildren().at(2);
this.enemy = this.enemies.create(rightPlatform.x - 10, rightPlatform.y - 200, 'enemy');
//vihollisen koko ja elämäpisteet
this.enemy.setScale(4);
this.enemy.body.setSize(this.enemy.width, this.enemy.height);
this.enemy.body.setOffset(0, 0);
this.enemy.refreshBody();
this.enemy.maxHp = 150;
this.enemy.hp = 150;

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
this.physics.add.collider(knife, this.enemies, (weapon, enemy) => {


    if (!enemy.active) return;

    // tuplahittisuojan EI pidä käyttää delayta
    if (enemy.wasHit) return;
    enemy.wasHit = true;

    // hit effect
     if (enemy.hp > 0) {
    enemy_hit.play();
    enemy.hp -= 50;
    enemy.setTint(0x550000);
    this.time.delayedCall(150, () => enemy.clearTint());
    }
    if (enemy.hp <= 0) {
    enemy_death.play();
    if (enemy.hpBar) enemy.hpBar.destroy();
    if (enemy.hpBarBG) enemy.hpBarBG.destroy();
    enemy.hpBar = null;
    enemy.hpBarBG = null;
    enemy.disableBody(true, true);
    return;
}



    // tuhoa veitsi välittömästi
    weapon.disableBody(true, true);

    // vapauta hit-lukko seuraavalle _uudelle_ veitselle
    this.time.delayedCall(1, () => enemy.wasHit = false);
});
// jos puukko osuu alustaan -> pysäytä puukko

    this.enemy.body.setGravityY(300); // lisää painovoima
    this.enemy.setCollideWorldBounds(true); // estää vihollista putoamasta
    this.enemy.setVelocityX(80); // alku nopeus
    this.enemy.direction = 1;
    this.enemy.body.mass = 10;

    this.physics.add.collider(knife, bottom_of_game);
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
    delay: 2000,
    callback: () => shootBullet_cannon_back(cannon_back, cannon_back_bullets),
    loop: true
});


// törmäykset luoteihin
this.physics.add.collider(player, bullets, hitPlayer, null, this);
this.physics.add.collider(player, cannon_back_bullets, hitPlayer, null, this);


    //vihollisen fysiikat
    this.physics.add.collider(this.enemy, platforms);
    this.physics.add.collider(player, this.enemy, hitByEnemy, null, this); 

    this.enemy.play('walkRightEnemy');

    //kellon funktio
    // hae aiempi aika
    this.totalTime = this.registry.get('totalTime') || 0;

    //luo tekstin
    this.timerText = this.add.text(10, 10, "Aika: " + this.totalTime, {
        fontSize: '24px',
        fill: '#fff'
    }).setScrollFactor(0);
    //texti pysyy vasemmassa 

    // kuolemalaskuri
    this.deaths = this.registry.get('deaths');

    this.deathText = this.add.text(10, 40, "Kuolemat: " + this.deaths, {
    fontSize: '24px',
    fill: '#fff'
    }).setScrollFactor(0);


    this.timeEvent = this.time.addEvent({
        delay: 1000,
        loop: true,
        callback: () => {
            this.totalTime++;
            this.registry.set('totalTime', this.totalTime);

            this.timerText.setText("Aika: " + this.totalTime);
        }
    });


    // HP-palkin offset
    this.enemyHpOffset = 80;

    // luodaan HP-palkki taustineen
    this.enemy.hpBarBG = this.add.rectangle(this.enemy.x, this.enemy.y - this.enemyHpOffset, 40, 6, 0x000000);
    this.enemy.hpBar = this.add.rectangle(this.enemy.x, this.enemy.y - this.enemyHpOffset, 40, 6, 0xff0000);

    // scroll factor, jotta palkki liikkuu kameran mukana
    this.enemy.hpBar.setScrollFactor(1);
    this.enemy.hpBarBG.setScrollFactor(1);



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
        jump.play();
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
        if (cursors.left.isDown || cursors.right.isDown) {
    player.setVelocityX(cursors.left.isDown ? -160 : 160);
    player.anims.play(cursors.left.isDown ? 'left' : 'right', true);
    facingRight = cursors.right.isDown;

    if (footsteps.paused) {
        footsteps.play(); 
    }
} else {
    player.setVelocityX(0);
    player.anims.play('turn');

    if (!footsteps.paused) {
        footsteps.pause();  
        footsteps.currentTime = 0; 
    }
}

 if (cursors.down.isDown) {
            player.setVelocityY(300);
            player.anims.play('jump');
        } 
    //märitelään pelaajaan liityvää liikumista ja animaation pelausta lopuu
    //????
    if (Phaser.Input.Keyboard.JustDown(shoot)) {
        const now = this.time.now;
    //knife heittoa
    if (now - this.lastThrowTime > this.throwCooldown) {
        knife_throw.play()
        this.lastThrowTime = now; 
            let offset = -30;
            let spawnX = player.x + (facingRight ? offset : -offset);
            let weapon = knife.create(spawnX, player.y, 'dagger');
            weapon.setScale(0.1);
            weapon.setVelocityX(300); 
            weapon.setGravityY(-200);
            weapon.body.isSensor = true;
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
            if (b.active && b.x > 1880) {
                b.disableBody(true, true); 
            }
        });


    //vihollisen kääntymis ominaisuus että pysyy platformin päällä
  this.enemies.children.iterate(e => {
    if (!e.active) return;

    const probeX = e.x + e.direction * (e.width / 2 + 6);
    const probeY = e.body.bottom + 2;

    let groundAhead = false;

    platforms.getChildren().forEach(p => {
        const bounds = p.getBounds();
        if (
            probeX >= bounds.left - 5 &&
            probeX <= bounds.right + 5 &&
            probeY >= bounds.top - 10 &&
            probeY <= bounds.top + 25
        ) {
            groundAhead = true;
        }
    });

    if (!e.lastTurnTime) e.lastTurnTime = 0;
    if (this.time.now - e.lastTurnTime > 500) {
        if (!groundAhead && e.body.blocked.down) {
            if(enemy_footstep) {
                e.setVelocityX(80 * e.direction);
                e.play(e.direction > 0 ? 'walkRightEnemy' : 'walkLeftEnemy', true);
                e.lastTurnTime = this.time.now;
            }
            else {
                enemy_footstep=true;
                enemy.play();
                setTimeout(() => {enemy_footstep=false;}, 3000);
                e.setVelocityX(80 * e.direction);
                e.play(e.direction > 0 ? 'walkRightEnemy' : 'walkLeftEnemy', true);
                e.lastTurnTime = this.time.now;
            }
        }
    }

    if (e.body.blocked.left) {
        e.direction = 1;
        e.setVelocityX(80);
        e.play('walkRightEnemy', true);
    }
    if (e.body.blocked.right) {
        e.direction = -1;
        e.setVelocityX(-80);
        e.play('walkLeftEnemy', true);
    }
});
    // Päivitä HP-palkki vihollisen sijainnin ja HP:n mukaan
    if (this.enemy.hpBar && this.enemy.hpBarBG && this.enemy.active) {
        this.enemy.hpBarBG.x = this.enemy.x;
        this.enemy.hpBarBG.y = this.enemy.y - this.enemyHpOffset;

        this.enemy.hpBar.width = 40 * (this.enemy.hp / this.enemy.maxHp);
        this.enemy.hpBar.x = this.enemy.x - (40 * (1 - this.enemy.hp / this.enemy.maxHp)) / 2;
        this.enemy.hpBar.y = this.enemy.y - this.enemyHpOffset;
    }



    }

    
}

//level2
class Level2 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level2' });}
    preload (){
    }


    //kellon muuttuja
    init() {
        this.registry.set('totalTime', this.registry.get('totalTime') ?? 0 );
        this.registry.set('deaths', this.registry.get('deaths') ?? 0 );
    }
    
    create (){
    gameOver=false;
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
        delay: 3500,
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
    delay: 1500,
    callback: () => shootBullet_cannon_up(cannon_up, cannon_up_bullets),
    loop: true
});
 this.physics.add.collider(player, cannon_up_bullets, hitPlayer, null, this);
    //note: maxsize kertoo kuinka monta luotia tykki pystyy ampumaan, tähän asti parasvaihto ehto on vain listä vain paljon 0 siihen että riitää
    shoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    // vihollisen luonti
    // -- VIHOLLINEN --
       this.enemies = this.physics.add.group();

        const platform1 = platforms.getChildren().at(-2);
        const enemy1 = this.enemies.create(
            platform1.x - 10,
            platform1.y - 200,
            'enemy'
        ).setScale(4);
        enemy1.direction = -1;
        enemy1.setVelocityX(80 * enemy1.direction);
        enemy1.play('walkRightEnemy', true);

        const platform2 = platforms.getChildren().at(0);
        const enemy2 = this.enemies.create(
            platform2.x - 10,
            platform2.y - 200,
            'enemy'
        ).setScale(4);
        enemy2.direction = -1;
        enemy2.setVelocityX(80 * enemy1.direction);
        enemy2.play('walkRightEnemy', true);

        this.enemyHpOffset = 80;

        this.enemies.children.iterate(e => {
            e.body.setGravityY(300);
            e.setCollideWorldBounds(true);
            e.setVelocityX(80);
            e.direction = 1;

            e.maxHp = 150;
            e.hp = 150;

            e.setPushable(false);
            
            // enemy hp
            e.hpBarBG = this.add.rectangle(e.x, e.y - this.enemyHpOffset, 40, 6, 0x000000);
            e.hpBar = this.add.rectangle(e.x, e.y - this.enemyHpOffset, 40, 6, 0xff0000);

            e.hpBarBG.setScrollFactor(1);
            e.hpBar.setScrollFactor(1);

            if (!e.active) return; // jos ei aktiivinen, hyppää yli

            if (!e.hpBar || !e.hpBarBG) return; // jos palkki on jo poistettu, ei tehdä mitään

            const hpOffset = this.enemyHpOffset || 50;

            e.hpBarBG.x = e.x;
            e.hpBarBG.y = e.y - hpOffset;

            const percent = e.hp / e.maxHp;
            e.hpBar.width = 40 * percent;
            e.hpBar.x = e.x - 20;
            e.hpBar.y = e.y - hpOffset;
        });
            

     
    // Asetetaan vihollisen hp ja muut tarvittavat arvot (kuten Level1:ssä)
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, bottom_of_game);
    this.physics.add.collider(player, knife);
    this.physics.add.collider(this.enemies, platforms);
    this.physics.add.collider(player, this.enemies, hitByEnemy, null, this);
    this.physics.add.collider(knife, platforms, (weapon) => {
        weapon.setVelocity(0, 0);
        weapon.body.allowGravity = false;
        weapon.body.immovable = true;
    });
    // Turvallinen osuman käsittely knife -> enemy (vähentää hp:tä, ei tuhoa yhdellä osumalla)
    this.physics.add.collider(knife, this.enemies, (weapon, enemy) => {

        // Tuhoaa veitsen
        if (weapon && weapon.disableBody) weapon.disableBody(true, true);
        else if (weapon && weapon.destroy) weapon.destroy();

        // --- Vihollinen ottaa Damagea ---
        if (!enemy || !enemy.active) return;

        if (enemy.hp > 0) {
    enemy_hit.play();
    enemy.hp -= 50;
    enemy.setTint(0x550000);
    this.time.delayedCall(150, () => enemy.clearTint());
    }
    if (enemy.hp <= 0) {

        // POISTA HP PALKKI heti
        if (enemy.hpBar) enemy.hpBar.destroy();
        if (enemy.hpBarBG) enemy.hpBarBG.destroy();

        enemy.hpBar = null;
        enemy.hpBarBG = null;

        enemy.disableBody(true, true);
        }

        // Osumaefekti
        enemy.setTint(0x550000);

        this.time.delayedCall(150, () => enemy.clearTint());
        
    });
    // --ANIMAATIOT VIHOLLISILLE--

    // piikkien luonti
    this.spikes = this.physics.add.staticGroup();
    this.spikes.create(720, 867, 'spike').setScale(0.8).refreshBody();
    this.spikes.create(1025, 867, 'spike').setScale(0.8).refreshBody();
    this.spikes.create(425, 867, 'spike').setScale(0.8).refreshBody();
    this.physics.add.collider(player, this.spikes, hitBySpike, null, this);
    this.enemies.children.iterate(e => { if (e && e.play) e.play('walkRightEnemy'); });



    //kellon funktio
    // hae aiempi aika
    this.totalTime = this.registry.get('totalTime') || 0;

    //luo tekstin
    this.timerText = this.add.text(10, 10, "Aika: " + this.totalTime, {
        fontSize: '24px',
        fill: '#fff'
    }).setScrollFactor(0);

    //texti pysyy vasemmassa 
    this.timeEvent = this.time.addEvent({
        delay: 1000,
        loop: true,
        callback: () => {
            this.totalTime++;
            this.registry.set('totalTime', this.totalTime);

            this.timerText.setText("Aika: " + this.totalTime);
        }
    });

    // kuolemalaskuri
    this.deaths = this.registry.get('deaths');

    this.deathText = this.add.text(10, 40, "Kuolemat: " + this.deaths, {
    fontSize: '24px',
    fill: '#fff'
    }).setScrollFactor(0);
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
            jump.play();
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
   if (cursors.left.isDown || cursors.right.isDown) {
    player.setVelocityX(cursors.left.isDown ? -160 : 160);
    player.anims.play(cursors.left.isDown ? 'left' : 'right', true);
    facingRight = cursors.right.isDown;

    if (footsteps.paused) {
        footsteps.play(); 
    }
} else {
    player.setVelocityX(0);
    player.anims.play('turn');

    if (!footsteps.paused) {
        footsteps.pause();  
        footsteps.currentTime = 0; 
    }
}

 if (cursors.down.isDown) {
            player.setVelocityY(300);
            player.anims.play('jump');
        }  
      if (Phaser.Input.Keyboard.JustDown(shoot)) {
        const now = this.time.now;
    //knife heittoa
    if (now - this.lastThrowTime > this.throwCooldown) {
         knife_throw.play()
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
    
    this.enemies.children.iterate(e => {
    if (!e.active) return;

    const probeX = e.x + e.direction * (e.width / 2 + 6);
    const probeY = e.body.bottom + 2;

    let groundAhead = false;

    platforms.getChildren().forEach(p => {
        const bounds = p.getBounds();
        if (
            probeX >= bounds.left - 5 &&
            probeX <= bounds.right + 5 &&
            probeY >= bounds.top - 10 &&
            probeY <= bounds.top + 25
        ) {
            groundAhead = true;
        }
    });

    if (!e.lastTurnTime) e.lastTurnTime = 0;
    if (this.time.now - e.lastTurnTime > 500) {
        if (!groundAhead && e.body.blocked.down) {
            enemy.play()
            e.direction *= -1;
            e.setVelocityX(80 * e.direction);
            e.play(e.direction > 0 ? 'walkRightEnemy' : 'walkLeftEnemy', true);
            e.lastTurnTime = this.time.now;
        }
    }

    if (e.body.blocked.left) {
        e.direction = 1;
        e.setVelocityX(80);
        e.play('walkRightEnemy', true);
    }
    if (e.body.blocked.right) {
        e.direction = -1;
        e.setVelocityX(-80);
        e.play('walkLeftEnemy', true);
    }



    // Päivitä HP palkki vihollisen mukana
    if (e.hpBar && e.hpBarBG) {

        e.hpBarBG.x = e.x;
        e.hpBarBG.y = e.y - this.enemyHpOffset;

        e.hpBar.width = 40 * (e.hp / e.maxHp);
        e.hpBar.x = e.x - (40 * (1 - e.hp / e.maxHp)) / 2;
        e.hpBar.y = e.y - this.enemyHpOffset;
    }

});


    }
}
//level3
class Level3 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level3' });
    }

    preload (){
    }

    init() {
        this.registry.set('totalTime', this.registry.get('totalTime') ?? 0);
        this.registry.set('deaths', this.registry.get('deaths') ?? 0 );
    }

    create (){
        this.lastThrowTime = 0; 
        this.throwCooldown = 1000; 

        solid_snake_door = this.physics.add.staticGroup(); 
        platforms = this.physics.add.staticGroup();
        bottom_of_game = this.physics.add.staticGroup();
        trampoline = this.physics.add.staticGroup();
        wall = this.physics.add.staticGroup();
        cursors = this.input.keyboard.createCursorKeys();

        this.add.image(1000,400, 'dungeon').setScale(3.5);

        player = this.physics.add.sprite(100, 750, 'main_character');
        player.setCollideWorldBounds(true);

        knife = this.physics.add.group();
        shoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // bottom of game
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

        // walls
        wall.create(443,455,'wall')
        wall.create(557,455,'wall')
        wall.create(443,755,'wall')
        wall.create(557,755,'wall')
        wall.create(1245,100,'wall')
        wall.create(1700,840,'wall')
        wall.create(1200,840,'wall')

        // trampolines
        trampoline.create(300,850, 'trampoline').setScale(0.4).refreshBody();
        trampoline.create(650,850, 'trampoline').setScale(0.4).refreshBody();
        trampoline.create(1800,850, 'trampoline').setScale(0.4).refreshBody();

        // platforms
        platforms.create(500,230,'platform').setScale(2).refreshBody();
        platforms.create(900,530,'platform').setScale(2).refreshBody();
        platforms.create(1300,730,'platform').setScale(2).refreshBody();
        platforms.create(1600,730,'platform').setScale(2).refreshBody();
        platforms.create(1600,330,'platform').setScale(2).refreshBody();
        platforms.create(1300,300,'platform').setScale(2).refreshBody();

        // door
        ovi = this.physics.add.staticGroup();
        ovi.create(1300,195,'ovi').setScale(0.3).refreshBody();

        // invisible door
        solid_snake_door.create(100,220).setScale(0.001).refreshBody();

        this.enemies = this.physics.add.group();

        const platform1 = platforms.getChildren().at(0);
        const enemy1 = this.enemies.create(
            platform1.x - 10,
            platform1.y - 200,
            'enemy'
        ).setScale(4);

        const platform2 = platforms.getChildren().at(2);
        const enemy2 = this.enemies.create(
            platform2.x - 10,
            platform2.y - 200,
            'enemy'
        ).setScale(4);
         const platform3 = platforms.getChildren().at(4);
        const enemy3 = this.enemies.create(
            platform3.x - 10,
            platform3.y - 200,
            'enemy'
        ).setScale(4);


        this.enemyHpOffset = 80;
        
        this.enemies.children.iterate(e => {
            e.body.setGravityY(300);
            e.setCollideWorldBounds(true);
            e.setVelocityX(80);
            e.direction = 1;

            //vihollisen hp
            e.maxHp = 150;
            e.hp = 150;

            e.setPushable(false);

            // enemy hp
            e.hpBarBG = this.add.rectangle(e.x, e.y - this.enemyHpOffset, 40, 6, 0x000000);
            e.hpBar = this.add.rectangle(e.x, e.y - this.enemyHpOffset, 40, 6, 0xff0000);

            e.hpBarBG.setScrollFactor(1);
            e.hpBar.setScrollFactor(1);

            if (!e.active) return; // jos ei aktiivinen, hyppää yli

            if (!e.hpBar || !e.hpBarBG) return; // jos palkki on jo poistettu, ei tehdä mitään

            const hpOffset = this.enemyHpOffset || 50;

            e.hpBarBG.x = e.x;
            e.hpBarBG.y = e.y - hpOffset;

            const percent = e.hp / e.maxHp;
            e.hpBar.width = 40 * percent;
            e.hpBar.x = e.x - 20;
            e.hpBar.y = e.y - hpOffset;
        });

        

     

        this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, bottom_of_game);
        this.physics.add.collider(player, wall);
        this.physics.add.collider(player, knife);
        this.physics.add.collider(this.enemies, platforms);
        this.physics.add.collider(player, this.enemies, hitByEnemy, null, this);
        this.physics.add.overlap(player, trampoline, trampolinePlayer, null, this);

        // knife collisions
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
        this.physics.add.collider(knife, bottom_of_game);

        this.physics.add.collider(knife, this.enemies, (weapon, enemy) => {

            // Tuhoaa veitsen
            if (weapon && weapon.disableBody) weapon.disableBody(true, true);
            else if (weapon && weapon.destroy) weapon.destroy();

            // --- Vihollinen ottaa Damagea ---
            if (!enemy || !enemy.active) return;

            if (enemy.hp > 0) {
            enemy_hit.play();
            enemy.hp -= 50;
            enemy.setTint(0x550000);
            this.time.delayedCall(150, () => enemy.clearTint());
            }
            if (enemy.hp <= 0) {

            // POISTA HP PALKKI heti
            if (enemy.hpBar) enemy.hpBar.destroy();
            if (enemy.hpBarBG) enemy.hpBarBG.destroy();

            enemy.hpBar = null;
            enemy.hpBarBG = null;

            enemy.disableBody(true, true);
            }

            // Osumaefekti
            enemy.setTint(0x550000);
            this.time.delayedCall(150, () => enemy.clearTint());

        });


        this.cameras.main.setBounds(0, 0, 2000, 900);
        this.physics.world.setBounds(0, 0, 2000, 900);
        this.cameras.main.startFollow(player);

        this.physics.add.overlap(player, ovi, level4Transition, null, this);
        this.physics.add.overlap(player, solid_snake_door, level1trhow, null, this);



        this.cannons = [
            this.physics.add.image(620, 300, 'cannon'),
            this.physics.add.image(620, 500, 'cannon'),
            this.physics.add.image(620, 700, 'cannon'),
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
            delay: 1700,
            callback: () => {
                this.cannons.forEach(c => shootBullet(c, bullets));
            },
            loop: true
        });

        this.physics.add.collider(player, bullets, hitPlayer, null, this);

        this.cannons_up = [
            this.physics.add.image(1450, 840, 'cannon_up'),
            this.physics.add.image(1100, 840, 'cannon_up'),
            this.physics.add.image(1400, 840, 'cannon_up'),
            this.physics.add.image(1500, 840, 'cannon_up'),
        ];

        this.cannons_up.forEach(c => {
            c.setImmovable(true);
            c.body.allowGravity = false;
        });

        cannon_up_bullets = this.physics.add.group({
            defaultKey: 'bullet',
            maxSize: 10000
        });

        this.time.addEvent({
            delay: 1500,
            callback: () => {
                this.cannons_up.forEach(c => shootBullet_cannon_up(c, cannon_up_bullets));
            },
            loop: true
        });

        this.physics.add.collider(player, cannon_up_bullets, hitPlayer, null, this);

        this.enemies.children.iterate(e => e.play('walkRightEnemy'));

        // -------------------------
        // CLOCK / TIMER
        // -------------------------

        this.totalTime = this.registry.get('totalTime') || 0;

        this.timerText = this.add.text(10, 10, "Aika: " + this.totalTime, {
            fontSize: '24px',
            fill: '#fff'
        }).setScrollFactor(0);

        // kuolemalaskuri
        this.deaths = this.registry.get('deaths');

        this.deathText = this.add.text(10, 40, "Kuolemat: " + this.deaths, {
        fontSize: '24px',
        fill: '#fff'
        }).setScrollFactor(0);

        this.timeEvent = this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: () => {
                this.totalTime++;
                this.registry.set('totalTime', this.totalTime);
                this.timerText.setText("Aika: " + this.totalTime);
            }
        });
    }

    update (){
        if (gameOver == true) {
            this.physics.pause();
            backgroundsound.pause();
            player.anims.play('jump');
            return;
        }

        backgroundsound.play();

        if (cursors.up.isDown && player.body.touching.down) {
            jumping = 1;
            player.setVelocityY(-300);
            player.anims.play("jump");
            jump.play();
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
 if (cursors.left.isDown || cursors.right.isDown) {
    player.setVelocityX(cursors.left.isDown ? -160 : 160);
    player.anims.play(cursors.left.isDown ? 'left' : 'right', true);
    facingRight = cursors.right.isDown;

    if (footsteps.paused) {
        footsteps.play(); 
    }
} else {
    player.setVelocityX(0);
    player.anims.play('turn');

    if (!footsteps.paused) {
        footsteps.pause();  
        footsteps.currentTime = 0; 
    }
}

 if (cursors.down.isDown) {
            player.setVelocityY(300);
            player.anims.play('jump');
        }  

        // knife heitto
        if (Phaser.Input.Keyboard.JustDown(shoot)) {
            const now = this.time.now;
            if (now - this.lastThrowTime > this.throwCooldown) {
                   knife_throw.play()
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

this.enemies.children.iterate(e => {
    if (!e.active) return;

    const probeX = e.x + e.direction * (e.width / 2 + 6);
    const probeY = e.body.bottom + 2;

    let groundAhead = false;

    platforms.getChildren().forEach(p => {
        const bounds = p.getBounds();
        if (
            probeX >= bounds.left - 5 &&
            probeX <= bounds.right + 5 &&
            probeY >= bounds.top - 10 &&
            probeY <= bounds.top + 25
        ) {
            groundAhead = true;
        }
    });

    if (!e.lastTurnTime) e.lastTurnTime = 0;
    if (this.time.now - e.lastTurnTime > 500) {
        if (!groundAhead && e.body.blocked.down) {
               enemy.play()
            e.direction *= -1;
            e.setVelocityX(80 * e.direction);
            e.play(e.direction > 0 ? 'walkRightEnemy' : 'walkLeftEnemy', true);
            e.lastTurnTime = this.time.now;
        }
    }

    if (e.body.blocked.left) {
        e.direction = 1;
        e.setVelocityX(80);
        e.play('walkRightEnemy', true);
    }
    if (e.body.blocked.right) {
        e.direction = -1;
        e.setVelocityX(-80);
        e.play('walkLeftEnemy', true);
    }

    // Päivitä HP palkki vihollisen mukana
    if (e.hpBar && e.hpBarBG) {

        e.hpBarBG.x = e.x;
        e.hpBarBG.y = e.y - this.enemyHpOffset;

        e.hpBar.width = 40 * (e.hp / e.maxHp);
        e.hpBar.x = e.x - (40 * (1 - e.hp / e.maxHp)) / 2;
        e.hpBar.y = e.y - this.enemyHpOffset;
    }
});
    

    }
}


//level 4 
class Level4 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level4' });
    }

    preload() {
    }

    init() {
        this.registry.set('totalTime', this.registry.get('totalTime') ?? 0 );
        this.registry.set('deaths', this.registry.get('deaths') ?? 0 );
    }

    create() {
        this.lastThrowTime = 0;
        this.throwCooldown = 1000;

    
        wind = this.physics.add.staticGroup();
        platforms = this.physics.add.staticGroup();
        bottom_of_game = this.physics.add.staticGroup();
        trampoline = this.physics.add.staticGroup();
        low_power_trampoline = this.physics.add.staticGroup();
        wall = this.physics.add.staticGroup();
        cursors = this.input.keyboard.createCursorKeys();
        knife = this.physics.add.group();
        shoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


        this.add.image(0,0,'sky').setScale(10);
        this.add.image(100,1700, 'castle_hallway').setScale(2);
        this.add.image(1700,1700,'spiralsaircase').setScale(3);

   
        player = this.physics.add.sprite(100, 1950, 'main_character');
        player.setCollideWorldBounds(true);

   
        bottom_of_game.create(100,2000, 'bottom_of_game');
        bottom_of_game.create(300,2000, 'bottom_of_game');
        bottom_of_game.create(500,2000, 'bottom_of_game');
        bottom_of_game.create(700,2000, 'bottom_of_game');
        bottom_of_game.create(900,2000, 'bottom_of_game');
        bottom_of_game.create(1100,2000, 'bottom_of_game');
        bottom_of_game.create(1300,2000, 'bottom_of_game');
        bottom_of_game.create(1500,2000, 'bottom_of_game');
        bottom_of_game.create(1700,2000, 'bottom_of_game');
        bottom_of_game.create(1900,2000, 'bottom_of_game');

        bottom_of_game.create(100,1300, 'bottom_of_game');
        bottom_of_game.create(300,1300, 'bottom_of_game');
        bottom_of_game.create(500,1300, 'bottom_of_game');
        bottom_of_game.create(700,1300, 'bottom_of_game');
        bottom_of_game.create(900,1300, 'bottom_of_game');
        bottom_of_game.create(1100,1300, 'bottom_of_game');
        bottom_of_game.create(1200,1300, 'bottom_of_game');

        bottom_of_game.create(1230,1600, 'bottom_of_game');

        wall.create(1338,1438, 'wall');
        wall.create(1338,1138, 'wall');
        wall.create(1338,838, 'wall');
        wall.create(1338,538, 'wall');
        wall.create(1338,238, 'wall');
        wall.create(1338,38, 'wall');
        wall.create(0,1900,'wall');
        wall.create(0,1700,'wall');
        wall.create(0,1490,'wall');
        wall.create(440,1700,'wall');
        wall.create(440,2000,'wall');

        trampoline.create(300,1950, 'trampoline').setScale(0.5).refreshBody();
        low_power_trampoline.create(1530,1250, 'trampoline').setScale(0.5).refreshBody();
        low_power_trampoline.create(1530,420, 'trampoline').setScale(0.5).refreshBody();

  
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
        platforms.create(1800,300,'platform').setScale(2).refreshBody();

        wind.create(1530,710, 'wind').setScale(0.4).refreshBody();
        wind.create(1530,670, 'wind').setScale(0.4).refreshBody();
        wind.create(1530,630, 'wind').setScale(0.4).refreshBody();
        wind.create(1530,1520, 'wind').setScale(0.4).refreshBody();
        wind.create(1800,1370, 'wind').setScale(0.4).refreshBody();

    
        ovi = this.physics.add.staticGroup();
        ovi.create(1800,200,'ovi').setScale(0.3).refreshBody();
            this.enemies = this.physics.add.group();

        const platform1 = platforms.getChildren().at(0);
        const enemy1 = this.enemies.create(
            platform1.x - 10,
            platform1.y - 200,
            'enemy'
        ).setScale(4);

        const platform2 = platforms.getChildren().at(12);
        const enemy2 = this.enemies.create(
            platform2.x - 10,
            platform2.y - 200,
            'enemy'
        ).setScale(4);
            const platform3 = platforms.getChildren().at(6);
            const enemy3 = this.enemies.create(
            platform3.x - 10,
            platform3.y - 200,
            'enemy'
            ).setScale(4);
            const platform4 = platforms.getChildren().at(9);
            const enemy4 = this.enemies.create(
            platform4.x - 10,
            platform4.y - 200,
            'enemy'
            ).setScale(4);


            this.enemyHpOffset = 80;
        this.enemies.children.iterate(e => {
            e.body.setGravityY(300);
            e.setCollideWorldBounds(true);
            e.setVelocityX(80);
            e.direction = 1;

            //vihollisen hp
            e.maxHp = 150;
            e.hp = 150;

            e.setPushable(false);

            // enemy hp
            e.hpBarBG = this.add.rectangle(e.x, e.y - this.enemyHpOffset, 40, 6, 0x000000);
            e.hpBar = this.add.rectangle(e.x, e.y - this.enemyHpOffset, 40, 6, 0xff0000);

            e.hpBarBG.setScrollFactor(1);
            e.hpBar.setScrollFactor(1);

            if (!e.active) return; // jos ei aktiivinen, hyppää yli

            if (!e.hpBar || !e.hpBarBG) return; // jos palkki on jo poistettu, ei tehdä mitään

            const hpOffset = this.enemyHpOffset || 50;

            e.hpBarBG.x = e.x;
            e.hpBarBG.y = e.y - hpOffset;

            const percent = e.hp / e.maxHp;
            e.hpBar.width = 40 * percent;
            e.hpBar.x = e.x - 20;
            e.hpBar.y = e.y - hpOffset;
        });

        this.cameras.main.setBounds(0, 0, 2000, 2000);
        this.physics.world.setBounds(0, 0, 2000, 2000);
        this.cameras.main.startFollow(player);

   
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, bottom_of_game);
        this.physics.add.collider(player, wall);
        this.physics.add.overlap(player, trampoline, trampolinePlayer, null, this);
        this.physics.add.overlap(player, low_power_trampoline, low_power_trampolinePlayer, null, this);
        this.physics.add.overlap(player, ovi, level5Transition, null, this);
        this.physics.add.overlap(player, wind, windPlayer, null, this);

        this.physics.add.collider(player, knife);
        this.physics.add.collider(knife, platforms, (weapon) => {
            if (!weapon) return;
            weapon.setVelocity(0, 0);
            weapon.body.allowGravity = false;
            weapon.body.immovable = true;
        });
        this.physics.add.collider(knife, wall, (weapon) => {
            if (!weapon) return;
            weapon.setVelocity(0, 0);
            weapon.body.allowGravity = false;
            weapon.body.immovable = true;
        });
        this.physics.add.collider(knife, bottom_of_game);

        this.physics.add.collider(knife, this.enemies, (weapon, enemy) => {

            // Tuhoaa veitsen
            if (weapon && weapon.disableBody) weapon.disableBody(true, true);
            else if (weapon && weapon.destroy) weapon.destroy();

            // --- Vihollinen ottaa Damagea ---
            if (!enemy || !enemy.active) return;

         if (enemy.hp > 0) {
    enemy_hit.play();
    enemy.hp -= 50;
    enemy.setTint(0x550000);
    this.time.delayedCall(150, () => enemy.clearTint());
    }
    

            // Osumaefekti
            enemy.setTint(0x550000);
            this.time.delayedCall(150, () => enemy.clearTint());

            // POISTA HP PALKKI heti
            if (enemy.hp <= 0) {
            if (enemy.hpBar) enemy.hpBar.destroy();
            if (enemy.hpBarBG) enemy.hpBarBG.destroy();

            enemy_death.play();
            enemy.hpBar = null;
            enemy.hpBarBG = null;

            enemy.disableBody(true, true);
            }
        });

        this.physics.add.collider(this.enemies, platforms);
        this.physics.add.collider(player, this.enemies, hitByEnemy, null, this);

        this.cannons = [
            this.physics.add.image(20, 1350, 'cannon'),
            this.physics.add.image(500, 1900, 'cannon'),
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
            delay: 2000,
            callback: () => {
                this.cannons.forEach(c => shootBullet(c, bullets));
            },
            loop: true
        });

        this.physics.add.collider(player, bullets, hitPlayer, null, this);

        // cannon_up
        this.cannons_up = [
            this.physics.add.image(600, 1950, 'cannon_up'),
            this.physics.add.image(640, 1950, 'cannon_up'),
            this.physics.add.image(680, 1950, 'cannon_up'),
            this.physics.add.image(1700, 1950, 'cannon_up'),
            this.physics.add.image(1950, 1950, 'cannon_up'),
        ];
        this.cannons_up.forEach(c => { c.setImmovable(true); c.body.allowGravity = false; });

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

        // cannon_back
        cannon_back = this.physics.add.image(1670, 1740, 'cannon_back');
        cannon_back.setImmovable(true);
        cannon_back.body.allowGravity = false;

        cannon_back_bullets = this.physics.add.group({
            defaultKey: 'bullet',
            maxSize: 10000000000
        });

        this.time.addEvent({
            delay: 1000,
            callback: () => shootBullet_cannon_back(cannon_back, cannon_back_bullets),
            loop: true
        });

        this.physics.add.collider(player, cannon_back_bullets, hitPlayer, null, this);


        this.enemies.children.iterate(e => { if (e && e.play) e.play('walkRightEnemy'); });

        // -------------------------
        // CLOCK / TIMER
        // -------------------------
        this.totalTime = this.registry.get('totalTime') || 0;
        this.timerText = this.add.text(10, 10, "Aika: " + this.totalTime, {
            fontSize: '24px',
            fill: '#fff'
        }).setScrollFactor(0);

        this.timeEvent = this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: () => {
                this.totalTime++;
                this.registry.set('totalTime', this.totalTime);
                this.timerText.setText("Aika: " + this.totalTime);
            }
        });
         this.deaths = this.registry.get('deaths');

        this.deathText = this.add.text(10, 40, "Kuolemat: " + this.deaths, {
        fontSize: '24px',
        fill: '#fff'
        }).setScrollFactor(0);

        this.spikes = this.physics.add.staticGroup();
        this.spikes.create(1170, 1970, 'spike').setScale(0.8).refreshBody();
        this.spikes.create(1445, 1970, 'spike').setScale(0.8).refreshBody();
        this.spikes.create(955, 1970, 'spike').setScale(0.8).refreshBody();
        this.spikes.create(555, 1970, 'spike').setScale(0.8).refreshBody();
        this.spikes.create(655, 1970, 'spike').setScale(0.8).refreshBody();
        this.spikes.create(755, 1970, 'spike').setScale(0.8).refreshBody();
        this.spikes.create(855, 1970, 'spike').setScale(0.8).refreshBody();
        this.physics.add.collider(player, this.spikes, hitBySpike, null, this);
    }

    update(){
        footsteps.pause();  
        backgroundsound.play();
        if (cursors.up.isDown && player.body.touching.down) {
            jumping = 1;
            player.setVelocityY(-300);
            player.anims.play("jump");
            jump.play();
        }
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
            if (player.body.touching.down) {
                footsteps.play(); 
            }
            player.setVelocityX(-160);
            player.anims.play('left', true);
            facingRight = false;
        } 
        else if (cursors.right.isDown) {
            if (player.body.touching.down) {
                footsteps.play(); 
            }
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
                const maxWindSpeed = 300;
                if (player.body.velocity.x < maxWindSpeed) {
                    player.setVelocityX(player.body.velocity.x + windAcceleration);
                }
            }
            else {
            player.setVelocityX(0)
            player.anims.play('turn');
            }
        }

        // Knife heitto
          if (Phaser.Input.Keyboard.JustDown(shoot)) {
            const now = this.time.now;
            if (now - this.lastThrowTime > this.throwCooldown) {
                   knife_throw.play()
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

        this.enemies.children.iterate(e => {
            if (!e || !e.active) return;

            const probeX = e.x + e.direction * (e.width / 2 + 6);
            const probeY = e.body.bottom + 2;

            let groundAhead = false;
            platforms.getChildren().forEach(p => {
                const bounds = p.getBounds();
                if (
                    probeX >= bounds.left - 5 &&
                    probeX <= bounds.right + 5 &&
                    probeY >= bounds.top - 10 &&
                    probeY <= bounds.top + 25
                ) {
                    groundAhead = true;
                }
            });

            if (!e.lastTurnTime) e.lastTurnTime = 0;
            if (this.time.now - e.lastTurnTime > 500) {
                if (!groundAhead && e.body.blocked.down) {
                       enemy.play()
                    e.direction *= -1;
                    e.setVelocityX(80 * e.direction);
                    e.play(e.direction > 0 ? 'walkRightEnemy' : 'walkLeftEnemy', true);
                    e.lastTurnTime = this.time.now;
                }
            }

            if (e.body.blocked.left) {
                e.direction = 1;
                e.setVelocityX(80);
                e.play('walkRightEnemy', true);
            }
            if (e.body.blocked.right) {
                e.direction = -1;
                e.setVelocityX(-80);
                e.play('walkLeftEnemy', true);
            }
            // Päivitä HP palkki vihollisen mukana
            if (e.hpBar && e.hpBarBG) {

            e.hpBarBG.x = e.x;
            e.hpBarBG.y = e.y - this.enemyHpOffset;

            e.hpBar.width = 40 * (e.hp / e.maxHp);
            e.hpBar.x = e.x - (40 * (1 - e.hp / e.maxHp)) / 2;
            e.hpBar.y = e.y - this.enemyHpOffset;
            }
        });
    }
}

//level 5
class Level5 extends Phaser.Scene {
    constructor() {
        super({ key: 'Level5' });}
        init() {this.registry.set('totalTime', this.registry.get('totalTime') ?? 0 );this.registry.set('deaths', this.registry.get('deaths') ?? 0 );}
        create(){
            backgroundsound.pause();
            boss_spike=this.physics.add.group();
            bosswall=this.physics.add.group();
            shoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
            knife = this.physics.add.group();
            knife2 = this.physics.add.group();
            fireball = this.physics.add.group();
            this.lastThrowTime = 0; 
            this.throwCooldown = 1000;
            this.add.image(1000,1000, 'sky_level5').setScale(1);
            level5_level1=this.physics.add.staticGroup();
            wind=this.physics.add.staticGroup();
            platforms = this.physics.add.staticGroup();
            bottom_of_game = this.physics.add.staticGroup();
            trampoline=this.physics.add.staticGroup();
            low_power_trampoline=this.physics.add.staticGroup();
            wall=this.physics.add.staticGroup();
            cursors = this.input.keyboard.createCursorKeys();
            tower_thingys=this.physics.add.staticGroup();
            level5_level1.create(100,2000, 'level5_level1')
            level5_level1.create(2000,2000, 'level5_level1')
            level5_level1.create(1700,2000, 'level5_level1')
            //
            bottom_of_game.create(458,2000, 'bottom_of_game')
            bottom_of_game.create(500,2000, 'bottom_of_game')
            bottom_of_game.create(700,2000, 'bottom_of_game')
            bottom_of_game.create(900,2000, 'bottom_of_game')
            bottom_of_game.create(1100,2000, 'bottom_of_game')
            bottom_of_game.create(1300,2000, 'bottom_of_game')
            bottom_of_game.create(1500,2000, 'bottom_of_game')
            //
            //this.load.image('tower_thingy1', 'assets/textures/tower_thingy_1.png');
            //this.load.image('tower_thingy3', 'assets/textures/tower_thingy_3.png');
            //this.load.image('tower_thingy2', 'assets/textures/tower_thingy_2.png');
            //this.load.image('tower_thingy4', 'assets/textures/tower_thingy_4.png');
            tower_thingys.create(1580,1930, 'tower_thingy1').setScale(1).refreshBody();
            tower_thingys.create(1380,1930, 'tower_thingy2').setScale(1).refreshBody();
            tower_thingys.create(1180,1930, 'tower_thingy4').setScale(1).refreshBody();
            tower_thingys.create(980,1930, 'tower_thingy3').setScale(1).refreshBody();
            tower_thingys.create(780,1930, 'tower_thingy4').setScale(1).refreshBody();
            tower_thingys.create(580,1930, 'tower_thingy2').setScale(1).refreshBody();
            tower_thingys.create(380,1930, 'tower_thingy2').setScale(1).refreshBody();
            player = this.physics.add.sprite(400, 1800, 'main_character');
            boss = this.physics.add.sprite(980, 1700, 'boss_level5').setScale(2.5).refreshBody();
            this.cameras.main.setBounds(0, 0, 2000, 2000);
            this.physics.world.setBounds(0, 0, 2000, 2000);
            this.cameras.main.startFollow(player);
            player.setCollideWorldBounds(true);
            this.physics.add.collider(player, platforms);
            this.physics.add.collider(player, tower_thingys);
            this.physics.add.collider(player, bottom_of_game);
            this.physics.add.collider(player, wall);
            this.physics.add.collider(boss, platforms);
            this.physics.add.collider(boss, tower_thingys);
            this.physics.add.collider(boss, bottom_of_game);
            this.physics.add.collider(boss, wall);
            this.physics.add.overlap(boss, player, bossPlayerContact, null, this);
            this.physics.add.collider(player, knife);
            this.physics.add.collider(player, knife2, knifehit, null, this);
            this.physics.add.overlap(boss, knife, knifehitboss,null,this);
            boss.lives = boss_lives;
            this.physics.add.overlap(player, fireball, fireballplayer, null, this);
            this.physics.add.overlap(player, bosswall, boss_wall_player, null, this);
            this.physics.add.overlap(player, boss_spike, boss_spike_player, null, this);
            this.physics.add.overlap(boss_spike, tower_thingys, boss_spike_tower_thingys, null, this);
            this.physics.add.collider(knife, platforms, (weapon) => {
            weapon.setVelocity(0, 0);
            weapon.body.allowGravity = false;
            weapon.body.immovable = true;
            boss_animation_play = false;
            });
            //boss asoiten reset
            bossattack = 0;
            bossattackchanche = 0;
            dialogueActive = false;
            console.log('dialogue active',dialogueActive)
            knockback = 0;
            if (dialogue1_boss===1) {
                dialogue1_boss=1
                console.log('Dialogue 1 boss:',dialogue1_boss)
            }
            else {
              dialogue1_boss=0  
              console.log('Dialogue 1 boss:',dialogue1_boss)
            }
            if (dialogue2_boss===2) {
                dialogue2_boss=2
                console.log('Dialogue 2 boss:',dialogue2_boss)
            }
            else {
              dialogue2_boss=0  
              console.log('Dialogue 2 boss:',dialogue2_boss)
            }
            if (dialogue3_boss===2) {
                dialogue3_boss=2
                console.log('Dialogue 3 boss:',dialogue3_boss)
            }
            else {
              dialogue3_boss=0
              console.log('Dialogue 3 boss:',dialogue3_boss)
            }
            //
            this.physics.add.collider(knife, tower_thingys, (weapon) => {
            weapon.setVelocity(0, 0);
            weapon.body.allowGravity = false;
            weapon.body.immovable = true;
            });
            this.physics.add.collider(knife, this.enemy, (weapon, enemy) => {
            enemy.disableBody(true, true);
            weapon.destroy(); 
            });
            this.physics.add.collider(knife2, tower_thingys, (weapon2) => {
                  weapon2.destroy(); 
            });
            //boss animaatio
            boss.play('idlebossphase1');
            //kellon funktio
            // hae aiempi aika
            this.totalTime = this.registry.get('totalTime') || 0;

            //luo tekstin
            this.timerText = this.add.text(10, 10, "Aika: " + this.totalTime, {
                fontSize: '24px',
                fill: '#fff'
            }).setScrollFactor(0);

            // kuolemalaskuri
            this.deaths = this.registry.get('deaths');

            this.deathText = this.add.text(10, 40, "Kuolemat: " + this.deaths, {
            fontSize: '24px',
            fill: '#fff'
            }).setScrollFactor(0);

            //texti pysyy vasemmassa 
            this.timeEvent = this.time.addEvent({
                delay: 1000,
                loop: true,
                callback: () => {
                    this.totalTime++;
                    this.registry.set('totalTime', this.totalTime);

                    this.timerText.setText("Aika: " + this.totalTime);
                }
            });
            this.physics.add.overlap(player, level5_level1,level1Transition,null,this);
        }
        update(){
        footsteps.pause();
        if (dialogue1_boss===1) {
            dialogueActive = true;
            let boss_dialogue_img1=this.add.image(500,1610,'dialogue1_boss').setScale(5)
            setTimeout(() => {boss_dialogue_img1.destroy();}, 3000);
            setTimeout(() => {let boss_dialogue_img2=this.add.image(500,1610,'dialogue2_boss').setScale(5);setTimeout(() => {boss_dialogue_img2.destroy();dialogueActive = false;}, 3000)}, 3000);
            dialogue1_boss=0
        }
        if (dialogue2_boss===1) {
            dialogueActive = true;
            player.setPosition(400, 1800);
            let boss_dialogue_img3=this.add.image(500,1610,'dialogue3_boss').setScale(5)
            setTimeout(() => {boss_dialogue_img3.destroy();player.setPosition(400, 1800);}, 3000);
            setTimeout(() => {let boss_dialogue_img4=this.add.image(500,1610,'dialogue4_boss').setScale(5);setTimeout(() => {boss_dialogue_img4.destroy();dialogueActive = false;player.setPosition(400, 1800);}, 3000)}, 3000);
            dialogue2_boss=2
        }
        if (dialogue3_boss===1) {
            dialogueActive = true;
            player.setPosition(400, 1800);
            let boss_dialogue_img5=this.add.image(500,1610,'dialogue5_boss').setScale(5)
            setTimeout(() => {boss_dialogue_img5.destroy();player.setPosition(400, 1800);}, 3000);
            setTimeout(() => {let boss_dialogue_img6=this.add.image(500,1610,'dialogue6_boss').setScale(5);setTimeout(() => {boss_dialogue_img6.destroy();dialogueActive = false;player.setPosition(400, 1800);}, 3000)}, 3000);
            dialogue3_boss=2
        }
        if (dialogueActive) {
            return;
        }
        else {
            if(dialogue1_boss===0) {
                if (boss_animation_play===false) {
                    if(phase===1){
                        bossattackchanche=Phaser.Math.Between(0, 200);
                        //console.log("boss attack chanche",bossattackchanche)
                        if (bossattackchanche===6) {
                            boss_animation_play=true
                            boss.play('bossphase1attack');
                            setTimeout(() => {boss.play('idlebossphase1');boss_animation_play=false;bossattack=Phaser.Math.Between(0, 2);console.log("boss attack",bossattack)}, 1500);
                            if (bossattack===0) {
                                 wall_sound.play()
                                let boss_wall_object = bosswall.create(boss.x, boss.y+40, 'boss_wall');
                                boss_wall_object.setScale(1).refreshBody();
                                const speed = 100;
                                const direction = Math.sign(player.x - boss.x);
                                boss_wall_object.setVelocityX(speed * direction);
                                boss_wall_object.body.allowGravity = false;
                                setTimeout(() => {if (boss_wall_object) boss_wall_object.destroy(); }, 9000);
                            }
                            else if (bossattack===1) {
                                fireball_sound.play()
                                let fireballobject = fireball.create(boss.x, boss.y, 'fireball');
                                fireballobject.setScale(2).refreshBody();
                                const speed = 300;
                                const direction = Math.sign(player.x - boss.x);
                                fireballobject.setVelocityX(speed * direction);
                                fireballobject.body.allowGravity = false;
                                setTimeout(() => {if (fireballobject) fireballobject.destroy(); }, 4000);
                            }
                            else {
                                 spikes_sound.play()
                                let spikebossobject = boss_spike.create(player.x, 1000, 'boss_spike');
                                spikebossobject.setScale(2).refreshBody();
                                const speed = 100;
                                spikebossobject.setVelocityY(speed);
                                spikebossobject.body.allowGravity = false;
                                setTimeout(() => {if (spikebossobject) spikebossobject.destroy(); }, 90000);
                            }
                        }
                    }
                    else if (phase===2){
                        bossattackchanche=Phaser.Math.Between(0, 120);
                        //console.log("boss attack chanche",bossattackchanche)
                        if (bossattackchanche===6) {
                            boss_animation_play=true
                            boss.play('bossphase1attack');
                            setTimeout(() => {boss.play('idlebossphase1');boss_animation_play=false;bossattack=Phaser.Math.Between(0, 3);console.log("boss attack",bossattack)}, 1500);
                            if (bossattack===0) {
                                wall_sound.play()
                                let boss_wall_object = bosswall.create(boss.x, boss.y+40, 'boss_wall');
                                boss_wall_object.setScale(1).refreshBody();
                                const speed = 200;
                                const direction = Math.sign(player.x - boss.x);
                                boss_wall_object.setVelocityX(speed * direction);
                                boss_wall_object.body.allowGravity = false;
                                setTimeout(() => {if (boss_wall_object) boss_wall_object.destroy(); }, 9000);
                            }
                            else if(bossattack===1) {
                                 fireball_sound.play()
                                let fireballobject = fireball.create(boss.x, boss.y, 'fireball');
                                fireballobject.setScale(2).refreshBody();
                                const speed = 500;
                                const direction = Math.sign(player.x - boss.x);
                                fireballobject.setVelocityX(speed * direction);
                                fireballobject.body.allowGravity = false;
                                setTimeout(() => {if (fireballobject) fireballobject.destroy(); }, 4000);
                            }
                            else if (bossattack===2) {
                                spikes_sound.play()
                                let spikebossobject = boss_spike.create(player.x, 1000, 'boss_spike');
                                spikebossobject.setScale(2).refreshBody();
                                const speed = 200;
                                spikebossobject.setVelocityY(speed);
                                spikebossobject.body.allowGravity = false;
                                setTimeout(() => {if (spikebossobject) spikebossobject.destroy(); }, 90000);
                            }
                            else if (bossattack===3){
                                throw_sound.play()
                                knockback=1;
                                player.setVelocityY(-500);
                                setTimeout(() => {player.setVelocityX(500);player.setVelocityY(-100);setTimeout(() => {knockback=0;},1000 )}, 2000);
                            }
                        }
                    }
                    else if (phase===3){
                        bossattackchanche=Phaser.Math.Between(0, 50);
                        //console.log("boss attack chanche",bossattackchanche)
                        if (bossattackchanche===6) {
                            boss_animation_play=true
                            boss.play('bossphase2attack');
                            setTimeout(() => {boss.play('idlebossphase2');boss_animation_play=false;bossattack=Phaser.Math.Between(0, 4);console.log("boss attack",bossattack)}, 1500);
                            if (bossattack===0) {
                                wall_sound.play()
                                let boss_wall_object = bosswall.create(boss.x, boss.y+40, 'boss_wall');
                                boss_wall_object.setScale(1).refreshBody();
                                const speed = 300;
                                const direction = Math.sign(player.x - boss.x);
                                boss_wall_object.setVelocityX(speed * direction);
                                boss_wall_object.body.allowGravity = false;
                                setTimeout(() => {if (boss_wall_object) boss_wall_object.destroy(); }, 9000);
                            }
                            else if(bossattack===1) {
                                 fireball_sound.play()
                                let fireballobject = fireball.create(boss.x, boss.y, 'fireball');
                                fireballobject.setScale(2).refreshBody();
                                const speed = 500;
                                const direction = Math.sign(player.x - boss.x);
                                fireballobject.setVelocityX(speed * direction);
                                fireballobject.body.allowGravity = false;
                                setTimeout(() => {if (fireballobject) fireballobject.destroy(); }, 4000);
                            }
                            else if (bossattack===2) {
                                spikes_sound.play()
                                let spikebossobject = boss_spike.create(player.x, 1000, 'boss_spike');
                                spikebossobject.setScale(2).refreshBody();
                                const speed = 400;
                                spikebossobject.setVelocityY(speed);
                                spikebossobject.body.allowGravity = false;
                                setTimeout(() => {if (spikebossobject) spikebossobject.destroy(); }, 90000);
                            }
                            else if (bossattack===3) {
                                lightbeam_sound.play()
                                let beam = this.physics.add.image(boss.x, boss.y-400, 'lightbeam');
                                beam.body.allowGravity = false;
                                beam.setScale(1);
                                beam.setAlpha(0.4);
                                setTimeout(() => {this.tweens.add({targets: beam,scaleX: 12,scaleY: 6,duration: 1300});}, 1000);
                              // beamin katoaminen
                                setTimeout(() => {
                                    if (beam) beam.destroy();

                                    // knockback alkaa vasta nyt
                                    knockback = 1;

                                    // Suunnan laskeminen
                                    let direction = Math.sign(player.x - boss.x); 
                                    if (direction === 0) direction = 1; // varmistetaan ettei tule 0-nopeutta

                                    // Heitto sivulle + ylös
                                    player.setVelocityX(1500 * direction);
                                    player.setVelocityY(-700);

                                    // knockback loppuu
                                    setTimeout(() => {
                                        knockback = 0;
                                    }, 800);

                                }, 2000);  // tämä on sama aika kuin sulla beam.destroy() oli

                                this.physics.add.overlap(player, beam, () => {
                                        const currentDeaths = this.registry.get('deaths') + 1;
                                        this.registry.set('deaths', currentDeaths);
                                        this.deathText.setText("Kuolemat: " + currentDeaths);
                                        this.scene.start('Level5');
                                    });
                            }
                            else if (bossattack===4) {
                                throw_sound.play()
                                knockback=1;
                                player.setVelocityY(-700);
                                setTimeout(() => {player.setVelocityX(700);player.setVelocityY(-300);setTimeout(() => {knockback=0;},1000 )}, 2000);
                            }
                        }
                    }

            }
        }}
        boss_fight_background_music.play()
        if (knockback==1) {
            return;
        }
        else if (dialogueActive) {
                player.setVelocityX(0);
                player.setVelocityY(0);
                player.anims.play('turn', true);
                return;
        }
        else {
            if (cursors.up.isDown && player.body.touching.down) {
                jumping = 1;
                player.setVelocityY(-300);
                player.anims.play("jump");
                jump.play();
            }
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
                if (player.body.touching.down) {
                    footsteps.play(); 
                    player.setVelocityX(-160);
                    player.anims.play('left', true);
                    facingRight = false;
                }
                else {
                player.setVelocityX(-160);
                player.anims.play('left', true);
                facingRight = false;
                footsteps.pause();
                }
            } 
            else if (cursors.right.isDown) {
                if (player.body.touching.down) {
                    footsteps.play(); 
                    player.setVelocityX(160);
                    player.anims.play('right', true);
                    facingRight = true;
                }
                else {
                player.setVelocityX(160);
                player.anims.play('right', true);
                facingRight = true;
                footsteps.pause();
                }
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
            if (cursors.down.isDown) {
                player.setVelocityY(300);
                player.anims.play('jump');
            } 

                if (Phaser.Input.Keyboard.JustDown(shoot)) {
                const now = this.time.now;
            //knife heittoa
            if (now - this.lastThrowTime > this.throwCooldown) {
                knife_throw.play()
                this.lastThrowTime = now; 
                let offset = -30;
                let spawnX = player.x + (facingRight ? offset : -offset);
                let weapon = knife.create(spawnX, player.y, 'dagger');
                weapon.setScale(0.1);
                weapon.setVelocityX(300); 
                weapon.setGravityY(-200);
                if (facingRight) {
                    weapon.setVelocityX(300);
                } 
            else {
                weapon.setVelocityX(-300);
                weapon.flipX = true; 
            } 
            setTimeout(() => { weapon.destroy(); }, 3000);
            }
            }
    }
    }
    }
class Cutscene_knife extends Phaser.Scene {
    constructor() {
        super({ key: 'Cutscene_knife' });}
        create(){
            let cutscene_knife_img = this.add.image(500,500,'cutscene_knife1').setScale(5)
            setTimeout(() => {
                cutscene_knife_img.destroy();
                let cutscene_knife_img2 = this.add.image(500,500,'cutscene_knife2').setScale(4);
                setTimeout(() => {
                    cutscene_knife_img2.destroy();
                    let cutscene_knife_img3 = this.add.image(500,500,'cutscene_knife3').setScale(4);
                    setTimeout(() => {
                        cutscene_knife_img3.destroy();
                        let cutscene_knife_img4 = this.add.image(500,500,'cutscene_knife4');
                        setTimeout(() => {
                            cutscene_knife_img4.destroy();
                            let cutscene_knife_img5 = this.add.image(500,500,'cutscene_knife5');
                            setTimeout(() => {
                                cutscene_knife_img5.destroy();
                                let cutscene_knife_img6 = this.add.image(500,500,'cutscene_knife6');
                                setTimeout(() => {
                                    cutscene_knife_img6.destroy();
                                    let cutscene_knife_img7 = this.add.image(500,500,'cutscene_knife7');
                                    setTimeout(() => {
                                        cutscene_knife_img7.destroy();
                                        let cutscene_knife_img8 = this.add.image(500,500,'cutscene_knife8');
                                        setTimeout(() => {
                                            cutscene_knife_img8.destroy();
                                            let cutscene_knife_img9 = this.add.image(500,500,'cutscene_knife9');
                                            setTimeout(() => {
                                                cutscene_knife_img9.destroy();
                                                let cutscene_knife_img10 = this.add.image(500,500,'cutscene_knife10');
                                                setTimeout(() => {
                                                    cutscene_knife_img10.destroy();
                                                    let cutscene_knife_img11 = this.add.image(500,500,'cutscene_knife11');
                                                    setTimeout(() => {
                                                        cutscene_knife_img11.destroy();
                                                        let cutscene_knife_img12 = this.add.image(500,500,'cutscene_knife12');
                                                        setTimeout(() => {
                                                            cutscene_knife_img12.destroy();
                                                            let cutscene_knife_img13 = this.add.image(500,500,'cutscene_knife13');
                                                            setTimeout(() => {
                                                                cutscene_knife_img13.destroy();
                                                                let cutscene_knife_img14 = this.add.image(500,500,'cutscene_knife14');
                                                                setTimeout(() => {
                                                                    cutscene_knife_img14.destroy();
                                                                    let cutscene_knife_img15 = this.add.image(500,500,'cutscene_knife15');
                                                                    setTimeout(() => {
                                                                        cutscene_knife_img15.destroy();
                                                                        let cutscene_knife_img16 = this.add.image(500,500,'cutscene_knife16');
                                                                        setTimeout(() => {
                                                                            cutscene_knife_img16.destroy();
                                                                            let cutscene_knife_img17 = this.add.image(500,500,'cutscene_knife17');
                                                                            setTimeout(() => {
                                                                                cutscene_knife_img17.destroy();
                                                                                let cutscene_knife_img18 = this.add.image(500,500,'cutscene_knife18');
                                                                                setTimeout(() => {
                                                                                    cutscene_knife_img18.destroy();
                                                                                    let cutscene_knife_img19 = this.add.image(500,500,'cutscene_knife19');
                                                                                    setTimeout(() => {
                                                                                        cutscene_knife_img19.destroy();
                                                                                        let cutscene_knife_img20 = this.add.image(500,500,'cutscene_knife20');
                                                                                        setTimeout(() => {
                                                                                            cutscene_knife_img20.destroy();
                                                                                            let cutscene_knife_img21 = this.add.image(500,500,'cutscene_knife21');
                                                                                            setTimeout(() => {
                                                                                                cutscene_knife_img21.destroy();
                                                                                                let cutscene_knife_img22 = this.add.image(500,500,'cutscene_knife22');
                                                                                                setTimeout(() => {
                                                                                                    cutscene_knife_img22.destroy();
                                                                                                    let cutscene_knife_img23 = this.add.image(500,500,'cutscene_knife23').setScale(4);
                                                                                                    setTimeout(() => {
                                                                                                        cutscene_knife_img23.destroy();
                                                                                                        let cutscene_knife_img24 = this.add.image(500,500,'cutscene_knife24').setScale(4);
                                                                                                            setTimeout(()=>{this.scene.start('Level5')},3000);
                                                                                                    }, 3000);
                                                                                                }, 3000);
                                                                                            }, 1000);
                                                                                        }, 1000);
                                                                                    }, 1000);
                                                                                }, 1000);
                                                                            }, 1000);
                                                                        }, 1000);
                                                                    }, 1000);
                                                                }, 1000);
                                                            }, 1000);
                                                        }, 1000);
                                                    }, 1000);
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 3000);
                }, 1000);
            }, 1000);
        }
}
class end1 extends Phaser.Scene {
    constructor() {
        super({ key: 'end1' });}
        create(){
            let dialogue7_boss=this.add.image(500,450,'dialogue7_boss').setScale(4);
setTimeout(() => {
    setTimeout(() => {
        dialogue7_boss.destroy();
        let dialogue8_boss = this.add.image(500,450,'dialogue8_boss').setScale(4);
        setTimeout(() => {
            dialogue8_boss.destroy();
            let dialogue9_boss = this.add.image(500,450,'dialogue9_boss').setScale(4);
            setTimeout(() => {
                dialogue9_boss.destroy();
                let dialogue10_boss = this.add.image(500,450,'dialogue10_boss').setScale(4);
                setTimeout(() => {
                    dialogue10_boss.destroy();
                    let dialogue11_boss = this.add.image(500,450,'dialogue11_boss').setScale(4);
                    setTimeout(() => {
                        dialogue11_boss.destroy();
                        let end1img0A = this.add.image(500,450,'end1_7');
                        setTimeout(() => {
                            end1img0A.destroy();
                            let end1img0 = this.add.image(500,450,'end1_0');
                            setTimeout(() => {
                                end1img0.destroy();
                                let end1img1 = this.add.image(500,450,'end1_1');
                                setTimeout(() => {
                                    end1img1.destroy();
                                    let end1img2 = this.add.image(500,450,'end1_2');
                                    setTimeout(() => {
                                        end1img2.destroy();
                                        let end1img3 = this.add.image(500,450,'end1_3');
                                        setTimeout(() => {
                                            end1img3.destroy();
                                            let end1img4 = this.add.image(500,450,'end1_4');
                                            setTimeout(() => {
                                                end1img4.destroy();
                                                let end1img5 = this.add.image(500,450,'end1_5');
                                                setTimeout(() => {
                                                    end1img5.destroy();
                                                    let end1img6 = this.add.image(550,480,'end1_6'); 
                                                    setTimeout(() => {end1img6.destroy();this.scene.start('credit_scene')}, 3000);
                                                }, 3000);
                                            }, 3000);
                                        }, 3000);
                                    }, 3000);
                                }, 3000);
                            }, 3000);
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}, 1);

        }
}
class end2 extends Phaser.Scene {
    constructor() {
        super({ key: 'end2' });}
    create() {
        let end2_1D=this.add.image(500,450,'end2_1D').setScale(4);
        setTimeout(() => { end2_1D.destroy();let end2_2D=this.add.image(500,450,'end2_2D').setScale(4);
            setTimeout(() => {end2_2D.destroy();let end2_1=this.add.image(500,450, 'end2_1');
                setTimeout(() => {end2_1.destroy();let end2_2=this.add.image(500,450, 'end2_2');
                    setTimeout(() => {end2_2.destroy();let end2_3=this.add.image(500,450, 'end2_3');
                        setTimeout(() => {end2_3.destroy();let end2_4=this.add.image(500,450, 'end2_4');
                            setTimeout(() => {end2_4.destroy();let end2_5=this.add.image(500,450, 'end2_5');
                                setTimeout(() => {end2_5.destroy();let end2_6=this.add.image(500,450, 'end2_6');
                                    setTimeout(() => {end2_6.destroy();let end2_7=this.add.image(500,450, 'end2_7');
                                        setTimeout(() => {end2_7.destroy();let end2_8=this.add.image(500,450, 'end2_8');
                                            setTimeout(() => {end2_8.destroy();let end2_9=this.add.image(500,450, 'end2_9');
                                                setTimeout(() => {end2_9.destroy();let end2_10=this.add.image(500,450, 'end2_10');
                                                    setTimeout(() => {end2_10.destroy();let end2_11=this.add.image(500,450, 'end2_11');
                                                        setTimeout(() => {end2_11.destroy();let end2_12=this.add.image(500,450, 'end2_12');
                                                            setTimeout(() => {end2_12.destroy();let end2_13=this.add.image(500,450, 'end2_13').setScale(0.8);
                                                                setTimeout(() => {end2_13.destroy();let end2_14=this.add.image(500,450, 'end2_14').setScale(2);
                                                                    setTimeout(() => {end2_14.destroy();this.scene.start('credit_scene')}, 3000);
                                                                 }, 3000);
                                                             }, 3000);
                                                         }, 3000);
                                                     }, 3000);
                                                 }, 1000);
                                             }, 1000);
                                         }, 1000);
                                     }, 1000);
                                 }, 1000);
                             }, 1000);
                         }, 1000);
                     }, 3000);
                 }, 3000);
             }, 3000);
        }, 3000);
    }
}
//credit_scene
class credit_scene extends Phaser.Scene {
    constructor() {
        super({ key: 'credit_scene' });
    }

    create() {
        this.textItems = [];
        const currentDeaths = this.registry.get('deaths');
        const messages = [
            "Thank you for playing!",
            "",
            "",
            "",
            "",
            `You died ${currentDeaths} Times`,
            "",
            "Your score was",
            "PLACEHOLDER",
            "",
            "",
            "",
            "",
            "",
            "",
            "SNJ",
            "",
            "",
            "",
            "",
            "Developers",
            "",
            "Niilo Mustonen",
            "",
            "Justus Nyholm",
            "",
            "Santtu Sirén",
            "",
            "",
            "",
            "",
            "Very Spesical Thanks",
            "",
            "",
            "",
            "",
            "Erkki Sinkko",
        ];

        const startY = config.height + 20;
        let offset = 0;

        messages.forEach(msg => {
            const t = this.add.text(
                config.width / 2,
                startY + offset,
                msg,
                {
                    fontSize: "28px",
                    color: "#ffffff",
                    align: "center",
                    wordWrap: { width: 700 }
                }
            ).setOrigin(0.5, 0);

            this.textItems.push(t);
            offset += 60;
        });
    }

    update(time, delta) {
        const speed = 50;

        this.textItems.forEach(t => {
            t.y -= speed * (delta / 1000);
        });
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
    scene: [Intro,MainMenu,Tutorial,Level1,Level2,Level3,Level4,Level5,Cutscene_knife,end1,end2,credit_scene]
};
var enemy_footstep=false;
var knife_deflect_first_Time=true;
var dialogue3_boss=0;
var dialogue2_boss=0;
var boss_lives=50;
var boss_spike;
var bosswall;
var fireball;
var boss_animation_play=false;
var phase=1;
var bossattack;
var bossattackchanche;
let dialogueActive = false;
var dialogue_boss_img;
var dialogue1_boss=1;
var knockback=0;
var boss;
var level5_level1;
var tower_thingys;
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
const invisible=new Audio('assets/sound/invisible.mp3');
const jump=new Audio('assets/sound/jump.ogg');
jump.volume = 0.3;
const player_death=new Audio('assets/sound/death.mp3');
player_death.volume = 1.0;
const cannon_fire=new Audio('assets/sound/cannon_fire.mp3');
const knife_throw=new Audio('assets/sound/knife_throw.m4a');
const enemy_death=new Audio('assets/sound/enemy_death.mp3');
const footsteps=new Audio('assets/sound/footsteps.mp3');
footsteps.volume = 0.5
const enemy=new Audio('assets/sound/enemy.mp3');
enemy.volume = 0.5;
const spike_death=new Audio('assets/sound/spike_death.mp3');
const cannon_death=new Audio('assets/sound/cannon_death.mp3');
const trampoline_sound=new Audio('assets/sound/trampoline.m4a');
const wind_sound=new Audio('assets/sound/wind.mp3');
const boss_fight_background_music=new Audio('assets/sound/boss_fight_background_music.mp3');
const fireball_sound=new Audio('assets/sound/fireball.mp3');
const wall_sound = new Audio('assets/sound/wall.mp3')
const spikes_sound = new Audio('assets/sound/spikes.mp3')
const lightbeam_sound = new Audio('assets/sound/lightbeam_sound.mp3')
const throw_sound = new Audio('assets/sound/throw_sound.mp3')
const enemy_hit = new Audio('assets/sound/enemy_hit.mp3')
const tutorial_music = new Audio('assets/sound/tutorial_music.mp3')
var player;
var weapon;
var weapon2;
var knife;
var knife2;
var shoot;
let cannon;
let bullets;
let facingRight = true;
// funktiot tänne
function shootBullet(cannonInstance, bulletsGroup) {
     cannon_fire.play()
    const c = cannonInstance;
    const bullet = bulletsGroup.get();  // käytetään parametrina annettua ryhmää
    if (bullet) {
        bullet.enableBody(true, c.x + 40, c.y, true, true);
        bullet.setVelocityX(400);
        bullet.body.allowGravity = false;
    }
}
function shootBullet_cannon_up(cannon_upInstance, cannon_up_bulletsGroup) {
     cannon_fire.play()
    const c = cannon_upInstance;
    const cannon_up_bullets = cannon_up_bulletsGroup.get();  // käytetään parametrina annettua ryhmää
    if (cannon_up_bullets) {
        cannon_up_bullets.enableBody(true, c.x, c.y-40, true, true);
        cannon_up_bullets.setVelocityY(-400);
        cannon_up_bullets.body.allowGravity = false;
    }
}
function shootBullet_cannon_back(cannon_backInstance, cannon_back_bulletsGroup) {
     cannon_fire.play()
    const c = cannon_backInstance;
    const cannon_back_bullets = cannon_back_bulletsGroup.get();  // käytetään parametrina annettua ryhmää
    if (cannon_back_bullets) {
        cannon_back_bullets.enableBody(true, c.x, c.y, true, true);
        cannon_back_bullets.setVelocityX(-400);
        cannon_back_bullets.body.allowGravity = false;
    }
}


function hitPlayer(player, bullet) {
           cannon_death.play()
    // Jos pelaajalla on invulnerabiliteetti (esim. juuri spawnattu taso), ohitetaan osuma
    if (player && player.getData && player.getData('invulnerable')) {
        if (bullet && bullet.disableBody) bullet.disableBody(true, true);
        return;
    }

    const currentDeaths = this.registry.get('deaths') + 1;
    this.registry.set('deaths', currentDeaths);

    // Päivitä näkyvä teksti
    this.deathText.setText("Kuolemat: " + currentDeaths);

    this.scene.start(this.scene.key)
}

function level1Transition() {
    if (dialogueActive) {
        player.setPosition(400, 1800);
    }
    else {
    nextlevelsound.play()
    this.scene.start('Level1')
    }
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
function level5Transition() {
    nextlevelsound.play()
    this.scene.start('Level5')
}
function hitByEnemy(player, enemy) {
    const currentDeaths = this.registry.get('deaths') + 1;
    this.registry.set('deaths', currentDeaths);
    player_death.play()

    // Päivitä näkyvä teksti
    this.deathText.setText("Kuolemat: " + currentDeaths);
    this.scene.start(this.scene.key)
}
function trampolinePlayer(player, trampoline) {
     trampoline_sound.play()
    player.setVelocityY(-600);
}
function tutorialDeath(player, enemy) {
    this.scene.start(this.scene.key)
}
function low_power_trampolinePlayer(player, low_power_trampoline) {
     trampoline_sound.play()
    player.setVelocityY(-450);
}
function hitBySpike(player, spike) {
    const currentDeaths = this.registry.get('deaths') + 1;
    this.registry.set('deaths', currentDeaths);
    spike_death.play()

    // Päivitä näkyvä teksti
    this.deathText.setText("Kuolemat: " + currentDeaths);
    this.scene.start(this.scene.key)
}
function knifehit(player, knife2) {
    const currentDeaths = this.registry.get('deaths') + 1;
    this.registry.set('deaths', currentDeaths);
    spike_death.play()

    // Päivitä näkyvä teksti
    this.deathText.setText("Kuolemat: " + currentDeaths);
    this.scene.start(this.scene.key)
}
function windPlayer(player, wind) {
    //console.log("player has activated wind at",wind)
     wind_sound.play();
    player.windActive = true;
    setTimeout(() => { player.windActive = false; }, 10);
}
function level1trhow(player, solid_snake_door) {
    this.add.image(500,400,'solid_snake');
    invisible.play();
    setTimeout(() => {this.scene.start('Level1')}, 9000);
}
function bossPlayerContact(boss,player) {
    knockback=1;
    setTimeout(() => {knockback=0;}, 1300);
      if (player.x < boss.x) { 
        player.setVelocityX(-800); 
         player.setVelocityY(-450)
    } else { 
        player.setVelocityX(800)
    player.setVelocityY(-450)
    }
}
function knifehitboss(boss,knifeSprite) {
    knifeSprite.destroy();
    const currentDeaths = this.registry.get('deaths') + 1;
   var bosshitchanchethingy = Phaser.Math.Between(0, 3);
    console.log(bosshitchanchethingy)
    if (knife_deflect_first_Time) {
         this.scene.start('Cutscene_knife');
        knife_deflect_first_Time=false;
    }
    else {
    if (bosshitchanchethingy === 3) {
            if (phase===1){
            let weapon2 = knife2.create(boss.x + 100, boss.y - 70, 'dagger2');
            weapon2.setScale(0.1);
            // Tarkistetaan pelaajan sijainti suhteessa bossiin ja määritetään heittosuunta
            if (player.x < boss.x) { // Pelaaja on bossin vasemmalla puolella
                weapon2.setVelocityX(-400); // Heitä vasemmalle
                weapon2.flipX = true; 
            } else { // Pelaaja on bossin oikealla puolella
                weapon2.setVelocityX(400); // Heitä oikealle
            }
        }
        
            else if (phase===2){
            let weapon2 = knife2.create(boss.x + 100, boss.y - 70, 'dagger2');
            weapon2.setScale(0.1);
            // Tarkistetaan pelaajan sijainti suhteessa bossiin ja määritetään heittosuunta
            if (player.x < boss.x) { // Pelaaja on bossin vasemmalla puolella
                weapon2.setVelocityX(-600); // Heitä vasemmalle
                weapon2.flipX = true; 
            } else { // Pelaaja on bossin oikealla puolella
                weapon2.setVelocityX(600); // Heitä oikealle
            }
        }
            else if (phase===3){
            let weapon2 = knife2.create(boss.x + 100, boss.y - 70, 'dagger2');
            weapon2.setScale(0.1);
            // Tarkistetaan pelaajan sijainti suhteessa bossiin ja määritetään heittosuunta
            if (player.x < boss.x) { // Pelaaja on bossin vasemmalla puolella
                weapon2.setVelocityX(-800); // Heitä vasemmalle
                weapon2.flipX = true; 
            } else { // Pelaaja on bossin oikealla puolella
                weapon2.setVelocityX(800); // Heitä oikealle
            }
        }
    }   
    else{
        console.log(boss.lives)
        boss.lives -= 1; // Vähennetään vihollisen elämää
        boss_lives-=1;
        if (boss.lives <= 35) {
            if (dialogue2_boss===0) {
            dialogue2_boss=1;
            phase = 2
        }
        else {
            phase = 2
        }
        }
        if (boss.lives <= 20) {
            if (dialogue3_boss===0) {
            dialogue3_boss=1;
            phase = 3
        }
        else{
            phase = 3
        }
        if (boss.lives <=0) {
            if (currentDeaths<=0) {
                this.scene.start('end2')
            }
            else if (currentDeaths>=5000) {
                
            }
            else {
                this.scene.start('end1')
            }
        }
        }
    }
    }
    }
    

function fireballplayer(player,fireball) {
    const currentDeaths = this.registry.get('deaths') + 1;
    this.registry.set('deaths', currentDeaths);
    // Päivitä näkyvä teksti
    this.deathText.setText("Kuolemat: " + currentDeaths);
    this.scene.start('Level5')
}
function boss_wall_player(player,bosswall) {
    const currentDeaths = this.registry.get('deaths') + 1;
    this.registry.set('deaths', currentDeaths);
    // Päivitä näkyvä teksti
    this.deathText.setText("Kuolemat: " + currentDeaths);
    this.scene.start('Level5')
}
function boss_spike_player(player,boss_spike){
    const currentDeaths = this.registry.get('deaths') + 1;
    this.registry.set('deaths', currentDeaths);
    // Päivitä näkyvä teksti
    this.deathText.setText("Kuolemat: " + currentDeaths);
    this.scene.start('Level5')
}
function boss_spike_tower_thingys(boss_spikes, tower_thingys) {
    boss_spikes.destroy();
}