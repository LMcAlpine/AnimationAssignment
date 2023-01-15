class Player {
    constructor(game) {
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./halo.png");

        this.spritesheet2 = ASSET_MANAGER.getAsset("./shootingTest.png");

        this.spritesheet3 = ASSET_MANAGER.getAsset("./gruntWalk-Sheet.png");

        this.moon = ASSET_MANAGER.getAsset("./moon.png");

        this.elite = ASSET_MANAGER.getAsset("./elitespritesheet.png");
        this.brute = ASSET_MANAGER.getAsset("./brutesprites.png");




        this.animation = new Animator(this.spritesheet, 0, 0, 56, 55, 22, 0.075, 0, false, true);
        // this.animation = new Animator(this.spritesheet, 372, 390, 26, 48, 3, 1, 9, false, true);
        // this.animation2 = new Animator(this.spritesheet, 477, 390, 23, 48, 2, 1, 9, false, true);

        // this.animation3 = new Animator(this.spritesheet, 539, 390, 15, 48, 3, 1, 9, false, true);

        this.shooting = new Animator(this.spritesheet2, 10, 0, 85, 55, 22, 0.075, 0, false, true);

        this.grunt = new Animator(this.spritesheet3, 0, 0, 64, 64, 7, 0.095, 0, false, true);

        this.elite = new Animator(this.elite, 0, 0, 64, 64, 8, 0.095, 0, false, true);

        this.brute = new Animator(this.brute, 0, 0, 64, 64, 8, 0.095, 0, false, true);


        this.x = 0;
        this.y = 0;
        // pixels per second
        this.speed = 250;



    }

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1920) {
            this.x = 0;
        }
    }

    draw(ctx) {


        //ctx.drawImage(this.moon,0,0);


        // this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 5);

        // this.shooting.drawFrame(this.game.clockTick, ctx, this.x, this.y + 300, 5);

        this.grunt.drawFrame(this.game.clockTick, ctx, this.x, this.y + 600, 5);

        this.elite.drawFrame(this.game.clockTick, ctx, this.x, this.y, 5);

        this.brute.drawFrame(this.game.clockTick,ctx,this.x,this.y+300,5);

    }

}