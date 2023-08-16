import Color from "./Color.js";

const K_EPSILON = 0.0001;

export default class Plane2D {

    constructor(pointOnPlane, normal) {
        this.pointOnPlane = pointOnPlane;
        this.normal = normal;

        this.color1 = Color.white();
        this.color2 = Color.black();
    }

    hit(ray) {
        const t = this._findIntersection(ray);

        if (t >= K_EPSILON) {
            const hitPoint = ray.pointAtDistance(t);
            const objectColor = this._findColor(hitPoint);

            return {
                tmin: t,
                normal: this.normal,
                hitPoint,
                objectColor
            };
        }

        return null;
    }

    _findIntersection(ray) {
        const nominator = this.pointOnPlane
            .minus(ray.origin)
            .dot(this.normal);

        const denominator = ray.direction
            .norm()
            .dot(this.normal);

        return nominator / denominator;
    }

    _findColor(hitPoint) {
        const SIZE = 20;
        
        const x = (hitPoint.x < 0) ? -hitPoint.x + SIZE : hitPoint.x;
        const z = (hitPoint.z < 0) ? -hitPoint.z + SIZE : hitPoint.z;

        const xEven = (x / SIZE) & 1;
        const zEven = (z / SIZE) & 1;

        return ((xEven + zEven) & 1)
            ? this.color1
            : this.color2;
    }
}