
import RayTracer from "./RayTracer.js";

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 640;

window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d");

    const rayTracer = new RayTracer(CANVAS_WIDTH, CANVAS_HEIGHT);

    function drawDisplayRow(displayRowPixels) {
        for (let pixel of displayRowPixels) {
            drawPixel(pixel);
        }
    }

    function drawPixel({ color, position }) {
        ctx.save();
        ctx.fillStyle = color.toCssColor();
        ctx.fillRect(position.xOffset, position.yOffset, 1, 1);
        ctx.restore();
    }

    rayTracer.setDisplayRenderedCallback(drawDisplayRow);    
    rayTracer.start();
});
