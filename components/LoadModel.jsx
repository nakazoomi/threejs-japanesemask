import * as THREE from 'three';
import {
  OrbitControls,
  PerspectiveCamera,
  Sky,
  Stars,
  Html,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Effects,
  Environment,
  Text,
} from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { angleToRadians } from './Angle';
import { useRef } from 'react';
import JapaneseMask from './models3D/JapaneseMask';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

// IMPORTANT LINKS
// https://npmmirror.com/package/drei/v/1.5.0#meshdistortmaterial

export default function Threejs() {
  // Setting the camera angle *** START
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      // console.log(y + angleToRadians(90 - 30));

      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setPolarAngle(
        (y + 0.5) * angleToRadians(270 - 30)
      );

      orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      // console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef]);
  // Setting the camera angle *** END

  return (
    <>
      {/***************************************************************************/}
      {/* CAMERA */}

      {/* <PerspectiveCamera position={(0, 0, 0)} /> */}
      <OrbitControls
        enableZoom={false}
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(90)}
        maxPolarAngle={angleToRadians(90)}
      />

      {/***************************************************************************/}
      {/* 3D MODELS */}

      <JapaneseMask position={[0, 0, -10]} />

      {/***************************************************************************/}
      {/* EFFECTS */}

      {/***************************************************************************/}
      {/* ENVIRONMENT */}

      {/* <Environment
        background={true} // Whether to affect scene.background
        files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']} // Array of cubemap files OR single equirectangular file
        path={'/public/images/360-sky3/px.png'} // Path to the above file(s)
        preset={null} // Preset string (overrides files and path)
      /> */}

      {/* <Sky
        distance={450000} // Camera distance (default=450000)
        sunPosition={[20, 1, 10]} // Sun position normal (defaults to inclination and azimuth if not set)
        inclination={1} // Sun elevation angle from 0 to 1 (default=0)
        azimuth={0.1} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
      /> */}

      {/* <Stars
        radius={50} // Radius of the inner sphere (default=100)
        depth={50} // Depth of area where stars should fit (default=50)
        count={5000} // Amount of stars (default=5000)
        factor={4} // Size factor (default=4)
        saturation={1} // Saturation 0-1 (default=0)
        fade // Faded dots (default=false)
      /> */}

      {/***************************************************************************/}
      {/* LIGHT */}

      {/* Ambient Light */}
      {/* <ambientLight args={['#ffffff', 1]} /> */}

      {/* Directional Light */}
      {/* <directionalLight args={['#ffffff', 1]} position={[0, 0, 1]} /> */}

      {/* Point Light */}
      {/* <pointLight args={['#ffffff', 2]} position={[0, 0, 2]} /> */}
    </>
  );
}
