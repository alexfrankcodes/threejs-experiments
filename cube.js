// ThreeJS Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Create renderer and add it to page
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create cube and put it in scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Initial camera position
camera.position.z = 3;

// Set controls
let controls = new THREE.OrbitControls(camera, renderer.domElement);

// Draw grid
let gridXZ = new THREE.GridHelper(100, 10);
gridXZ.setColors(new THREE.Color(0xff0000), new THREE.Color(0xffffff));
scene.add(gridXZ);

// Draw to renderer
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
