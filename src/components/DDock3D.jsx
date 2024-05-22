import { Environment, OrbitControls, useAnimations, useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import React, { useEffect, useState } from 'react'

function DDock3D() {
    const model = useGLTF("./models/gavintest3.glb")
    
    const animations = useAnimations(model.animations, model.scene)
    const { actionName} = useControls({
        // actionName:{
        //     value: animations.names[1],
        //     options: animations.names
        // }
    })
    useEffect(()=>{
        const action = animations.actions["HEADAction"]
        if (action) {
            action.reset().fadeIn(0.5).play()
        }
    },[actionName])

    const [height, setHeight] = useState(0)

    useEffect(() => {
        let minY = Infinity, maxY = -Infinity

        model.scene.traverse((item) => {
            if (item.isMesh) {
                const geomBbox = item.geometry.boundingBox
                if (minY > geomBbox.min.y) minY = geomBbox.min.y
                if (maxY < geomBbox.max.y) maxY = geomBbox.max.y
            }
        })
        const h = maxY - minY
        setHeight(h)

    }, [model.scene])
    return (
        <>
            <OrbitControls />
            <Environment preset='sunset' />
            <primitive
                scale={4}
                position-y = {-(height/2)*8}
                object={model.scene}
            />
        </>
    )
}

export default DDock3D