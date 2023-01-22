class Animation {
    constructor(game) {
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./halo.png");

        this.spritesheet2 = ASSET_MANAGER.getAsset("./shootingTest.png");

        this.spritesheet3 = ASSET_MANAGER.getAsset("./gruntWalk-Sheet.png");

        this.gruntWalkLeft = ASSET_MANAGER.getAsset("./gruntWalkLeft.png");

        this.moon = ASSET_MANAGER.getAsset("./moon.png");

        this.elite = ASSET_MANAGER.getAsset("./elitespritesheet.png");
        this.brute = ASSET_MANAGER.getAsset("./brutesprites.png");

        this.bruteLeft = ASSET_MANAGER.getAsset("./brutespritesLeft.png");

        this.gruntDead = ASSET_MANAGER.getAsset("./gruntKilledFleeing-Sheet.png");




        this.eliteLeft = ASSET_MANAGER.getAsset("./elitespritesheetLeft.png");







        this.cityfar = ASSET_MANAGER.getAsset("./city/cityfar.png")
        this.nightsky = ASSET_MANAGER.getAsset("./city/nightsky.png")
        this.cityclose = ASSET_MANAGER.getAsset("./city/cityclose.png")


        this.animation = new Animator(this.spritesheet, 0, 0, 56, 55, 22, 0.075, 0, false, true);
        // this.animation = new Animator(this.spritesheet, 372, 390, 26, 48, 3, 1, 9, false, true);
        // this.animation2 = new Animator(this.spritesheet, 477, 390, 23, 48, 2, 1, 9, false, true);

        // this.animation3 = new Animator(this.spritesheet, 539, 390, 15, 48, 3, 1, 9, false, true);

        this.gruntKilled = new Animator(this.gruntDead, 0, 0, 48, 48, 5, 0.2, 0, false, true);

        this.shooting = new Animator(this.spritesheet2, 10, 0, 85, 55, 22, 0.075, 0, false, true);

        this.grunt = new Animator(this.spritesheet3, 0, 0, 64, 64, 7, 0.095, 0, false, true);

        this.gruntLeft = new Animator(this.gruntWalkLeft, 0, 0, 64, 64, 7, 0.095, 0, true, true);

        this.elite = new Animator(this.elite, 0, 0, 64, 64, 8, 0.095, 0, false, true);

        this.eliteLeft = new Animator(this.eliteLeft, 0, 0, 64, 64, 8, 0.095, 0, true, true);

        this.brute = new Animator(this.brute, 0, 0, 64, 64, 8, 0.095, 0, false, true);

        this.bruteLeft = new Animator(this.bruteLeft, 0, 0, 64, 64, 8, 0.095, 0, false, true);




        this.x = 0;
        this.y = 0;
        // pixels per second
        this.speed = 250;

        this.x2 = 1920;

        this.x3 = 0;
        this.x4 = this.cityclose.width;




        // this.layer = new Layer(this.cityclose, 0.5);
        // game.addEntity(this.layer);



    }

    update() {
        this.x += this.speed * this.game.clockTick;
        this.x2 -= this.speed * this.game.clockTick;
        if (this.x > 1920) {
            this.x = 0;
        }

        if (this.x2 < 0) {
            this.x2 = 1920;
        }
    }

    draw(ctx) {




        //ctx.drawImage(this.moon, 0, 0);
        // ctx.drawImage(this.nightsky, 0, 0);

        // ctx.drawImage(this.cityfar, 0, 0);






        // this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 5);

        // this.shooting.drawFrame(this.game.clockTick, ctx, this.x, this.y + 300, 5);

        this.grunt.drawFrame(this.game.clockTick, ctx, this.x, this.y + 760, 3);

        // this.gruntLeft.drawFrame(this.game.clockTick, ctx, this.x2, this.y + 464, 3);

        // this.elite.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3);

        this.eliteLeft.drawFrame(this.game.clockTick, ctx, this.x2, this.y + 705, 3);

        //  this.brute.drawFrame(this.game.clockTick, ctx, this.x, this.y + 300, 3);

        this.bruteLeft.drawFrame(this.game.clockTick, ctx, this.x2 + 200, this.y + 700, 3);


        this.gruntKilled.drawFrame(this.game.clockTick, ctx, 1800, this.y + 370, 3);


    }

}