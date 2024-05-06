import * as THREE from "three";
import {toono} from './component/toono.js'
import {hana} from './component/hana.js'
import {haalga2} from './component/haalga.js'
import {haalga} from './component/haalga.js'
import {shal} from './component/shal.js'
import './style.css'
import { Bagana } from './component/bagana.js';


const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0f5f8b); // corrected line
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.PointLight(0xffffff, 200);
light.position.set(2, 2, 2);
scene.add(light);

const earth = new THREE.PlaneGeometry(100, 100);

const earthh = new THREE.Mesh(earth, new THREE.MeshPhongMaterial({color: 0x30ff20, transparent: true, opacity: 0.8}));

scene.add(earthh);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);


const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

const size = 100;
const divisions = 100;
const gridHelper = new THREE.GridHelper( size, divisions );
gridHelper.rotateX(Math.PI/2)
scene.add( gridHelper );

// --> start components

const mergeBT = new THREE.Group();

const bagana1 = Bagana.clone();
const bagana2 = Bagana.clone();

bagana1.position.set(-7, 0, -3.8); 
bagana2.position.set(7, 0, -3.8);
bagana1.rotateX(Math.PI/2);
bagana2.rotateX(Math.PI/2);

const t = toono();
mergeBT.add(t);

mergeBT.add(bagana1, bagana2);
mergeBT.scale.set(0.3,0.3,0.25);
mergeBT.position.set(0,0,2.5);
scene.add(mergeBT);



const hn = hana;
hn.rotateZ(Math.PI);
scene.add(hn);

// Гэрийн хэсгүүд
scene.add(shal(5));
// scene.add(hana(20, Math.PI / 6));
const haalgaGroup = new THREE.Group();
const h1 = haalga(2);
const h2 = haalga2();
h2.position.set(2.5, 0, 0);

haalgaGroup.add(h1);
haalgaGroup.add(h2);
haalgaGroup.position.set(-2.5, 0, 0);
haalgaGroup.scale.set(0.33, 0.3, 0.2);
h1.scale.set(0.35, 0.3, 0.2);
h1.position.set(-0.05, -5, 0);
haalgaGroup.position.set(-0.9, -5, 0);
scene.add(haalgaGroup, h1);

// <-- end components

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

  let doorOnMove = false;
  let isOpening = true;

  document.onkeydown = function (eve) {
    console.log(eve.keyCode);
    switch (eve.keyCode) {
      case 37:
        alp -= 0.1;
        break;
      case 39:
        alp += 0.1;
        break;
      case 38:
        camera.position.x += d * Math.sin(alp);
        camera.position.y += d * Math.cos(alp);
        break;
      case 40:
        camera.position.x -= d * Math.sin(alp);
        camera.position.y -= d * Math.cos(alp);
        break;
      case 83:
        camera.position.z -= 0.2;
        break;
      case 87:
        camera.position.z += 0.2;
        break;
      case 32:
        doorOnMove = !doorOnMove;
    }
  
    vx = camera.position.x + d * Math.sin(alp);
    vy = camera.position.y + d * Math.cos(alp);
    camera.lookAt(new THREE.Vector3(vx, vy, camera.position.z));
  };

camera.lookAt(scene.position);
function animate() {
    if (doorOnMove) {
        if (isOpening) {
          haalgaGroup.rotation.z -= 0.01;
          if (haalgaGroup.rotation.z <= -Math.PI / 2) {
            doorOnMove = !doorOnMove;
            isOpening = !isOpening;
          }
        } else {
          haalgaGroup.rotation.z += 0.01;
          if (haalgaGroup.rotation.z > 0) {
            doorOnMove = !doorOnMove;
            isOpening = !isOpening;
          }
        }
    }
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

camera.position.set(0, -20, 5);
camera.lookAt(new THREE.Vector3(0, 0, 0));
camera.up = new THREE.Vector3(0, 0, 1);

animate();