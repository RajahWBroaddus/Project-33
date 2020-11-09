class Divisions {
    constructor(x, y, height) {
        var options = {
            isStatic: true,
            'friction': 0.5,
            'restitution': 1
        }

        this.height = height
        this.body = Bodies.rectangle(x, y, 10, this.height, options);
        World.add(world, this.body);

    }
    display() {
        push();
        var pos = this.body.position;
        rectMode(CENTER);

        fill("darkgreen");
        stroke("green")
        rect(pos.x, pos.y, 10, this.height);
        pop();
    }
}