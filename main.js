const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight * 0.6);
document.getElementById('three-container').appendChild(renderer.domElement);

// Crear las figuras
const geometryCubo = new THREE.BoxGeometry(1, 1, 1);
const geometryCilindro = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
const geometryEsfera = new THREE.SphereGeometry(0.7, 32, 16);

const materialCubo = new THREE.MeshBasicMaterial({ color: 0x1FBCFF });
const materialCilindro = new THREE.MeshBasicMaterial({ color: 0x2A37F4 });
const materialEsfera = new THREE.MeshBasicMaterial({ color: 0x783AE4 });

const cubo = new THREE.Mesh(geometryCubo, materialCubo);
const cilindro = new THREE.Mesh(geometryCilindro, materialCilindro);
const esfera = new THREE.Mesh(geometryEsfera, materialEsfera);

cubo.position.x = -2;
cilindro.position.x = 0;
esfera.position.x = 2;

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
    camera.aspect = window.innerWidth / (window.innerHeight * 0.6);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight * 0.6);
});