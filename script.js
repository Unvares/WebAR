const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 
  window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const lightBlueMaterial = new THREE.MeshBasicMaterial( { color: 0xadd8e6 } );
const redMaterial = new THREE.MeshBasicMaterial( { color: 0xFF0000 } );
const greenMaterial = new THREE.MeshBasicMaterial( { color: 0x00FF00 } );
const cube = new THREE.Mesh(geometry, lightBlueMaterial);
const redCube = new THREE.Mesh(geometry, redMaterial);
const greenCube = new THREE.Mesh(geometry, greenMaterial);
scene.add(cube);
scene.add(redCube);
scene.add(greenCube);

camera.position.z = 5;

redCube.position.x = 0;
redCube.position.z = -4;

greenCube.position.y = 0;
greenCube.position.z = -4;

let time = 0;

function animate() {
  requestAnimationFrame(animate);

  time += 1/60;

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.03;

  redCube.position.x += Math.cos(time) / 20;
  redCube.position.z += Math.sin(time) / 20;

  greenCube.position.y += Math.cos(time) / 20;
  greenCube.position.z += Math.sin(time) / 20;

  renderer.render(scene, camera);
}
animate();