class Drop {
    constructor() {
        this.pos = [random(width), random(-500,-1)];
        this.vel = [0, random(3,10)];
    }

    fall() {
        if(x) this.vel[0] += map(this.pos[0] - x, width, -width, -0.1, 0.1);
        if(y) this.vel[1] += map(this.pos[1] - y, height, -height, -0.1, 0.1);
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
        if( this.pos[0] > width || this.pos[0] < 0 || this.pos[1] > height || this.pos[1] < -500) {
            this.pos = [random(width), random([width + 300, -300])];
            this.vel = [0, random(3,10)];
        }
    }

    render() {
        line(this.pos[0], this.pos[1], this.pos[0], this.pos[1] + 10);
    }
}