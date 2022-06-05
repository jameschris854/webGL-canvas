import './App.css';
import { Canvas, useThree } from '@react-three/fiber'
import { Physics } from '@react-three/cannon';
import Plane from './components/Plane.component';
import Camera from './components/Camera.component';
import Controls from './utils/controls';
import Box from './components/Box.component';
import { useState } from 'react';
import Sphere from './components/Sphere.component';

function App(props) {

  const boxPositions = [[0, 0, 0], [2, 5, 10], [-4, 10, 0], [0, 20, 20], [4, 8, 0], [-8, 10, 10]]
  const spherePositions = [[-3, 3, -4], [4, 7, 8], [-5, 10, 10], [-10, 0, 5], [4, 8, -10], [8, 10, 10]]

  return (
    <Canvas shadows camera={{position:[0,20,0],fov:90}}>
      <color attach="background" args={['#9ebd8']} />
      <fog attach="fog" args={[" # 94ebd8 ", 8, 49]} />
      <pointLight
        castShadow
        intensity={3}
        args={['0xffee00', 1, 1001]}
        position={[- 1, 3, 13]}
      />
      <spotLight intensity={0.2} position={[0, 10, 0]} args={['lightgreen', 1, 100]} penumbra={1} />
      <hemisphereLight intensity={0.1} />
      <Physics>
        <Plane />
        {spherePositions.map((position) => {
          return <Sphere position={position} />
        })}
        {boxPositions.map((position) => {
          return <Box position={position} />
        })}
      </Physics>

    </Canvas>
  )
}

export default App;
