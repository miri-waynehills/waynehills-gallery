import './style.css'
import * as THREE from 'three'
import * as dat from 'lil-gui'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
import * as environment from './environment'
import * as objects from './objects'
import * as collision from './collision'

const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();
scene.background = new THREE.Color('#8b9dc3')

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 1.5, 0)
camera.rotation.set(0, Math.PI*0.5, 0)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.physicallyCorrectLights = true
renderer.outputEncoding = THREE.sRGBEncoding
renderer.toneMapping = THREE.NoToneMapping
renderer.toneMappingExposure = 2
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const clock = new THREE.Clock();
let controlCamera = new PointerLockControls(camera, renderer.domElement);
let button = document.querySelector('#button')
let speed = 0.3;
let keyboard = []

button.addEventListener('click', () => {
    controlCamera.lock()
})

addEventListener('keydown', (e)=> {
    keyboard[e.key] = true;
})
addEventListener('keyup', (e)=> {
    keyboard[e.key] = false;
})

function processKeyboard() {
    if(keyboard['w'] || keyboard['ArrowUp']) {
        controlCamera.moveForward(speed);
    }
    if(keyboard['s'] || keyboard['ArrowDown']) {
        controlCamera.moveForward(-speed);
    }
    if(keyboard['d'] || keyboard['ArrowRight']) {
        controlCamera.moveRight(speed);
    }
    if(keyboard['a'] || keyboard['ArrowLeft']) {
        controlCamera.moveRight(-speed);
    }
}

environment.base.map(x=>{scene.add(x)})
objects.loadMoldeledObjects(scene)
objects.sceneAdd(scene)
collision.objectAdd(scene)


const tick = () =>
{
    let cameraPosition = camera.position
    const rayOrigin = new THREE.Vector3(cameraPosition.x, 0, cameraPosition.z)
    const raycasterWall = new THREE.Raycaster()
    const rayDirectionWall = new THREE.Vector3(1,10,1)
    rayDirectionWall.normalize()
    raycasterWall.set(rayOrigin, rayDirectionWall)
    const castObject = collision.wallObjects
    const intersectWall = raycasterWall.intersectObjects(castObject)
    
    const raycasterFloor = new THREE.Raycaster()
    const rayDirectionFloor = new THREE.Vector3(1,-10,1)
    rayDirectionFloor.normalize()
    raycasterFloor.set(rayOrigin, rayDirectionFloor)
    const castFloor = collision.floorObjects
    const intersectFloor = raycasterFloor.intersectObjects(castFloor)

    for(const intersect of intersectWall){
        for(const intersect of intersectFloor) {
            if(intersect.uv.x < 0.5) {
                cameraPosition.x += 5
            }
            if(intersect.uv.x > 0.5) {
                cameraPosition.x -= 5
            }
            if(intersect.uv.y < 0.5) {
                cameraPosition.z -= 5
            }
            if(intersect.uv.y > 0.5) {
                cameraPosition.z += 5
            }
        }
    }

    const elapsedTime = clock.getElapsedTime()

    window.requestAnimationFrame(tick)
}
tick()

function drawScene() { 
    renderer.render(scene, camera);
    processKeyboard();
    requestAnimationFrame(drawScene);
}
drawScene();