import PandDLogo from "../../assets/PandDLogo.png"

export const Footer = () => {
    return (
        <footer className="w-full bg-black/50 backgrop-blur-sm text-white">
            <div className="flex flex-col items-center justify-center gap-4 py-8">
                
                <p className="font-display text-xs text-gray-400 leading-loose text-center">
                    当Webサイトに掲載される画像および動画は開発中のものです。<br />
                    © {new Date().getFullYear()} Valve Corporation.  SteamおよびSteamロゴは、米国及びまたはその他の国のValve Corporationの商標及びまたは登録商標です。
                </p>
                
                { /* ロゴとSNSアイコンを横並びに配置するためのコンテナ */ }
                <div className="flex items-center gap-4">
                    {/* ロゴ */}
                    <a href="https://pandd.sakura.ne.jp/" target="_blank" rel="noopener noreferrer">
                        <img src={PandDLogo} alt="PandDLogo" className="h-10 hover:opacity-70 transition-opacity" />
                    </a>

                    {/* SNS */}
                    <a
                        href="https://x.com/PandD_chan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-colors"
                        aria-label="公式X"
                    >
                        <svg viewBox="0 0 1200 1226" className="w-8 h-8 fill-white hover:fill-gray-300 transition-colors">
                            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="black"/>
                        </svg>
                    </a>
                </div>

                {/* コピーライト */}
                <p className="font-display text-xs text-gray-400">
                    © {new Date().getFullYear()} 会津大学企画開発部 Planning and Development(PandD). All rights reserved.
                </p>
                
            </div>
        </footer>
    );
};