import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import heart from './heart/scene.gltf';

const scene = new THREE.Scene();

const light = new THREE.AmbientLight(0x404040);

scene.add(light);

const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);

const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00
});

const renderer = new THREE.WebGLRenderer();

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
