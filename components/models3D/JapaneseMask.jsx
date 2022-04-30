import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    './models/japanese-mask/scene-transformed.glb'
  );
  return (
    // The firt container of the group can be scaled in size
    <group ref={group} {...props} dispose={null} scale={1}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={5}>
            <mesh
              geometry={nodes.Sphere_Primary_0.geometry}
              material={materials.Primary}
            />
            <mesh
              geometry={nodes.Sphere_Tertiary_0.geometry}
              material={materials.Tertiary}
            />
            <mesh
              geometry={nodes.Sphere_Secondary_0.geometry}
              material={materials.Secondary}
            />
            <mesh
              geometry={nodes.Sphere_Quaternary_0.geometry}
              material={materials.Quaternary}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('./models/japanese-mask/scene-transformed.glb');
