import { downloadSections } from "../../domain/entities/downloadData";

export const DownloadPage = () => {
    return (
        <div className="flex flex-col pt-24">

            {/* ページタイトル */}
            <div className="flex justify-center pt-12 pb-12">
                <h1 className="font-display text-black text-6xl tracking-widest drop-shadow">
                    あそぶ
                </h1>
            </div>

            {/* セクション */}
            {downloadSections.map((section) => (
                <section
                    key={section.id}
                    className="relative flex flex-col items-center gap-8 py-16 px-4"
                >

                    {/* オーバーレイ */}
                    <div 
                        className="absolute inset-0 z-0"
                        style={{
                            background: `linear-gradient(to right, transparent, ${section.overlayColor} 30%, ${section.overlayColor} 70%, transparent)`
                        }}
                    />

                    {/* セクションタイトル */}
                    <h2 className="relative z-10 font-display text-black text-2xl tracking-widest border-b border-black/20 pb-2 drop-shadow">
                        {section.title}
                    </h2>

                    {/* アイテム一覧 */}
                    <div className="relative z-10 flex flex-wrap justify-center gap-8 w-full max-w-3xl">
                        {section.items.map((item) => (
                            <a 
                                key={item.id} 
                                href={item.downloadUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-4 p-8 border border-black/20 hover:opacity-70 transition-opacity w-64"
                            >

                                {/* プラットフォームロゴ */}
                                {item.logoUrl ? (
                                    <img src={item.logoUrl} alt={item.platform} className="h-12 object-contain" />
                                ) : (
                                    <p className="font-display text-black text-lg">{item.platform}</p>
                                )}

                                {/* 価格 */}
                                <p className="font-display text-black text-xl drop-shadow">
                                    {item.price}
                                </p>

                                {/* 補足 */}
                                {item.note && (
                                    <p className="font-display text-gray-400 text-xs text-center">
                                        {item.note}
                                    </p>
                                )}

                                {/* ボタン */}
                                <div className="border border-black text-black px-8 py-2 text-sm font-display hover:bg-black hover:text-white transition-colors drop-shadow">
                                    ダウンロード
                                </div>

                                {/* QRコード（スマホでストアを開きたい場合に利用） */}
                                {item.qrCodeUrl && (
                                    <div className="flex flex-col items-center gap-2 pt-2">
                                        <img
                                            src={item.qrCodeUrl}
                                            alt={`${item.platform} ストアQRコード`}
                                            className="w-28 h-28 border border-black/20 bg-white p-1"
                                            loading="lazy"
                                        />
                                        <p className="font-display text-[10px] text-gray-500 text-center">
                                            スマホはこちら
                                        </p>
                                    </div>
                                )}
                            </a>
                        ))}
                    </div>
                    
                </section>
            ))}
            
        </div>
    );
};