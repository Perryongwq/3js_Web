import React, { useRef, useEffect } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

export function Cat_model(props) {
  const { nodes, materials } = useGLTF('./models/robot/chonky_cat_trio.glb');
  const robot = useRef();
  const scroll = useScroll();
  const tl = useRef();

  // Initialize the GSAP timeline in a useEffect hook
  useEffect(() => {
    tl.current = gsap.timeline({ paused: true, defaults: { duration: 2, ease: 'power1.inOut' } });

    tl.current
      .to(robot.current.rotation, { y: -Math.PI / 2 }, 0)
      .to(robot.current.position, { x: 2 }, 0)
      .to(robot.current.rotation, { y: Math.PI / 2 }, 1)
      .to(robot.current.position, { x: -2 }, 1)
      .to(robot.current.rotation, { y: 0, x: Math.PI / 2 }, 2)
      .to(robot.current.position, { x: 0, z: -2 }, 2)
      .to(robot.current.rotation, { x: 0, z: 0 }, 3)
      .to(robot.current.position, { z: 0 }, 3);
  }, []);

  // Update the animation based on scroll position
  useFrame(() => {
    // Assuming the end of the scroll is determined by reaching the maximum scroll offset
    if (scroll.offset === 1) { // This condition checks if the scroll is at its maximum value
      tl.current.play();
    }
  });

  return (
    <group {...props} dispose={null} ref={robot}>      
      <group position={[-0.21, 0.16, 0.37]} rotation={[0, 0, 0]} scale={0.15}>
      
      <primitive object={nodes._rootJoint} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fat_cat_white_Cat01_0.geometry}
          material={materials.Cat01}
          position={[0, 0, 13.579]}
          scale={3.736}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fat_cat_white1_Cat02_0.geometry}
          material={materials.Cat02}
          position={[0, 0, 13.579]}
          scale={3.736}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fat_cat_white2_Cat03_0.geometry}
          material={materials.Cat03}
          position={[0, 0, 13.579]}
          scale={3.736}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube1_standardSurface1_0.geometry}
          material={materials.standardSurface1}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/robot/chonky_cat_trioglb')
