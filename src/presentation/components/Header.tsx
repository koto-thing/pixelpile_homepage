import { useState } from "react";
import PixelPileLogo from "../../assets/PixelPileLogo.png"

export const Header = () => {
    // useStateフック: コンポーネント内の状態変数を定義するフック
    // const [値, 値を更新する関数] = useState(初期値);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm">
            <div className="flex items-center justify-between px-8 py-4">

                {/* ロゴ */}
                <a href="/">
                    <img src={PixelPileLogo} alt="PixelPileLogo" className="h-10 hover:opacity-70 transition-opacity" />
                </a>

                {/* ナビゲーションリンク */}
                <nav className="hidden md:flex gap-8">
                    {/* クリックイベントのハンドラ */}
                    <a href="#news"        className="font-display text-white hover:text-gray-300">おしらせ</a>
                    <a href="#how-to-play" className="font-display text-white hover:text-gray-300">あそびかた</a>
                    <a href="#gallery"     className="font-display text-white hover:text-gray-300">ギャラリー</a>
                    <a href="#support"     className="font-display text-white hover:text-gray-300">サポート</a>
                    <a href="#download"    className="font-display text-white hover:text-gray-300">あそぶ</a>
                </nav>

                {/* ハンバーガーボタン */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                {/* スマホ用 */}
                {isMenuOpen && (
                    <nav className="flex flex-col items-center gap-4 pb-4 md:hidden">
                        <a href="#news"        className="font-display text-white">おしらせ</a>
                        <a href="#how-to-play" className="font-display text-white">あそびかた</a>
                        <a href="#gallery"     className="font-display text-white">ギャラリー</a>
                        <a href="#support"     className="font-display text-white">サポート</a>
                        <a href="#download"    className="font-display text-white">あそぶ</a>
                    </nav>
                )}
            </div>
        </header>
    );
};