import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls } from '@react-three/drei'

function Dog(props) {
  const { scene } = useGLTF('/dog.glb')
  return <primitive object={scene} {...props} />
}

function Practice() {
  const onChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
    <input onChange={onChange} />
    <Canvas camera={{ position: [5, 5, -5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <Dog position={[-0.1, -0.2, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.2} />
      <Environment preset="city" />
      <OrbitControls minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.5} />
    </Canvas>
    </>
  )
}

export default Practice;
