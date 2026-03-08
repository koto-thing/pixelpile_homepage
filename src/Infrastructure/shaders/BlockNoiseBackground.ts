import { AdditiveBlending, ShaderMaterial } from "three";

const vertexShader = /* glsl */`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
    }
`;

const fragmentShader = /* glsl */`
    uniform float uTime;
    uniform float uBlockCount;
    uniform float uSpeed;
    uniform float uAlphaStrength;
    uniform float uSpecularStrength;
    uniform float uSpecularSize;
    uniform float uSpecularSharpness;
    varying vec2 vUv;

    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    void main() {
        vec2  st        = vUv * uBlockCount;
        vec2  ipos      = floor(st);
        vec2  local     = fract(st);
        float t         = uTime * uSpeed;
        float timeFloor = floor(t);
        float noiseVal  = random(ipos + timeFloor);
        float neighbor  = random(ipos + timeFloor + vec2(1.0, 0.0));
        noiseVal        = mix(noiseVal, neighbor, 0.3);
        float rChoice   = random(ipos + timeFloor + vec2(5.2, 9.3));
        int   cornerIdx = clamp(int(floor(clamp(rChoice, 0.0, 1.0) * 4.0)), 0, 3);
        vec2  cornerPos;
        if      (cornerIdx == 0) { cornerPos = vec2(1.0, 1.0); }
        else if (cornerIdx == 1) { cornerPos = vec2(0.0, 1.0); }
        else if (cornerIdx == 2) { cornerPos = vec2(1.0, 0.0); }
        else                     { cornerPos = vec2(0.0, 0.0); }
        float d          = length(local - cornerPos);
        float specFactor = clamp(1.0 - d / uSpecularSize, 0.0, 1.0);
        specFactor       = pow(specFactor, uSpecularSharpness) * uSpecularStrength;
        float specNoise  = random(ipos + timeFloor + vec2(2.1, 7.7)) * 0.5 + 0.75;
        float spec       = specFactor * specNoise;
        float alpha      = noiseVal * uAlphaStrength;
        vec3  color      = vec3(1.0) + spec;
        gl_FragColor     = vec4(color, alpha);
    }
`;

export const createBlockNoiseMaterial = (): ShaderMaterial => {
    return new ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent:  true,
        blending:     AdditiveBlending,
        depthWrite:   false,
        depthTest:    false,
        uniforms: {
            uTime:              { value: 0 },
            uBlockCount:        { value: 60.0 },
            uSpeed:             { value: 1.0 },
            uAlphaStrength:     { value: 0.2 },
            uSpecularStrength:  { value: 0.3 },
            uSpecularSize:      { value: 1.0 },
            uSpecularSharpness: { value: 1.0 },
        },
    });
};