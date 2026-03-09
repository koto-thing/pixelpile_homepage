import { howToPlaySections } from "../../domain/entities/HowToPlayData";

export const HowToPlayPage = () => {
    return (
        <div className="flex flex-col pt-24">

            {/* セクションタイトル */}
            <div className="flex justify-center py-12">
                <h1 className="font-display text-black text-6xl tracking-widest drop-shadow">
                    あそびかた
                </h1>
            </div>

            {/* セクションをループ */}
            {howToPlaySections.map((section) => (
                <div key={section.id} className="flex flex-col pt-12 mb-16">

                    {/* セクションタイトル */}
                    <div className="flex justify-center py-8">
                        <h2 className="font-display text-black text-4xl tracking-widest border-b border-black/20 pb-2 drop-shadow">
                            {section.title}
                        </h2>
                    </div>

                    {/* セクション内のアイテムをループ */}
                    {section.items.map((item) => (
                        <section
                            key={item.id}
                            className="relative flex items-center justify-center py-24 px-8"
                        >
                            {/* オーバーレイ */}
                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    background: `linear-gradient(to right, transparent, ${section.overlayColor} 30%, ${section.overlayColor} 70%, transparent)`
                                }}
                            />

                            {/* コンテンツ */}
                            <div className={`relative z-10 flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full
                                ${item.reverse ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* テキスト */}
                                <div className="flex flex-col gap-4 flex-1">
                                    <h3 className="font-display text-black text-3xl tracking-widest drop-shadow">
                                        {item.title}
                                    </h3>
                                    <p className="font-display text-black text-base leading-loose whitespace-pre-wrap drop-shadow">
                                        {item.description}
                                    </p>
                                </div>

                                {/* 画像 */}
                                <div className="flex-1">
                                    {item.imageUrl ? (
                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className="w-full object-cover border border-black/20"
                                        />
                                    ) : (
                                        <div className="w-full aspect-video bg-gray-300" />
                                    )}
                                </div>
                            </div>

                        </section>
                    ))}

                </div>
            ))}
            
        </div>
    );
};