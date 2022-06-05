import React from 'react'
import {useRef,useEffect} from'react'
import { Canvas ,useThree } from '@react-three/fiber'

const Camera = () => {
    let { camera } = useThree()
    let targetPosition = useRef([0, 0, 5])
  
    useEffect(() => {
      camera.position.set(5, 5, - 10)
      camera.lookAt(0, 0, 0)
  
      // api.subscribe(
      //   ({ x, y, z }) => (targetPosition.current = [x, y, z - 5]),
      //   (state) => state.position
      // )
    }, [])

    return null
}

export default Camera