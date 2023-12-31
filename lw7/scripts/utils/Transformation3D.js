
import Matrix4, { MATRIX4_IDENTITY } from "./Matrix4.js";
import Ray from "../Ray.js";

export default class Transformation3D {
    constructor() {
        this._matrix = MATRIX4_IDENTITY;
        this._invMatrix = MATRIX4_IDENTITY;
    }

    translate(dx,dy,dz) {
        this._matrix = Matrix4.translate(dx,dy,dz).times( this._matrix );
        this._invMatrix = this._invMatrix.times( Matrix4.translateInverse(dx,dy,dz) );

        return this;
    }

    rotateX(angleDeg) {
        this._matrix = Matrix4.rotateX(angleDeg).times( this._matrix );
        this._invMatrix = this._invMatrix.times( Matrix4.rotateXInverse(angleDeg) );
    
        return this;
    }

    rotateY(angleDeg) {
        this._matrix = Matrix4.rotateY(angleDeg).times( this._matrix );
        this._invMatrix = this._invMatrix.times( Matrix4.rotateYInverse(angleDeg) );

        return this;
    }

    rotateZ(angleDeg) {
        this._matrix = Matrix4.rotateZ(angleDeg).times( this._matrix );
        this._invMatrix = this._invMatrix.times( Matrix4.rotateZInverse(angleDeg) );

        return this;
    }

    affine(matrix, matrixInverse) {
        this._matrix = matrix.times( this._matrix );
        this._invMatrix = this._invMatrix.times( matrixInverse );
    }

    transformRay(ray) {
        const tfOrigin = this._invMatrix.transformPoint(ray.origin);
        const tfDirection = this._invMatrix.transformVector(ray.direction);
        
        return new Ray(tfOrigin, tfDirection);
    }

    transformNormal(n) {
        return this._invMatrix.transformNormal(n);
    }
}