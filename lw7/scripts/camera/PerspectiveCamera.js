import Ray from "../Ray.js";

export default class PerspectiveCamera {
    constructor(eye, cameraWindow) {
        this._eye = eye;
        this._cameraWindow = cameraWindow;
    }

    get windowWidth() {
        return this._cameraWindow.width;
    }
    get windowHeight() {
        return this._cameraWindow.height;
    }

    calculateRayForPointAtWindowOffset(xOffset, yOffset) {
        const pointOnCameraWindow = this._cameraWindow.computePointAtOffset(xOffset, yOffset);

        const rayOrigin = this._eye;
  
        const rayDirection = pointOnCameraWindow
            .minus(rayOrigin)
            .norm();

        return new Ray(rayOrigin, rayDirection);
    }
}