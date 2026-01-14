
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Plane } from '@react-three/drei';
import * as THREE from 'three';
import { Theme } from '../types';

const ParticleField = ({ theme }: { theme: Theme }) => {
  const ref = useRef<THREE.Points>(null!);
  const isDark = theme === 'dark';
  
  const [positions] = useMemo(() => {
    const pos = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return [pos];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.05;
    ref.current.rotation.x = t * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={isDark ? "#bef264" : "#475569"}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={isDark ? 0.4 : 0.15}
      />
    </Points>
  );
};

const GridFloor = ({ theme }: { theme: Theme }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const isDark = theme === 'dark';
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.position.z = (t * 2) % 10;
  });

  return (
    <group position={[0, -5, -10]} rotation={[-Math.PI / 2, 0, 0]}>
      <Plane ref={meshRef} args={[100, 100, 50, 50]}>
        <meshBasicMaterial 
          color={isDark ? "#a855f7" : "#0f172a"} 
          wireframe 
          transparent 
          opacity={isDark ? 0.05 : 0.02} 
        />
      </Plane>
    </group>
  );
};

const ThreeBackground: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isDark = theme === 'dark';
  
  return (
    <div className={`fixed inset-0 -z-10 transition-colors duration-700 ${isDark ? 'bg-[#020617]' : 'bg-[#f8fafc]'}`}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ParticleField theme={theme} />
        <GridFloor theme={theme} />
        <ambientLight intensity={isDark ? 0.5 : 1} />
        <pointLight position={[10, 10, 10]} intensity={1} color={isDark ? "#bef264" : "#ffffff"} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color={isDark ? "#a855f7" : "#cbd5e1"} />
        <fog attach="fog" args={[isDark ? '#020617' : '#f8fafc', 5, 30]} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
