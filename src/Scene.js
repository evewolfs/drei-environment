import { OrbitControls, useHelper, Sparkles, Stars, Cloud, Sky, Environment, Lightformer } from "@react-three/drei";
import { useRef } from "react";
import { useControls } from "leva";
import * as THREE from "three";

const Scene = () => {
  const lightRef = useRef();
  // useHelper(lightRef, THREE.DirectionalLightHelper, 1);
  const {sunPosition} = useControls({
    sunPosition: {
      value: [0,1,0],
    }
  })

  const {meshIntensity} = useControls("mesh Intensity",{
    meshIntensity: {value: 1, min:0, max:5},
  })


  return (
    <>
      <OrbitControls />
    
      <directionalLight castShadow ref={lightRef} position={[1,1,0]} color="blue" intensity={1}/>

      <mesh castShadow>
        <boxGeometry />
        <meshStandardMaterial color="#C7CAC7" envMapIntensity={meshIntensity} />
      </mesh>

      {/* <Sparkles count={100} speed={0.5} opacity={3} color="red" scale={[10,10,10]} size={2}/> */}
      <Stars radius={2} depth={50} count={5000} factor={4} saturation={0} fade speed={1} segments={4} depthTest={false} />
      <Cloud opacity={1} speed={0.2} depth={4}/>
      {/* <Sky sunPosition={sunPosition} /> */}

      <Environment background files={
        "./envMap/puresky.hdr"}>
          {/* <planeGeometry />
          <meshBasicMaterial color="orange"/> */}
          <Lightformer position-z={-1} scale={5} color="orange"  intensity={5}/>
        </Environment>
      <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5}>
        {/* <planeGeometry args={[8, 8]} /> */}
        <meshStandardMaterial color="#CC3941" />
      </mesh>
    </>
  );
};

export default Scene;
