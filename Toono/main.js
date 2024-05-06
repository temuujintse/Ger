import * as THREE from "three";
import { animate, scene } from "../../components/animation";
import {toono} from '../../components/toono'

const t = toono();
scene.add(t);
animate();