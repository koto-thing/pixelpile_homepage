import { ShaderMaterial } from "three";

const vertexShader = /* glsl */`
    varying vec2 vUv;
    
    void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
    }
`;

const fragmentShader = /* glsl */`
    uniform float uTime;
    uniform vec3  uColor1;
    uniform vec3  uColor2;
    uniform vec3  uColor3;
    uniform float uSpeed;
    uniform float uScale;
    uniform float uWaveStrength;
    uniform float uGridResolution;
    varying vec2 vUv;
    
    void main() {
        vec2 uv = vUv;
        if (uGridResolution > 0.0) {
            uv = floor(uv * uGridResolution) / uGridResolution;
        }
        
        vec2 noiseUV = uv * uScale;
        float time = uTime * uSpeed;
        float wave1 = sin(noiseUV.x + time + noiseUV.y * 0.5);
        float wave2 = cos(noiseUV.y - time * 0.8 + noiseUV.x * 0.5);
        float blend1 = (wave1 + 1.0) * 0.5;
        float blend2 = (wave2 + 1.0) * 0.5;
        vec3 col = mix(uColor1, uColor2, blend1);
        float mask = smoothstep(1.0 - uWaveStrength, 1.0, blend2);
        col = mix(col, uColor3, mask * 0.4);
        gl_FragColor = vec4(col, 1.0);
    }
`;

export const createdGradientMaterial = () => {
    return new ShaderMaterial({
        vertexShader,
        fragmentShader,
        depthWrite: false,
        depthTest:  false,
        uniforms: {
            uTime:           { value: 0 },
            uColor1:         { value: [1.0, 0.8, 0.9] },
            uColor2:         { value: [0.8, 0.9, 1.0] },
            uColor3:         { value: [1.0, 1.0, 0.9 ] },
            uSpeed:          { value: 1.0 },
            uScale:          { value: 1.0 },
            uWaveStrength:   { value: 0.5 },
            uGridResolution: { value: 32.0 },
        },
    });
};