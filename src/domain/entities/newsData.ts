import PageTop from "../../assets/PageTop.png"

export type NewsItem = {
    id: number;
    date: string;
    title: string;
    imageUrl: string;
    isNew: boolean;
}

export const newsItems: NewsItem[] = [
    {
        id: 1,
        date: "2026.03.10",
        title: "公式サイトを公開しました！",
        imageUrl: PageTop,
        isNew: true,
    }
]