import TitleScreen from "../../assets/TitleScreen.png";
import ModeSelectScreen from "../../assets/ModeSelectScreen.png";
import ShapeBookScreen from "../../assets/ShapeBookScreen.png";
import OnlinePlaySelectScreen from "../../assets/OnlinePlaySelectScreen.png";
import CustomSelectScreen from "../../assets/CustomSelectScreen.png";
import GamePlayScreenshot1 from "../../assets/GamePlayScreenshot1.png";
import GamePlayScreenshot2 from "../../assets/GamePlayScreenshot2.png";
import GamePlayScreenshot3 from "../../assets/GamePlayScreenshot3.png";

export type GalleryVideo = {
    id: number;
    title: string;
    youtubeId: string;
};

export type GalleryImage = {
    id: number;
    imageUrl: string;
    alt?: string;
};

export const galleryVideos: GalleryVideo[] = [
    { id: 1, title: "宣伝ムービー", youtubeId: "azsFcXNs_ro" }
];

export const galleryImages: GalleryImage[] = [
    { id: 1, imageUrl: TitleScreen, alt: "タイトル画面" },
    { id: 2, imageUrl: ModeSelectScreen, alt: "モードセレクト画面" },
    { id: 3, imageUrl: ShapeBookScreen, alt: "かたち図鑑" },
    { id: 4, imageUrl: OnlinePlaySelectScreen, alt: "マルチプレイ選択画面" },
    { id: 5, imageUrl: CustomSelectScreen, alt: "カスタム選択画面" },
    { id: 6, imageUrl: GamePlayScreenshot1, alt: "ゲームプレイ画面1" },
    { id: 7, imageUrl: GamePlayScreenshot2, alt: "ゲームプレイ画面2" },
    { id: 8, imageUrl: GamePlayScreenshot3, alt: "ゲームプレイ画面3" },
];