import PageTop from "../../assets/PageTop.png"

export type NewsItem = {
    id:       number;
    date:     string;
    title:    string;
    imageUrl: string;
    isNew:    boolean;
    body:     string;
}

export const newsItems: NewsItem[] = [
    {
        id: 1,
        date: "2026.03.10",
        title: "公式サイトを公開しました！",
        imageUrl: PageTop,
        isNew: true,
        body: `
## 公式サイトを公開しました！

PixelPileの公式サイトを公開しました。
今後も情報を更新していきますのでお楽しみに。

![スクリーンショット](/pixelpile_homepage/news/PageTopBottom.png)

### 今後の予定

- あそびかたページの追加
- ギャラリーの追加
        `,
    }
];