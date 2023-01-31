//scene, camera,  renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0x000fff);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 15;
camera.position.y = 2;

const points = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(4, 4),
    new THREE.Vector2(2, 6),
    new THREE.Vector2(0, 4),
    new THREE.Vector2(-2, 6),
    new THREE.Vector2(-4, 4),
    new THREE.Vector2(0,0)
]

const material = new THREE.LineBasicMaterial({color: 0xdddddd});
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material)
scene.add(line);

function animate(){
    requestAnimationFrame(animate);
    renderer.render( scene, camera);
}

animate();