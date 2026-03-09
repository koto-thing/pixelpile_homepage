import { useState } from "react";
import { galleryVideos, galleryImages } from "../../domain/entities/galleryData";

export const GalleryPage = () => {
    // クリックした画像を拡大表示するための状態
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    
    return (
        <div className="flex flex-col items-center pt-36 pb-16 gap-16">

            {/* タイトル */}
            <h1 className="relative z-10 font-display text-black text-6xl tracking-widest pb-16 drop-shadow">
                ギャラリー
            </h1>

            {/* 動画セクション */}
            <section className="relative w-full flex flex-col items-center gap-8 py-16 px-4">
                
                <div 
                    className="absolute inset-0 z-0"
                    style={{
                        background: "linear-gradient(to right, transparent, rgba(255, 200, 150,0.6) 50%, rgba(255, 200, 150,0.6) 50%, transparent)"
                    }}
                />
                
                <h2 className="relative z-10 font-display text-black text-3xl tracking-widest drop-shadow">
                    宣伝ムービー
                </h2>

                {/* 動画グリッド */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                    {galleryVideos.map((video) => (
                        <div key={video.id} className="flex flex-col gap-2">

                            {/* タイトル */}
                            <div className="flex items-center gap-2">
                                <p className="font-display text-black text-sm drop-shadow">
                                    {video.title}
                                </p>
                            </div>

                            {/* Youtube埋め込み */}
                            <div className="aspect-video w-full">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                    title={video.title}
                                    allowFullScreen
                                    className="w-full h-full border border-black/20"
                                />
                            </div>
                            
                        </div>
                    ))}
                </div>
                
            </section>

            {/* スクリーンショットセクション */}
            <section className="relative w-full flex flex-col items-center gap-8 py-16 px-4">
                
                <div className="absolute inset-0 z-0"
                    style={{
                        background: "linear-gradient(to right, transparent, rgba(150, 255, 200,0.6) 50%, rgba(150, 255, 200,0.6) 50%, transparent)"
                    }}
                />
                
                <h2 className="relative z-10 font-display text-black text-3xl tracking-widest drop-shadow">
                    スクリーンショット
                </h2>

                {/* スクリーンショットのグリッド */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="cursor-pointer hover:opacity-80 transition-opacity border border-black/20"
                            onClick={() => setSelectedImage(image.imageUrl)}
                        >
                            {image.imageUrl ? (
                                <img 
                                    src={image.imageUrl}
                                    alt={image.alt ?? "スクリーンショット"}
                                    className="w-full aspect-video object-cover"
                                />
                            ) : (
                                <div className="w-full aspect-video bg-gray-300" />      
                            )}
                        </div> 
                    ))}
                </div>
                
            </section>

            {/* 拡大表示のモーダル */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* 閉じるボタン */}
                    <button
                        className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-black/80 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        ✕
                    </button>

                    <img
                        src={selectedImage}
                        alt="拡大表示"
                        className="w-full max-w-4xl max-h-[90vh] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
            
        </div>
    );
};