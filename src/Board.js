import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Chessboard = () => {
  // Chessboard settings
  const rows = 8;
  const columns = 8;
  const squareSize = 1;

  // Array to hold chessboard squares
  const squares = [];

  // Generate the chessboard
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const isEvenRow = row % 2 === 0;
      const isEvenCol = col % 2 === 0;
      const isDarkSquare = (isEvenRow && !isEvenCol) || (!isEvenRow && isEvenCol);

      squares.push(
        <mesh
          key={`${row}-${col}`}
          position={[col * squareSize, row * squareSize, 0]}
        >
          <boxBufferGeometry args={[squareSize, squareSize, 0.1]} />
          <meshBasicMaterial color={isDarkSquare ? 'black' : 'white'} />
        </mesh>
      );
    }
  }

  return (
    <Canvas camera={{ position: [8, 8, 8] }}>
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.8} position={[10, 10, 10]} />
      <OrbitControls />
      {squares}
    </Canvas>
  );
};

export default Chessboard;