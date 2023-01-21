class ODST {
    constructor(game) {
        this.game = game;
        this.drop = ASSET_MANAGER.getAsset("./droppodstest-Sheet2.png");

        this.drop = new Animator(this.drop, 0, 0, 128, 128, 3, 0.1, 0, false, true);



        this.velocity = { x: 0, y: 1 };
        this.gravity = 0.0125;

        this.x = 0;
        this.y = 0;

        this.cb = new CollisionBlock({ position: { x: 200, y: 800 } });
    }

    update() {



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

        // if (!this.stop) {
        this.drop.drawFrame(this.game.clockTick, ctx, 200, this.y, 3);
        // } else {
        // this.drop.drawFrame(this.game.clockTick, ctx, 200, this.y, 3);
        //  }
    }

    applyGravity() {

        this.y += this.velocity.y;
        this.velocity.y += this.gravity;

    }

}