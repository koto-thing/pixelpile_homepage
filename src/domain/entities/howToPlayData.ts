import SoloPlayScreenshot1 from "../../assets/SoloPlayScreenshot1.png"
import SoloPlayScreenshot2 from "../../assets/SoloPlayScreenshot2.png"
import MultiPlayScreenshot1 from "../../assets/MultiPlayScreenshot1.png"
import MultiPlayScreenshot2 from "../../assets/MultiPlayScreenshot2.png"
import CustomPlayScreenshot1 from "../../assets/CustomPlayScreenshot1.png"
import CustomPlayScreenshot2 from "../../assets/CustomPlayScreenshot2.png"

export type HowToPlayItem = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    reverse?: boolean;
};

export type HowToPlaySection = {
    id: number;
    title: string;
    overlayColor: string;
    items: HowToPlayItem[];
}

export const howToPlaySections: HowToPlaySection[] = [
    {
        id:    1,
        title: "ひとりで遊ぶ",
        overlayColor: "rgba(0, 156, 209, 0.1)",
        items: [
            {
                id:          1,
                title:       "CPUと対戦！",
                description: "ひとりプレイ時は、CPUと対戦することができます。\nCPUは5段階の難易度からえらべます。",
                imageUrl:    SoloPlayScreenshot1,
                reverse:     false,
            },
            {
                id:          2,
                title:       "？？？",
                description: "すべての難易度をクリアすると...？",
                imageUrl:    SoloPlayScreenshot2,
                reverse:     true,
            },
        ],
    },
    {
        id:    2,
        title: "ふたりで遊ぶ",
        overlayColor: "rgba(208, 228, 210, 0.5)",
        items: [
            {
                id:          3,
                title:       "近くのお友達と対戦！",
                description: "ローカルプレイモードでは、同じ画面でお友達と\n対戦することができます。\nキーボードをはんぶんこして、わいわい楽しみましょう！",
                imageUrl:    MultiPlayScreenshot1,
                reverse:     false,
            },
            {
                id:          4,
                title:       "遠くのお友達と対戦！",
                description: "オンラインプレイモードでは、インターネットを通じて\n世界中のお友達と対戦することができます。",
                imageUrl:    MultiPlayScreenshot2,
                reverse:     true,
            }
        ],
    },
    {
        id:    3,
        title: "Let's カスタム！",
        overlayColor: "rgba(255, 228, 200, 0.5)",
        items: [
            {
                id:          5,
                title:       "お題をカスタム！",
                description: "お題カスタムモードでは、好きなようにお題を\nカスタマイズして遊ぶことができます。\n自分だけのオリジナルお題で、\nさらに楽しくプレイしましょう！\n※お題のカスタマイズは、ひとりプレイモードでのみ利用可能です",
                imageUrl:    CustomPlayScreenshot1,
                reverse:     false,
            },
            {
                id:          6,
                title:       "ピースをカスタム！",
                description: "ピースカスタムモードでは、好きなようにピースをカスタマイズして遊ぶことができます。\n自分だけのオリジナルピースで、さらに楽しくプレイしましょう！\n※ピースのカスタマイズは、ひとりプレイモードでのみ利用可能です",
                imageUrl:    CustomPlayScreenshot2,
                reverse:     true,
            }
        ],
    }
];