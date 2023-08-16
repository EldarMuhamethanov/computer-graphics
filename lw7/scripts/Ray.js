
export default class Ray {
    constructor(origin, direction) {
        this.origin = origin;
        this.direction = direction;
    }

    pointAtDistance(t) {
        return this.origin.translate(this.direction.scale(t));
    }
}

