import * as THREE from 'three';

// Define BaganaShape and add holes
const BaganaShape = new THREE.Shape();
BaganaShape.moveTo(-3.8, 9);
BaganaShape.lineTo(-2.24, 8.8);
BaganaShape.lineTo(-0.1, 8.6);
BaganaShape.lineTo(2.08, 8.6);
BaganaShape.lineTo(3.88, 9);
BaganaShape.lineTo(3.96, 8.3);
BaganaShape.lineTo(3.18, 8.04);
BaganaShape.lineTo(3.22, 7.2);
BaganaShape.lineTo(3.14, 7);
BaganaShape.lineTo(2.98, 5.8);
BaganaShape.lineTo(2.6, 5.4);
BaganaShape.lineTo(2.8, 5);
BaganaShape.lineTo(2.4, 4.8);
BaganaShape.lineTo(2.6, 4.2);
BaganaShape.lineTo(2.4, 3.8);
BaganaShape.lineTo(2.08, 3);
BaganaShape.lineTo(1.8, 2.4);
BaganaShape.lineTo(1.6, 1.4);
BaganaShape.lineTo(0.4, 0.48);
BaganaShape.lineTo(-0.6, 0.38);
BaganaShape.lineTo(-2.01, 1.4);
BaganaShape.lineTo(-1.88, 2.4);
BaganaShape.lineTo(-2.6, 3.8);
BaganaShape.lineTo(-2.6, 4.4);
BaganaShape.lineTo(-2.4, 4.8);
BaganaShape.lineTo(-2.8, 5);
BaganaShape.lineTo(-2.8, 5.4);
BaganaShape.lineTo(-2.66, 5.4);
BaganaShape.lineTo(-2.94, 6.04);
BaganaShape.lineTo(-3, 6.4);
BaganaShape.lineTo(-2.96, 6.8);
BaganaShape.lineTo(-3.16, 7.2);
BaganaShape.lineTo(-2.98, 8.18);
BaganaShape.lineTo(-3.8, 8.2);




// Define the points for the first hole
const points1 = [
    new THREE.Vector2(-0.16, 1.7),
    new THREE.Vector2(-0.06, 3.9),
    new THREE.Vector2(-0.6, 3.9),
    new THREE.Vector2(-0.64, 3.4),
    new THREE.Vector2(-0.58, 3.03),
    new THREE.Vector2(-0.4, 2.7),
    new THREE.Vector2(-0.5, 2.5),
    new THREE.Vector2(-0.57, 2.2)
];

// Scale factor for the first hole
const scaleFactor1 = 2;
const scaledPoints1 = points1.map(point => new THREE.Vector2(point.x * scaleFactor1, point.y * scaleFactor1));
const holePath1 = new THREE.Path();
holePath1.setFromPoints(scaledPoints1);
BaganaShape.holes.push(holePath1);

// Define the points for the second hole
const points2 = [
    new THREE.Vector2(0.4, 3.9),
    new THREE.Vector2(1, 3.9),
    new THREE.Vector2(0.9, 3.2),
    new THREE.Vector2(0.7, 2.8),
    new THREE.Vector2(0.6, 2.7),
    new THREE.Vector2(0.8, 2.3),
    new THREE.Vector2(0.69, 1.9),
    new THREE.Vector2(0.4, 1.7)
];


const scaleFactor2 = 2;
const scaledPoints2 = points2.map(point => new THREE.Vector2(point.x * scaleFactor2, point.y * scaleFactor2));
const holePath2 = new THREE.Path();
holePath2.setFromPoints(scaledPoints2);
BaganaShape.holes.push(holePath2);



const depth = 1;
const extrudeSettings = {
    depth: depth,
    bevelEnabled: false
};

const geometry = new THREE.ExtrudeGeometry(BaganaShape, extrudeSettings);
const material = new THREE.MeshBasicMaterial({ color: 0xF97300 });
const meshBagana = new THREE.Mesh(geometry, material);
meshBagana.scale.set(0.5, 0.5, 0.5); 
meshBagana.position.y = 5;
meshBagana.position.x = -0.25;
meshBagana.rotateY(Math.PI/2);



const geometryhol = new THREE.BoxGeometry(0.5,1,13);
const materialhol = new THREE.MeshBasicMaterial({ color: 0xF97300 }); 
const baganaHul = new THREE.Mesh(geometryhol, materialhol);
baganaHul.position.x = 0;
baganaHul.rotateX(Math.PI/2);



const Bagana = new THREE.Group();
Bagana.add(meshBagana);
Bagana.add(baganaHul);

export { Bagana };