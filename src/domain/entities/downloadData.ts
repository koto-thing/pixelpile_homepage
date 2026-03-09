import SteamLogo from "../../assets/SteamLogo.png";

export type DownloadItem = {
    id: number;
    platform: string;
    logoUrl: string;
    price: string;
    downloadUrl: string;
    note?: string;
};

export type DownloadSection = {
    id:       number;
    title:    string;
    overlayColor: string;
    items:    DownloadItem[];
};

export const downloadSections: DownloadSection[] = [
    {
        id:           1,
        title:        "PC",
        overlayColor: "rgba(150,210,255,0.4)",
        items: [
            {
                id:          1,
                platform:    "Steam",
                logoUrl:     SteamLogo,
                price:       "基本無料",
                downloadUrl: "https://store.steampowered.com/",
                note:        "Windows 10/11のみ対応"
            },
        ],
    },
];