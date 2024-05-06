import * as THREE from "three";
import {uni} from './uni';

const box = (x, y, z, col, position) => {
    const geometry = new THREE.BoxGeometry(x, y, z);
    const material = new THREE.MeshBasicMaterial({
      color: col,
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.copy(position);
    return cube;
  };
  
  function h(x, y, z, col) {
    const h1Pos = new THREE.Vector3(x, y, z);
    const h1Box = box(0.1, 0.025, 0.5, col, h1Pos);
    return h1Box;
  }
  
  function baiguulagch() {
    const group = new THREE.Group();
  
    const h1 = h(0.15, 0, 0, rowColor);
    h1.rotation.y = 0.85;
    group.add(h1);
  
    const h2 = h(-0.15, 0, 0, rowColor);
    h2.rotation.y = -0.85;
    group.add(h2);
  
    const h3 = h(0.15, 0, 0.27, rowColor);
    h3.rotation.y = -0.85;
    group.add(h3);
  
    const h4 = h(-0.15, 0, 0.27, rowColor);
    h4.rotation.y = 0.85;
    group.add(h4);
  
    
  
    return group;
  }


const createCircleRow = (numCubes, radius, rowColor) => {
    const row = new THREE.Group();
    for (let i = 0; i < numCubes - 3; i++) {
        const angle = (i / numCubes) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const rotation = Math.atan2(y, x);
        const instance = baiguulagch();
        instance.position.set(x, y, 0);
        instance.rotation.z = rotation - Math.PI / 2;
        row.add(instance);
    }

    for (let i = 0; i < numCubes - 3; i++) {
        const angle = (i / numCubes) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const rotation = Math.atan2(y, x);
        const instance = baiguulagch();
        instance.position.set(x, y, 0.65);
        instance.rotation.z = rotation - Math.PI / 2;
        row.add(instance);
    }

    for (let i = 0; i < numCubes - 3; i++) {
        const angle = (i / numCubes) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const rotation = Math.atan2(y, x);

        const instance = baiguulagch();
        instance.position.set(x, y, 1.3);
        instance.rotation.z = rotation - Math.PI / 2;
        row.add(instance);
    }

    let sign = 1;

    for (let i = 0; i < numCubes - 3; i++) {
        const angle = (i / numCubes) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const rotation = Math.atan2(y, x);

        const instance = baiguulagch();
        instance.position.set(x, y, 1.95);
        instance.rotation.z = rotation - Math.PI / 2;
        row.add(instance);

    const u = uni();
    u.scale.set(0.2, 0.21, 0.2);
    u.rotateZ(0 - Math.PI/2 + angle);
    u.rotateX(-Math.PI / 5.5)
    u.position.set(x/1.35,y/1.35,3.2);
    row.add(u);
    }
    

    return row;
};


const numCubes = 43;
const radius = 5;
const rowColor = 0x80471c;

const hana = createCircleRow(numCubes, radius, rowColor);
hana.rotation.z = -4.43;

export {hana};