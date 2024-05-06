import * as THREE from "three";
export const shal = (r) => {
  const geo = new THREE.CylinderGeometry(r, r, 0.3, 100);
  const mat = new THREE.MeshPhongMaterial({ color: "#a83400" });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = Math.PI / 2;
  return mesh;
};