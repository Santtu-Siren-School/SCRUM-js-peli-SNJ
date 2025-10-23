class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    preload() {
    }

    create() {
        this.add.text(540, 200, 'Santtun peli', {
            fontSize: '64px',
            fill: '#ffffff'
        }).setOrigin(0.5);

    }
}var config = {
		type: Phaser.AUTO,
		width: 1080,
        height: 720,
		physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
	scene: [MenuScene, ]
};