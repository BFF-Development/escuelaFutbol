import React from 'react'
import { useEffect } from 'react'
import * as THREE from "three"
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import sceneArco from "./aca.glb"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const Scene = () => {

    useEffect(() => {
        const room = () =>{

            const canvas = document.querySelector(".webGlScene")
        
            const scene = new THREE.Scene()
        
            const sizes = {
                width: window.innerWidth,
                height: window.innerHeight
            }
        
            window.addEventListener("click", () => {
                sizes.width = window.innerWidth
                sizes.height = window.innerHeight
        
                camera.aspect = sizes.width / sizes.height
                camera.updateProjectionMatrix()
        
                renderer.setSize(sizes.width , sizes.height)
                renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
            })
        
            const camera = new THREE.PerspectiveCamera(75 , sizes.width / sizes.height )
            camera.rotation.reorder("YXZ")
            camera.position.set(0, 0, 4.5)
            camera.rotation.set(0, 0,0)

        

            
            scene.add(camera)
        
            /* scene gltf */
            let roomScene
            const dracoLoader = new DRACOLoader()
            dracoLoader.setDecoderPath('/draco/')

            const gltfLoader = new GLTFLoader()
            gltfLoader.setDRACOLoader(dracoLoader)
            
            gltfLoader.load(sceneArco, (gltf) => {
                    roomScene= gltf.scene
                    scene.add(roomScene)
                    roomScene.position.set(1,-.8,-0.5)
                   /*  roomScene.rotation.set( 0 , -.2 , 0) */
                    roomScene.scale.set(1,1,1)
                /*     roomScene.lookAt(camera.position) */

                }
            )

              /* Orbit Controls */
            const controls = new OrbitControls(camera, canvas)
            controls.enableDamping= true


        
            const ambientLight = new THREE.AmbientLight(0xffffff, 3)
            scene.add(ambientLight)
        
            /*   renderer  */
        
            const renderer = new THREE.WebGL1Renderer({
                canvas:canvas,
                alpha:true
            })
            renderer.setSize(sizes.width , sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
            renderer.physicallyCorrectLights = true;

            

        
            let clock = new THREE.Clock()
        
            const tick = () => {
        
               const elapsedTime = clock.getElapsedTime()
        
                controls.update()
          
                /* camera.lookAt(Mesh.position) */
        
                renderer.render(scene, camera)
                window.requestAnimationFrame(tick)
            }
        
            tick()
        
        }

        room()
    },[])


  return (
    <canvas className='webGlScene'></canvas>
  )
}

export default Scene