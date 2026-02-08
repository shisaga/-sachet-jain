import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const Geometries = () => {
  const group = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  
  useFrame((state) => {
    if (group.current) {
        // Smooth rotation based on mouse
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mouse.y * 0.2, 0.05);
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouse.x * 0.4 + (state.clock.elapsedTime * 0.1), 0.05);
    }
  });

  return (
    <group ref={group}>
        {/* Central Complex Form - The "Creative Core" */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={[0, 0, 0]} scale={1.5}>
                <torusKnotGeometry args={[1, 0.3, 128, 32, 2, 3]} />
                <meshPhysicalMaterial 
                    color="#ffffff" 
                    roughness={0.05} 
                    metalness={0.1} 
                    transmission={0.9} 
                    thickness={2}
                    clearcoat={1}
                    ior={1.5}
                />
            </mesh>
        </Float>
        
        {/* Floating Vibrant Shards */}
        <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
             <mesh position={[-3.5, 2, -1]} rotation={[1, 1, 0]}>
                <torusGeometry args={[0.8, 0.2, 16, 32]} />
                 <meshStandardMaterial color="#06b6d4" roughness={0.2} metalness={0.8} emissive="#06b6d4" emissiveIntensity={0.5} />
             </mesh>
        </Float>

        <Float speed={2.5} rotationIntensity={2} floatIntensity={1.5}>
             <mesh position={[3.5, -2, -2]} rotation={[0, 2, 1]}>
                <octahedronGeometry args={[1.2, 0]} />
                 <meshStandardMaterial color="#d946ef" roughness={0.1} metalness={0.9} />
             </mesh>
        </Float>

         <Float speed={4} rotationIntensity={1} floatIntensity={1}>
             <mesh position={[-2, -3.5, 1]} rotation={[2, 0, 1]}>
                <coneGeometry args={[0.5, 1.5, 32]} />
                 <meshStandardMaterial color="#f97316" roughness={0.2} metalness={0.5} emissive="#f97316" emissiveIntensity={1} />
             </mesh>
        </Float>

        {/* Distant shapes for depth */}
         <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh position={[5, 4, -5]} rotation={[0, 0, 0.5]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshPhysicalMaterial color="#8b5cf6" transmission={0.5} roughness={0} />
            </mesh>
         </Float>
    </group>
  );
};

export const Scene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#f8fafc']} /> {/* Bright Base */}
        <fog attach="fog" args={['#f8fafc', 5, 25]} />
        
        <Geometries />

        {/* Explosive Gradient Lighting */}
        <ambientLight intensity={0.5} />
        {/* Blue/Cyan fill */}
        <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={5} color="#3b82f6" />
        {/* Magenta/Pink Highlight */}
        <pointLight position={[-10, 0, 5]} intensity={8} color="#d946ef" distance={15} />
        {/* Warm Orange Rim */}
        <pointLight position={[5, -5, 2]} intensity={6} color="#f97316" distance={15} />
        {/* Cyan rim */}
        <pointLight position={[0, 5, -2]} intensity={4} color="#06b6d4" distance={10} />

        <Environment preset="studio" />
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={2.5} far={4.5} color="#000000" />
      </Canvas>
    </div>
  );
};