//import { API_URL } from "./config.js";

//get player to interact with the game
class force_interaction extends Phaser.Scene {
    constructor() {
        super({ key: 'force_interaction' });}
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
            this.load.image('tutorial_ovi','assets/textures/tutorial_ovi.png');
            this.load.image('dungeon','assets/textures/dungeon.png');
            this.load.spritesheet('enemy','assets/textures/vihollinen.png',{frameWidth: 32, frameHeight: 42});
            this.load.image('castle_hallway', 'assets/textures/castle_hallway.jpg');
            this.load.image('cannon_up', 'assets/textures/cannon_up.png');
            this.load.image('cannon_down', 'assets/textures/cannon_down.png');
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
            this.load.spritesheet('boss_level5','assets/textures/boss-spirehseet.png',{frameWidth: 37, frameHeight: 42});
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
            this.load.image('end3_1', 'assets/textures/cutscene_end3_1.png')
            this.load.image('end3_2', 'assets/textures/cutscene_end3_3.png')
            this.load.image('end3_3', 'assets/textures/cutscene_end3_2.png')
            this.load.image('end3_4', 'assets/textures/cutscene_end3_4.png')
            this.load.image('end3_1D', 'assets/textures/cutscene_end3_1D.png')
            this.load.image('credit_screen_button', 'assets/textures/credit_screen_button.png')
            this.load.image('cutscene_knife_button', 'assets/textures/cutscene_knife_button.png')
            this.load.image('end1_button', 'assets/textures/end1_button.png')
            this.load.image('end2_button', 'assets/textures/end2_button.png')
            this.load.image('end3_button', 'assets/textures/end3_button.png')
            this.load.image('end4_button', 'assets/textures/end4_button.png')
            this.load.image('play_button', 'assets/textures/play_button.png')
            this.load.image('petya_button', 'assets/textures/petya_button.png')
            this.load.image('secret_level_button', 'assets/textures/secret_level_button.png')
            this.load.image('coin', 'assets/textures/coin.png')
            this.load.image('end4_1D', 'assets/textures/end4_1D.png')
            this.load.image('end4_2D', 'assets/textures/end4_2D.png')
            this.load.image('end4_3D', 'assets/textures/end4_3D.png')
            this.load.image('end4_4D', 'assets/textures/end4_4D.png')
            this.load.image('skipcutscene_button', 'assets/textures/skipcutscene_button.png')
            this.load.image('petya', 'assets/textures/petya.png')
            this.load.image('gold', 'assets/textures/gold.jpg')
            this.load.spritesheet('tikku_hahmo_skini', 'assets/textures/tikku_hahmo_skini.png',{frameWidth: 30, frameHeight: 42});
            this.load.image('Boss_dialogue_cheat_1', 'assets/textures/Boss_dialogue_cheat_1.png')
            this.load.image('Boss_dialogue_cheat_2', 'assets/textures/Boss_dialogue_cheat_2.png')
            this.load.image('cutscene_cheat_end1', 'assets/textures/cutscene_cheat_end1.png')
            this.load.image('cutscene_cheat_end2', 'assets/textures/cutscene_cheat_end2.png')
        }
        create() {
            const playerTexture = cheat3 ? 'tikku_hahmo_skini' : 'main_character';
            const play_button=this.add.image(500,500,'play_button').setInteractive();
            play_button.on('pointerdown', () => {
                this.scene.start('Intro'),
                console.log("Start Game");
            });
            setTimeout(() => {            
                const skipcutscene_button=this.add.image(1050,10,'skipcutscene_button').setInteractive();
                skipcutscene_button.on('pointerdown', () => {
                    this.scene.start('MainMenu'),
                    console.log("Start Game");
                })
            ;}, 1);
         this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers(playerTexture, { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'turn',
    frames: [{ key: playerTexture, frame: 4 }],
    frameRate: 1
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers(playerTexture, { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'jump',
    frames: [{ key: playerTexture, frame: 9 }],
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
    }
//intro
class Intro extends Phaser.Scene {
    constructor() {
        super({ key: 'Intro' });}
        create() {
            let intro1img=this.add.image(550,500, 'intro_1').setScale(0.6);
            intro_player1.play();
            setTimeout(() => {intro1img.destroy(); let intro2img=this.add.image(550,500,'intro_2').setScale(0.6);intro_player2.play();setTimeout(() => {intro2img.destroy(); let intro3img=this.add.image(550,500,'intro_3').setScale(0.6);intro_player3.play();setTimeout(() => {intro3img.destroy();this.scene.start('tutorial')}, 6000); }, 8000); }, 6000); 
        }
}
//mainmenu
class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenu' });}
        create(){
            this.input.keyboard.on('keydown', (event) => {

    // sallitaan vain kirjaimet ja välilyönti
    if (event.key.length === 1) {
        this.secretBuffer += event.key.toLowerCase();
    }
    // tarkistus
    if (this.secretBuffer.includes("you think that is a knoif, this is a knoif")) {
        console.log("knives sharpened");
        cheat = true;
    }
    if (this.secretBuffer.includes("i use adrenaline to gain better armor and speed")) {
        console.log("gotta go fast (and invincible).");
        cheat2 = true;
    }
      if (this.secretBuffer.includes("m")) {
        console.log("stonks.");
        cheat3 = true;
    }
});


            this.add.image(1000,1000, 'sky_level5').setScale(1);
            const level1_button=this.add.image(100,100,'level1').setInteractive();
            const level2_button=this.add.image(200,100,'level2').setInteractive();
            const level3_button=this.add.image(300,100,'level3').setInteractive();
            const level4_button=this.add.image(400,100,'level4').setInteractive();
            const level5_button=this.add.image(500,100,'level5').setInteractive();
            const cutscene_knife_button=this.add.image(100,300,'cutscene_knife_button').setInteractive();
            const end1_button=this.add.image(100,200,'end1_button').setInteractive();
            const tutorial_button=this.add.image(600,100,'tutorial').setInteractive();
            const credit_button=this.add.image(200,300,'credit_screen_button').setInteractive();
            const end2_button=this.add.image(200,200,'end2_button').setInteractive();
            const end3_button=this.add.image(300,200,'end3_button').setInteractive();
            const end4_button=this.add.image(400,200,'end4_button').setInteractive();
            const petya_button=this.add.image(300,300,'petya_button').setInteractive();
            const secret_level_button=this.add.image(700,100,'secret_level_button').setInteractive();
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
            end3_button.on('pointerdown', () => {
                this.scene.start('end3'),
                console.log("end3_play");
            });
            end4_button.on('pointerdown', () => {
                this.scene.start('end4'),
                console.log("end4_play");
            });
            petya_button.on('pointerdown', () => {
            this.scene.start('peli_ohi'),
            console.log("Computer destruction incoming");
            });
            secret_level_button.on('pointerdown', () => {
            this.scene.start('secret_level'),
            console.log("You were too lazy to do it the legit way, so you used this button to unlock the cheat");
            });
        }
}
class Tutorial extends Phaser.Scene {
    constructor() {
        super({ key: 'tutorial' });
    }
    create (){
        //knife cooldownin laatiminen
        this.lastThrowTime = throwtimelast; 
        this.throwCooldown = cooldownthrow;
        //määritelään cursors phaserin avulla
        cursors = this.input.keyboard.createCursorKeys();
        //asetaa taustakuvan
        this.add.image(4740,-700, 'tutorial_background').setScale(5.5);
        //lisää player hahmoon spire sheetin
       player = this.physics.add.sprite(100, 750, playerTexture);
        //asetaa pelaajan collisoinin mailman seinien kanssa
        player.setCollideWorldBounds(true);
        //määritelään knife
        knife = this.physics.add.group();
        coin = this.physics.add.group();
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
    coin.create(8800, 180, 'coin');
    coin.children.iterate(c => {
    if (!c) return;

    c.body.setAllowGravity(true);
    c.body.setImmovable(false);

    c.body.setSize(c.width * 0.6, c.height * 0.6);
    c.body.setOffset(c.width * 0.25, c.height * 0.25);
});
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
            this.guide7Text = this.add.text(8500, 10, "See that coin? That's\n what's gonna give you score in\n the later stages. Collect it \n by simply walking on it.", {
            fontSize: '30px',
            fill: '#000000ff'
        })
        //tutorial bottom_of_game luonti lopuu
        //oven luonti seuraavaan tasoon
        tutorial_ovi=this.physics.add.staticGroup();
        tutorial_ovi.hp = 100;
        tutorial_ovi.create(9950,790,'tutorial_ovi').setScale(0.3).refreshBody();
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
        this.enemy.setPushable(false);
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
        this.physics.add.collider(coin, platforms);
        this.physics.add.collider(coin, bottom_of_game);
            this.physics.add.collider(knife, platforms, (weapon) => {
            weapon.setVelocity(0, 0);   
            weapon.body.allowGravity = false; 
            weapon.body.immovable = true;     
        });
               this.physics.add.collider(knife, tutorial_ovi, (weapon) => {
                tutorial_ovi.hp -= 1;
                weapon.disableBody(true, true);
              
        });
        
        this.physics.add.collider(knife, this.enemies, (weapon, enemy) => {
        if (!enemy.active) return;

        // tuplahittisuojan EI pidä käyttää delayta
        if (enemy.wasHit) return;
        enemy.wasHit = true;

        // vähennetään HP ensin
        enemy.hp -= 50;

        // vihollinen kuolee
        if (enemy.hp <= 0) {
            enemy_death.play();
            if (enemy.hpBar) enemy.hpBar.destroy();
            if (enemy.hpBarBG) enemy.hpBarBG.destroy();
            enemy.hpBar = null;
            enemy.hpBarBG = null;
            enemy.disableBody(true, true);
            weapon.disableBody(true, true);
            
            return;
        }
        // vihollinen jäi eloon → soitetaan osumaääni
        enemy_hit.play();
        enemy.setTint(0x550000);
        this.time.delayedCall(150, () => enemy.clearTint());
        // tuhoa veitsi
        weapon.disableBody(true, true);
        // vapauta hit-lock
        this.time.delayedCall(1, () => enemy.wasHit = false);
        });
        // jos puukko osuu alustaan -> pysäytä puukko
        this.enemy.body.setGravityY(300); // lisää painovoima
        this.enemy.setCollideWorldBounds(true); // estää vihollista putoamasta
        this.enemy.setVelocityX(80); // alku nopeus
        this.enemy.direction = 1;
        this.physics.add.collider(knife, bottom_of_game);
        //Pelaajan liikumisen animaatio määritely pätyy
        this.physics.add.overlap(player, tutorial_ovi, TutorialLevel1, null, this);
        this.physics.add.overlap(player, coin, TutorialtCoin, null, this);
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
       footsteps.pause();  
       
        if (tutorial_ovi.hp <= 0) {
            {this.scene.start('peli_ohi')}
            return;
        }
       footsteps.pause();  
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
                if (cheat2 === true) {
                  player.setVelocityY(-700);   
                }
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
                     if (cheat2 === true) {
                  player.setVelocityX(-760);   
                }
                }
                else {
                    player.setVelocityX(-160);
                    player.anims.play('left', true);
                    facingRight = false;
                    footsteps.pause();
                     if (cheat2 === true) {                                    
                  player.setVelocityX(-760);   
                }
                }
            } 
            else if (cursors.right.isDown) {
                if (player.body.touching.down) {
                    footsteps.play(); 
                    player.setVelocityX(160);
                    player.anims.play('right', true);
                    facingRight = true;
                        if (cheat2 === true) {
                  player.setVelocityX(760);   
                }
                }
                else {
                    player.setVelocityX(160);
                    player.anims.play('right', true);
                    facingRight = true;
                    footsteps.pause();
                       if (cheat2 === true) {
                  player.setVelocityX(760);   
                }
                }
            }
            else if (cursors.down.isDown) {
                player.setVelocityY(300);
                player.anims.play('jump');
                   if (cheat2 === true) {
                  player.setVelocityY(700);   
                }
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
            }
        //märitelään pelaajaan liityvää liikumista ja animaation pelausta lopuu
        //????
    if (Phaser.Input.Keyboard.JustDown(shoot)) {

    const now = this.time.now;

    // jos EI cheat ja cooldown ei valmis → älä ammu
    if (!cheat && now - this.lastThrowTime <= this.throwCooldown) {
        return;
    }

    // päivitä cooldown VAIN jos ei cheat
    if (!cheat) {
        this.lastThrowTime = now;
    }

    knife_throw.play();

    let offset = offset_1;
    let spawnX = player.x + (facingRight ? offset : -offset);
    let weapon = knife.create(spawnX, player.y, 'dagger');

    weapon.setScale(weapon_scale);
    weapon.body.isSensor = true;

    const speed   = cheat ? 1000 : weapon_velocity;
    const gravity = cheat ? 500  : weapon_gravity;

    weapon.setGravityY(gravity);

    if (facingRight) {
        weapon.setVelocityX(speed);
    } else {
        weapon.setVelocityX(-speed);
        weapon.flipX = true;
    }

    setTimeout(() => weapon.destroy(), weapon_kill);
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
        if (!e.lastTurnTime) e.lastTurnTime = 0;
        if (this.time.now - e.lastTurnTime > 100) {
        if (!groundAhead && e.body.blocked.down) {
            if(enemy_footstep) {
                e.direction *= -1; 
                e.setVelocityX(80 * e.direction);
                e.play(e.direction > 0 ? 'walkRightEnemy' : 'walkLeftEnemy', true);
                e.lastTurnTime = this.time.now;
            }
            else {
                enemy_footstep=true;
                enemy.play();
                setTimeout(() => {enemy_footstep=false;}, enemy_delay);
                e.setVelocityX(80 * e.direction);
                e.play(e.direction > 0 ? 'walkRightEnemy' : 'walkLeftEnemy', true);
                e.lastTurnTime = this.time.now;
            }
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
}
//secret level
class secret_level extends Phaser.Scene {
    constructor() {
        super({ key: 'secret_level' });
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
        this.lastThrowTime = throwtimelast; 
        this.throwCooldown = cooldownthrow;
        //määritelään cursors phaserin avulla
        cursors = this.input.keyboard.createCursorKeys();
        //asetaa taustakuvan
        this.add.image(910,400, 'gold').setScale(2.5);
        //lisää player hahmoon spire sheetin
            player = this.physics.add.sprite(100, 750, playerTexture);
        //asetaa pelaajan collisoinin mailman seinien kanssa
        player.setCollideWorldBounds(true);
        //määritelään knife
        knife = this.physics.add.group();
        coin = this.physics.add.group();
        wall = this.physics.add.staticGroup();
        //määritelee platforms staatiseksi
        platforms = this.physics.add.staticGroup();
        //määritelee bottom_of_game staatiseksi
        bottom_of_game = this.physics.add.staticGroup();
        //level1 platformien luonti

        //level1 platformien luonti loppuu
        //level1 bottom_of_game luonti
        bottom_of_game.create(150,950, 'bottom_of_game').setScale(3).refreshBody();
        bottom_of_game.create(350,950, 'bottom_of_game').setScale(3).refreshBody();
        bottom_of_game.create(550,950, 'bottom_of_game').setScale(3).refreshBody();
        bottom_of_game.create(750,950, 'bottom_of_game').setScale(3).refreshBody();
        bottom_of_game.create(950,950, 'bottom_of_game').setScale(3).refreshBody();
        bottom_of_game.create(1150,950, 'bottom_of_game').setScale(3).refreshBody();
        bottom_of_game.create(1350,950, 'bottom_of_game').setScale(3).refreshBody();
        bottom_of_game.create(1550,950, 'bottom_of_game').setScale(3).refreshBody();
        bottom_of_game.create(1750,950, 'bottom_of_game').setScale(3).refreshBody();
        //level1 bottom_of_game luonti lopuu
        //kolikoiden luonti
    coin.create(200, 820, 'coin');
    coin.create(250, 820, 'coin');
    coin.create(300, 820, 'coin');
    coin.create(350, 820,'coin');
    coin.create(400, 820, 'coin');
    coin.create(450, 820, 'coin');
    coin.create(500, 820, 'coin');
    coin.create(550, 820, 'coin');
    coin.create(600, 820, 'coin');
    coin.create(650, 820, 'coin');
    coin.create(700, 820, 'coin');
    coin.create(750, 820, 'coin');
    coin.create(800, 820, 'coin');
    coin.create(850, 820, 'coin');
    coin.create(900, 820, 'coin');
    coin.create(950, 820, 'coin');
    coin.create(1000, 820, 'coin');
    coin.create(1050, 820, 'coin');
    coin.create(1100, 820, 'coin');
    coin.create(1150, 820, 'coin');
    coin.create(1200, 820, 'coin');
    coin.create(1250, 820, 'coin');
    coin.create(1300, 820, 'coin');
    coin.create(1350, 820, 'coin');
    coin.create(1400, 820, 'coin');
    coin.create(1450, 820, 'coin');
    coin.create(1500, 820, 'coin');
    coin.create(1550, 820, 'coin');
    coin.create(1600, 820, 'coin');
    coin.create(1650, 820, 'coin');
    coin.create(1700, 820, 'coin');
    coin.create(1750, 820, 'coin');
    coin.create(1800, 820, 'coin');
    coin.create(1850, 820, 'coin');
    coin.create(1900, 820, 'coin');
    

    coin.children.iterate(c => {
    if (!c) return;

    c.body.setAllowGravity(true);
    c.body.setImmovable(false);

    c.body.setSize(c.width * 0.6, c.height * 0.6);
    c.body.setOffset(c.width * 0.25, c.height * 0.25);
});
        //level1 scoren luonti loppuu
        //oven luonti seuraavaan tasoon
        ovi=this.physics.add.staticGroup();
        ovi.create(1970,840,'ovi').setScale(0.3).refreshBody();
        // --VIHOLLISEN LUONTI--

// Käytä Phaserin dataa (stabiilimpi kuin plain property)
// Debug: seuraa kutsuja disableBody-metodille (näytetään pinosta löytyvä trace)

// Colliders
this.physics.add.collider(player, platforms);
this.physics.add.collider(player, wall);
this.physics.add.collider(coin, platforms);
this.physics.add.collider(coin, bottom_of_game);
this.physics.add.collider(player, bottom_of_game);
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
        // jos puukko osuu alustaan -> pysäytä puukko
        this.physics.add.collider(knife, bottom_of_game);
        //Pelaajan liikumisen animaatio määritely pätyy
        this.physics.add.overlap(player, ovi, secretLevel1, null, this);
        this.physics.add.overlap(player, coin, CollectCoin, null, this);
        this.cameras.main.setBounds(0, 0, 2000, 900);
        this.physics.world.setBounds(0, 0, 2000, 900);
        this.cameras.main.startFollow(player);
        shoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        //kellon funktio
        // hae aiempi aika
        this.totalTime = this.registry.get('totalTime') || 0;
        //luo tekstin
        this.timerText = this.add.text(10, 40, "Time: " + this.totalTime, {
            fontSize: '24px',
            fill: '#fff'
        }).setScrollFactor(0);
        //texti pysyy vasemmassa 
        // kuolemalaskuri
        this.deaths = this.registry.get('deaths');
        this.deathText = this.add.text(10, 70, "Deaths: " + this.deaths, {
        fontSize: '24px',
        fill: '#fff'
        }).setScrollFactor(0);
        this.scoreText = this.add.text(10, 10, "Score: " + score, {
        fontSize: '24px',
        fill: '#fff'
        }).setScrollFactor(0);
        this.timeEvent = this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: () => {
                this.totalTime++;
                this.registry.set('totalTime', this.totalTime);
                this.timerText.setText("Time: " + this.totalTime);
            }
        });

    }
    update (){
        if (deathState===true) {
            if (this.scene.key==='Level1') {
                score=score-level1score;
                level1score=0;
                deathState=false
            }
            else if (this.scene.key==='Level2') {
                score=score-level2score;
                level2score=0;
                deathState=false
            }
            else if (this.scene.key==='Level3') {
                score=score-level3score;
                level3score=0;
                deathState=false
            }
            else if (this.scene.key==='Level4') {
                score=score-level4score;
                level4score=0;
                deathState=false
            }
        }
        backgroundsound.play();
       footsteps.pause();  
        backgroundsound.play();
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
                if (cheat2 === true) {
                  player.setVelocityY(-700);   
                }
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
                     if (cheat2 === true) {
                  player.setVelocityX(-760);   
                }
                }
                else {
                    player.setVelocityX(-160);
                    player.anims.play('left', true);
                    facingRight = false;
                    footsteps.pause();
                     if (cheat2 === true) {                                    
                  player.setVelocityX(-760);   
                }
                }
            } 
            else if (cursors.right.isDown) {
                if (player.body.touching.down) {
                    footsteps.play(); 
                    player.setVelocityX(160);
                    player.anims.play('right', true);
                    facingRight = true;
                        if (cheat2 === true) {
                  player.setVelocityX(760);   
                }
                }
                else {
                    player.setVelocityX(160);
                    player.anims.play('right', true);
                    facingRight = true;
                    footsteps.pause();
                       if (cheat2 === true) {
                  player.setVelocityX(760);   
                }
                }
            }
            else if (cursors.down.isDown) {
                player.setVelocityY(300);
                player.anims.play('jump');
                   if (cheat2 === true) {
                  player.setVelocityY(700);   
                }
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
            }
           if (Phaser.Input.Keyboard.JustDown(shoot)) {

    const now = this.time.now;

    // jos EI cheat ja cooldown ei valmis → älä ammu
    if (!cheat && now - this.lastThrowTime <= this.throwCooldown) {
        return;
    }

    // päivitä cooldown VAIN jos ei cheat
    if (!cheat) {
        this.lastThrowTime = now;
    }

    knife_throw.play();

    let offset = offset_1;
    let spawnX = player.x + (facingRight ? offset : -offset);
    let weapon = knife.create(spawnX, player.y, 'dagger');

    weapon.setScale(weapon_scale);
    weapon.body.isSensor = true;

    const speed   = cheat ? 1000 : weapon_velocity;
    const gravity = cheat ? 500  : weapon_gravity;

    weapon.setGravityY(gravity);

    if (facingRight) {
        weapon.setVelocityX(speed);
    } else {
        weapon.setVelocityX(-speed);
        weapon.flipX = true;
    }

    setTimeout(() => weapon.destroy(), weapon_kill);
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
        this.lastThrowTime = throwtimelast; 
        this.throwCooldown = cooldownthrow;
        //määritelään cursors phaserin avulla
        cursors = this.input.keyboard.createCursorKeys();
        //asetaa taustakuvan
        this.add.image(910,400, 'background').setScale(1.5);
        //lisää player hahmoon spire sheetin
             player = this.physics.add.sprite(100, 750, playerTexture);
        //asetaa pelaajan collisoinin mailman seinien kanssa
        player.setCollideWorldBounds(true);
        //määritelään knife
        knife = this.physics.add.group();
        coin = this.physics.add.group();
        wall = this.physics.add.staticGroup();
        //määritelee platforms staatiseksi
        platforms = this.physics.add.staticGroup();
        //määritelee bottom_of_game staatiseksi
        bottom_of_game = this.physics.add.staticGroup();
        //level1 platformien luonti
        wall.create(1940,770,'wall').setScale(0.70).refreshBody();
        platforms.create(340, 820, 'platform').setScale(3).refreshBody();
        platforms.create(80, 700, 'platform').setScale(2).refreshBody();
        platforms.create(300, 580, 'platform').setScale(2).refreshBody();
        platforms.create(770, 730, 'platform').setScale(6).refreshBody();
        platforms.create(780, 480, 'platform').setScale(3).refreshBody();
        platforms.create(990, 320, 'platform').setScale(3).refreshBody();
        platforms.create(1240, 230, 'platform').setScale(3).refreshBody();
        platforms.create(1060, 870, 'platform').setScale(3).refreshBody();
        platforms.create(1350, 870, 'platform').setScale(4).refreshBody();
        platforms.create(1070, 700, 'platform').setScale(3).refreshBody();
        //level1 platformien luonti loppuu
        //level1 bottom_of_game luonti
        bottom_of_game.create(150,950, 'bottom_of_game').setScale(3).refreshBody();
        bottom_of_game.create(1900,950, 'bottom_of_game').setScale(3).refreshBody();
        bottom_of_game.create(430,626, 'bottom_of_game').setScale(1).refreshBody();
        bottom_of_game.create(940,470, 'bottom_of_game').setScale(0.45).refreshBody();
        //level1 bottom_of_game luonti lopuu
        //kolikoiden luonti
    coin.create(2000, 180, 'coin');
    coin.create(400, 180, 'coin');
    coin.create(490, 650, 'coin');
    coin.create(1070, 60, 'coin');
    coin.create(930, 320, 'coin');
    coin.children.iterate(c => {
    if (!c) return;

    c.body.setAllowGravity(true);
    c.body.setImmovable(false);

    c.body.setSize(c.width * 0.6, c.height * 0.6);
    c.body.setOffset(c.width * 0.25, c.height * 0.25);
});
        //level1 scoren luonti loppuu
        //oven luonti seuraavaan tasoon
        ovi=this.physics.add.staticGroup();
        ovi.create(920,520,'ovi').setScale(0.3).refreshBody();
        // --VIHOLLISEN LUONTI--
        this.enemies = this.physics.add.group();
        const rightPlatform = platforms.getChildren().at(2);
        this.enemy = this.enemies.create(rightPlatform.x - 10, rightPlatform.y - 200, 'enemy');
        //vihollisen koko ja elämäpisteet
        this.enemy.setPushable(false);
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
this.physics.add.collider(player, wall);
this.physics.add.collider(coin, platforms);
this.physics.add.collider(coin, bottom_of_game);
this.physics.add.collider(player, bottom_of_game);
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
this.physics.add.collider(knife, this.enemies, (weapon, enemy) => {
if (!enemy.active) return;

            // tuplahittisuojan EI pidä käyttää delayta
            if (enemy.wasHit) return;
            enemy.wasHit = true;
            // vähennetään HP ensin
            enemy.hp -= 50;
            // vihollinen kuolee
            if (enemy.hp <= 0) {
                enemy_death.play();
                if (enemy.hpBar) enemy.hpBar.destroy();
                if (enemy.hpBarBG) enemy.hpBarBG.destroy();
                enemy.hpBar = null;
                enemy.hpBarBG = null;
                enemy.disableBody(true, true);
                weapon.disableBody(true, true);
                return;
            }
            // vihollinen jäi eloon → soitetaan osumaääni
            enemy_hit.play();
            enemy.setTint(0x550000);
            this.time.delayedCall(150, () => enemy.clearTint());

            // tuhoa veitsi
            weapon.disableBody(true, true);

            // vapauta hit-lock
            this.time.delayedCall(1, () => enemy.wasHit = false);
        });
        // jos puukko osuu alustaan -> pysäytä puukko
        this.enemy.body.setGravityY(300); // lisää painovoima
        this.enemy.setCollideWorldBounds(true); // estää vihollista putoamasta
        this.enemy.setVelocityX(80); // alku nopeus
        this.enemy.direction = 1;
        this.physics.add.collider(knife, bottom_of_game);
        //Pelaajan liikumisen animaatio määritely pätyy
        this.physics.add.overlap(player, ovi, level2Transition, null, this);
        this.physics.add.overlap(player, coin, CollectCoin, null, this);
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
          cannon_down = this.physics.add.image(2000, 10, 'cannon_down');
        cannon_down.setImmovable(true);
        cannon_down.body.allowGravity = false;

        cannon_down_bullets = this.physics.add.group({
            defaultKey: 'bullet',
            maxSize: 10000000000
        });

        this.time.addEvent({
            delay: 4000,
            callback: () => shootBullet_cannon_down(cannon_down, cannon_down_bullets),
            loop: true
        });
        // törmäykset luoteihin
        this.physics.add.collider(player, bullets, hitPlayer, null, this);
        this.physics.add.collider(player, cannon_back_bullets, hitPlayer, null, this);
         this.physics.add.collider(player, cannon_down_bullets, hitPlayer, null, this);
        //vihollisen fysiikat
        this.physics.add.collider(this.enemy, platforms);
        this.physics.add.collider(player, this.enemy, hitByEnemy, null, this); 
        this.enemy.play('walkRightEnemy');
        //kellon funktio
        // hae aiempi aika
        this.totalTime = this.registry.get('totalTime') || 0;
        //luo tekstin
        this.timerText = this.add.text(10, 40, "Time: " + this.totalTime, {
            fontSize: '24px',
            fill: '#fff'
        }).setScrollFactor(0);
        //texti pysyy vasemmassa 
        // kuolemalaskuri
        this.deaths = this.registry.get('deaths');
        this.deathText = this.add.text(10, 70, "Deaths: " + this.deaths, {
        fontSize: '24px',
        fill: '#fff'
        }).setScrollFactor(0);
        this.scoreText = this.add.text(10, 10, "Score: " + score, {
        fontSize: '24px',
        fill: '#fff'
        }).setScrollFactor(0);
        this.timeEvent = this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: () => {
                this.totalTime++;
                this.registry.set('totalTime', this.totalTime);
                this.timerText.setText("Time: " + this.totalTime);
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
        if (deathState===true) {
            if (this.scene.key==='Level1') {
                score=score-level1score;
                level1score=0;
                deathState=false
            }
            else if (this.scene.key==='Level2') {
                score=score-level2score;
                level2score=0;
                deathState=false
            }
            else if (this.scene.key==='Level3') {
                score=score-level3score;
                level3score=0;
                deathState=false
            }
            else if (this.scene.key==='Level4') {
                score=score-level4score;
                level4score=0;
                deathState=false
            }
        }
        backgroundsound.play();
       footsteps.pause();  
        backgroundsound.play();
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
                if (cheat2 === true) {
                  player.setVelocityY(-700);   
                }
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
                     if (cheat2 === true) {
                  player.setVelocityX(-760);   
                }
                }
                else {
                    player.setVelocityX(-160);
                    player.anims.play('left', true);
                    facingRight = false;
                    footsteps.pause();
                     if (cheat2 === true) {                                    
                  player.setVelocityX(-760);   
                }
                }
            } 
            else if (cursors.right.isDown) {
                if (player.body.touching.down) {
                    footsteps.play(); 
                    player.setVelocityX(160);
                    player.anims.play('right', true);
                    facingRight = true;
                        if (cheat2 === true) {
                  player.setVelocityX(760);   
                }
                }
                else {
                    player.setVelocityX(160);
                    player.anims.play('right', true);
                    facingRight = true;
                    footsteps.pause();
                       if (cheat2 === true) {
                  player.setVelocityX(760);   
                }
                }
            }
            else if (cursors.down.isDown) {
                player.setVelocityY(300);
                player.anims.play('jump');
                   if (cheat2 === true) {
                  player.setVelocityY(700);   
                }
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
            }}
          if (Phaser.Input.Keyboard.JustDown(shoot)) {

    const now = this.time.now;

    // jos EI cheat ja cooldown ei valmis → älä ammu
    if (!cheat && now - this.lastThrowTime <= this.throwCooldown) {
        return;
    }

    // päivitä cooldown VAIN jos ei cheat
    if (!cheat) {
        this.lastThrowTime = now;
    }

    knife_throw.play();

    let offset = offset_1;
    let spawnX = player.x + (facingRight ? offset : -offset);
    let weapon = knife.create(spawnX, player.y, 'dagger');

    weapon.setScale(weapon_scale);
    weapon.body.isSensor = true;

    const speed   = cheat ? 1000 : weapon_velocity;
    const gravity = cheat ? 500  : weapon_gravity;

    weapon.setGravityY(gravity);

    if (facingRight) {
        weapon.setVelocityX(speed);
    } else {
        weapon.setVelocityX(-speed);
        weapon.flipX = true;
    }

    setTimeout(() => weapon.destroy(), weapon_kill);
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
            if (this.time.now - e.lastTurnTime > 100) {
                if (!groundAhead && e.body.blocked.down) {
                    if(enemy_footstep) {
                        e.direction *= -1; 
                        e.setVelocityX(80 * e.direction);
                        e.play(e.direction > 0 ? 'walkRightEnemy' : 'walkLeftEnemy', true);
                        e.lastTurnTime = this.time.now;
                    }
                    else {
                        enemy_footstep=true;
                        enemy.play();
                        setTimeout(() => {enemy_footstep=false;}, enemy_delay);
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
    //kellon muuttuja
    init() {
        this.registry.set('totalTime', this.registry.get('totalTime') ?? 0 );
        this.registry.set('deaths', this.registry.get('deaths') ?? 0 );
    }
    
    create (){
        gameOver=false;
        this.lastThrowTime = throwtimelast; 
        this.throwCooldown = cooldownthrow;
        //määritelään knife
        knife = this.physics.add.group();
        //määritelään platformit staatiseksi
        platforms = this.physics.add.staticGroup();
        //määritelään bottom_of_game staatiseksi
        bottom_of_game = this.physics.add.staticGroup();
        coin = this.physics.add.group();
        //määritelään cursors phaserin avulla
        cursors = this.input.keyboard.createCursorKeys();
        //lisätiin background kuva
        this.add.image(500,400, 'castle_hallway').setScale(3);
        //määritelään pelaajan spritesheet
             player = this.physics.add.sprite(100, 750, playerTexture);
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
        bottom_of_game.create(700,515, 'bottom_of_game')
        bottom_of_game.create(1100,515, 'bottom_of_game')
        bottom_of_game.create(300,515, 'bottom_of_game')
        bottom_of_game.create(100,515, 'bottom_of_game')
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
        this.physics.add.overlap(player, coin, CollectCoin, null, this);
        coin.create(50, 180, 'coin');
        coin.create(10, 780, 'coin');
        coin.create(1450, 650, 'coin');
        coin.create(1950, 60, 'coin');
        coin.create(700, 180, 'coin');
        coin.children.iterate(c => {
        if (!c) return;

            c.body.setAllowGravity(true);
            c.body.setImmovable(false);

            c.body.setSize(c.width * 0.6, c.height * 0.6);
            c.body.setOffset(c.width * 0.25, c.height * 0.25);
        });
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
            delay: 2000,
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
        this.physics.add.collider(coin, platforms);
        this.physics.add.collider(coin, bottom_of_game);    
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
            if (!enemy.active) return;
            // tuplahittisuojan EI pidä käyttää delayta
            if (enemy.wasHit) return;
            enemy.wasHit = true;
            // vähennetään HP ensin
            enemy.hp -= 50;
            // vihollinen kuolee
            if (enemy.hp <= 0) {
                enemy_death.play();
                if (enemy.hpBar) enemy.hpBar.destroy();
                if (enemy.hpBarBG) enemy.hpBarBG.destroy();
                enemy.hpBar = null;
                enemy.hpBarBG = null;
                enemy.disableBody(true, true);
                weapon.disableBody(true, true);
                return;
            }

            // vihollinen jäi eloon → soitetaan osumaääni
            enemy_hit.play();
            enemy.setTint(0x550000);
            this.time.delayedCall(150, () => enemy.clearTint());

// tuhoa veitsi
weapon.disableBody(true, true);

// vapauta hit-lock
this.time.delayedCall(1, () => enemy.wasHit = false);
    });
    // --ANIMAATIOT VIHOLLISILLE--

    // piikkien luonti
    this.spikes = this.physics.add.staticGroup();
    this.spikes.create(720, 867, 'spike').setScale(0.8).refreshBody();
    this.spikes.create(1025, 867, 'spike').setScale(0.8).refreshBody();
    this.spikes.create(425, 867, 'spike').setScale(0.8).refreshBody();
    this.spikes.create(1525, 867, 'spike').setScale(0.8).refreshBody();
    this.spikes.create(1855, 867, 'spike').setScale(0.8).refreshBody();
    this.spikes.create(55, 877, 'spike').setScale(0.3).refreshBody();
    this.spikes.create(55, 485, 'spike').setScale(0.8).refreshBody();
    this.spikes.create(155, 485, 'spike').setScale(0.8).refreshBody();
    this.spikes.create(255, 485, 'spike').setScale(0.8).refreshBody();
    this.spikes.create(355, 485, 'spike').setScale(0.8).refreshBody();
    this.spikes.create(655, 485, 'spike').setScale(0.8).refreshBody();
    this.spikes.create(755, 485, 'spike').setScale(0.8).refreshBody();
    this.spikes.create(1055, 485, 'spike').setScale(0.8).refreshBody();
    this.spikes.create(1155, 485, 'spike').setScale(0.8).refreshBody();
    this.physics.add.collider(player, this.spikes, hitBySpike, null, this);
    this.enemies.children.iterate(e => { if (e && e.play) e.play('walkRightEnemy'); });
    //kellon funktio
    // hae aiempi aika
    this.totalTime = this.registry.get('totalTime') || 0;

    //luo tekstin
    this.timerText = this.add.text(10, 40, "Time: " + this.totalTime, {
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

            this.timerText.setText("Time: " + this.totalTime);
        }
    });

    // kuolemalaskuri
    this.deaths = this.registry.get('deaths');

    this.deathText = this.add.text(10, 70, "Deaths: " + this.deaths, {
    fontSize: '24px',
    fill: '#fff'
    }).setScrollFactor(0);
     this.scoreText = this.add.text(10, 10, "Score: " + score, {
    fontSize: '24px',
    fill: '#fff'
    }).setScrollFactor(0);

    }
    

    update (){
        if (deathState===true) {
            if (this.scene.key==='Level1') {
                score=score-level1score;
                level1score=0;
                deathState=false
            }
            else if (this.scene.key==='Level2') {
                score=score-level2score;
                level2score=0;
                deathState=false
            }
            else if (this.scene.key==='Level3') {
                score=score-level3score;
                level3score=0;
                deathState=false
            }
            else if (this.scene.key==='Level4') {
                score=score-level4score;
                level4score=0;
                deathState=false
            }
        }
              backgroundsound.play();
       footsteps.pause();  
        backgroundsound.play();
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
                if (cheat2 === true) {
                  player.setVelocityY(-700);   
                }
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
                     if (cheat2 === true) {
                  player.setVelocityX(-760);   
                }
                }
                else {
                    player.setVelocityX(-160);
                    player.anims.play('left', true);
                    facingRight = false;
                    footsteps.pause();
                     if (cheat2 === true) {                                    
                  player.setVelocityX(-760);   
                }
                }
            } 
            else if (cursors.right.isDown) {
                if (player.body.touching.down) {
                    footsteps.play(); 
                    player.setVelocityX(160);
                    player.anims.play('right', true);
                    facingRight = true;
                        if (cheat2 === true) {
                  player.setVelocityX(760);   
                }
                }
                else {
                    player.setVelocityX(160);
                    player.anims.play('right', true);
                    facingRight = true;
                    footsteps.pause();
                       if (cheat2 === true) {
                  player.setVelocityX(760);   
                }
                }
            }
            else if (cursors.down.isDown) {
                player.setVelocityY(300);
                player.anims.play('jump');
                   if (cheat2 === true) {
                  player.setVelocityY(700);   
                }
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
            }
     if (Phaser.Input.Keyboard.JustDown(shoot)) {

    const now = this.time.now;

    // jos EI cheat ja cooldown ei valmis → älä ammu
    if (!cheat && now - this.lastThrowTime <= this.throwCooldown) {
        return;
    }

    // päivitä cooldown VAIN jos ei cheat
    if (!cheat) {
        this.lastThrowTime = now;
    }

    knife_throw.play();

    let offset = offset_1;
    let spawnX = player.x + (facingRight ? offset : -offset);
    let weapon = knife.create(spawnX, player.y, 'dagger');

    weapon.setScale(weapon_scale);
    weapon.body.isSensor = true;

    const speed   = cheat ? 1000 : weapon_velocity;
    const gravity = cheat ? 500  : weapon_gravity;

    weapon.setGravityY(gravity);

    if (facingRight) {
        weapon.setVelocityX(speed);
    } else {
        weapon.setVelocityX(-speed);
        weapon.flipX = true;
    }

    setTimeout(() => weapon.destroy(), weapon_kill);
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
            if (this.time.now - e.lastTurnTime > 100) {
                if (!groundAhead && e.body.blocked.down) {
                    if(enemy_footstep) {
                        e.direction *= -1; 
                        e.setVelocityX(80 * e.direction);
                        e.play(e.direction > 0 ? 'walkRightEnemy' : 'walkLeftEnemy', true);
                        e.lastTurnTime = this.time.now;
                    }
                    else {
                        enemy_footstep=true;
                        enemy.play();
                        setTimeout(() => {enemy_footstep=false;}, enemy_delay);
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
    init() {
        this.registry.set('totalTime', this.registry.get('totalTime') ?? 0);
        this.registry.set('deaths', this.registry.get('deaths') ?? 0 );
    }
    create (){
        this.lastThrowTime = throwtimelast; 
        this.throwCooldown = cooldownthrow;
        solid_snake_door = this.physics.add.staticGroup(); 
        platforms = this.physics.add.staticGroup();
        bottom_of_game = this.physics.add.staticGroup();
        coin = this.physics.add.group();
        trampoline = this.physics.add.staticGroup();
        wall = this.physics.add.staticGroup();
        cursors = this.input.keyboard.createCursorKeys();

        this.add.image(1000,400, 'dungeon').setScale(3.5);

             player = this.physics.add.sprite(100, 750, playerTexture);
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
        wall.create(547,515,'wall')
        wall.create(443,755,'wall')
        wall.create(547,755,'wall')
        wall.create(1245,100,'wall')
        wall.create(1700,840,'wall')
        wall.create(1200,840,'wall')

        // trampolines
        trampoline.create(300,850, 'trampoline').setScale(0.4).refreshBody();
        trampoline.create(650,850, 'trampoline').setScale(0.4).refreshBody();
        trampoline.create(1800,850, 'trampoline').setScale(0.4).refreshBody();

        // platforms
        platforms.create(510,230,'platform').setScale(2).refreshBody();
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
        this.physics.add.collider(coin, platforms);
        this.physics.add.collider(coin, bottom_of_game); 
        this.physics.add.collider(player, wall);
        this.physics.add.collider(player, knife);
        this.physics.add.collider(this.enemies, platforms);
        this.physics.add.collider(player, this.enemies, hitByEnemy, null, this);
        this.physics.add.overlap(player, trampoline, trampolinePlayer, null, this);
        this.physics.add.overlap(player, coin, CollectCoin, null, this);
    coin.create(500, 180, 'coin');
    coin.create(1280, 800, 'coin');
    coin.create(1630, 800, 'coin');
    coin.create(1230, 20, 'coin');
    coin.create(300, 820, 'coin').setScale(0.5);
    coin.children.iterate(c => {
    if (!c) return;

    c.body.setAllowGravity(true);
    c.body.setImmovable(false);

    c.body.setSize(c.width * 0.6, c.height * 0.6);
    c.body.setOffset(c.width * 0.25, c.height * 0.25);
});
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
            if (!enemy.active) return;
            // tuplahittisuojan EI pidä käyttää delayta
            if (enemy.wasHit) return;
            enemy.wasHit = true;
            // vähennetään HP ensin
            enemy.hp -= 50;
            // vihollinen kuolee
            if (enemy.hp <= 0) {
                enemy_death.play();
                if (enemy.hpBar) enemy.hpBar.destroy();
                if (enemy.hpBarBG) enemy.hpBarBG.destroy();
                enemy.hpBar = null;
                enemy.hpBarBG = null;
                enemy.disableBody(true, true);
                weapon.disableBody(true, true);
                return;
            }
            // vihollinen jäi eloon → soitetaan osumaääni
            enemy_hit.play();
            enemy.setTint(0x550000);
            this.time.delayedCall(150, () => enemy.clearTint());
            // tuhoa veitsi
            weapon.disableBody(true, true);
            // vapauta hit-lock
            this.time.delayedCall(1, () => enemy.wasHit = false);
        });
        this.cameras.main.setBounds(0, 0, 2000, 900);
        this.physics.world.setBounds(0, 0, 2000, 900);
        this.cameras.main.startFollow(player);
        this.physics.add.overlap(player, ovi, level4Transition, null, this);
        this.physics.add.overlap(player, solid_snake_door, level1throw, null, this);
        this.cannons = [
            this.physics.add.image(640, 260, 'cannon'),
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

        this.timerText = this.add.text(10, 40, "Time: " + this.totalTime, {
            fontSize: '24px',
            fill: '#fff'
        }).setScrollFactor(0);
        // kuolemalaskuri
        this.deaths = this.registry.get('deaths');

        this.deathText = this.add.text(10, 70, "Deaths: " + this.deaths, {
        fontSize: '24px',
        fill: '#fff'
        }).setScrollFactor(0);
        this.timeEvent = this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: () => {
                this.totalTime++;
                this.registry.set('totalTime', this.totalTime);
                this.timerText.setText("Time: " + this.totalTime);
            }
        });
         this.scoreText = this.add.text(10, 10, "Score: " + score, {
    fontSize: '24px',
    fill: '#fff'
    }).setScrollFactor(0);

    }

    update (){
        if (deathState===true) {
            if (this.scene.key==='Level1') {
                score=score-level1score;
                level1score=0;
                deathState=false
            }
            else if (this.scene.key==='Level2') {
                score=score-level2score;
                level2score=0;
                deathState=false
            }
            else if (this.scene.key==='Level3') {
                score=score-level3score;
                level3score=0;
                deathState=false
            }
            else if (this.scene.key==='Level4') {
                score=score-level4score;
                level4score=0;
                deathState=false
            }
        }
        backgroundsound.play();
       footsteps.pause();  
        backgroundsound.play();
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
                if (cheat2 === true) {
                  player.setVelocityY(-700);   
                }
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
                     if (cheat2 === true) {
                  player.setVelocityX(-760);   
                }
                }
                else {
                    player.setVelocityX(-160);
                    player.anims.play('left', true);
                    facingRight = false;
                    footsteps.pause();
                     if (cheat2 === true) {                                    
                  player.setVelocityX(-760);   
                }
                }
            } 
            else if (cursors.right.isDown) {
                if (player.body.touching.down) {
                    footsteps.play(); 
                    player.setVelocityX(160);
                    player.anims.play('right', true);
                    facingRight = true;
                        if (cheat2 === true) {
                  player.setVelocityX(760);   
                }
                }
                else {
                    player.setVelocityX(160);
                    player.anims.play('right', true);
                    facingRight = true;
                    footsteps.pause();
                       if (cheat2 === true) {
                  player.setVelocityX(760);   
                }
                }
            }
            else if (cursors.down.isDown) {
                player.setVelocityY(300);
                player.anims.play('jump');
                   if (cheat2 === true) {
                  player.setVelocityY(700);   
                }
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
            }
        // knife heitto
     if (Phaser.Input.Keyboard.JustDown(shoot)) {

    const now = this.time.now;

    // jos EI cheat ja cooldown ei valmis → älä ammu
    if (!cheat && now - this.lastThrowTime <= this.throwCooldown) {
        return;
    }

    // päivitä cooldown VAIN jos ei cheat
    if (!cheat) {
        this.lastThrowTime = now;
    }

    knife_throw.play();

    let offset = offset_1;
    let spawnX = player.x + (facingRight ? offset : -offset);
    let weapon = knife.create(spawnX, player.y, 'dagger');

    weapon.setScale(weapon_scale);
    weapon.body.isSensor = true;

    const speed   = cheat ? 1000 : weapon_velocity;
    const gravity = cheat ? 500  : weapon_gravity;

    weapon.setGravityY(gravity);

    if (facingRight) {
        weapon.setVelocityX(speed);
    } else {
        weapon.setVelocityX(-speed);
        weapon.flipX = true;
    }

    setTimeout(() => weapon.destroy(), weapon_kill);
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
            if (this.time.now - e.lastTurnTime > 100) {
                if (!groundAhead && e.body.blocked.down) {
                    if(enemy_footstep) {
                        e.direction *= -1; 
                        e.setVelocityX(80 * e.direction);
                        e.play(e.direction > 0 ? 'walkRightEnemy' : 'walkLeftEnemy', true);
                        e.lastTurnTime = this.time.now;
                    }
                    else {
                        enemy_footstep=true;
                        enemy.play();
                        setTimeout(() => {enemy_footstep=false;}, enemy_delay);
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
    init() {
        this.registry.set('totalTime', this.registry.get('totalTime') ?? 0 );
        this.registry.set('deaths', this.registry.get('deaths') ?? 0 );
    }
    create() {
        this.lastThrowTime = throwtimelast; 
        this.throwCooldown = cooldownthrow;
        wind = this.physics.add.staticGroup();
        platforms = this.physics.add.staticGroup();
        bottom_of_game = this.physics.add.staticGroup();
        trampoline = this.physics.add.staticGroup();
        low_power_trampoline = this.physics.add.staticGroup();
        wall = this.physics.add.staticGroup();
        cursors = this.input.keyboard.createCursorKeys();
        knife = this.physics.add.group();
        coin = this.physics.add.group();
        shoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.add.image(0,0,'sky').setScale(10);
        this.add.image(100,1700, 'castle_hallway').setScale(2);
        this.add.image(1700,1700,'spiralsaircase').setScale(3);
             player = this.physics.add.sprite(100, 750, playerTexture);
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
        bottom_of_game.create(2000,1500, 'bottom_of_game').setScale(0.5).refreshBody();
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
        platforms.create(830, 1500, 'platform').setScale(2).refreshBody();
        platforms.create(700, 1800, 'platform').setScale(2).refreshBody();
        platforms.create(1110, 1635, 'platform').setScale(2).refreshBody();
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
        const platform2 = platforms.getChildren().at(13);
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
        this.physics.add.collider(coin, platforms);
        this.physics.add.collider(coin, bottom_of_game); 
        this.physics.add.overlap(player, trampoline, trampolinePlayer, null, this);
        this.physics.add.overlap(player, low_power_trampoline, low_power_trampolinePlayer, null, this);
        this.physics.add.overlap(player, ovi, level5Transition, null, this);
        this.physics.add.overlap(player, wind, windPlayer, null, this);
           this.physics.add.overlap(player, coin, CollectCoin, null, this);
    coin.create(500, 1880, 'coin');
    coin.create(1280, 1300, 'coin');
    coin.create(1550, 1800, 'coin');
    coin.create(1980, 1450, 'coin');
    coin.create(1850, 100, 'coin');
    coin.children.iterate(c => {
    if (!c) return;

    c.body.setAllowGravity(true);
    c.body.setImmovable(false);

    c.body.setSize(c.width * 0.6, c.height * 0.6);
    c.body.setOffset(c.width * 0.25, c.height * 0.25);
});
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
            if (!enemy.active) return;
            // tuplahittisuojan EI pidä käyttää delayta
            if (enemy.wasHit) return;
            enemy.wasHit = true;
            // vähennetään HP ensin
            enemy.hp -= 50;
            // vihollinen kuolee
            if (enemy.hp <= 0) {
                enemy_death.play();
                if (enemy.hpBar) enemy.hpBar.destroy();
                if (enemy.hpBarBG) enemy.hpBarBG.destroy();
                enemy.hpBar = null;
                enemy.hpBarBG = null;
                enemy.disableBody(true, true);
                weapon.disableBody(true, true);
                return;
            }
            // vihollinen jäi eloon → soitetaan osumaääni
            enemy_hit.play();
            enemy.setTint(0x550000);
            this.time.delayedCall(150, () => enemy.clearTint());
            // tuhoa veitsi
            weapon.disableBody(true, true);
            // vapauta hit-lock
            this.time.delayedCall(1, () => enemy.wasHit = false);
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
            this.physics.add.image(650, 1950, 'cannon_up'),
            this.physics.add.image(710, 1950, 'cannon_up'),
        ];
        this.cannons_up.forEach(c => { c.setImmovable(true); c.body.allowGravity = false; });
        cannon_up_bullets = this.physics.add.group({
            defaultKey: 'bullet',
            maxSize: 10000000000
        });
        this.time.addEvent({
            delay: 2000,
            callback: () => {
                this.cannons_up.forEach(c => shootBullet_cannon_up(c, cannon_up_bullets));
            },
            loop: true
        });
          this.cannons_up2 = [
            this.physics.add.image(1700, 1950, 'cannon_up'),
            this.physics.add.image(1950, 1950, 'cannon_up'),
            
        ];
        this.cannons_up2.forEach(c => { c.setImmovable(true); c.body.allowGravity = false; });
        cannon_up_bullets = this.physics.add.group({
            defaultKey: 'bullet',
            maxSize: 10000000000
        });
        this.time.addEvent({
            delay: 1200,
            callback: () => {
                this.cannons_up2.forEach(c => shootBullet_cannon_up(c, cannon_up_bullets));
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
        this.timerText = this.add.text(10, 40, "Time: " + this.totalTime, {
            fontSize: '24px',
            fill: '#fff'
        }).setScrollFactor(0);
        this.timeEvent = this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: () => {
                this.totalTime++;
                this.registry.set('totalTime', this.totalTime);
                this.timerText.setText("Time: " + this.totalTime);
            }
        });
        this.deaths = this.registry.get('deaths');
        this.deathText = this.add.text(10, 70, "Deaths: " + this.deaths, {
        fontSize: '24px',
        fill: '#fff'
        }).setScrollFactor(0);
         this.scoreText = this.add.text(10, 10, "Score: " + score, {
    fontSize: '24px',
    fill: '#fff'
    }).setScrollFactor(0);


        this.spikes = this.physics.add.staticGroup();
        this.spikes.create(1170, 1970, 'spike').setScale(0.8).refreshBody();
        this.spikes.create(1445, 1970, 'spike').setScale(0.8).refreshBody();
        this.spikes.create(955, 1970, 'spike').setScale(0.8).refreshBody();
        this.spikes.create(575, 1970, 'spike').setScale(0.8).refreshBody();
        this.spikes.create(655, 1970, 'spike').setScale(0.8).refreshBody();
        this.spikes.create(755, 1970, 'spike').setScale(0.8).refreshBody();
        this.spikes.create(855, 1970, 'spike').setScale(0.8).refreshBody();
        this.physics.add.collider(player, this.spikes, hitBySpike, null, this);
    }
    update(){
        if (deathState===true) {
            if (this.scene.key==='Level1') {
                score=score-level1score;
                level1score=0;
                deathState=false
            }
            else if (this.scene.key==='Level2') {
                score=score-level2score;
                level2score=0;
                deathState=false
            }
            else if (this.scene.key==='Level3') {
                score=score-level3score;
                level3score=0;
                deathState=false
            }
            else if (this.scene.key==='Level4') {
                score=score-level4score;
                level4score=0;
                deathState=false
            }
        }
        footsteps.pause();  
        backgroundsound.play();
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
                if (cheat2 === true) {
                  player.setVelocityY(-700);   
                }
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
                     if (cheat2 === true) {
                  player.setVelocityX(-760);   
                }
                }
                else {
                    player.setVelocityX(-160);
                    player.anims.play('left', true);
                    facingRight = false;
                    footsteps.pause();
                     if (cheat2 === true) {                                    
                  player.setVelocityX(-760);   
                }
                }
            } 
            else if (cursors.right.isDown) {
                if (player.body.touching.down) {
                    footsteps.play(); 
                    player.setVelocityX(160);
                    player.anims.play('right', true);
                    facingRight = true;
                        if (cheat2 === true) {
                  player.setVelocityX(760);   
                }
                }
                else {
                    player.setVelocityX(160);
                    player.anims.play('right', true);
                    facingRight = true;
                    footsteps.pause();
                       if (cheat2 === true) {
                  player.setVelocityX(760);   
                }
                }
            }
            else if (cursors.down.isDown) {
                player.setVelocityY(300);
                player.anims.play('jump');
                   if (cheat2 === true) {
                  player.setVelocityY(700);   
                }
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
            }
        // Knife heitto
           if (Phaser.Input.Keyboard.JustDown(shoot)) {

    const now = this.time.now;

    // jos EI cheat ja cooldown ei valmis → älä ammu
    if (!cheat && now - this.lastThrowTime <= this.throwCooldown) {
        return;
    }

    // päivitä cooldown VAIN jos ei cheat
    if (!cheat) {
        this.lastThrowTime = now;
    }

    knife_throw.play();

    let offset = offset_1;
    let spawnX = player.x + (facingRight ? offset : -offset);
    let weapon = knife.create(spawnX, player.y, 'dagger');

    weapon.setScale(weapon_scale);
    weapon.body.isSensor = true;

    const speed   = cheat ? 1000 : weapon_velocity;
    const gravity = cheat ? 500  : weapon_gravity;

    weapon.setGravityY(gravity);

    if (facingRight) {
        weapon.setVelocityX(speed);
    } else {
        weapon.setVelocityX(-speed);
        weapon.flipX = true;
    }

    setTimeout(() => weapon.destroy(), weapon_kill);
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
            if (this.time.now - e.lastTurnTime > 100) {
                if (!groundAhead && e.body.blocked.down) {
                    if(enemy_footstep) {
                        e.direction *= -1; 
                        e.setVelocityX(80 * e.direction);
                        e.play(e.direction > 0 ? 'walkRightEnemy' : 'walkLeftEnemy', true);
                        e.lastTurnTime = this.time.now;
                    }
                    else {
                        enemy_footstep=true;
                        enemy.play();
                        setTimeout(() => {enemy_footstep=false;}, enemy_delay);
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
        super({ key: 'Level5' });
    }
    init() {this.registry.set('totalTime', this.registry.get('totalTime') ?? 0 );this.registry.set('deaths', this.registry.get('deaths') ?? 0 );}
    create(){
        bossIsAttacking=false;
        backgroundsound.pause();
        boss_spike=this.physics.add.group();
        bosswall=this.physics.add.group();
        shoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        knife = this.physics.add.group();
        knife2 = this.physics.add.group();
        fireball = this.physics.add.group();
        this.lastThrowTime = throwtimelast; 
        this.throwCooldown = cooldownthrow;
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
        tower_thingys.create(1580,1930, 'tower_thingy1').setScale(1).refreshBody();
        tower_thingys.create(1380,1930, 'tower_thingy2').setScale(1).refreshBody();
        tower_thingys.create(1180,1930, 'tower_thingy4').setScale(1).refreshBody();
        tower_thingys.create(980,1930, 'tower_thingy3').setScale(1).refreshBody();
        tower_thingys.create(780,1930, 'tower_thingy4').setScale(1).refreshBody();
        tower_thingys.create(580,1930, 'tower_thingy2').setScale(1).refreshBody();
        tower_thingys.create(380,1930, 'tower_thingy2').setScale(1).refreshBody();
              player = this.physics.add.sprite(100, 750, playerTexture);
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
        //boss asioiten reset
        knockback = 0;
        //katsotaan onko mitäään bossin dialogeista jo aktivoitu, ja muutetaan dialogi activointi arvoja sen mukaan, logataan arvo consoliin
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
            //boss animaatio pelataan
            boss.play('idlebossphase1');
            //kellon funktio
            // hae aiempi aika
            this.totalTime = this.registry.get('totalTime') || 0;

            //luo tekstin
            this.timerText = this.add.text(10, 40, "Time: " + this.totalTime, {
                fontSize: '24px',
                fill: '#fff'
            }).setScrollFactor(0);

            // kuolemalaskuri
            this.deaths = this.registry.get('deaths');

            this.deathText = this.add.text(10, 70, "Deaths: " + this.deaths, {
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

                    this.timerText.setText("Time: " + this.totalTime);
                }
            });
            this.scoreText = this.add.text(10, 10, "Score: " + score, {
                fontSize: '24px',
                fill: '#fff'
            }).setScrollFactor(0);

            this.physics.add.overlap(player, level5_level1,level1Transition,null,this);
        }
        update(){
        footsteps.pause();
        //katsotaan onko minkään dialogian activointi arvo oikein, jos on pelataan dialogia
        if (cheat===true||cheat2===true||cheat3===true) {
            dialogue1_boss=2;
            this.scene.start('endcheat');
        }
        else if (dialogue1_boss===1) {
            dialogue1_boss=2;
            console.log("dialogue1 activated")
            this.scene.start('Boss_Dialogue1');
        }
        else if (dialogue2_boss===1) {
            dialogue2_boss=2;
            console.log("dialogue2 activated")
            this.scene.start('Boss_Dialogue2');
        }
        else if (dialogue3_boss===1) {
            dialogue3_boss=2;
            console.log("dialogue3 activated")
            this.scene.start('Boss_Dialogue3');
        }
        //jos mikään dialogia ei ole käynissä
        else {
            //katsotaan jos on phase 1
            if(phase===1 && !bossIsAttacking){
                //anetaan random value 0-200, jos on 1 tee hyökäys ja pelaa animaatio
                bossattackchanche=Phaser.Math.Between(0, bossphase1attackfrequency);
                console.log("boss attack chanche",bossattackchanche)
                if (bossattackchanche===1) {
                    bossIsAttacking=true;
                    boss_animation_play=true
                    boss.play('bossphase1attack');
                    //arvoidaan mikä hyökäys tehdään ja sitten suoritetaan hyökäys
                    setTimeout(() => {boss.play('idlebossphase1');boss_animation_play=false;}, 1500);
                    setTimeout(()=> {
                        while (!attackMade) {
                            bossattack=Phaser.Math.Between(0, 2);
                            console.log("boss attack attempt",bossattack)
                            boss_phase1_attacks();
                        }
                        attackMade=false;
                        bossIsAttacking=false;
                    },1600);
                }
            }
            //sama kuin phase 1 mutta phase 2, pienemät arvot enemän hyökäyksiä (ja voimakaampia)
            else if (phase===2 && !bossIsAttacking){
                bossattackchanche=Phaser.Math.Between(0, bossphase2attackfrequency);
                console.log("boss attack chanche",bossattackchanche)
                if (bossattackchanche===1) {
                    bossIsAttacking=true;
                    boss_animation_play=true
                    boss.play('bossphase1attack');
                    setTimeout(() => {boss.play('idlebossphase1');boss_animation_play=false;}, 1500);
                    setTimeout(()=> {
                        while (!attackMade) {
                            bossattack=Phaser.Math.Between(0, 3);
                            console.log("boss attack attempt",bossattack)
                            boss_phase2_attacks();
                        }
                        attackMade=false;
                        bossIsAttacking=false;
                    },1600);
                }
            }
            //same kuin phase 2 ja phase 1, mutta voimakaamat hyökäysket je enemän niitä
            else if (phase===3 && !bossIsAttacking){
                bossattackchanche=Phaser.Math.Between(0, bossphase3attackfrequency);
                console.log("boss attack chanche",bossattackchanche)
                if (bossattackchanche===1) {
                    bossIsAttacking=true;
                    boss_animation_play=true
                    boss.play('bossphase2attack');
                    setTimeout(() => {boss.play('idlebossphase2');boss_animation_play=false;}, 1600);
                    setTimeout(()=> {
                        while (!attackMade) {
                            bossattack=Phaser.Math.Between(0, 4);
                            console.log("boss attack",bossattack)
                            boss_phase3_attacks(this);
                        }
                        attackMade=false;
                        bossIsAttacking=false;
                    },1700);
                }
            }
        }
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
                if (cheat2 === true) {
                  player.setVelocityY(-700);   
                }
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
                     if (cheat2 === true) {
                  player.setVelocityX(-760);   
                }
                }
                else {
                    player.setVelocityX(-160);
                    player.anims.play('left', true);
                    facingRight = false;
                    footsteps.pause();
                     if (cheat2 === true) {                                    
                  player.setVelocityX(-760);   
                }
                }
            } 
            else if (cursors.right.isDown) {
                if (player.body.touching.down) {
                    footsteps.play(); 
                    player.setVelocityX(160);
                    player.anims.play('right', true);
                    facingRight = true;
                        if (cheat2 === true) {
                  player.setVelocityX(760);   
                }
                }
                else {
                    player.setVelocityX(160);
                    player.anims.play('right', true);
                    facingRight = true;
                    footsteps.pause();
                       if (cheat2 === true) {
                  player.setVelocityX(760);   
                }
                }
            }
            else if (cursors.down.isDown) {
                player.setVelocityY(300);
                player.anims.play('jump');
                   if (cheat2 === true) {
                  player.setVelocityY(700);   
                }
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
            }

               if (Phaser.Input.Keyboard.JustDown(shoot)) {

    const now = this.time.now;

    // jos EI cheat ja cooldown ei valmis → älä ammu
    if (!cheat && now - this.lastThrowTime <= this.throwCooldown) {
        return;
    }

    // päivitä cooldown VAIN jos ei cheat
    if (!cheat) {
        this.lastThrowTime = now;
    }

    knife_throw.play();

    let offset = offset_1;
    let spawnX = player.x + (facingRight ? offset : -offset);
    let weapon = knife.create(spawnX, player.y, 'dagger');

    weapon.setScale(weapon_scale);
    weapon.body.isSensor = true;

    const speed   = cheat ? 1000 : weapon_velocity;
    const gravity = cheat ? 500  : weapon_gravity;

    weapon.setGravityY(gravity);

    if (facingRight) {
        weapon.setVelocityX(speed);
    } else {
        weapon.setVelocityX(-speed);
        weapon.flipX = true;
    }

    setTimeout(() => weapon.destroy(), weapon_kill);
}
  
    }
    }
class Cutscene_knife extends Phaser.Scene {
    constructor() {
        super({ key: 'Cutscene_knife' });
    }
        create(){
            let cutscene_knife_img = this.add.image(500,500,'cutscene_knife1').setScale(5);meeting_boss.play();
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
                                                                                                    cutscene_knife_23S.play();
                                                                                                    setTimeout(() => {
                                                                                                        cutscene_knife_img23.destroy();
                                                                                                        let cutscene_knife_img24 = this.add.image(500,500,'cutscene_knife24').setScale(4);
                                                                                                        cutscene_knife_24S.play();
                                                                                                            setTimeout(()=>{this.scene.start('Level5')},dialogue_speed);
                                                                                                    }, dialogue_speed);
                                                                                                },  cutscene_2);
                                                                                            },  cutscene_2);
                                                                                        },  cutscene_2);
                                                                                    },  cutscene_2);
                                                                                },  cutscene_2);
                                                                            },  cutscene_2);
                                                                        },  cutscene_2);
                                                                    },  cutscene_2);
                                                                },  cutscene_2);
                                                            },  cutscene_2);
                                                        },  cutscene_2);
                                                    },  cutscene_2);
                                                },  cutscene_2);
                                            },  cutscene_2);
                                        },  cutscene_2);
                                    },  cutscene_2);
                                },  cutscene_2);
                            },  cutscene_2);
                        },  cutscene_2);
                    }, cutscene_1);
                }, cutscene_1);
            }, 12000);
        }
}
class end1 extends Phaser.Scene {
    constructor() {
        super({ key: 'end1' });}
        create(){
            boss_fight_background_music.pause();
            end1_background_song.play();
            let dialogue7_boss=this.add.image(500,450,'dialogue7_boss').setScale(4);
            boss_dialogy_7S.play();
            setTimeout(() => {
                setTimeout(() => {
                    dialogue7_boss.destroy();
                    let dialogue8_boss = this.add.image(500,450,'dialogue8_boss').setScale(4); 
                    boss_dialogy_8S.play();
                    setTimeout(() => {
                        dialogue8_boss.destroy();
                        let dialogue9_boss = this.add.image(500,450,'dialogue9_boss').setScale(4);
                        boss_dialogy_9S.play();
                        setTimeout(() => {
                            dialogue9_boss.destroy();
                            let dialogue10_boss = this.add.image(500,450,'dialogue10_boss').setScale(4);
                            boss_dialogy_10S.play();
                            setTimeout(() => {
                                dialogue10_boss.destroy();
                                let dialogue11_boss = this.add.image(500,450,'dialogue11_boss').setScale(4);
                                boss_dialogy_11S.play();
                                setTimeout(() => {
                                    dialogue11_boss.destroy();
                                    let end1img0A = this.add.image(500,450,'end1_7'); voi_vittu.play();
                                    setTimeout(() => {
                                        end1img0A.destroy();
                                        let end1img0 = this.add.image(500,450,'end1_0'); epic_fail.play();
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
                                                                let end1img6 = this.add.image(550,480,'end1_6'); try_again.play();
                                                                setTimeout(() => {end1img6.destroy();this.scene.start('credit_scene')}, 7000);
                                                            }, cutscene_1);
                                                        }, cutscene_1);
                                                    }, cutscene_1);
                                                }, cutscene_1);
                                            }, cutscene_1);
                                        }, cutscene_1);
                                    }, 4000);
                                }, dialogue_speed);
                            }, dialogue_speed);
                        }, dialogue_speed);
                    }, dialogue_speed);
                }, dialogue_speed);
            }, 1);
        }
}
class end2 extends Phaser.Scene {
    constructor() {
        super({ key: 'end2' });}
    create() {
        boss_fight_background_music.pause();
        end2_background_song.play();
        let end2_1D=this.add.image(500,450,'end2_1D').setScale(4);
        end2_1s.play();
        setTimeout(() => { end2_1D.destroy();let end2_2D=this.add.image(500,450,'end2_2D').setScale(4);end2_2s.play();
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
                                                            setTimeout(() => {end2_12.destroy();let end2_13=this.add.image(500,450, 'end2_13').setScale(0.8);fbi.play();
                                                                setTimeout(() => {end2_13.destroy();let end2_14=this.add.image(500,450, 'end2_14').setScale(2); 
                                                                    setTimeout(() => {end2_14.destroy();this.scene.start('credit_scene')}, 7000);bro_really_thought.play();
                                                                 }, 7000);
                                                             }, cutscene_1);
                                                         }, cutscene_1);
                                                     }, cutscene_1);
                                                 }, cutscene_1);
                                             }, cutscene_1);
                                         },cutscene_1);
                                     }, cutscene_1);
                                 }, cutscene_1);
                             }, cutscene_1);
                         }, cutscene_1);
                     }, cutscene_1);
                 }, cutscene_1);
             }, dialogue_speed);
        }, dialogue_speed);
    }
}
class end3 extends Phaser.Scene {
    constructor() {
        super({ key: 'end3' });}
        create() {
            let end3_1=this.add.image(500,450,'end2_1')
            boss_fight_background_music.pause();
            end3_background_song.play();
            setTimeout(() => {end3_1.destroy();let end3_2=this.add.image(500,450,'end2_2');
                setTimeout(() => {end3_2.destroy();let end3_3=this.add.image(500,450,'end2_2');
                    setTimeout(() => {end3_3.destroy();let end3_4=this.add.image(500,450,'end2_3');
                        setTimeout(() => {end3_4.destroy();let end3_5=this.add.image(500,450,'end2_4');
                            setTimeout(() => {end3_5.destroy();let end3_6=this.add.image(500,450,'end2_5');
                                setTimeout(() => {end3_6.destroy();let end3_7=this.add.image(500,450,'end2_6');
                                    setTimeout(() => {end3_7.destroy();let end3_8=this.add.image(500,450,'end2_7');
                                        setTimeout(() => {end3_8.destroy();let end3_9=this.add.image(500,450,'end2_8');
                                            setTimeout(() => {end3_9.destroy();let end3_10=this.add.image(500,450,'end2_9');
                                                setTimeout(() => {end3_10.destroy();let end3_11=this.add.image(500,450,'end2_10');
                                                    setTimeout(() => {end3_11.destroy();let end3_12=this.add.image(500,450,'end2_11');
                                                        setTimeout(() => {end3_12.destroy();let end3_1=this.add.image(500,450,'end3_1');
                                                            setTimeout(() => {end3_1.destroy();let end3_1D=this.add.image(500,450,'end3_1D');end3_player.play();
                                                                setTimeout(() => {end3_1D.destroy();let end3_2=this.add.image(500,450,'end3_2');
                                                                    setTimeout(() => {end3_2.destroy();let end3_3=this.add.image(500,450,'end3_3');
                                                                        setTimeout(() => {end3_3.destroy();let end3_4=this.add.image(500,450,'end3_4');pistol_shot.play();
                                                                            setTimeout(() => {end3_4.destroy();this.scene.start('credit_scene');}, 7000);
                                                                        }, cutscene_1);
                                                                    }, cutscene_1);
                                                                }, dialogue_speed);
                                                            }, cutscene_1);
                                                        }, cutscene_1);
                                                    }, cutscene_1);
                                                }, cutscene_1);
                                            }, cutscene_1);
                                        }, cutscene_1);
                                    }, cutscene_1);
                                }, cutscene_1);
                            }, cutscene_1);
                        }, cutscene_1);
                    }, cutscene_1);
                }, cutscene_1);
            }, cutscene_1);

        }
}
//end4
class end4 extends Phaser.Scene {
    constructor() {
        super({ key: 'end4' });}
        create() {
            boss_fight_background_music.pause();
            end4_background_song.play();
            let end4_1D=this.add.image(500,500, 'end4_1D').setScale(4);
            setTimeout(() => {end4_1D.destroy();let end4_2D=this.add.image(500,500, 'end4_2D').setScale(4);
                setTimeout(() => {end4_2D.destroy();let end4_3D=this.add.image(500,500, 'end4_3D').setScale(4);
                    setTimeout(() => {end4_3D.destroy();let end4_4D=this.add.image(500,500, 'end4_4D').setScale(4);
                        setTimeout(() => {end4_4D.destroy(); this.scene.start('credit_scene');
                        }, ending4);
                    }, ending4);
                }, ending4);
            }, ending4);
        }
    }
class endcheat extends Phaser.Scene {
    constructor() {
        super({ key: 'endcheat' });}
        create() {
            boss_fight_background_music.pause();
            let endcheat1D=this.add.image(500,500, 'Boss_dialogue_cheat_1').setScale(4);
             setTimeout(() => {endcheat1D.destroy();let endcheat2D=this.add.image(500,500, 'Boss_dialogue_cheat_2').setScale(4);
                setTimeout(() => {endcheat2D.destroy();let endcheat1=this.add.image(500,500, 'cutscene_cheat_end1')
                    setTimeout(() => {endcheat1.destroy();let endcheat2=this.add.image(500,500, 'cutscene_cheat_end2')
                        setTimeout(() => {endcheat2.destroy(); this.scene.start('credit_scene');
                        }, ending4);
                    }, ending4);
                }, ending4);
            }, ending4);
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
        const totalTime = this.registry.get('totalTime') || 0;
        const messages = [
            "Thank you for playing!",
            "",
            "",
            "",
            "",
            `You died ${currentDeaths} Times`,
            "",
            "Your score was",
            `${score}`,
            "",
            "Your time was",
            `${totalTime} seconds`,
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
            "Voice actors",
            "",
            "Player    Niilo Mustonen",
            "",
            "",
            "Boss      Santtu Sirén",
            "",
            "",
            "",
            "",
            "Very Special Thanks To",
            "",
            "",
            "Erkki Sinkko",
            "",
            "",
            "Santtu's mother",
            "",
            "",
            "Phaser developers",

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
class Boss_Dialogue1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Boss_Dialogue1' });
    }
    create() {
        let boss_dialogue_img1=this.add.image(500,450,'dialogue1_boss').setScale(5)
        boss_dialogy_1S.play();
        setTimeout(() => {boss_dialogue_img1.destroy();}, 4000);
        setTimeout(() => {let boss_dialogue_img2=this.add.image(500,450,'dialogue2_boss').setScale(5);boss_dialogy_2S.play();setTimeout(() => {boss_dialogue_img2.destroy();this.scene.start('Level5');}, 4000)}, 4000);
    }
}
class Boss_Dialogue2 extends Phaser.Scene {
    constructor() {
        super({ key: 'Boss_Dialogue2' });
    }
    create() {
        let boss_dialogue_img3=this.add.image(500,450,'dialogue3_boss').setScale(5)
        boss_dialogy_3S.play();
        setTimeout(() => {boss_dialogue_img3.destroy();}, 4000);
        setTimeout(() => {let boss_dialogue_img4=this.add.image(500,450,'dialogue4_boss').setScale(5);boss_dialogy_4S.play();setTimeout(() => {boss_dialogue_img4.destroy();this.scene.start('Level5');}, 4000)}, 4000);
    }
}
class Boss_Dialogue3 extends Phaser.Scene {
    constructor() {
        super({ key: 'Boss_Dialogue3' });
    }
    create() {
        let boss_dialogue_img5=this.add.image(500,450,'dialogue5_boss').setScale(5)
        boss_dialogy_5S.play();
        setTimeout(() => {boss_dialogue_img5.destroy();}, 4000);
        setTimeout(() => {let boss_dialogue_img6=this.add.image(500,450,'dialogue6_boss').setScale(5);boss_dialogy_6S.play();setTimeout(() => {boss_dialogue_img6.destroy();this.scene.start('Level5');}, 4000)}, 4000);
    }
}
class game_over extends Phaser.Scene {
    constructor() {
        super({ key: 'game_over' });
    }

    create() {
        this.textItems = [];
        const messages = [
            "...Why did you do it?",
            "",
            "",
            "",
            "",
            "You know what you just did?",
            "",
            "",
            "",
            "",
            "You didn't fucking listen to me.",
            "",
            "",
            "",
            "",
            "You didn't care about the tutorial, you didn't progress normally...",
            "",
            "",
            "",
            "",
            "No, you just had to use your knife on the door 100 times...",
            "",
            "",
            "",
            "",
            "...But why? What did you earn from it?",
            "",
            "",
            "",
            "",
            "You should have known the secret of the tutorial door...",
            "",
            "",
            "",
            "",
            "The door was hidden for hundreds of years for a reason. It contained an extremely deadly virus...",
            "",
            "",
            "",
            "",
            "Players weren't supposed to break it. But you? You did.",
            "",
            "",
            "",
            "",
            "You idiot...",
            "",
            "",
            "",
            "",
            "This means your computer is now completely infected by the feared Petya virus. We tried to warn ya, but you didn't listen...",
            "",
            "",
            "",
            "",
            "It will destroy all your files unless you pay thousand of bucks...",
            "",
            "",
            "",
            "",
            "But we all know you ain't got money like that",
            "",
            "",
            "",
            "",
            "It was nice knowing you... But you did this to yourself. Goodbye. Your computer will be completely destroyed any time now...",
            "",
            "",
            "",
            "",
            "BAD ENDING, GAME OVER",

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
class peli_ohi extends Phaser.Scene {
    constructor() {
        super({ key: 'peli_ohi' });}
       create() {
        let petya=this.add.image(530,450,'petya').setScale(0.9)
         tutorial_music.pause();
        hacked.play();
        setTimeout(() => {petya.destroy(); this.scene.start('game_over');
        }, 10000);
        this.secretBuffer = "";

this.input.keyboard.on('keydown', (event) => {

    // sallitaan vain kirjaimet ja välilyönti
    if (event.key.length === 1) {
        this.secretBuffer += event.key.toLowerCase();  
    }
    // tarkistus
    if (this.secretBuffer.includes("fuck you petya, i use antivirus")) {
        console.log("SECRET ESCAPE ACTIVATED");
    // deaths voi mennä miinukselle
        this.input.keyboard.removeAllListeners();
        // teleportti takaisin Level1
        this.scene.start('secret_level');
        this.scene.stop('peli_ohi');
        this.scene.remove('peli_ohi');
        hacked.pause();
    }
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
    scene: [force_interaction,secret_level,Intro,MainMenu,Tutorial,Level1,Level2,Level3,Level4,Level5,Cutscene_knife,Boss_Dialogue1,Boss_Dialogue2,Boss_Dialogue3,end1,end2,end3,end4,endcheat,credit_scene,game_over,peli_ohi]
};
var bossphase1attackfrequency=150;
var bossphase2attackfrequency=110;
var bossphase3attackfrequency=70;
var attackMade=false;
var LightbeamLatest=false;
var WallLatest=false;
var FireballLatest=false;
var SpikesLatest=false;                                                             
var bossIsAttacking=false;
var solid=false;
var deathState=false;
var level1score=0;
var level2score=0;
var level3score=0;
var level4score=0;
var offset_1=-30;
var cutscene_1=1000;
var cutscene_2=500;
var dialogue_speed=4000;
var ending4=3000;
var weapon_kill=3000;
var enemy_delay=5000;
var weapon_velocity=300;
var weapon_velocity2=-300;
var weapon_gravity=-200;
var weapon_scale=0.1;
var throwtimelast=0;
var cooldownthrow=1000;
var coin;
var ending=0;
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
var cannon_down;
var cannon_down_bullets;
var wall;
var trampoline;
var low_power_trampoline;
var ovi;
var tutorial_ovi;
var cursors;
var game = new Phaser.Game(config);
var platforms;
var bottom_of_game;
var gameOver;
var jumping = 0;
var score = 0;
var cheat;
var cheat2;
var cheat3;
var scoreText;
const backgroundsound = new Audio('assets/sound/background_music.mp3');
const nextlevelsound=new Audio('assets/sound/level_finish_sound.wav');
const invisible=new Audio('assets/sound/invisible.mp3');
const jump=new Audio('assets/sound/jump.ogg');
const pistol_shot=new Audio('assets/sound/pistol-shot.mp3');
pistol_shot.volume = 1;
jump.volume = 0.3;
const player_death=new Audio('assets/sound/death.mp3');
player_death.volume = 0.4;
const cannon_fire=new Audio('assets/sound/cannon_fire.mp3');
cannon_fire.volume = 0.6;
const knife_throw=new Audio('assets/sound/knife_throw.m4a');
knife_throw.volume = 0.4;
const enemy_death=new Audio('assets/sound/enemy_death.mp3');
enemy_death.volume = 0.7
const footsteps=new Audio('assets/sound/footsteps.mp3');
footsteps.volume = 0.5;
const enemy=new Audio('assets/sound/enemy.mp3');
enemy.volume = 0.3;
const spike_death=new Audio('assets/sound/spike_death.mp3');
const cannon_death=new Audio('assets/sound/cannon_death.mp3');
cannon_death.volume = 0.5;
const trampoline_sound=new Audio('assets/sound/trampoline.m4a');
const wind_sound=new Audio('assets/sound/wind.mp3');
wind_sound.volume = 0.4;
const boss_fight_background_music=new Audio('assets/sound/boss_fight_background_music.mp3');
boss_fight_background_music.volume = 0.5;
const fireball_sound=new Audio('assets/sound/fireball.mp3');
fireball_sound.volume = 0.7;
const wall_sound = new Audio('assets/sound/wall.mp3')
wall_sound.volume = 0.7;
const spikes_sound = new Audio('assets/sound/spikes.mp3')
spikes_sound.volume = 0.5;
const try_again = new Audio('assets/sound/dialogue/death_doesnt_work_like_that.wav')
const lightbeam_sound = new Audio('assets/sound/lightbeam_sound.mp3')
lightbeam_sound.volume = 0.5;
const throw_sound = new Audio('assets/sound/throw_sound.mp3')
const enemy_hit = new Audio('assets/sound/enemy_hit.mp3')
enemy_hit.volume = 0.7;
const tutorial_music = new Audio('assets/sound/tutorial_music.mp3')
const end1_background_song = new Audio('assets/sound/end1_backround_song.mp3')
const hacked = new Audio('assets/sound/hacked.mp3')
const intro_player1 = new Audio('assets/sound/dialogue/lore1.wav')
const intro_player2 = new Audio('assets/sound/dialogue/lore2.wav')
const intro_player3 = new Audio('assets/sound/dialogue/lore3.wav')
const end3_player = new Audio('assets/sound/dialogue/uno_reverse_card.wav')
const meeting_boss = new Audio('assets/sound/dialogue/arrogant_brat.wav')
const voi_vittu = new Audio('assets/sound/dialogue/impending_doom.wav')
const epic_fail = new Audio('assets/sound/dialogue/stupid_scream.wav')
const bro_really_thought = new Audio('assets/sound/dialogue/bro_really_thought.wav')
const fbi = new Audio('assets/sound/dialogue/fbi_open_up.wav')
const end2_background_song = new Audio('assets/sound/end2_background_song.mp3')
const end3_background_song = new Audio('assets/sound/end3_background_sound.mp3')
const end4_background_song = new Audio('assets/sound/end4_background_song.mp3')
end1_background_song.volume=0.5;
end2_background_song.volume=0.5;
end3_background_song.volume=0.5;
end4_background_song.volume=0.5;
const lightbeam_death = new Audio('assets/sound/lightbeam_death.mp3')
const fireball_death = new Audio('assets/sound/fireball_death.m4a')
fireball_death.volume=0.5;
const wall_death = new Audio('assets/sound/wall_death.m4a')
wall_death.volume = 1;
const coin_collect = new Audio('assets/sound/coin_collect.wav')
coin_collect.volume = 0.5;
const boss_dialogy_1S = new Audio('assets/sound/dialogue/boss_dialogy_1.m4a')
const boss_dialogy_2S = new Audio('assets/sound/dialogue/boss_dialogy_2.m4a')
const boss_dialogy_3S = new Audio('assets/sound/dialogue/boss_dialogy_3.m4a')
const boss_dialogy_4S = new Audio('assets/sound/dialogue/boss_dialogy_4.m4a')
const boss_dialogy_5S = new Audio('assets/sound/dialogue/boss_dialogy_5.m4a')
const boss_dialogy_6S = new Audio('assets/sound/dialogue/boss_dialogy_6.m4a')
const boss_dialogy_7S = new Audio('assets/sound/dialogue/boss_dialogy_7.m4a')
const boss_dialogy_8S = new Audio('assets/sound/dialogue/boss_dialogy_8.m4a')
const boss_dialogy_9S = new Audio('assets/sound/dialogue/boss_dialogy_9.m4a')
const boss_dialogy_10S = new Audio('assets/sound/dialogue/boss_dialogy_10.m4a')
const boss_dialogy_11S = new Audio('assets/sound/dialogue/boss_dialogy_11.m4a')
const cutscene_knife_23S = new Audio('assets/sound/dialogue/cutscene_knife_23.m4a')
const cutscene_knife_24S = new Audio('assets/sound/dialogue/cutscene_knife_24.m4a')
const end2_1s = new Audio('assets/sound/dialogue/cutscene_end2_1.m4a')
const end2_2s = new Audio('assets/sound/dialogue/cutscene_end2_2.m4a')
boss_dialogy_1S.volume=1;
boss_dialogy_2S.volume=1;
boss_dialogy_3S.volume=1;
boss_dialogy_4S.volume=1;
boss_dialogy_5S.volume=1;
boss_dialogy_6S.volume=1;
boss_dialogy_7S.volume=1;
boss_dialogy_8S.volume=1;
boss_dialogy_9S.volume=1;
boss_dialogy_10S.volume=1;
boss_dialogy_11S.volume=1;
cutscene_knife_23S.volume=1;
cutscene_knife_24S.volume=1;
end2_1s.volume=1;
end2_2s.volume=1;
var player;
var weapon;
var weapon2;
var knife;
var knife2;
var shoot;
let cannon;
let bullets;
let facingRight = true;
var playerTexture;
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
function shootBullet_cannon_down(cannon_downInstance, cannon_down_bulletsGroup) {
    cannon_fire.play()
    const c = cannon_downInstance;
    const cannon_down_bullets = cannon_down_bulletsGroup.get();  // käytetään parametrina annettua ryhmää
    if (cannon_down_bullets) {
        cannon_down_bullets.enableBody(true, c.x, c.y+40, true, true);
        cannon_down_bullets.setVelocityY(400);
        cannon_down_bullets.body.allowGravity = false;
    }
}


function hitPlayer(player, bullet) {
    if (cheat2===true){
    }
    else {
        cannon_death.play()
        // Jos pelaajalla on invulnerabiliteetti (esim. juuri spawnattu taso), ohitetaan osuma
        if (player && player.getData && player.getData('invulnerable')) {
            if (bullet && bullet.disableBody) bullet.disableBody(true, true);
            return;
        }
        const currentDeaths = this.registry.get('deaths') + 1;
        this.registry.set('deaths', currentDeaths);
        // Päivitä näkyvä teksti
        this.deathText.setText("Deaths: " + currentDeaths);
        this.scene.start(this.scene.key)
        deathState=true;
    }
}
function level1Transition() {
    if (dialogueActive) {
        player.setPosition(400, 1800);
    }
    else if(this.scene.key='Level5') {
        this.scene.start('Level1')
    }
    else {
    nextlevelsound.play()
    this.scene.start('Level1')
    }
}
function TutorialLevel1() {
      if (tutorial_ovi.hp > 0) {
    this.scene.start('Level1')
        nextlevelsound.play()
      }
}
function secretLevel1() {

    this.scene.start('Level1')
        nextlevelsound.play()
         let deaths = this.registry.get('deaths') || 0;
    this.registry.set('deaths', deaths - 100);
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
     if (cheat2===true){
     }
     else {
    const currentDeaths = this.registry.get('deaths') + 1;
    this.registry.set('deaths', currentDeaths);
    player_death.play()
    // Päivitä näkyvä teksti
    this.deathText.setText("Deaths: " + currentDeaths);
    this.scene.start(this.scene.key)
    deathState=true;
}
}
function trampolinePlayer(player, trampoline) {
    trampoline_sound.play()
    player.setVelocityY(-600);
}
function TutorialtCoin(player, coin) {
    coin_collect.play()
        coin.disableBody(true, true);
    }
function CollectCoin(player, coin) {
    coin_collect.play()
    if (this.scene.key==='Level1') {
        level1score+=1;
        coin.disableBody(true, true);
        score += 1;
        this.scoreText.setText("Score: " + score);
    }
    else if (this.scene.key==='Level2') {
        level2score+=1;
        coin.disableBody(true, true);
        score += 1;
        this.scoreText.setText("Score: " + score);
    }
    else if (this.scene.key==='Level3') {
        level3score+=1;
        coin.disableBody(true, true);
        score += 1;
        this.scoreText.setText("Score: " + score);
    }
    else if (this.scene.key==='Level4') {
        level4score+=1;
        coin.disableBody(true, true);
        score += 1;
        this.scoreText.setText("Score: " + score);
    }
       else if (this.scene.key==='secret_level') {
        coin.disableBody(true, true);
        score += 1;
        this.scoreText.setText("Score: " + score);
    }
}
function tutorialDeath(player, enemy) {
    this.scene.start(this.scene.key)
    player_death.play()
}
function low_power_trampolinePlayer(player, low_power_trampoline) {
    trampoline_sound.play()
    player.setVelocityY(-450);
}
function hitBySpike(player, spike) {
     if (cheat2===true){
     }
     else {
    const currentDeaths = this.registry.get('deaths') + 1;
    this.registry.set('deaths', currentDeaths);
    spike_death.play()
    // Päivitä näkyvä teksti
    this.deathText.setText("Deaths: " + currentDeaths);
    this.scene.start(this.scene.key)
    deathState=true;
}
}
function knifehit(player, knife2) {
     if (cheat2===true){
     }
      else {
    const currentDeaths = this.registry.get('deaths') + 1;
    this.registry.set('deaths', currentDeaths);
    spike_death.play()

    // Päivitä näkyvä teksti
    this.deathText.setText("Deaths: " + currentDeaths);
    this.scene.start(this.scene.key)
}
}
function windPlayer(player, wind) {

    //console.log("player has activated wind at",wind)
    wind_sound.play();
    player.windActive = true;
    setTimeout(() => { player.windActive = false; }, 10);
}
function level1throw(player, solid_snake_door) {
    if (solid===true) {
        score=score-20;
    }
    else {
        setTimeout(() => {solid=true;}, 100);
        this.add.image(500,400,'solid_snake');
        invisible.play();
        setTimeout(() => {this.scene.start('Level1');solid=true; score+=20;}, 9000);
    }
}
function bossPlayerContact(boss,player) {
    if (cheat2===true){
}
 else {
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
}

function knifehitboss(boss,knifeSprite) {
    knifeSprite.destroy();
    const currentDeaths = this.registry.get('deaths');
    var bosshitchanchethingy = Phaser.Math.Between(0, 3);
    console.log(bosshitchanchethingy)
    //knife_deflect_first_Time=false;
    //
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
                ending=2;
                console.log("ending 2")
            }
            else if (currentDeaths>=5000) {
                this.scene.start('end4')
                ending=4;
                console.log("ending 4")
            }
            else if(currentDeaths<=10 && currentDeaths>=1) {
                this.scene.start('end3')
                ending=3;
                console.log("ending 3")
            }
            else {
                ending=1;
                this.scene.start('end1')
                console.log("ending 1")
            }
        }
        }
    }
    }
    }
    

function fireballplayer(player,fireball) {
     if (cheat2===true){
     }
      else {
    fireball_death.play()
    const currentDeaths = this.registry.get('deaths') + 1;
    this.registry.set('deaths', currentDeaths);
    // Päivitä näkyvä teksti
    this.deathText.setText("Deaths: " + currentDeaths);
    this.scene.start('Level5')
}
}
function boss_wall_player(player,bosswall) {
     if (cheat2===true){
     }
      else {
    wall_death.play()
    const currentDeaths = this.registry.get('deaths') + 1;
    this.registry.set('deaths', currentDeaths);
    // Päivitä näkyvä teksti
    this.deathText.setText("Deaths: " + currentDeaths);
    this.scene.start('Level5')
}
}
function boss_spike_player(player,boss_spike){
     if (cheat2===true){
     }
    else {
    spike_death.play()
    const currentDeaths = this.registry.get('deaths') + 1;
    this.registry.set('deaths', currentDeaths);
    // Päivitä näkyvä teksti
    this.deathText.setText("Deaths: " + currentDeaths);
    this.scene.start('Level5')
}
}

function boss_spike_tower_thingys(boss_spikes, tower_thingys) {
    boss_spikes.destroy();
}
function boss_phase1_attacks() {
    if (bossattack===0&&!WallLatest) {
        FireballLatest=false;
        SpikesLatest=false;
        WallLatest=true;
        wall_sound.play()
        let boss_wall_object = bosswall.create(boss.x, boss.y+40, 'boss_wall');
        boss_wall_object.setScale(1).refreshBody();
        const speed = 100;
        const direction = Math.sign(player.x - boss.x);
        boss_wall_object.setVelocityX(speed * direction);
        boss_wall_object.body.allowGravity = false;
        setTimeout(() => {if (boss_wall_object) boss_wall_object.destroy(); }, 9000);
        }
        else if (bossattack===1&&!FireballLatest) {
            FireballLatest=true;
            SpikesLatest=false;
            WallLatest=false;
            fireball_sound.play()
            let fireballobject = fireball.create(boss.x, boss.y, 'fireball');
            fireballobject.setScale(2).refreshBody();
            const speed = 300;
            const direction = Math.sign(player.x - boss.x);
            fireballobject.setVelocityX(speed * direction);
            fireballobject.body.allowGravity = false;
            setTimeout(() => {if (fireballobject) fireballobject.destroy(); }, 4000);
        }
        else if (bossattack===2&&!SpikesLatest){
            FireballLatest=false;
            SpikesLatest=true;
            WallLatest=false;
            spikes_sound.play()
            let spikebossobject = boss_spike.create(player.x, 1000, 'boss_spike');
            spikebossobject.setScale(2).refreshBody();
            const speed = 100;
            spikebossobject.setVelocityY(speed);
            spikebossobject.body.allowGravity = false;
            setTimeout(() => {if (spikebossobject) spikebossobject.destroy(); }, 90000);
        }
        attackMade=true;
}
function boss_phase2_attacks() {
    if (bossattack===0&&!WallLatest) {
        FireballLatest=false;
        SpikesLatest=false;
        WallLatest=true;
        wall_sound.play()
        let boss_wall_object = bosswall.create(boss.x, boss.y+40, 'boss_wall');
        boss_wall_object.setScale(1).refreshBody();
        const speed = 200;
        const direction = Math.sign(player.x - boss.x);
        boss_wall_object.setVelocityX(speed * direction);
        boss_wall_object.body.allowGravity = false;
        setTimeout(() => {if (boss_wall_object) boss_wall_object.destroy(); }, 9000);
        }
        else if (bossattack===1&&!FireballLatest) {
            FireballLatest=true;
            SpikesLatest=false;
            WallLatest=false;
            fireball_sound.play()
            let fireballobject = fireball.create(boss.x, boss.y, 'fireball');
            fireballobject.setScale(2).refreshBody();
            const speed = 400;
            const direction = Math.sign(player.x - boss.x);
            fireballobject.setVelocityX(speed * direction);
            fireballobject.body.allowGravity = false;
            setTimeout(() => {if (fireballobject) fireballobject.destroy(); }, 4000);
        }
        else if (bossattack===2&&!SpikesLatest){
            FireballLatest=false;
            SpikesLatest=true;
            WallLatest=false;
            spikes_sound.play()
            let spikebossobject = boss_spike.create(player.x, 1000, 'boss_spike');
            spikebossobject.setScale(2).refreshBody();
            const speed = 250;
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
        attackMade=true;
}
function boss_phase3_attacks(a) {
    if (bossattack===0&&!WallLatest) {
        FireballLatest=false;
        SpikesLatest=false;
        WallLatest=true;
        LightbeamLatest=false;
        wall_sound.play()
        let boss_wall_object = bosswall.create(boss.x, boss.y+40, 'boss_wall');
        boss_wall_object.setScale(1).refreshBody();
        const speed = 300;
        const direction = Math.sign(player.x - boss.x);
        boss_wall_object.setVelocityX(speed * direction);
        boss_wall_object.body.allowGravity = false;
        setTimeout(() => {if (boss_wall_object) boss_wall_object.destroy(); }, 9000);
    }
    else if(bossattack===1&&!FireballLatest) {
        FireballLatest=true;
        SpikesLatest=false;
        WallLatest=false;
        LightbeamLatest=false;
        fireball_sound.play()
        let fireballobject = fireball.create(boss.x, boss.y, 'fireball');
        fireballobject.setScale(2).refreshBody();
        const speed = 500;
        const direction = Math.sign(player.x - boss.x);
        fireballobject.setVelocityX(speed * direction);
        fireballobject.body.allowGravity = false;
        setTimeout(() => {if (fireballobject) fireballobject.destroy(); }, 4000);
    }
    else if (bossattack===2&&!SpikesLatest) {
        FireballLatest=false;
        SpikesLatest=true;
        WallLatest=false;
        LightbeamLatest=false;
        spikes_sound.play()
        let spikebossobject = boss_spike.create(player.x, 1000, 'boss_spike');
        spikebossobject.setScale(2).refreshBody();
        const speed = 400;
        spikebossobject.setVelocityY(speed);
        spikebossobject.body.allowGravity = false;
        setTimeout(() => {if (spikebossobject) spikebossobject.destroy(); }, 90000);
    }
    else if (bossattack===3&&!LightbeamLatest) {
        FireballLatest=false;
        SpikesLatest=false;
        WallLatest=false;
        LightbeamLatest=true;
        lightbeam_sound.play();
        let beam = a.physics.add.image(boss.x, boss.y-400, 'lightbeam');
        beam.body.allowGravity = false;
        beam.setScale(1);
        beam.setAlpha(0.4);
        setTimeout(() => {a.tweens.add({targets: beam,scaleX: 12,scaleY: 6,duration: 1300});}, 1000);
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
            setTimeout(() => {knockback = 0;}, 800);
        }, 2000);  // tämä on sama aika kuin sulla beam.destroy() oli
        a.physics.add.overlap(player, beam, () => {
            if (cheat2===true) {}
            else {
                lightbeam_death.play();
                const currentDeaths = a.registry.get('deaths') + 1;
                a.registry.set('deaths', currentDeaths);
                a.deathText.setText("Deaths: " + currentDeaths);
                a.scene.start('Level5');
            };
        });
    }
    else if (bossattack===4) {
        throw_sound.play()
        knockback=1;
        player.setVelocityY(-700);
        setTimeout(() => {player.setVelocityX(700);player.setVelocityY(-300);setTimeout(() => {knockback=0;},1000 )}, 2000);
    }
    attackMade=true;
}