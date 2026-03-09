import { Link } from "react-router-dom";
import { newsItems } from "../../domain/entities/newsData";

export const NewsPage = () => {
    return (
        <section className="relative flex flex-col items-center gap-8 py-16 px-4 pt-24">
            
            <h2 className="font-display text-black text-6xl tracking-widest drop-shadow pt-12">
                おしらせ
            </h2>

            {/* おしらせ一覧 */}
            <div className="flex flex-col gap-4 w-full max-w-2xl pt-24">
                {newsItems.map((item) => (
                    <Link 
                        to={`/news/${item.id}`}
                        key={item.id}
                        className="flex gap-4 border-b border-black/20 pb-4 hover:opacity-70 transition-opacity"
                    >
                        {/* サムネイル */}
                        {item.imageUrl ? (
                            <img src={item.imageUrl} alt={item.title} className="w-24 aspect-video object-cover" />
                        ) : (
                            <div className="w-24 aspect-video bg-gray-300 shrink-0" />
                        )}

                        {/* テキスト */}
                        <div className="flex flex-col gap-1">
                            <p className="text-gray-400 text-xs font-display drop-shadow">{item.date}</p>
                            <p className="text-black text-sm font-display drop-shadow">{item.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
            
        </section>
    );
};