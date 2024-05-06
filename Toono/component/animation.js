import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFC470); // corrected line
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.PointLight(0xffffff, 200);
light.position.set(2, 2, 2);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);


const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

const size = 100;
const divisions = 100;
const gridHelper = new THREE.GridHelper( size, divisions );
gridHelper.rotateX(Math.PI/2)
scene.add( gridHelper );



const keyboard = {};
document.addEventListener("keydown", (event) => {
  keyboard[event.key] = true;
});
document.addEventListener("keyup", (event) => {
  keyboard[event.key] = false;
});


  var vx,
  vy,
  alp = 0,
  urt = 0,
  ondor = 0,
  d = 2;

  document.onkeydown = function (evt) {
  switch (evt.keyCode) {
      case 37: // left arrow key
          alp -= 0.05;
          break;
      case 39: // right arrow key
          alp += 0.05;
          break;
      case 38: // up arrow key
          camera.position.x += d * Math.sin(alp);
          camera.position.y += d * Math.cos(alp);
          break;
      case 40: // down arrow key
          camera.position.x -= d * Math.sin(alp);
          camera.position.y -= d * Math.cos(alp);
          break;
      case 87: // W key
          camera.position.x += d * Math.sin(alp);
          camera.position.y += d * Math.cos(alp);
          camera.position.z += 5;
          break;
      case 83: // S key
          camera.position.x -= d * Math.sin(alp);
          camera.position.y -= d * Math.cos(alp);
          camera.position.z -= 5;
          break;
  }

  vx = camera.position.x + d * Math.sin(alp);
  vy = camera.position.y + d * Math.cos(alp);
  camera.lookAt(new THREE.Vector3(vx, vy, camera.position.z - 1));
  };

camera.lookAt(scene.position);
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

camera.position.set(10, 0, 5);
camera.lookAt(new THREE.Vector3(10, 5, 5));
camera.up = new THREE.Vector3(0, 0, 1);

animate();

export { animate, scene };
