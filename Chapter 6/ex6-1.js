class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(otherVec) {
        return new Vec(otherVec.x + this.x, otherVec.y + this.y);
    }
    minus(otherVec) {
        return new Vec(this.x - otherVec.x, this.y - otherVec.y);
    }
}