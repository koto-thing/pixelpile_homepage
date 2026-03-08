import { movieItems } from "../../domain/entities/movieData";

export const MovieSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center gap-8 py-16 px-4 mb-16">

            {/* オーバーレイ */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "linear-gradient(to right, transparent, rgba(255, 180, 200,0.6) 50%, rgba(255, 180, 200,0.6) 50%, transparent)"
                }}
            />

            {/* セクションのタイトル */}
            <h2 className="relative z-10 text-blank text-3xl font-display tracking-widest">
                宣伝ムービー
            </h2>

            {/* 動画一覧 */}
            <div className="relative z-10 flex flex-wrap justify-center gap-8">
                {movieItems.map((item) => (
                    <div key={item.id} className="flex flex-col gap-2">

                        {/* Youtube埋め込み */}
                        <div className="w-96 md:w-[560px] aspect-video">
                            <iframe 
                                src={`https://www.youtube.com/embed/${item.youtubeId}`}
                                title={item.title}
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                        
                    </div>
                ))}
            </div>
            
        </section>
    );
};