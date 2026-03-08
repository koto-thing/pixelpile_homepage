import { PerspectiveCamera, PlaneGeometry, Scene, ShaderMaterial, WebGLRenderer, Mesh, Timer } from "three";
import { createdGradientMaterial } from "../shaders/GradientBackground";
import { createBlockNoiseMaterial } from "../shaders/BlockNoiseBackground";
import { FallingBlocks } from "../shaders/FallingBlocks";
import blockYellow from "../../assets/blocks/block_yellow.png";
import blockBlue   from "../../assets/blocks/block_blue.png";
import blockGreen  from "../../assets/blocks/block_green.png";
import blockPink   from "../../assets/blocks/block_pink.png";

export class ThreeService {
    private scene: Scene;
    private camera: PerspectiveCamera;
    private renderer: WebGLRenderer;
    private timer: Timer;
    private animationId: number | null = null;
    
    private gradientMesh:   Mesh;
    private blockNoiseMesh: Mesh;
    
    private fallingBlocks: FallingBlocks;
    
    constructor(canvas: HTMLCanvasElement) {
        // シーンを作成
        this.scene = new Scene();
        
        // タイマーを作成
        this.timer = new Timer();
        
        // カメラを作成
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;
        
        // レンダラーを作成
        this.renderer = new WebGLRenderer({ canvas,  alpha: true, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        const plane = new PlaneGeometry(2, 2);
        
        // 各シェーダーのマテリアルを作成
        this.gradientMesh = new Mesh(plane,  createdGradientMaterial());
        this.blockNoiseMesh = new Mesh(plane,  createBlockNoiseMaterial());
        this.gradientMesh.renderOrder   = -2;
        this.blockNoiseMesh.renderOrder = -1;
        
        // シーンにメッシュを追加
        this.scene.add(this.gradientMesh);
        this.scene.add(this.blockNoiseMesh);
        
        // FallingBlocksを初期化
        this.fallingBlocks = new FallingBlocks([
            blockYellow, blockBlue, blockGreen, blockBlue,
        ]);
        this.fallingBlocks.create(this.scene, 20);
        
        // ウィンドウサイズ変更時のイベントリスナーを登録
        window.addEventListener("resize", this.onWindowResize);
    }
    
    private onWindowResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    // アニメーションループを開始
    public start() {
        const animate = () => {
            this.animationId = requestAnimationFrame(animate);
            
            // Timerから経過時間を取得
            this.timer.update();
            const elapsed = this.timer.getElapsed();

            // uniformにtimeを渡す
            (this.gradientMesh.material   as ShaderMaterial).uniforms.uTime.value = elapsed;
            (this.blockNoiseMesh.material as ShaderMaterial).uniforms.uTime.value = elapsed;

            // ブロックを毎フレーム更新
            this.fallingBlocks.update(this.scene);

            this.renderer.render(this.scene, this.camera);
        };
        
        animate();
    }
    
    public stop() {
        if (this.animationId !== null) 
        {
            cancelAnimationFrame(this.animationId);
        }
        
        window.removeEventListener("resize", this.onWindowResize);
        this.renderer.dispose();
    }
}