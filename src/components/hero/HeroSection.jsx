import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function HeroSection({ children }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) {
      return;
    }
    
    // Scene setup
    const scene = new THREE.Scene();
    // Determine responsive particle settings based on container/viewport size
    const getParticleSettings = (width) => {
      if (width < 480) {
        return { count: 1200, size: 0.05 };
      }
      if (width < 768) {
        return { count: 2200, size: 0.045 };
      }
      if (width < 1024) {
        return { count: 3500, size: 0.04 };
      }
      return { count: 5000, size: 0.035 };
    };
    const getSafeSize = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width || window.innerWidth || 1));
      const height = Math.max(1, Math.floor(rect.height || window.innerHeight || 1));
      return { width, height };
    };

    const { width: initialWidth, height: initialHeight } = getSafeSize();

    const camera = new THREE.PerspectiveCamera(
      75,
      initialWidth / initialHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });

    renderer.setSize(initialWidth, initialHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create animated background particles with colors
    const particlesGeometry = new THREE.BufferGeometry();
    let { count: particlesCount, size: particlePointSize } = getParticleSettings(initialWidth);
    let posArray = new Float32Array(particlesCount * 3);
    let colorsArray = new Float32Array(particlesCount * 3);

    const particleColors = [
      [0.38, 0.4, 0.94],  // Primary (Indigo)
      [0.96, 0.62, 0.04], // Accent (Amber)
      [0.5, 0.55, 0.97],  // Primary light
      [0.85, 0.47, 0.02], // Accent dark
    ];

    for(let i = 0; i < particlesCount; i++) {
      const spread = 5;
      posArray[i * 3] = (Math.random() - 0.5) * spread;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * spread;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * spread;

      const colorIndex = Math.floor(Math.random() * particleColors.length);
      colorsArray[i * 3] = particleColors[colorIndex][0];
      colorsArray[i * 3 + 1] = particleColors[colorIndex][1];
      colorsArray[i * 3 + 2] = particleColors[colorIndex][2];
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: particlePointSize,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Position camera
    camera.position.z = 3;

    // Pointer movement effect (works for mouse/touch/pen)
    let mouseX = 0;
    let mouseY = 0;

    const handlePointerMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX != null ? event.clientX : 0;
      const y = event.clientY != null ? event.clientY : 0;
      const relX = (x - rect.left) / Math.max(1, rect.width);
      const relY = (y - rect.top) / Math.max(1, rect.height);
      mouseX = relX - 0.5;
      mouseY = relY - 0.5;
    };

    container.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Animation
    let animationId = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.001;

      // Smooth camera movement based on mouse position
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize (window + container with ResizeObserver)
    let pendingResize = false;
    const handleResize = () => {
      if (pendingResize) return;
      pendingResize = true;
      requestAnimationFrame(() => {
        const { width, height } = getSafeSize();
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Recompute particle density responsively if width bucket changed
        const newSettings = getParticleSettings(width);
        if (newSettings.count !== particlesCount || newSettings.size !== particlePointSize) {
          particlesCount = newSettings.count;
          particlePointSize = newSettings.size;

          // Dispose old attributes
          particlesGeometry.dispose();

          // Recreate geometry and attributes
          const newGeometry = new THREE.BufferGeometry();
          posArray = new Float32Array(particlesCount * 3);
          colorsArray = new Float32Array(particlesCount * 3);
          for (let i = 0; i < particlesCount; i++) {
            const spread = 5;
            posArray[i * 3] = (Math.random() - 0.5) * spread;
            posArray[i * 3 + 1] = (Math.random() - 0.5) * spread;
            posArray[i * 3 + 2] = (Math.random() - 0.5) * spread;

            const colorIndex = Math.floor(Math.random() * 4);
            // Fallback to original color palette order
            const particleColors = [
              [0.38, 0.4, 0.94],
              [0.96, 0.62, 0.04],
              [0.5, 0.55, 0.97],
              [0.85, 0.47, 0.02],
            ];
            colorsArray[i * 3] = particleColors[colorIndex][0];
            colorsArray[i * 3 + 1] = particleColors[colorIndex][1];
            colorsArray[i * 3 + 2] = particleColors[colorIndex][2];
          }
          newGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
          newGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

          // Swap geometry on the mesh
          particlesMesh.geometry = newGeometry;

          // Update material size
          particlesMaterial.size = particlePointSize;
        }
        pendingResize = false;
      });
    };

    window.addEventListener('resize', handleResize);
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      container.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationId);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-x-hidden overflow-y-visible">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default HeroSection;