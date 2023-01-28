import React from 'react'
import { useEffect } from 'react'
import * as THREE from "three"

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
            camera.position.z = 3
            camera.position.x = -1

        
            scene.add(camera)
        
        
        
            const geometry = new THREE.BoxGeometry(1,1,1 ,10 , 10 ,10)
            const material = new THREE.MeshBasicMaterial({color:"#00ffff" , wireframe:true})
            const mesh = new THREE.Mesh(geometry, material)
            scene.add(mesh)
        
        
            /*   renderer  */
        
            const renderer = new THREE.WebGL1Renderer({
                canvas:canvas,
                alpha:true
            })
            renderer.setSize(sizes.width , sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
        
        
        
            let clock = new THREE.Clock()
        
            const tick = () => {
        
               const elapsedTime = clock.getElapsedTime()
        
        
                mesh.rotation.y = elapsedTime
                mesh.position.x = Math.sin(elapsedTime) 
                mesh.position.y = Math.cos(elapsedTime) 
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