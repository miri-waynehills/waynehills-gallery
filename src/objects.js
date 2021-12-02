import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const updateAllMaterials = (scene) =>{
    scene.traverse((child) =>{
        if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial){
            child.material.needsUpdate = true
            child.castShadow = true
            child.receiveShadow = true
        }
    })
}

const fbxLoader = new FBXLoader()
const gltfLoader = new GLTFLoader()
let fbxURL = "/models/gallery/211124_03/export_cylindrical.fbx"; 
let gltfURL = "/models/gallery/211202_export_02/211202_export_02.gltf"; 
function loadMoldeledObjects(scene) {
    fbxLoader.load(fbxURL,(fbx) => {
        fbx.scale.set(0.01, 0.01, 0.01)
        fbx.position.set(10, -1, -3)
        scene.add(fbx)

        updateAllMaterials(scene)
        }
     ),
    gltfLoader.load(gltfURL,(gltf) =>{
        gltf.scene.position.set(10, -1, -3)
        scene.add(gltf.scene)
        updateAllMaterials(scene)
        }
     )
}

const content1 = document.getElementById('content-1');
content1.play();
const content1Texture = new THREE.VideoTexture(content1);
const content1Material =  new THREE.MeshBasicMaterial({map: content1Texture,toneMapped: false});
const screen1 = new THREE.PlaneGeometry(4,4);
const content1Screen = new THREE.Mesh(screen1, content1Material);
content1Screen.position.set(-16.1,2.1,-19.3)

const content2 = document.getElementById('content-2');
content2.play();
const content2Texture = new THREE.VideoTexture(content2);
const content2Material =  new THREE.MeshBasicMaterial({map: content2Texture,toneMapped: false});
const screen2 = new THREE.PlaneGeometry(2.3,3);
const content2Screen = new THREE.Mesh(screen2, content2Material);
content2Screen.rotation.set(0, Math.PI, 0)
content2Screen.position.set(-27.5,2,9.2)

const content3 = document.getElementById('content-3');
content3.play();
const content3Texture = new THREE.VideoTexture(content3);
const content3Material =  new THREE.MeshBasicMaterial({map: content3Texture,toneMapped: false});
const screen3 = new THREE.PlaneGeometry(7,4);
const content3Screen = new THREE.Mesh(screen3, content3Material);
content3Screen.rotation.set(0, -Math.PI*0.5, 0)
content3Screen.position.set(-23.1,2.1,-5.1)

const content4 = document.getElementById('content-4');
content4.play();
const content4Texture = new THREE.VideoTexture(content4);
const content4Material =  new THREE.MeshBasicMaterial({map: content4Texture,toneMapped: false});
const screen4 = new THREE.PlaneGeometry(7,4);
const content4Screen = new THREE.Mesh(screen4, content4Material);
content4Screen.position.set(0.7,2.1,-19.3)

const content5 = document.getElementById('content-5');
content5.play();
const content5Texture = new THREE.VideoTexture(content5);
const content5Material =  new THREE.MeshBasicMaterial({map: content5Texture,toneMapped: false});
const screen5 = new THREE.PlaneGeometry(7,4);
const content5Screen = new THREE.Mesh(screen5, content5Material);
content5Screen.position.set(-19.17,2.15,9.9)

const content6 = document.getElementById('content-6');
content6.play();
const content6Texture = new THREE.VideoTexture(content6);
const content6Material =  new THREE.MeshBasicMaterial({map: content6Texture,toneMapped: false});
const screen6 = new THREE.PlaneGeometry(4,4);
const content6Screen = new THREE.Mesh(screen6, content6Material);
content6Screen.rotation.set(0, -Math.PI, 0)
content6Screen.position.set(-21.5,2.1,-10.8)

const content7 = document.getElementById('content-7');
content7.play();
const content7Texture = new THREE.VideoTexture(content7);
const content7Material =  new THREE.MeshBasicMaterial({map: content7Texture,toneMapped: false});
const screen7 = new THREE.PlaneGeometry(7,4);
const content7Screen = new THREE.Mesh(screen7, content7Material);
content7Screen.rotation.set(0, Math.PI, 0)
content7Screen.position.set(0.7,2.1,18.1)


const textureLoader = new THREE.TextureLoader()

const imageContent1Texture = textureLoader.load('/models/gallery/211202_export_02/mars.png')
const imageContent1Geometry = new THREE.PlaneGeometry(7,4)
const imageContent1Material = new THREE.MeshBasicMaterial({
    map: imageContent1Texture,
    transparent: true
})
const imageContent1 = new THREE.Mesh(imageContent1Geometry, imageContent1Material);
imageContent1.rotation.set(0, Math.PI*0.5, 0)
imageContent1.position.set(-29.3,2.1,-15)

const sceneAdd = (scene)=>{
    scene.add(content1Screen, content2Screen, content3Screen, content4Screen, content5Screen, content6Screen, content7Screen, imageContent1)
}

export {loadMoldeledObjects, sceneAdd}