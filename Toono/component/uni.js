import * as THREE from 'three';

const uni = () => {
    const geometry = new THREE.CylinderGeometry( 0.3, 0.15, 14, 32 ); 
    const material = new THREE.MeshBasicMaterial( {color: 0xF97300} ); 
    const unii = new THREE.Mesh( geometry, material );
    // unii.rotateZ(rad1);
    // unii.rotateZ(rad1);
    // unii.rotateY(rad1)
    return unii;
}

export {uni}