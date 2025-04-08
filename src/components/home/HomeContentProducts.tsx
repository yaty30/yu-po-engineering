import { Box } from "@mui/material";
import Content from "../../components/ui/Content";
import FireDoorPicture from "~/assets/products/firedoor.jpg";
import Article from "../../components/ui/Article";

interface ProductData {
  id: string;
  title: string;
  subheading: string;
  image: string;
  content: string;
  article: string;
  link: string;
}

// Sample product data
const productData: ProductData[] = [
  {
    id: "fire-doors",
    title: "防火門",
    subheading: "安全第一解決方案",
    image: FireDoorPicture,
    content:
      "我們的防火門提供經認證的防火等級，提供卓越的保護。每扇門都按照國際安全標準製造。",
    article:
      "我們的專業團隊提供頂級防火門解決方案，致力於保障您的安全。我們的防火門不僅符合國際安全標準，更通過嚴格的防火等級認證，確保在緊急情況下提供最大程度的保護。每一扇防火門都經過精心設計和製造，採用高品質防火材料，具有卓越的耐火性能和結構完整性。無論是商業建築、工業設施還是住宅項目，我們都能提供符合要求的防火門解決方案。我們的產品不僅注重安全性能，還兼顧美觀設計，能夠與您的建築風格完美融合。",
    link: "/products/fire-doors",
  },
  {
    id: "steel-structures",
    title: "鋼結構",
    subheading: "耐用工程解決方案",
    image: FireDoorPicture, // 替換為實際圖片
    content: "為商業和工業應用定制的鋼結構。專為強度、耐久性和長期性能而設計。",
    article:
      "我們的工程師團隊專注於設計和製造符合最高標準的鋼結構系統。憑藉多年的行業經驗，我們能夠為各種商業和工業項目提供定制化的鋼結構解決方案。我們的鋼結構採用優質材料，經過精確計算和嚴格測試，確保其具有卓越的強度和耐久性。無論是大型工業廠房、商業建築還是特殊用途的結構，我們都能根據客戶的具體需求提供完美的解決方案。我們的專業團隊將全程參與，從初步設計到最終安裝，確保每個項目都能按時、按質完成。",
    link: "/products/steel-structures",
  },
  {
    id: "sound-insulation",
    title: "隔音設施",
    subheading: "聲學控制系統",
    image: FireDoorPicture, // 替換為實際圖片
    content:
      "先進的聲學解決方案，為各種環境提供有效的隔音效果。適合辦公室、錄音室和公共場所。",
    article:
      "我們提供先進的隔音設施和聲學控制系統，為客戶創造理想的聲音環境。我們的隔音解決方案採用最新的聲學技術和材料，能夠有效控制噪音傳播並優化空間音質。無論是需要高度安靜的錄音室、會議室，還是需要良好聲學效果的音樂廳、劇院，我們都能提供專業的定制解決方案。我們的專家團隊會根據空間特點和客戶需求進行詳細評估，設計出最適合的隔音方案。我們的產品不僅具有出色的聲學性能，還能與室內設計完美結合，提升整體空間美感。",
    link: "/products/sound-insulation",
  },
  {
    id: "security-gates",
    title: "安全閘",
    subheading: "增強保護解決方案",
    image: FireDoorPicture, // 替換為實際圖片
    content:
      "高安全性閘門，提供保護和美觀兼備的方案。可定制設計以配合您建築的風格。",
    article:
      "我們的安全閘系統提供卓越的保護功能，同時注重美觀設計。每一套安全閘都經過精心設計，結合了堅固的材料和先進的安全技術，為您的物業提供全面保護。我們提供多種風格和功能的安全閘，包括自動化系統、遙控操作和智能訪問控制選項。無論是住宅、商業建築還是工業設施，我們都能提供符合您特定需求的安全解決方案。我們的設計師會與您密切合作，確保安全閘與您的建築風格協調一致，既提升安全性，又增添美觀價值。我們的專業安裝團隊確保每個安全閘都按照最高標準安裝和測試。",
    link: "/products/security-gates",
  },
];

export default () => {
  return (
    <Content
      direction="row"
      maxWidth="xl"
      divider={{
        enabled: true,
        label: "我們的產品",
        id: "products",
      }}
    >
      {productData.map((product) => (
        <Box
          key={product.id}
          sx={{
            // border: "1px solid rgba(160, 160, 160, 0.2)",
            borderRadius: 4,
            boxShadow: {
              xs: "none",
              lg: "0px 0px 10px 10px rgba(210, 210, 210, 0.2)",
            },
            py: 4,
            mx: 2,
            my: { xs: 4, md: 0 },
          }}
        >
          <Article
            title={product.title}
            subheading={product.subheading}
            content={product.article}
            actionButton={{
              label: "了解更多",
              color: "#fff",
              bgcolor: "#fb8c00",
              hoverBGcolor: "#e65100",
            }}
            articleImage={product.image}
            articleImagePosition="right"
          />
        </Box>
      ))}
    </Content>
  );
};
