
import World from "./World.js";
import Tracer from "./Tracer.js";

export default class RayTracer {

    constructor(screenWidth, screenHeight) {
        this._screenWidth = screenWidth;
        this._screenHeight = screenHeight;

        this._displayRowRenderedCallback = () => {};

        this._world = new World();
        this._world._buildScene(this._screenWidth / this._screenHeight);

        this._tracer = new Tracer(this._screenWidth, this._screenHeight, this._world);
    }

    setDisplayRenderedCallback(callback) {
        this._displayRenderedCallback = callback;
    }

    _tracePixels(tracer) {
        const rayTracedPixels = [];

        for (let row = 0; row <= this._screenHeight; row++) {
            for (let col = 0; col <= this._screenWidth; col++) {
                const pixelColorAndPosition = tracer.rayTracePixel({ row, col });
                rayTracedPixels.push(pixelColorAndPosition);
            }
        }

        this._displayRenderedCallback(rayTracedPixels)
    }

    start() {
        this._tracePixels(this._tracer, this._screenWidth, this._screenHeight);
    }
}