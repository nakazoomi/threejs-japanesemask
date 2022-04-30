import { Effects } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import LoadModel from '../components/LoadModel';

// import * as THREE from 'three';
// import { Html } from '@react-three/drei';

// START FUNCTION
export default function Home() {
  return (
    <>
      <Canvas id="threejs-canvas">
        <Suspense fallback={null}>
          <LoadModel />
        </Suspense>
      </Canvas>
    </>
  );
}
