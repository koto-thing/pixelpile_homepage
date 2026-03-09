export type MemberInfo = {
    name: string;
    url?: string;
};

type ProductInfo = {
    label: string;
    value: string | string[] | MemberInfo[];
};

export const productInfos: ProductInfo[] = [
    { label: "タイトル",       value: "PixelPile" },
    { label: "ジャンル",       value: "落ちものパズルゲーム" },
    { label: "配信予定日",     value: "2026年3月下旬" },
    { label: "対応機種・価格", value: ["Steam 基本無料"] },
    { label: "開発",           value: "会津大学企画開発部" },
    { label: "開発メンバー",   value: [
        { name: "ぼたもち", url: "" },
        { name: "wasabi",   url: "https://wasabi4767.github.io/portfolio/" },
        { name: "Ryota",    url: "" },
        { name: "lumi",     url: "https://lumi-snow.github.io/myPortfolio.html" },
        { name: "こと",     url: "https://koto-thing.com/portfolio/" },
    ] as MemberInfo[] },
]