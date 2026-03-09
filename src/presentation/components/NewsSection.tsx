import { newsItems } from "../../domain/entities/newsData";

export const NewsSection = () => {
    return (
        <section className="relative flex flex-col items-center gap-8 py-16 px-4 mb-16">

            {/* オーバーレイ */}
            <div
                className="absolute inset-0 -z-9"
                style={{
                    background: "linear-gradient(to right, transparent, rgba(150, 210, 255,0.6) 50%, rgba(150, 210, 255,0.6) 50%, transparent)"
                }}
            />
            
            {/* セクションタイトル */}
            <h2 className="text-black text-3xl font-display tracking-widest drop-shadow">
                最新情報
            </h2>

            {/* カード一覧 */}
            <div className="w-full overflow-x-auto">
                <div className="flex justify-center flex-wrap gap-6 px-8 pb-4">

                    {/* newsItemsをmapで繰り返し描画する */}
                    {/* C++ の range-based forみたいな感じ*/}
                    {newsItems.map((item) => (
                        <div 
                            key={item.id}
                            className="flex flex-col gap-2 w-56 cursor-pointer hover:opacity-80 transition-opacity drop-shadow"
                        >
                            {/* サムネイル */}
                            <div className="relative">
                                {item.imageUrl ? (
                                    <img src={item.imageUrl} alt={item.title} className="w-full aspect-video object-cover" />
                                ) : (
                                    <div className="w-full aspect-video bg-gray-700" />
                                )}
                            </div>

                            {/* 日付とタイトル */}
                            <p className="text-gray-400 text-xs font-display drop-shadow">{item.date}</p>
                            <p className="text-black text-sm font-display drop-shadow">{item.title}</p>
                        </div>
                    ))}
                    
                </div>
            </div>

            {/* 一覧ボタン */}
            <button className="border border-black text-black px-12 py-3 hover:bg-white hover:text-black transition-colors tracking-widest text-sm">
                お知らせ一覧へ
            </button>
            
        </section>
    );
};