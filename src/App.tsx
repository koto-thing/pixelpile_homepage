import { ThreeBackground } from "./presentation/components/ThreeBackground"
import { Header }          from "./presentation/components/Header"
import { Footer }          from "./presentation/components/Footer"
import { TopPage }         from "./presentation/pages/TopPage"

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            
            <main className="flex-1">
                <TopPage />
            </main>
            
            <Footer />
            <ThreeBackground />
        </div>
    )
}

export default App