class Camera {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.zoom = 10;
        this.smoothing = 0.001;
        this.angle = 0;


        this.object = { x: 0, y: 0, vx: 5, vy: 5 };

        this.following = false;
    }

    update() { }

    draw(ctx) {
        this.updateObject();
        this.updateCamera(ctx);
      

        ctx.save();
        ctx.translate(1920 / 2, 1080 / 2);
        ctx.rotate(this.angle);

        ctx.fillStyle = '#ccc';
        ctx.beginPath();
        ctx.arc(0, 0, 50, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "red";
        ctx.fillRect(-10, -10, 20, 20);

        ctx.restore();
        // this.object.x += 0.5;
        // this.object.y += 0.5;


        // this.x = this.object.x - 39;
        // this.y = this.object.y - 39;


        //ctx.fillStyle = "black";


        // if (this.following && this.x > 500) {
        //     this.x = this.object.x - 100;
        //     this.y = this.object.y - 100;

        //     ctx.save();
        //     ctx.scale(this.zoom, this.zoom);
        //     ctx.fillRect(this.x / this.zoom, this.y / this.zoom, 100, 100);

        //     ctx.fillStyle = "red";
        //     ctx.fillRect(this.object.x / this.zoom, this.object.y / this.zoom, 50, 50);
        //     ctx.restore();
        // } else {
        //     ctx.fillStyle = "red";
        //     ctx.fillRect(this.object.x, this.object.y, 50, 50);
        // }


        // if (this.following) {
        //     this.x += (this.object.x) * this.smoothing
        //     this.y += (this.object.y) * this.smoothing
        //     this.angle = Math.atan2(this.object.y - this.y, this.object.x - this.x);
        //     ctx.fillRect(this.x, this.y, 100, 100);
        //     // draw the object
        //     // ctx.save();
        //     ctx.fillStyle = "red";
        //     ctx.fillRect(this.object.x + this.x, this.object.y - this.y, 50, 50);
        //     //  ctx.restore();
        // } else {

        // }




    }

    updateCamera(ctx) {

       // this.x++;

        if (this.following) {
            this.x = this.object.x;
            this.y = this.object.y;

        } else {
            this.angle = Math.atan2(this.object.y - this.y, this.object.x - this.x);
        }

    }

    updateObject() {
        this.object.x += this.object.vx;
        this.object.y += this.object.vy;

        if (Math.abs(this.object.x - this.x) < 1920 / 2 && Math.abs(this.object.y - this.y) < 1080 / 2) {
            this.following = true;
        }
    }
}