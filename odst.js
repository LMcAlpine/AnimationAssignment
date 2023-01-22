class ODST {
    constructor(game) {
        this.game = game;
        this.drop = ASSET_MANAGER.getAsset("./droppodstest-Sheet2.png");
        // this.impact = ASSET_MANAGER.getAsset("./droppod_impact_ground.png");
        this.impact = ASSET_MANAGER.getAsset("./droppod_impact_with_odst.png");

        this.still = ASSET_MANAGER.getAsset("./podStill.png");

        this.city = ASSET_MANAGER.getAsset("./city1.png");

        this.odstCharacter = ASSET_MANAGER.getAsset("./odst.png");

        this.drop = new Animator(this.drop, 0, 0, 128, 128, 3, 0.1, 0, false, true);

        // this.impact = new Animator(this.impact, 0, 0, 200, 200, 10, 0.1, 0, false, false);

        this.still = new Animator(this.still, 0, 0, 42, 65, 1, 1, 0, false, true);


        this.impact = new Animator(this.impact, 0, 0, 170, 80, 9, 0.2, 0, false, false);

        this.odst = new Animator(this.odstCharacter, 0, 0, 64, 64, 8, 0.095, 0, false, true);




        this.velocity = { x: 0, y: 1 };
        this.gravity = 0.0125;

        this.x = 0;
        this.y = 0;

        this.x2 = 260;

        this.cb = new CollisionBlock({ position: { x: 200, y: 800 } });
    }

    update() {


        //this.x2 += 250 * this.game.clockTick;

        if (this.x2 > 1920) {
            this.x2 = 0;
        }





        if (this.y + this.drop.height >= this.cb.position.y) {
            if (this.velocity.y > 0) {
                this.velocity.y = 0;

                this.y = this.cb.position.y - this.drop.height - 0.01;
                this.stop = true;

            }

        }

        this.applyGravity();
    }

    draw(ctx) {

        ctx.save();
        ctx.scale(2.5, 2.5);
        ctx.translate(0, -this.city.height + (1080 / 2.5) + 175)

        ctx.drawImage(this.city, 0, 0);

        ctx.restore();
        if (!this.stop) {
            this.drop.drawFrame(this.game.clockTick, ctx, 200, this.y, 3);


        }

        else if (this.stop) {
            this.impact.drawFrame(this.game.clockTick, ctx, 200 - 38, this.y + 2.5, 3);

        }

        if (this.impact.isDone()) {

            this.still.drawFrame(this.game.clockTick, ctx, 294, this.y + 20, 3);
            this.x2 += 150 * this.game.clockTick;
            this.odst.drawFrame(this.game.clockTick, ctx, this.x2, 740, 3);
        }











    }

    applyGravity() {

        this.y += this.velocity.y;
        this.velocity.y += this.gravity;

    }

}