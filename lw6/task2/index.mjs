import * as THREE from './libs/three.module.js'
import { OrbitControls } from './src/OrbitControls.mjs'

const CANVAS_WIDTH = 1024
const CANVAS_HEIGHT = 768

const PLANE_WIDTH = 1366
const PLANE_HEIGHT = 768

window.onload = () => {
    const canvas = document.getElementById('canvas')

    canvas.setAttribute('width', `${CANVAS_WIDTH}`)
    canvas.setAttribute('height', `${CANVAS_HEIGHT}`)

    const renderer = new THREE.WebGLRenderer({ canvas })

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 5000)

    camera.position.set(0, 0, 900)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(0, 0, 0)
    controls.maxDistance = 15000
    controls.minDistance = 600

    const convertRgb = value => value / 256

    const uniforms = {
        resolution: {
            type: 'v2',
            value: new THREE.Vector2(PLANE_WIDTH, PLANE_HEIGHT),
        },
        smileColor: {
            type: 'v4',
            value: new THREE.Vector4(convertRgb(235.0), convertRgb(243.0), convertRgb(58.0), 1.0),
        },
    }

    const vertexShader = document.getElementById('vertShader').innerHTML
    const fragmentShader = document.getElementById('fragShader').innerHTML

    const geometry = new THREE.PlaneGeometry( PLANE_WIDTH, PLANE_HEIGHT, 300, 300 )
    const material = new THREE.ShaderMaterial({ 
        vertexShader,
        fragmentShader,
        uniforms,
        side: THREE.DoubleSide,
    })
    const cube = new THREE.Mesh(geometry, material)

    scene.add(cube)

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