class Particle {
    constructor(x, y) {
        var options = {
            'restitution': 0.25,
            'friction': 0,
            'density': 5,
        }
        this.radius = 10;
        this.body = Bodies.circle(x, y, this.radius, options);
        this.dead = false;
        // this.height = height;
        this.color = color(random(0, 255), random(0, 255), random(0, 255))
        World.add(world, this.body);

    }
    display() {
        if (this.body.position.y < 760 && this.dead === false) {
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            fill(this.color);
            noStroke();
            translate(pos.x, pos.y);
            rotate(angle);
            ellipseMode(CENTER);
            ellipse(0, 0, this.radius * 2)
            pop();

        } else {



            if (this.body.position.x > 0 && this.body.position.x < 80 && this.dead === false) {
                for (var i = 0; i < 2; i++) {
                    score += 100 * i
                }
            }
            if (this.body.position.x > 80 && this.body.position.x < 160 && this.dead === false) {
                for (var i = 0; i < 2; i++) {
                    score += 200 * i
                }
            }
            if (this.body.position.x > 160 && this.body.position.x < 240 && this.dead === false) {
                for (var i = 0; i < 2; i++) {
                    score += 400 * i
                }
            }
            if (this.body.position.x > 240 && this.body.position.x < 320 && this.dead === false) {
                for (var i = 0; i < 2; i++) {
                    score += 400 * i
                }
            }
            if (this.body.position.x > 320 && this.body.position.x < 400 && this.dead === false) {
                for (var i = 0; i < 2; i++) {
                    score += 200 * i
                }
            }
            if (this.body.position.x > 400 && this.body.position.x < 480 && this.dead === false) {
                for (var i = 0; i < 2; i++) {
                    score += 100 * i
                }
            }
            if (this.dead === false) { tries -= 9 }
            this.dead = true;
            World.remove(world, this.body);

        }
    }
}