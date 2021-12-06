import * as THREE from 'three'
import CANNON from 'cannon';

const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
const sunLight = new THREE.PointLight('#ffffff', 50)
sunLight.castShadow = true
sunLight.shadow.camera.far = 15
sunLight.shadow.mapSize.set(1024, 1024)
sunLight.shadow.normalBias = 0.05
sunLight.position.set(-12.3, 14.9, -0.9)

const pointLight1 = new THREE.PointLight('#ffffff', 1.2)
pointLight1.position.set(-7.7, 3.3, 13.1)
pointLight1.castShadow = true
pointLight1.shadow.normalBias = 0.05

const pointLight2 = new THREE.PointLight('#ffffff', 1.2)
pointLight2.position.set(-24.9, 3.3, 13.1)
pointLight2.castShadow = true
pointLight2.shadow.normalBias = 0.05

const pointLight3 = new THREE.PointLight('#ffffff', 1.2)
pointLight3.position.set(-24.9, 3.3, 2.1)
pointLight3.castShadow = true
pointLight3.shadow.normalBias = 0.05

const pointLight4 = new THREE.PointLight('#ffffff', 1.2)
pointLight4.position.set(-1.6, 3.3, 2.1)
pointLight4.castShadow = true
pointLight4.shadow.normalBias = 0.05

const pointLight5 = new THREE.PointLight('#ffffff', 1.2)
pointLight5.position.set(-1.6, 3.3, -13.9)
pointLight5.castShadow = true
pointLight5.shadow.normalBias = 0.05

const pointLight6 = new THREE.PointLight('#ffffff', 1.2)
pointLight6.position.set(-24.9, 3.3, -13.9)
pointLight6.castShadow = true
pointLight6.shadow.normalBias = 0.05

const hallLight1 = new THREE.PointLight('#ffffff', 1.2)
hallLight1.position.set(-12.3, 3.3, 5.5)
hallLight1.castShadow = true
hallLight1.shadow.normalBias = 0.05

const hallLight2 = new THREE.PointLight('#ffffff', 1.2)
hallLight2.position.set(-12.3, 3.3, -7.2)
hallLight2.castShadow = true
hallLight2.shadow.normalBias = 0.05

const base = [ambientLight, sunLight, pointLight1, pointLight2, pointLight3, pointLight4, pointLight5, pointLight6, hallLight1, hallLight2]

export { base }