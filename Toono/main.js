import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xFFC470); 
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const keyboard = {};
document.addEventListener('keydown', event => {
    keyboard[event.key] = true;
});
document.addEventListener('keyup', event => {
    keyboard[event.key] = false;
});
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

const size = 100;
const divisions = 100;
const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );

camera.position.z = 5;
camera.position.y = 3;
camera.position.x = 0;





const shape = new THREE.Shape();
shape.moveTo(-1.5, 2.5);
shape.bezierCurveTo(-1.5, 2.5, 1.5, 2, 2.5, 0.5);
shape.bezierCurveTo(0.25, 1.5, 0.25, 2, -1.5, 2.2);

const extrudeSettings = {
  depth: 0.5,
  bevelEnabled: false
};

const material = new THREE.MeshBasicMaterial({ color: 0xDD5746 });
const extrudedObjects = [];
const positions = [
    { position: new THREE.Vector3(0, 1, 0), rotation: 0 },
    { position: new THREE.Vector3(-8, 1, 0), rotation: Math.PI },
    { position: new THREE.Vector3(-4.5, 1, -5), rotation: Math.PI / 2 },
    { position: new THREE.Vector3(-4.5, 1, 5), rotation: -Math.PI / 2 },
    { position: new THREE.Vector3(-1, 1, 3), rotation: -Math.PI / 4 },
    { position: new THREE.Vector3(-1, 1, -3), rotation: Math.PI / 3 },
    { position: new THREE.Vector3(-6.5, 1, -3), rotation: 310 },
    { position: new THREE.Vector3(-7.5, 1, 2.5), rotation: 180 }
];
positions.forEach(pos => {
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const extrudedObject = new THREE.Mesh(geometry, material);
    extrudedObject.position.copy(pos.position);
    extrudedObject.rotateY(pos.rotation);
    extrudedObjects.push(extrudedObject);
});
const group = new THREE.Group();
extrudedObjects.forEach(obj => group.add(obj));
scene.add(group);




// Create outer and inner shapes for the toono
const toonoOuterShape = new THREE.Shape();
toonoOuterShape.moveTo(4.3, 0);
toonoOuterShape.absarc(0, 0, 4.3, 0, Math.PI * 2, false);

const toonoInnerShape = new THREE.Path();
toonoInnerShape.moveTo(3.2, 0);
toonoInnerShape.absarc(0, 0, 3.2, 0, Math.PI * 2, true); // Counter-clockwise
toonoOuterShape.holes.push(toonoInnerShape);

const extrudeSettings2 = {
    steps: 1,
    depth: 0.5,
    bevelEnabled: false
};

const toonoGeometry = new THREE.ExtrudeGeometry(toonoOuterShape, extrudeSettings2);
const toonoMaterial = new THREE.MeshBasicMaterial({ color: 0xE58A01, side: THREE.DoubleSide });

// Create the toono mesh
const toonoMesh = new THREE.Mesh(toonoGeometry, toonoMaterial);
toonoMesh.rotation.x = Math.PI / 2; // Rotate it to be perpendicular to the ger
toonoMesh.position.y = 1.5; // Position it at the top of the ger
toonoMesh.position.x = -4; // Position it at the top of the ger
scene.add(toonoMesh);





function animate() {
    requestAnimationFrame(animate);
    if (keyboard['ArrowUp']) {
        camera.position.z -= 0.1;
    }
    if (keyboard['ArrowDown']) {
        camera.position.z += 0.1;
    }
    if (keyboard['ArrowLeft']) {
        camera.position.x -= 0.1;
    }
    if (keyboard['ArrowRight']) {
        camera.position.x += 0.1;
    }
    

    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

animate();