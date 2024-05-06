import * as THREE from "three";

const rings = (outerR, innerR) => {
    const outerColumnOuterShape = new THREE.Shape();
    outerColumnOuterShape.moveTo(outerR, 0);
    outerColumnOuterShape.absarc(0, 0, outerR, 0, Math.PI * 2, false);

    const outerColumnInnerShape = new THREE.Path();
    outerColumnInnerShape.moveTo(innerR, 0);
    outerColumnInnerShape.absarc(0, 0, innerR, 0, Math.PI * 2, true); // Counter-clockwise
    outerColumnOuterShape.holes.push(outerColumnInnerShape);

    const extrudeSettings2 = {
        steps: 1,
        depth: 0.5,
        bevelEnabled: false
    };

    const outerColumnGeometry = new THREE.ExtrudeGeometry(outerColumnOuterShape, extrudeSettings2);
    const outerColumnMaterial = new THREE.MeshBasicMaterial({ color: 0xE58A01, side: THREE.DoubleSide });

    // Create the outerColumn mesh
    const outerColumnMesh = new THREE.Mesh(outerColumnGeometry, outerColumnMaterial);
    outerColumnMesh.rotation.x = Math.PI / 2; // Rotate it to be perpendicular to the ger
    outerColumnMesh.position.y = 1.5; // Position it at the top of the ger
    outerColumnMesh.position.x = -4; // Position it at the top of the ger

    outerColumnMesh.rotateX(Math.PI/2);
    
    return outerColumnMesh;
}

export const toono = () => {

    const combined = new THREE.Group();

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
        { position: new THREE.Vector3(4, 0, 5), rotation: 0 },
        { position: new THREE.Vector3(4*Math.cos(Math.PI/4), Math.sqrt(16-4*Math.cos(Math.PI/4)), 5), rotation: Math.PI / 4 },
        { position: new THREE.Vector3(0, 4, 5), rotation: Math.PI/2 },
        { position: new THREE.Vector3(-4*Math.cos(Math.PI/4), Math.sqrt(16-4*Math.cos(Math.PI/4)), 5), rotation: 3*Math.PI / 4 },
        { position: new THREE.Vector3(-4, 0, 5), rotation: Math.PI},
        { position: new THREE.Vector3(-4*Math.cos(Math.PI/4), -Math.sqrt(16-4*Math.cos(Math.PI/4)), 5), rotation: -3*Math.PI / 4},
        { position: new THREE.Vector3(0, -4, 5), rotation: -Math.PI / 2 },
        { position: new THREE.Vector3(4*Math.cos(Math.PI/4), -Math.sqrt(16-4*Math.cos(Math.PI/4)), 5), rotation: -Math.PI / 4 }
        
    ];

    positions.forEach(pos => {
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        geometry.rotateX(Math.PI/2);
        const extrudedObject = new THREE.Mesh(geometry, material);
        extrudedObject.position.copy(pos.position);
        extrudedObject.rotation.z = pos.rotation;
        extrudedObjects.push(extrudedObject);
    });
    const group = new THREE.Group();
    extrudedObjects.forEach(obj => group.add(obj));
    combined.add(group);

    const innerRing = rings(3.5,2.5);
    innerRing.position.set(0,0,7.5);

    const outerRing = rings(8,6);
    outerRing.position.set(0,0,6);

    const innerHole = new THREE.Group();

    const rigth = new THREE.BoxGeometry(0.5,5,0.5);
    const meshRigth = new THREE.Mesh(rigth, new THREE.MeshLambertMaterial({color: 0xff0000}));
    innerHole.add(meshRigth);

    const left = meshRigth.clone();
    left.rotateZ(Math.PI/2);
    innerHole.add(left);

    innerHole.position.set(0,0,7.25);


    combined.add(innerRing);
    combined.add(outerRing);
    combined.add(innerHole);
   
    return combined;
}
