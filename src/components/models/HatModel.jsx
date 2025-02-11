"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Hat(props) {
  const { nodes, materials } = useGLTF('/models/hat-transformed.glb')

  const modelRef = useRef()

  useFrame(() =>{
    modelRef.current.rotation.y += 0.007
  })
  return (
    <group {...props} 
    dispose={null}
    ref={modelRef}
    scale={[3,3,3]}
    rotation={[-0.1,0,0]}
    position={[0,1,1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.001']}
      />
    </group>
  )
}

useGLTF.preload('/models/hat-transformed.glb')