
export default class Vec3D {
    constructor(x,y,z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    length() {
        const squaredLength = (this.x*this.x + this.y*this.y + this.z*this.z);
        return Math.sqrt(squaredLength);
    }

    norm() {
        const length = this.length();
        return new Vec3D(
            this.x / length,
            this.y / length,
            this.z / length,
        );
    }

    dot(vec) {
        return this.x*vec.x + this.y*vec.y + this.z*vec.z;
    }

    scale(scalar) {
        return new Vec3D(
            this.x * scalar,
            this.y * scalar,
            this.z * scalar,
        );
    }

    plus(vec) {
        return new Vec3D(
            this.x + vec.x,
            this.y + vec.y,
            this.z + vec.z,
        );
    }

    reverse() {
        return new Vec3D(
            -this.x,
            -this.y,
            -this.z
        );
    }
}

