import *as THREE  from 'three';
const bvrees = () => {
    
    // start deewer
    const deewer = new THREE.Group();

    const bvr = new THREE.BoxGeometry(1,0.025,14/4.5);
    const radius = 5.1;

    for (let i = 0; i < 43; i++) {

        const angle = (i / 43) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const cotton = new THREE.Mesh(bvr, new THREE.MeshLambertMaterial({color: 0xffffff}));

        cotton.rotateZ(0 - Math.PI/2 + angle);
        cotton.rotateX(Math.PI / 3)
        cotton.position.set(x/1.35,y/1.35,3.2);
        deewer.add(cotton);
  
    }
    deewer.position.set(0,0,0.1);

    // end deewer

    // start tuurga
    const tuurga = new THREE.Group();

    const pi = Math.PI;
    const tuur = new THREE.CylinderGeometry(radius, radius, 2.6, 60, 60, true, 0 , Math);
    const cottonTuurga = new THREE.Mesh(tuur, new THREE.MeshLambertMaterial({color:0xffffff}));
    cottonTuurga.position.set(0,0,10);
    cottonTuurga.rotateX(Math.PI/2);
    // cottonTuurga.position.set(0,0,1.25);

    // end tuurga

    const combine = new THREE.Group();
    combine.add(deewer);
    combine.add(cottonTuurga);

    return combine;
}

export {bvrees};