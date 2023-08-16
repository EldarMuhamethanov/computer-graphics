import * as THREE from './libs/three.module.js'
import { OrbitControls } from './src/OrbitControls.mjs'

const CANVAS_WIDTH = 1024
const CANVAS_HEIGHT = 768

window.onload = () => {
    const canvas = document.getElementById('canvas')

    canvas.setAttribute('width', `${CANVAS_WIDTH}`)
    canvas.setAttribute('height', `${CANVAS_HEIGHT}`)

    const renderer = new THREE.WebGLRenderer({ canvas })

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 5000)

    camera.position.set(0, 0, 3)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(0, 0, 0)

    const vertexShader = document.getElementById('vertShader').innerHTML
    const fragmentShader = document.getElementById('fragShader').innerHTML

    const generateVertices = (startX, endX, step) => {
        const stepCount = Math.ceil((endX - startX) / step)
        const vertices = []
        for (let i = 0; i <= stepCount; i++) {
            vertices.push([startX + i * step, 0, 0])
        }
        return new Float32Array(vertices.flat())
    }

    const geometry = new THREE.BufferGeometry()
    const vertices = generateVertices(0, 2 * Math.PI, Math.PI / 1000)

    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
    })
    const line = new THREE.Line(geometry, material)

    scene.add(line)

    function animate () {
        requestAnimationFrame(animate)

        controls.update()
        renderer.render(scene, camera)
    }

    // window.addEventListener('resize', () => onWindowResize(camera, renderer))
    controls.update()
    renderer.render(scene, camera)
    animate()
}