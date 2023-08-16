import Point3D from "../utils/Point3D.js";


export default class CameraWindow {
    constructor(width, height) {
        this._width = width;
        this._height = height;

        this._xMin = - this._width / 2;
        this._yMax = this._height / 2;
    }

    get width() {
        return this._width;
    }
    get height() { 
        return this._height;
    }

    computePointAtOffset(xOffset, yOffset) {
        return new Point3D(
            this._xMin + xOffset,
            this._yMax - yOffset,
            0,
        );
    }
}