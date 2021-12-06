import * as THREE from 'three'

const floorMaterial = new THREE.MeshStandardMaterial({
    color: '#FFF1D0'
})
const wallMaterial = new THREE.MeshStandardMaterial({
    transparent: true,
    color: '#280003',
    opacity: 0.0,
})
wallMaterial.castShadow = false
wallMaterial.receiveShadow = false

const mainFloor = new THREE.Mesh(new THREE.PlaneGeometry(1,1),floorMaterial)
mainFloor.rotation.set(-Math.PI*0.5, 0, 0)
mainFloor.position.set(-11.5,-1,-1)
mainFloor.scale.set(45,45)

const mainWall1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),wallMaterial)
mainWall1.position.set(-30,0,0)
mainWall1.scale.set(1,4,39)

const mainWall2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),wallMaterial)
mainWall2.position.set(6,0,0)
mainWall2.scale.set(1,4,39)

const mainWall3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),wallMaterial)
mainWall3.position.set(-12,0,-20)
mainWall3.scale.set(38,4,1)

const mainWall4 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),wallMaterial)
mainWall4.position.set(-12,0,15)
mainWall4.scale.set(38,4,1)

const objectAdd=(scene)=>{
    scene.add(mainFloor, mainWall1, mainWall2, mainWall3, mainWall4)
}

const wallObjects = [mainWall1, mainWall2, mainWall3, mainWall4]
const floorObjects = [mainFloor]

export {objectAdd, wallObjects, floorObjects}