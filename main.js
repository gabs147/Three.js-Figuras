const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('three-container').appendChild(renderer.domElement);

// Crear las figuras para el banner
const geometryCubo = new THREE.BoxGeometry(1, 1, 1);
const geometryCilindro = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
const geometryEsfera = new THREE.SphereGeometry(0.7, 32, 16);

const materialCubo = new THREE.MeshBasicMaterial({ color: 0x6C63FF });
const materialCilindro = new THREE.MeshBasicMaterial({ color: 0xFF6584 });
const materialEsfera = new THREE.MeshBasicMaterial({ color: 0x4A44C6 });

const cubo = new THREE.Mesh(geometryCubo, materialCubo);
const cilindro = new THREE.Mesh(geometryCilindro, materialCilindro);
const esfera = new THREE.Mesh(geometryEsfera, materialEsfera);

// ESCALAR LAS FIGURAS DEL BANNER
cubo.scale.set(1.5, 1.5, 1.5);
cilindro.scale.set(1.5, 1.5, 1.5);
esfera.scale.set(1.5, 1.5, 1.5);

cubo.position.x = -3;
cilindro.position.x = 0;
esfera.position.x = 3;

cubo.position.y = 0.7;
cilindro.position.y = 0.7;
esfera.position.y = 0.7;

scene.add(cubo);
scene.add(cilindro);
scene.add(esfera);

camera.position.z = 5;

// Crear renderers para cada tarjeta
const rendererCubo = new THREE.WebGLRenderer();
rendererCubo.setSize(200, 200);
document.getElementById('card-cubo').appendChild(rendererCubo.domElement);

const rendererCilindro = new THREE.WebGLRenderer();
rendererCilindro.setSize(200, 200);
document.getElementById('card-cilindro').appendChild(rendererCilindro.domElement);

const rendererEsfera = new THREE.WebGLRenderer();
rendererEsfera.setSize(200, 200);
document.getElementById('card-esfera').appendChild(rendererEsfera.domElement);

// Crear escenas para las tarjetas
const sceneCubo = new THREE.Scene();
const sceneCilindro = new THREE.Scene();
const sceneEsfera = new THREE.Scene();

// Crear las figuras para las tarjetas
const cuboTarjeta = new THREE.Mesh(geometryCubo, materialCubo);
const cilindroTarjeta = new THREE.Mesh(geometryCilindro, materialCilindro);
const esferaTarjeta = new THREE.Mesh(geometryEsfera, materialEsfera);

sceneCubo.add(cuboTarjeta);
sceneCilindro.add(cilindroTarjeta);
sceneEsfera.add(esferaTarjeta);

// Cámaras para las tarjetas
const cameraTarjeta = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
cameraTarjeta.position.z = 3;

// Animación
function animate() {
    requestAnimationFrame(animate);
    
    // Rotar figuras principales
    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;
    
    cilindro.rotation.x += 0.01;
    cilindro.rotation.y += 0.01;
    
    esfera.rotation.x += 0.01;
    esfera.rotation.y += 0.01;
    
    // Rotar figuras en las tarjetas
    cuboTarjeta.rotation.x += 0.01;
    cuboTarjeta.rotation.y += 0.01;
    
    cilindroTarjeta.rotation.x += 0.01;
    cilindroTarjeta.rotation.y += 0.01;
    
    esferaTarjeta.rotation.x += 0.01;
    esferaTarjeta.rotation.y += 0.01;
    
    // Renderizar todo
    renderer.render(scene, camera);
    rendererCubo.render(sceneCubo, cameraTarjeta);
    rendererCilindro.render(sceneCilindro, cameraTarjeta);
    rendererEsfera.render(sceneEsfera, cameraTarjeta);
}

animate();

// Ajustar al cambiar tamaño de ventana
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
