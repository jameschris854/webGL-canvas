import { useBox,useCylinder, useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { BoxGeometry } from "three";
import Controls from "../utils/controls";

const Sphere = ({position}) => {
    console.log(position)
    let [ref,api] = useSphere(() => ({ mass:10 ,position,rotation:[0,0,0],args:[1,32,32]}))
    useFrame((props) => {
        const ballpos = props.scene.children.find((mesh) => mesh.name === 'sphere').position
        console.log(ballpos)
    })
      return (
        <mesh ref={ref} name="sphere" castShadow >
            <sphereBufferGeometry attach={'geometry'} args={[1,32,32]} />
            <meshStandardMaterial color={'white'} />
        </mesh>
    )
}

export default Sphere