import { NewsSection }    from "../components/NewsSection";
import { AboutSection }   from "../components/AboutSection";
import { MovieSection }   from "../components/MovieSection";
import { ProductSection } from "../components/ProductSection";
import PixelPileLogo from "../../assets/PixelPileLogo.png";
import SteamLogo     from "../../assets/SteamLogo.png";

export const TopPage = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center h-screen pt-24 pb-16 gap-25">

                {/* ロゴ */}
                <img src={PixelPileLogo} alt="PixelPile" className="h-48" />

                {/* キャッチコピー */}
                <div className="flex flex-col items-center gap-1 font-display text-black 
                                text-base md:text-4xl lg:text-3xl
                                tracking-widest drop-shadow-lg">
                    <p>落として、作って、たたかえ！</p>
                    <p>「かたち」をつくる落ちものパズルゲーム</p>
                </div>

                {/* 発売予定日とプラットフォーム */}
                <div className="flex flex-col items-center gap-16">
                    <p className="font-display text-black 
                                  text-xl md: text-3xl lg:text-5xl 
                                  tracking-widest drop-shadow-lg">
                        配信予定日：2026年3月下旬
                    </p>
                    
                    <div className="flex items-center gap-6">
                        <img src={SteamLogo} alt="Steam" className="h-12" />
                    </div>
                </div>

            </section>

            <NewsSection />
            <AboutSection />
            <MovieSection />
            <ProductSection />
        </>
    )
}