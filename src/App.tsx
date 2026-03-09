import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThreeBackground } from "./presentation/components/ThreeBackground";
import { Header }          from "./presentation/components/Header";
import { Footer }          from "./presentation/components/Footer";
import { TopPage }         from "./presentation/pages/TopPage";
import { NewsPage }        from "./presentation/pages/NewsPage";
import { NewsDetailPage }  from "./presentation/pages/NewsDetailPage";
import { HowToPlayPage }   from "./presentation/pages/HowToPlayPage";
import { GalleryPage }     from "./presentation/pages/GalleryPage";
import { SupportPage }     from "./presentation/pages/SupportPage";
import { DownloadPage }    from "./presentation/pages/DownloadPage";

function App() {
    return (
        <BrowserRouter basename="/pixelpile_homepage">
            <div className="min-h-screen flex flex-col">
                <Header />

                <main className="flex-1">
                    <Routes>
                        <Route path="/"            element={<TopPage />} />
                        <Route path="/news"        element={<NewsPage />} />
                        <Route path="/news/:id"    element={<NewsDetailPage />} />
                        <Route path="/how-to-play" element={<HowToPlayPage />} />
                        <Route path="/gallery"     element={<GalleryPage />} />
                        <Route path="/support"     element={<SupportPage />} />
                        <Route path="/download"    element={<DownloadPage />} />
                    </Routes>
                </main>

                <Footer />
                <ThreeBackground />
            </div>
        </BrowserRouter>
    )
}

export default App