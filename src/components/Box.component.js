import { useBox,useCylinder, useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { BoxGeometry } from "three";
import Controls from "../utils/controls";

const Box = ({position}) => {
    console.log(position)
    let [ref,api] = useSphere(() => ({ mass:10 ,position,rotation:[0,0,0],args:[1,32,32]}))
    useFrame((props) => {
        const ballpos = props.scene.children.find((mesh) => mesh.name === 'ball').position
        console.log(ballpos)
    })
      return (
        <mesh ref={ref} name="ball" castShadow >
            <boxBufferGeometry attach={'geometry'} args={[2,2,2]} />
            <meshStandardMaterial color={'red'} />
        </mesh>
    )
}

export default Box