import SteamLogo from "../../assets/SteamLogo.png";

export type DownloadItem = {
    id: number;
    platform: string;
    logoUrl: string;
    price: string;
    downloadUrl: string;
    qrCodeUrl?: string;
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
                qrCodeUrl:   "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fstore.steampowered.com%2F",
                note:        "Windows 10/11のみ対応"
            },
        ],
    },
];