
import Vec3D from "../utils/Vec3D.js";
import { solve4 } from "../utils/solver.js";
import Transformation3D from "../utils/Transformation3D.js";
import Color from "../utils/Color.js";

const K_EPSILON = 0.0001;

export default class Torus {

    constructor(thorRadius, tubeRadius, color = Color.white()) {
        this.thorRadius = thorRadius;
        this.tubeRadius = tubeRadius;
        
        this.transformation = new Transformation3D();
        this.color = color;
    }

    hit(ray) {
        const tfRay = this.transformation.transformRay(ray);

        const t = this.findIntersection(tfRay);
        if (!t) {
            return null;
        }

        const localHitPoint = tfRay.pointAtDistance(t);
        const localNormal = this.computeNormalAtPoint(localHitPoint);

        return {
            tmin: t,
            hitPoint: ray.pointAtDistance(t),
            normal: this.transformation.transformNormal(localNormal),
            objectColor: this.color,
        };
    }

    findIntersection(ray) {
        const ox = ray.origin.x;
        const oy = ray.origin.y;
        const oz = ray.origin.z;

        const dx = ray.direction.x;
        const dy = ray.direction.y;
        const dz = ray.direction.z;

        const sumDSqrd = dx ** 2 + dy ** 2 + dz ** 2;
        const e = ox ** 2 + oy ** 2 + oz ** 2 - this.thorRadius ** 2 - this.tubeRadius ** 2;
        const f = ox * dx + oy * dy + oz * dz;
        const fourASqrd	= 4.0 * this.thorRadius ** 2;

        const coeffs = [
            e ** 2 - fourASqrd * (this.tubeRadius ** 2 - oy ** 2),
            4.0 * f * e + 2.0 * fourASqrd * oy * dy,
            2.0 * sumDSqrd * e + 4.0 * (f ** 2) + fourASqrd * dy ** 2,
            4.0 * sumDSqrd * f,
            sumDSqrd ** 2
        ];

        
        const solution = solve4(coeffs);

        if (!solution.length) {
            return null;
        }

        let mint = Number.POSITIVE_INFINITY;
        for (let t of solution) {
            if ((t > K_EPSILON) && (t < mint)) {
                mint = t;
            }
        }

        return mint;
    }

    computeNormalAtPoint(point) {
        const paramSquared = this.thorRadius ** 2 + this.tubeRadius ** 2;

        const {x, y, z} = point;
        const sumSquared = x ** 2 + y ** 2 + z ** 2;

        return new Vec3D(
            4.0 * x * (sumSquared - paramSquared),
            4.0 * y * (sumSquared - paramSquared + 2.0 * this.thorRadius ** 2),
            4.0 * z * (sumSquared - paramSquared),
        ).norm();
    }
}
