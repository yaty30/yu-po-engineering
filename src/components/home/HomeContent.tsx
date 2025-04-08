import { Box } from "@mui/material";
import Content from "../../components/ui/Content";
import ProfilePicture from "~/assets/worker.jpg";
import Article from "../../components/ui/Article";
import HomeContentProducts from "./HomeContentProducts";
import Collabs from "./Collabs";

export default () => {
  const articleContent = `我們的認證專業團隊提供高品質的建築服務，專為滿足您的特定需求而設計。憑藉多年的行業經驗，我們確保每個項目都能成功完成。`;

  return (
    <>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 2, md: 4, lg: 4 },
          py: { xs: 3, md: 4 },
        }}
      >
        <Article
          title="專業建築服務"
          subheading="專業解決您的建築需求"
          content={articleContent}
          actionButton={{
            label: "了解更多",
            color: "#fff",
            bgcolor: "#fb8c00",
            hoverBGcolor: "#e65100",
          }}
          articleImage={ProfilePicture}
        />
      </Box>

      <Content
        divider={{
          enabled: true,
          label: "合作廠商",
        }}
      >
        <Collabs />
      </Content>

      <HomeContentProducts />
    </>
  );
};
