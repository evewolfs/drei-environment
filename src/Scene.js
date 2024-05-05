import { OrbitControls, useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const Scene = () => {
  const lightRef = useRef();
  useHelper(lightRef, THREE.DirectionalLightHelper, 1);
  return (
    <>
      <OrbitControls />
    
      <directionalLight castShadow ref={lightRef} position={[1,1,0]} color="purple" intensity={1}/>

      <mesh castShadow>
        <boxGeometry />
        <meshStandardMaterial color="#C7CAC7" />
      </mesh>

      <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#CC3941" />
      </mesh>
    </>
  );
};

export default Scene;
