import { useState } from "react";
import { Link } from "react-router-dom";
import PixelPileLogo from "../../assets/PixelPileLogo.png";

export const Header = () => {
    // useStateフック: コンポーネント内の状態変数を定義するフック
    // const [値, 値を更新する関数] = useState(初期値);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm">
            <div className="flex items-center justify-between px-8 py-4">

                {/* ロゴ */}
                <Link to="/">
                    <img src={PixelPileLogo} alt="PixelPileLogo" className="h-10 hover:opacity-70 transition-opacity" />
                </Link>

                {/* ナビゲーションリンク */}
                <nav className="hidden md:flex gap-8">
                    {/* クリックイベントのハンドラ */}
                    <Link to="/news"        className="font-display text-white hover:text-gray-300 drop-shadow">おしらせ</Link>
                    <Link to="/how-to-play" className="font-display text-white hover:text-gray-300 drop-shadow">あそびかた</Link>
                    <Link to="/gallery"     className="font-display text-white hover:text-gray-300 drop-shadow">ギャラリー</Link>
                    <Link to="/support"     className="font-display text-white hover:text-gray-300 drop-shadow">サポート</Link>
                    <Link to="/download"    className="font-display text-white hover:text-gray-300 drop-shadow">あそぶ</Link>
                </nav>

                {/* ハンバーガーボタン */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                
            </div>

            {/* スマホ用 */}
            <nav className={`flex flex-col items-center gap-4 pb-4 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <Link to="/news"        onClick={() => setIsMenuOpen(false)} className="font-display text-white drop-shadow">おしらせ</Link>
                <Link to="/how-to-play" onClick={() => setIsMenuOpen(false)} className="font-display text-white drop-shadow">あそびかた</Link>
                <Link to="/gallery"     onClick={() => setIsMenuOpen(false)} className="font-display text-white drop-shadow">ギャラリー</Link>
                <Link to="/support"     onClick={() => setIsMenuOpen(false)} className="font-display text-white drop-shadow">サポート</Link>
                <Link to="/download"    onClick={() => setIsMenuOpen(false)} className="font-display text-white drop-shadow">あそぶ</Link>
            </nav>
        </header>
    );
};