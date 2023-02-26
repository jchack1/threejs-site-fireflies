//lots of the code based on bubbles in this example: https://threejs.org/examples/#webgl_effects_anaglyph
//some help with lighting etc from this tutorial https://www.youtube.com/watch?v=Q7AOvWpIVHU

import * as THREE from "three";
import "/styles.css";
let camera, scene, renderer;

const spheres = [];

init();
animate();

function init() {
  //set up camera
  //args: (1)field of view, (2)aspect ratio (usually the window), (3 + 4)view frustrum(what's visible relative to the camera )
  camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 3;
  camera.focalLength = 30;

  //set up scene and background

  scene = new THREE.Scene();

  // const forestTexture = new THREE.TextureLoader().load("forestDusk.jpg");

  // scene.background = forestTexture;

  //begin making spheres

  const geometry = new THREE.SphereGeometry(0.01, 30, 6);
  const material = new THREE.MeshStandardMaterial({color: 0xb3f266});

  //setting position of each sphere
  for (let i = 0; i < 300; i++) {
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.x = Math.random() * 10 - 5;
    mesh.position.y = Math.random();
    mesh.position.z = Math.random() * 10 - 5;

    mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 2 + 1;

    scene.add(mesh);

    spheres.push(mesh);
  }

  //adding light
  //point light may not be needed, but gives spheres 3D effect, not just solid circles floating around
  const pointLight = new THREE.PointLight(0xf1fab6);
  pointLight.position.set(5, 5, 5);

  const ambientLight = new THREE.AmbientLight(0xf1fab6);
  scene.add(pointLight, ambientLight);

  //set up renderer
  //make it full screen, set pixel ratio to be same as device
  //add alpha: true in order to have transparent background: https://stackoverflow.com/questions/20495302/transparent-background-with-three-js
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
    alpha: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  //now we set the background to be transparent - we're adding the background in css since it is simple image
  renderer.setClearColor(0x000000, 0);
}

function animate() {
  requestAnimationFrame(animate);

  render();
}

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function render() {
  //the part I really needed help with, making spheres move around the screen randomly

  const timer = 0.0001 * Date.now();

  for (let i = 0, il = spheres.length; i < il; i++) {
    const sphere = spheres[i];

    sphere.position.x = 6 * Math.cos(timer + i);
    sphere.position.y = 2 * Math.sin(timer + i * 0.9);
  }

  renderer.render(scene, camera);
}
