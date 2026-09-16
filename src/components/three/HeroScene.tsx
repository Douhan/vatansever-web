import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./HeroScene.css";

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

    const group = new THREE.Group();
    scene.add(group);

    const PARTICLE_COUNT = 900;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = 4 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color("#ff8a3a"),
      size: 0.045,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    const coreGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#ff6a1a"),
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    const glowGeo = new THREE.IcosahedronGeometry(1.5, 2);
    const glowMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#ffb04d"),
      transparent: true,
      opacity: 0.07,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    group.add(glow);

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const pointer = { x: 0, y: 0 };
    const pointerTarget = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerTarget.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointerTarget.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    let raf = 0;
    let visible = true;
    const clock = new THREE.Clock();

    const renderFrame = () => {
      const delta = Math.min(clock.getDelta(), 0.1);
      pointer.x += (pointerTarget.x - pointer.x) * 0.04;
      pointer.y += (pointerTarget.y - pointer.y) * 0.04;
      group.rotation.y += delta * 0.09 + pointer.x * 0.0006;
      group.rotation.x += (pointer.y * 0.15 - group.rotation.x) * 0.02;
      particles.rotation.y -= delta * 0.03;
      renderer.render(scene, camera);
    };

    const loop = () => {
      if (!visible || document.hidden) {
        raf = 0;
        return;
      }
      renderFrame();
      raf = requestAnimationFrame(loop);
    };

    if (reducedMotion) {
      renderFrame();
    } else {
      raf = requestAnimationFrame(loop);
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      if (visible && !raf && !reducedMotion) raf = requestAnimationFrame(loop);
    });
    io.observe(container);

    const onVisibilityChange = () => {
      if (!document.hidden && visible && !raf && !reducedMotion) raf = requestAnimationFrame(loop);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      particleGeo.dispose();
      particleMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-scene" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
