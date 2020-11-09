class Plinko {
    constructor(x, y) {
        var options = {
            'restitution': 1,
            'friction': 0,
            isStatic: true
        }
        this.radius = 13
        this.body = Bodies.circle(x, y, this.radius, options);
        // this.height = height;

        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        fill('green');
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius * 2);
        pop();

    }

}