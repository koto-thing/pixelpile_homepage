import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { newsItems } from "../../domain/entities/newsData";

export const NewsDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const item = newsItems.find((n) => n.id === Number(id));
    
    if (!item) {
        return (
            <section className="flex flex-col items-center justify-center min-h-screen gap-4 pt-24">
                <p className="font-display text-black">おしらせが見つかりませんでした</p>
                <Link to="/news" className="font-display text-sm text-gray-500 hover:opacity-70">
                    ←おしらせ一覧へもどる
                </Link>
            </section>
        );
    }
    
    return (
        <section className="flex flex-col items-center gap-8 py-16 px-4 pt-24">

            {/* 戻るリンク */}
            <div className="w-full max-w-2xl">
                <Link to="/news" className="font-display text-xl text-black-500 drop-shadow hover:opacity-70">
                    ←おしらせ一覧へもどる
                </Link>
            </div>
            
            <div className="flex flex-col gap-6 w-full max-w-2xl">

                {/* サムネイル */}
                {item.imageUrl && (
                    <img src={item.imageUrl} alt={item.title} className="w-full object-cover" />
                )}
                
                {/* 日付とタイトル */}
                <p className="font-display text-gray-400 text-xs drop-shadow">{item.date}</p>
                <h1 className="font-display text-black text-xl drop-shadow">{item.title}</h1>
                
                <hr className="border-black/20" />

                {/* MDを描画する */}
                <ReactMarkdown
                    components={{
                        h2: ({ children }) => (
                            <h2 className="font-display text-black text-lg mt-4 drop-shadow">{children}</h2>
                        ),
                        h3: ({ children }) => (
                            <h3 className="font-display text-black text-base mt-4 drop-shadow">{children}</h3>
                        ),
                        p: ({ children }) => (
                            <p className="font-display text-black text-sm leading-loose drop-shadow">{children}</p>
                        ),
                        ul: ({ children }) => (
                            <ul className="list-disc list-inside text-black text-sm drop-shadow">{children}</ul>
                        ),
                        li: ({ children }) => (
                            <li className="font-display leading-loose drop-shadow">{children}</li>
                        ),
                        img: ({ src, alt }) => (
                            <img src={src} alt={alt} className="w-full object-cover my-4 drop-shadow" />
                        ),
                        a: ({ href, children }) => (
                            <a href={href} className="text-blue-500 hover:underline drop-shadow" target="_blank" rel="noopener noreferrer">
                                {children}
                            </a>
                        ),
                    }}
                >
                    {item.body}
                </ReactMarkdown>
                
            </div>
            
        </section>
    )
}