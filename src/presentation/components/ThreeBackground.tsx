import { useEffect, useRef } from "react";
import { ThreeService } from "../../Infrastructure/services/ThreeService"

export const ThreeBackground = () => {
    // canvas要素への参照を保持するためのフック
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        if (!canvasRef.current)
            return;
        
        // インスタンス化
        const threeService = new ThreeService(canvasRef.current);
        
        // アニメーションを開始
        threeService.start();
        
        return () => {
            threeService.stop();
        };
    }, []);
    
    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
        />
    );
};