import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Sparkles, Trail } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

const SIGNAL = "#5eead4";
const VIOLET = "#818cf8";

/** Smooth "ease out" camera dolly-in on first mount — a small cinematic touch. */
function CameraIntro() {
    const t = useRef(0);
    useFrame((state, delta) => {
        if (t.current >= 1) return;
        t.current = Math.min(1, t.current + delta * 0.55);
        const eased = 1 - Math.pow(1 - t.current, 3);
        state.camera.position.z = 8.5 - eased * 3.3; // 8.5 -> 5.2
        state.camera.fov = 55 - eased * 13; // 55 -> 42
        state.camera.updateProjectionMatrix();
    });
    return null;
}

function GlassCore() {
    const coreRef = useRef(null);
    const wireRef = useRef(null);
    const pointer = useRef({ x: 0, y: 0 });

    useFrame((state, delta) => {
        if (coreRef.current) {
            coreRef.current.rotation.y += delta * 0.16;
            coreRef.current.rotation.x += delta * 0.05;
        }
        if (wireRef.current) {
            wireRef.current.rotation.y -= delta * 0.1;
            wireRef.current.rotation.z += delta * 0.035;
        }

        // subtle parallax toward the pointer
        const { pointer: p } = state;
        pointer.current.x += (p.x - pointer.current.x) * 0.03;
        pointer.current.y += (p.y - pointer.current.y) * 0.03;
        if (coreRef.current) {
            coreRef.current.rotation.y += pointer.current.x * 0.15 * delta;
            coreRef.current.rotation.x += -pointer.current.y * 0.15 * delta;
        }
        if (state.camera) {
            state.camera.position.x += (pointer.current.x * 0.6 - state.camera.position.x) * 0.03;
            state.camera.position.y += (-pointer.current.y * 0.4 - state.camera.position.y) * 0.03;
            state.camera.lookAt(0, 0, 0);
        }
    });

    return (
        <>
            {/* Physically-based glass core — refracts and tints the light behind it */}
            <mesh ref={coreRef}>
                <icosahedronGeometry args={[1.3, 6]} />
                <MeshTransmissionMaterial
                    color={SIGNAL}
                    thickness={0.9}
                    roughness={0.06}
                    transmission={1}
                    ior={1.35}
                    chromaticAberration={0.045}
                    anisotropy={0.25}
                    distortion={0.15}
                    distortionScale={0.3}
                    temporalDistortion={0.15}
                    clearcoat={1}
                    attenuationColor={SIGNAL}
                    attenuationDistance={1.4}
                />
            </mesh>

            {/* Soft inner glow so the glass reads clearly against dark backgrounds */}
            <mesh scale={0.55}>
                <icosahedronGeometry args={[1.3, 2]} />
                <meshBasicMaterial color={SIGNAL} transparent opacity={0.35} />
            </mesh>

            {/* Fine wireframe shell, drifting independently */}
            <mesh ref={wireRef} scale={1.62}>
                <icosahedronGeometry args={[1.3, 1]} />
                <meshBasicMaterial color={VIOLET} wireframe transparent opacity={0.2} />
            </mesh>
        </>
    );
}

function OrbitingNode({ radius, speed, offset, size, color }) {
    const ref = useRef(null);
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed + offset;
        if (ref.current) {
            ref.current.position.set(
                Math.cos(t) * radius,
                Math.sin(t * 0.7) * radius * 0.5,
                Math.sin(t) * radius
            );
        }
    });
    return (
        <Trail width={2.5} length={5} color={color} attenuation={(t) => t * t} decay={2}>
            <mesh ref={ref}>
                <sphereGeometry args={[size, 16, 16]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.1} />
            </mesh>
        </Trail>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.45} />
            <pointLight position={[4, 4, 4]} intensity={1.3} color={SIGNAL} />
            <pointLight position={[-4, -3, -2]} intensity={0.7} color={VIOLET} />
            <pointLight position={[0, -2, 3]} intensity={0.4} color="#ffffff" />

            <CameraIntro />

            <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
                <GlassCore />
            </Float>

            <OrbitingNode radius={2.4} speed={0.5} offset={0} size={0.065} color={SIGNAL} />
            <OrbitingNode radius={2.1} speed={0.35} offset={2} size={0.05} color={VIOLET} />
            <OrbitingNode radius={2.75} speed={0.28} offset={4} size={0.045} color={SIGNAL} />

            <Sparkles count={70} scale={5.5} size={1.3} speed={0.25} color={SIGNAL} opacity={0.45} />

            <EffectComposer multisampling={0}>
                <Bloom
                    intensity={0.55}
                    luminanceThreshold={0.15}
                    luminanceSmoothing={0.9}
                    mipmapBlur
                />
                <Vignette eskil={false} offset={0.25} darkness={0.6} />
            </EffectComposer>
        </>
    );
}

function HeroScene() {
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return null;

    return (
        <div className="absolute inset-0" aria-hidden="true">
            <Canvas
                dpr={[1, 1.75]}
                camera={{ position: [0, 0, 8.5], fov: 55 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            >
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default HeroScene;
