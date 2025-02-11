
"use client"
import React, { useRef } from 'react'
import { useGLTF} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Staff(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/staff-transformed.glb')
const modelRef = useRef()
  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  })
  return (
    <group
    {...props} 
    dispose={null}
    scale={[1.7,1.5,1.7]}
    position={[0,0,0]}
    ref={modelRef}

    >
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode">
          <group
            name="Walec009_14"
            position={[0.022, 1.338, -0.017]}
            rotation={[3.005, 1.511, 0.131]}
            scale={[0.086, 0.09, 0.086]}>
            <mesh
              name="Object_29"
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials['Materia.006']}
            />
          </group>
        </group>
        <mesh
          name="Object_4"
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Materia.004']}
          position={[0.015, 0, -0.009]}
          rotation={[3.005, 1.511, -3.011]}
        />
        <mesh
          name="Object_5"
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['Materia.005']}
          position={[0.015, 0, -0.009]}
          rotation={[3.005, 1.511, -3.011]}
        />
        <mesh
          name="Object_7"
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Materia}
          position={[0.015, 0, -0.009]}
          rotation={[3.005, 1.511, -3.011]}
        />
        <mesh
          name="Object_23"
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials['Materia.006']}
          position={[0.006, -1.109, -0.002]}
          rotation={[3.005, 1.511, 1.701]}
          scale={[1.874, 5.167, 1.874]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/staff-transformed.glb')

