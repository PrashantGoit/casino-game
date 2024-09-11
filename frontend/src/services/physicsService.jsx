// src/services/physicsService.js

import { Physics, useBox } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

// Dice component using cannon.js physics
export const Dice = () => {
  // Define dice physics properties
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    args: [1, 1, 1], // Dimensions of the dice (cube)
    rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
    onCollide: () => console.log('Dice landed!'), // Log when dice collides
  }));

  // Handle dice click to roll
  const handleRoll = () => {
    // Apply impulse to simulate dice roll
    api.applyImpulse([Math.random() * 5, 10, Math.random() * 5], [0, 0, 0]);
  };

  return (
    <mesh ref={ref} onClick={handleRoll} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

// Physics wrapper component for the dice
export const PhysicsWorld = ({ children }) => {
  return (
    <Physics gravity={[0, -9.82, 0]}>
      {children}
    </Physics>
  );
};

// Rendering dice in the physics world
export const DiceSimulation = () => {
  return (
    <Canvas style={{ height: '300px', width: '60%', backgroundColor: '#34495e', margin: '20px auto' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <PhysicsWorld>
        <Suspense fallback={null}>
          <Dice />
        </Suspense>
      </PhysicsWorld>
    </Canvas>
  );
};