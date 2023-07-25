import './App.css'
import React from 'react';
import DiceBox from './components/Dicebox/Dicebox';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import Practice from './Practice';
// import * as THREE from 'three';


/* <Canvas>
      <OrbitControls autoRotate={true}/>
      <mesh onClick={() => alert('Hellooo')}>
        <ambientLight intensity={0.5} />
        <directionalLight color={0xff0000} position={[-1,0,1]} intensity={0.5} />
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial attach="material" color={0x33d1ff}/>
      </mesh>
    </Canvas>
    <Canvas>
      <mesh>
        <ambientLight intensity={0.3} />
        <directionalLight color={0xff0000} position={[-1,0,1]} intensity={0.5} />
        <sphereGeometry />
        <meshStandardMaterial attach="material" color="hotpink" transparent/>
      </mesh>
    </Canvas>
     */

function App() {
  return (
    <>
    <div className='body'>
      <div className='App' >
        <DiceBox />
      </div>
    </div>
    </>
  );
}

export default App;
