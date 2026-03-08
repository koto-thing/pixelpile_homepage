import {
    Mesh, PlaneGeometry, MeshBasicMaterial,
    TextureLoader, Object3D
} from "three";

// ブロック1つのデータ型
type Block = {
    mesh:    Mesh;
    speedY:  number;  // 落下速度
    speedR:  number;  // 回転速度
};

export class FallingBlocks {
    private blocks: Block[] = [];
    private loader = new TextureLoader();

    // 画像のパスリスト
    private imagePaths: string[];

    constructor(imagePaths: string[]) {
        this.imagePaths = imagePaths;
    }

    // ブロックを生成してシーンに追加
    public create(scene: Object3D, count: number = 20) {
        for (let i = 0; i < count; i++) {
            this.spawnBlock(scene, true);
        }
    }

    // ブロックを1つ生成
    // initialSpawn: true のとき画面内のランダムな高さに配置
    private spawnBlock(scene: Object3D, initialSpawn = false) {
        const path = this.imagePaths[Math.floor(Math.random() * this.imagePaths.length)];
        const texture  = this.loader.load(path);
        const geometry = new PlaneGeometry(0.4, 0.4);
        const material = new MeshBasicMaterial({ map: texture, transparent: true });
        const mesh     = new Mesh(geometry, material);

        // X座標：画面の横幅に合わせてランダムに配置
        mesh.position.x = (Math.random() - 0.5) * 10;

        // Y座標：初期化時は画面内、それ以外は画面上部から
        mesh.position.y = initialSpawn
            ? (Math.random() - 0.5) * 8
            : 5;

        mesh.position.z = (Math.random() - 0.5) * 2;

        // 初期の回転をランダムに
        mesh.rotation.z = Math.random() * Math.PI * 2;

        mesh.renderOrder = 1;
        mesh.position.z  = 3;

        scene.add(mesh);

        this.blocks.push({
            mesh,
            speedY: 0.003 + Math.random() * 0.007,  // 落下速度をランダムに
            speedR: (Math.random() - 0.5) * 0.02,   // 回転速度をランダムに
        });
    }

    // 毎フレーム呼び出す
    public update(scene: Object3D) {
        this.blocks.forEach((block) => {
            block.mesh.position.y -= block.speedY;
            block.mesh.rotation.z += block.speedR;

            // 画面下に消えたら上に戻す
            if (block.mesh.position.y < -5) {
                block.mesh.position.y = 5;
                block.mesh.position.x = (Math.random() - 0.5) * 10;
            }
        });
    }

    public dispose(scene: Object3D) {
        this.blocks.forEach(({ mesh }) => {
            scene.remove(mesh);
            mesh.geometry.dispose();
        });
        this.blocks = [];
    }
}