import Vec3D from "./utils/Vec3D.js";
import Color from "./utils/Color.js";
import Torus from "./objects/Torus.js";
import DirectionalLight from "./light/DirectionalLight.js";
import Plane2D from "./utils/Plane2D.js";
import Point3D from "./utils/Point3D.js";
import PerspectiveCamera from "./camera/PerspectiveCamera.js";
import CameraWindow from "./camera/CameraWindow.js";
import AmbientLight from "./light/AmbientLight.js";

export default class World {
    constructor() {
        this.objects = [];
        this.lights = [];
    }

    _buildScene(screenAspectRatio) {
        this._setupCamera(screenAspectRatio);
        this._setupLights();
        this._setupObjects();
    }

    _setupCamera(screenAspectRatio) {
        const width  = 100;
        const height = width / screenAspectRatio;
        const cameraWindow = new CameraWindow(width, height);

        const cameraEye = new Point3D(0, 40, 90);
 
        this.camera = new PerspectiveCamera(cameraEye, cameraWindow);
    }

    _setupLights() {
        const ambientLight = new AmbientLight(Color.white(), 0.2);
        this._addLight(ambientLight);

        const directionalLight = new DirectionalLight(
            new Vec3D(1, -0.5, 0), 
            Color.white(),
        );
        this._addLight(directionalLight);
    }

    _setupObjects() {
        this._addTorus(12, 2.5, Color.rgb(0.2, 0.7, 0.6), torus => {
            torus.transformation
                .translate(0, 2.5, 0)
        })
        this._addTorus(10, 2.5, Color.rgb(0.88, 0.95, 0.26), torus => {
            torus.transformation
                .translate(0, 7, 0)
        })
        this._addTorus(8, 2.5, Color.rgb(0.88, 0.0, 0.26), torus => {
            torus.transformation
                .translate(0, 11.5, 0)
        })
        this._addTorus(6, 2.5, Color.rgb(0.0, 0.0, 0.26), torus => {
            torus.transformation
                .translate(0, 16, 0)
        })
        this._addTorus(4, 2.5, Color.rgb(0.88, 0.95, 0.0), torus => {
            torus.transformation
                .translate(0, 20.5, 0)
        })

        const floor = new Plane2D(
            new Point3D(0,0,0), 
            new Vec3D(0,1,0)
        );
        floor.color1 = Color.black();
        floor.color2 = Color.gray(0.5);

        this._addObject(floor);
    }

    _addTorus(thorRadius, tubeRadius, color, tranformationCallback) {
        const torus = new Torus(thorRadius, tubeRadius, color);
        tranformationCallback(torus);

        this._addObject(torus);
    }

    _addLight(light) {
        this.lights.push(light);
    }

    _addObject(object) {
        this.objects.push(object);
    }
}