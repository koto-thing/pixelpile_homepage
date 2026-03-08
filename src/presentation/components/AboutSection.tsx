export const AboutSection = () => {
    return (
        <section className="relative flex items-center justify-center py-24 px-8 mb-16">
            
            {/* 半透明オーバーレイ */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(to right, transparent, rgba(150, 255, 170,0.6) 50%, rgba(150, 255, 170,0.6) 50%, transparent)"
                }}
            />

            {/* テキスト */}
            <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-4xl">

                {/* メインテキスト */}
                <p className="font-display 
                              text-sm md:text-base lg:text-xl
                              leading-loose tracking-widest drop-shadow">
                    あの「PixelPile」が<br className="block md:hidden" />
                    新たに<span className="text-red-500">進化</span>して帰ってきた！<br />
                    会津大学企画開発部の有志5人がおくる、<br className="block md:hidden" />
                    <span className="text-red-500">新感覚の落ちものパズルゲーム</span>です。
                </p>

                {/* サブテキスト */}
                <p className="font-display 
                              text-sm md:text-sm lg:text-xl
                              leading-loose tracking-widest drop-shadow">
                    「かたち」をつくって、バトルすることはもちろん、<br />
                    出現する「かたち」や「ピース」も<span className="text-red-500">カスタム可能</span>！<br />
                    自分だけの「かたち」をつくって、<br className="block md:hidden" />
                    <span className="text-red-500">世界中のお友達とバトル</span>しよう！
                </p>
                
            </div>
            
        </section>
    )
}