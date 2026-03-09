export const SupportPage = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-36 pb-16">

            {/* タイトル */}
            <h1 className="relative z-10 font-display text-black text-6xl tracking-widest pb-16 drop-shadow">
                サポート
            </h1>
            
            <section className="relative w-full flex flex-col items-center gap-12 py-16 px-4">

                {/* オーバーレイ */}
                <div 
                    className="absolute inset-0 z-0"
                    style={{
                        background: "linear-gradient(to right, transparent, rgba(200, 200, 255,0.6) 50%, rgba(200, 200, 255,0.6) 50%, transparent)"
                    }}
                />

                {/* お問い合わせ一覧 */}
                <div className="relative z-10 flex flex-col gap-8 w-full max-w-xl">

                    {/* メール */}
                    <div className="flex flex-col gap-2 border-b border-black/20 pb-8">
                        <p className="font-display text-gray-500 text-xs tracking-widest drop-shadow">
                            メールでのお問い合わせ
                        </p>
                        
                        <a
                            href="mailto:panddmail@gmail.com"
                            className="font-display text-black text-sm hover:opacity-70 transition-opacity drop-shadow"
                        >
                            panddmail@gmail.com
                        </a>
                    </div>

                    {/* 公式X */}
                    <div className="flex flex-col gap-2 border-b border-black/20 pb-8">
                        <p className="font-display text-gray-500 text-xs tracking-widest drop-shadow">
                            公式X
                        </p>
                        
                        <a
                            href="https://x.com/PandD_chan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-display text-black text-sm hover:opacity-70 transition-opacity drop-shadow"
                        >
                            @PandD_chan
                        </a>
                    </div>

                    {/* 注意書き */}
                    <p className="font-display text-gray-400 text-xs leading-loose">
                        ※お問い合わせへの回答にはお時間をいただく場合がございます。<br />
                        ※内容によっては回答できない場合もございますのでご了承ください。
                    </p>
                    
                </div>
                
            </section>
            
        </div>
    )
}