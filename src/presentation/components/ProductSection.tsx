import { productInfos } from "../../domain/entities/ProductData";
import type { MemberInfo } from "../../domain/entities/ProductData";
import packageImage from "../../assets/PixelPileLogo.png";

// MemberInfo[] かどうか判定するタイプガード
const isMemberInfoArray = (value: unknown): value is MemberInfo[] =>
    Array.isArray(value) && value.length > 0 && typeof (value[0] as MemberInfo).name === "string";

export const ProductSection = () => {
    return (
        <section className="relative flex flex-col items-center gap-8 py-16 px-4 mb-16">

            {/* オーバーレイ */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "linear-gradient(to right, transparent, rgba(255,255,150,0.4) 30%, rgba(255,255,150,0.4) 70%, transparent)"
                }}
            />

            {/* セクションのタイトル */}
            <h2 className="relative z-10 text-black text-3xl font-display tracking-widest drop-shadow">
                作品情報
            </h2>

            {/* コンテンツ */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-3xl w-full">
                {/* パッケージ画像 */}
                <img 
                    src={packageImage}
                    alt="PixelPileProductImage"
                    className="w-48 md:w-64 shadow-lg"
                />

                {/* 作品情報 */}
                <div className="flex flex-col gap-4 w-full">
                    {productInfos.map((info) => (
                        <div key={info.label} className="flex gap-4 border-b border-black/20 pb-3">

                            {/* ラベル */}
                            <p className="font-display text-xs md:text-sm text-gray-500 text-right w-32 shrink-0 drop-shadow">
                                {info.label}
                            </p>

                            {/* 値 */}
                            <div className="font-display text-xs md:text-sm text-block drop-shadow">
                                {isMemberInfoArray(info.value)
                                    ? info.value.map((member) => (
                                        <p key={member.name} className="flex items-center gap-1 drop-shadow">
                                            {member.url
                                                ? (
                                                    <a
                                                        href={member.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1 hover:underline hover:text-blue-600 transition-colors drop-shadow"
                                                    >
                                                        {member.name}
                                                        {/* 外部リンクアイコン */}
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                            <polyline points="15 3 21 3 21 9" />
                                                            <line x1="10" y1="14" x2="21" y2="3" />
                                                        </svg>
                                                    </a>
                                                )
                                                : member.name
                                            }
                                        </p>
                                    ))
                                    : Array.isArray(info.value)
                                        ? info.value.map((v, i) => <p key={i}>{v}</p>)
                                        : <p>{info.value}</p>
                                }
                            </div>
                            
                        </div>
                    ))}
                </div>
                
            </div>
            
        </section>
    );
};