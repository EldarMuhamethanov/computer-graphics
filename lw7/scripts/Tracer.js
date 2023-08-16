import Color from "./utils/Color.js";

export default class Tracer {
    constructor(screenWidth, screenHeight, world) {
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.world = world;
    }

    calculateRayPixelProjection(camera, { row, col }) {
        const windowPixelWidth = camera.windowWidth / this.screenWidth;
        const windowPixelHeight = camera.windowHeight / this.screenHeight;

        const xWindowOffset = windowPixelWidth  * (0.5 + col);
        const yWindowOffset = windowPixelHeight * (0.5 + row);

        const ray = camera.calculateRayForPointAtWindowOffset(xWindowOffset, yWindowOffset);

        return { 
            ray, 
            pixelPosition: {
                xOffset: col,
                yOffset: row,
            }
        };
    }

    rayTracePixel(pixel) {
        const projection = this.calculateRayPixelProjection(this.world.camera, pixel);
        
        const hit = this._hit(this.world.objects, projection.ray);

        const pixelColor = hit
            ? this._shadePoint(hit, projection.ray, this.world.lights)
            : Color.black();

        return {
            color: pixelColor,
            position: projection.pixelPosition
        };
    }

    _hit(objects, ray) {
        let tmin = Number.POSITIVE_INFINITY;
        let tminHit = null;

        for (let obj of objects) {
            const hit = obj.hit(ray);

            if (hit && (hit.tmin < tmin)) {
                tmin = hit.tmin;
                tminHit = hit;
            }
        }

        return tminHit;
    }

    _shadePoint(hit, ray, lights) {
        let color = Color.black();

        for (let light of lights) {
            const lightContribution = light.lightPoint(hit.normal, ray, hit.objectColor);
            color = color.plus(lightContribution);
        }

        return color.clamp();
    }
}