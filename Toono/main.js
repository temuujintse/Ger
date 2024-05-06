import * as THREE from "three";
import { animate, scene } from "./component/animation.js";
import {toono} from './component/toono.js'
import './style.css'

import { Bagana } from './component/bagana.js';

const bagana1 = Bagana.clone();
const bagana2 = Bagana.clone();

bagana1.position.set(-5, 0, 0); 
bagana2.position.set(5, 0, 0);
scene.add(bagana1, bagana2);

const t = toono();
scene.add(t);
animate();