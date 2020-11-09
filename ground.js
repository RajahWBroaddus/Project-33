class Ground {
    constructor() {
        var options = {
            isStatic: true
        }


        this.body = Bodies.rectangle(width / 2, height - 10, width, 20, options);
        World.add(world, this.body);
    }
    display() {
        push();
        rectMode(CENTER);
        fill("darkgreen");
        stroke("green")
        rect(width / 2, height - 10, width, 20);
        pop();
    }
}