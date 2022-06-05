import React from "react";
import { usePlane } from '@react-three/cannon'
import { useFrame } from "@react-three/fiber";

const Plane = (props) => {
    const [ref, api] = usePlane(() => ({ mass: 10, position: [0, 0, 0], rotation: [-Math.PI / 2, 0, 0], type: "Static"}))
    useFrame(({ mouse }) => {
        return api.rotation.set(-Math.PI / 2 - mouse.y * 0.2, 0 - mouse.x * 0.2, 0)
    })
    return (
        <mesh scale={200} ref={ref} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry />
            <meshStandardMaterial color={'white'} />
        </mesh>
    )
}

export default Plane