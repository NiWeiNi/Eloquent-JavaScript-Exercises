// Defines a vector
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // Add two vectors
    plus(otherVec) {
        return new Vec(otherVec.x + this.x, otherVec.y + this.y);
    }
    // Minus two vectors
    minus(otherVec) {
        return new Vec(this.x - otherVec.x, this.y - otherVec.y);
    }
    // Length of the vector to 0,0
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}