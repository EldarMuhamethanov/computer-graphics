import * as THREE from './libs/three.module.js'
import { OrbitControls } from './src/OrbitControls.mjs'
import { SpaceScene } from './src/SpaceScene.js'

function onWindowResize (camera, renderer) {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

window.onload = () => {
  const canvasWidth = window.innerWidth
  const canvasHeight = window.innerHeight
  const canvas = document.getElementById('canvas')

  canvas.setAttribute('width', `${canvasWidth}`)
  canvas.setAttribute('height', `${canvasHeight}`)

  const renderer = new THREE.WebGLRenderer({ canvas })
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  const spaceScene = new SpaceScene()

  const camera = new THREE.PerspectiveCamera(75, canvasWidth / canvasHeight, 0.1, 50000)
  camera.position.set(0, 0, 5000)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 0, 0)
  controls.maxDistance = 15000
  controls.minDistance = 600

  function animate () {
    requestAnimationFrame(animate)

    controls.update()
    spaceScene.updateSceneAfterFrame()
    renderer.render(spaceScene.scene, camera)
  }

  window.addEventListener('resize', () => onWindowResize(camera, renderer))

  controls.update()
  renderer.render(spaceScene.scene, camera)
  animate()
}