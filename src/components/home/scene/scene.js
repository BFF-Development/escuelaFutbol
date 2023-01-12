import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = () => {

    const canvas = document.querySelector(".ballWebGl")

    const scene = new THREE.Scene()

    
    const size = {
        width :  window.innerWidth,
        height : window.innerHeight
    }
    
    window.addEventListener ('resize', () => {
        size.width = window.innerWidth
        size.height = window.innerHeight
    
        camera.aspect = size.width / size.height
        camera.updateProjectionMatrix()

        renderer.setSize(size.width, size.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })


    const camera = new THREE.PerspectiveCamera(75, size.width / size.height , 0.1 , 1000 )
    camera.position.set( 5.3 , 2.8 , 3)
    camera.rotation.y = .4




    scene.add(camera)


    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias : true,
        alpha:true
    })

    renderer.setSize(size.width , size.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))



    const group = new THREE.Group()
    scene.add(group);

    const planeGeo = new THREE.PlaneGeometry(10,12)
    const planeMat = new THREE.MeshPhysicalMaterial({
        side: THREE.DoubleSide
    })
    const planeMesh = new THREE.Mesh(planeGeo, planeMat)
    planeMesh.position.set(-3 , 0, 0)
    planeMesh.rotation.y = ( Math.PI /2)


    const plane2Geo = new THREE.PlaneGeometry(25,12)
    const plane2Mat = new THREE.MeshPhysicalMaterial({
        side: THREE.DoubleSide
    })
    const planeMesh2 = new THREE.Mesh(plane2Geo, plane2Mat)
    planeMesh2.position.set(2 , 0, -5)

    
    const floorGeo = new THREE.PlaneGeometry(15,10)
    const floorMat = new THREE.MeshPhysicalMaterial({
        side: THREE.DoubleSide
    })
    const floorMesh = new THREE.Mesh(floorGeo, floorMat)
    floorMesh.position.set(4 , -4, 0)
    floorMesh.rotation.x = -(Math.PI / 2)


    group.add(planeMesh)
    group.add(planeMesh2)
    group.add(floorMesh)

    group.position.y = 4

   /*  const ambientLight = new THREE.AmbientLight(0xffffff , .5)
    scene.add(ambientLight)
 */
    const pointLight1 = new THREE.PointLight(0xFFE000, .7)
    pointLight1.position.set(-1 , 4 , 1)

    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xff0000, .2)
    pointLight2.position.set(2 , 5 , 1)

    scene.add(pointLight2)


    const pointLight3 = new THREE.PointLight(0x0000ff, .4)
    pointLight3.position.set(0 , 5 , 1)

    scene.add(pointLight3)


      /* Orbit Controls */
      /* const controls = new OrbitControls(camera, canvas)
      controls.enableDamping= true */
  
  

    const animate = () => {

    
        window.requestAnimationFrame(animate)
        renderer.render(scene, camera)

    }

    animate()

    renderer.render(scene,camera)
}

export default scene;