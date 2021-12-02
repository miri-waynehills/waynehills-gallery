import * as THREE from 'three'

const floorMaterial = new THREE.MeshStandardMaterial({
    color: '#FFF1D0'
})
const wallMaterial = new THREE.MeshStandardMaterial({
    transparent: true,
    // color: '#280003',
    opacity: 0.0,
})
wallMaterial.castShadow = false
wallMaterial.receiveShadow = false

const mainFloor = new THREE.Mesh(new THREE.PlaneGeometry(1,1),floorMaterial)
mainFloor.rotation.set(-Math.PI*0.5, 0, 0)
mainFloor.position.set(-11.5,-1,-1)
mainFloor.scale.set(38,39)

const mainWall1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),wallMaterial)
mainWall1.position.set(-30,0,0)
mainWall1.scale.set(1,1,39)

const mainWall2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),wallMaterial)
mainWall2.position.set(6,0,0)
mainWall2.scale.set(1,1,39)

const mainWall3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),wallMaterial)
mainWall3.position.set(-12,0,-20)
mainWall3.scale.set(38,1,1)

const mainWall4 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),wallMaterial)
mainWall4.position.set(-12,0,15)
mainWall4.scale.set(38,1,1)

const objectAdd=(scene, gui)=>{
    scene.add(mainFloor, mainWall1, mainWall2, mainWall3, mainWall4)

    const mainFloorFolder = gui.addFolder('mainFloor')
    mainFloorFolder.close()
    mainFloorFolder.add(mainFloor.scale, 'x', -1000, 1000, 1).name('scaleX')
    mainFloorFolder.add(mainFloor.scale, 'y', -1000, 1000, 1).name('scaleY')
    mainFloorFolder.add(mainFloor.scale, 'z', -1000, 1000, 1).name('scaleZ')
    mainFloorFolder.add(mainFloor.position, 'x', -100, 100, 1).name('positionX')
    mainFloorFolder.add(mainFloor.position, 'y', -100, 100, 1).name('positionY')
    mainFloorFolder.add(mainFloor.position, 'z', -100, 100, 1).name('positionZ')

    const mainWall1Folder = gui.addFolder('mainWall1')
    mainWall1Folder.close()
    mainWall1Folder.add(mainWall1.scale, 'x', -1000, 1000, 1).name('scaleX')
    mainWall1Folder.add(mainWall1.scale, 'y', -1000, 1000, 1).name('scaleY')
    mainWall1Folder.add(mainWall1.scale, 'z', -1000, 1000, 1).name('scaleZ')
    mainWall1Folder.add(mainWall1.position, 'x', -100, 100, 1).name('positionX')
    mainWall1Folder.add(mainWall1.position, 'y', -100, 100, 1).name('positionY')
    mainWall1Folder.add(mainWall1.position, 'z', -100, 100, 1).name('positionZ')

    const mainWall2Folder = gui.addFolder('mainWall2')
    mainWall2Folder.close()
    mainWall2Folder.add(mainWall2.scale, 'x', -1000, 1000, 1).name('scaleX')
    mainWall2Folder.add(mainWall2.scale, 'y', -1000, 1000, 1).name('scaleY')
    mainWall2Folder.add(mainWall2.scale, 'z', -1000, 1000, 1).name('scaleZ')
    mainWall2Folder.add(mainWall2.position, 'x', -100, 100, 1).name('positionX')
    mainWall2Folder.add(mainWall2.position, 'y', -100, 100, 1).name('positionY')
    mainWall2Folder.add(mainWall2.position, 'z', -100, 100, 1).name('positionZ')

    const mainWall3Folder = gui.addFolder('mainWall3')
    mainWall3Folder.close()
    mainWall3Folder.add(mainWall3.scale, 'x', -1000, 1000, 1).name('scaleX')
    mainWall3Folder.add(mainWall3.scale, 'y', -1000, 1000, 1).name('scaleY')
    mainWall3Folder.add(mainWall3.scale, 'z', -1000, 1000, 1).name('scaleZ')
    mainWall3Folder.add(mainWall3.position, 'x', -100, 100, 1).name('positionX')
    mainWall3Folder.add(mainWall3.position, 'y', -100, 100, 1).name('positionY')
    mainWall3Folder.add(mainWall3.position, 'z', -100, 100, 1).name('positionZ')

    const mainWall4Folder = gui.addFolder('mainWall4')
    // mainWall4Folder.close()
    mainWall4Folder.add(mainWall4.scale, 'x', -1000, 1000, 1).name('scaleX')
    mainWall4Folder.add(mainWall4.scale, 'y', -1000, 1000, 1).name('scaleY')
    mainWall4Folder.add(mainWall4.scale, 'z', -1000, 1000, 1).name('scaleZ')
    mainWall4Folder.add(mainWall4.position, 'x', -100, 100, 1).name('positionX')
    mainWall4Folder.add(mainWall4.position, 'y', -100, 100, 1).name('positionY')
    mainWall4Folder.add(mainWall4.position, 'z', -100, 100, 1).name('positionZ')
}

const wallObjects = [mainWall1, mainWall2, mainWall3, mainWall4]
const floorObjects = [mainFloor]

export {objectAdd, wallObjects, floorObjects}