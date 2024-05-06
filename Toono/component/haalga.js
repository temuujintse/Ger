import * as THREE from "three";

export const haalga = (height) => {
  const door = new THREE.Group();
  const mat = new THREE.MeshPhongMaterial({ color: "#a83400" });

  const side1 = new THREE.BoxGeometry(0.5, 0.5, 12);
  const side2 = new THREE.BoxGeometry(6, 0.5, 0.5);
  const mesh1 = new THREE.Mesh(side1, mat);
  const mesh2 = new THREE.Mesh(side1, mat);
  const mesh3 = new THREE.Mesh(side2, mat);
  const mesh4 = new THREE.Mesh(side2, mat);

  mesh1.position.set(3, 0, 6);
  mesh2.position.set(-3, 0, 6);
  mesh3.position.set(0, 0, 11.75);
  mesh4.position.set(0, 0, 0.25);

  door.add(mesh1);
  door.add(mesh2);
  door.add(mesh3);
  door.add(mesh4);

  // Нээгдэх хэсэг

  // door.add(group);

  return door;
};

export const haalga2 = () => {
  const mat = new THREE.MeshPhongMaterial({ color: "#a83400" });

  const group = new THREE.Group();
  const mat2 = new THREE.MeshPhongMaterial({ color: 0xbac4c8 });
  const geo = new THREE.BoxGeometry(6, 0.3, 11);
  const plane = new THREE.Mesh(geo, mat2);
  const s1 = new THREE.BoxGeometry(0.2, 0.2, 11.25);
  const s2 = new THREE.BoxGeometry(6.2, 0.2, 0.2);
  const m1 = new THREE.Mesh(s1, mat);
  const m2 = new THREE.Mesh(s1, mat);
  const m3 = new THREE.Mesh(s2, mat);
  const m4 = new THREE.Mesh(s2, mat);
  m1.position.set(3, 0, 5.75);
  m2.position.set(-3, 0, 5.75);
  m3.position.set(0, 0, 11.55);
  m4.position.set(0, 0, 0.25);

  group.add(m1, m2, m3, m4);

  plane.position.set(0, 0, 6);
  group.add(plane);

  return group;
};