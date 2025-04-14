import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { memo, type ReactNode } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";

interface BannerProps {
  imageSrc: string;
  content?: ReactNode;
  size?: "dense" | "normal" | "max";
  opacity?: number;
  sx?: Object;
}

const Banner = ({
  imageSrc,
  content,
  size = "normal",
  opacity = 1,
  sx = {},
}: BannerProps) => {
  const { isMobile } = useBreakpoint();

  const bannerSize = (size: string) => {
    const _mbSize = (t: number | string, f: number | string) =>
      isMobile ? t : f;

    switch (size) {
      case "dense":
        return _mbSize(300, 500);
      case "max":
        return _mbSize("100vh", "100vh");
      default:
        return _mbSize(700, 850);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: bannerSize(size),
        width: "100vw",
        maxWidth: "100%",
        overflow: "hidden",
        userSelect: "none",
        // Add negative top margin to offset body padding
        mt: { xs: "-56px", sm: "-64px" }
      }}
    >
      <CardMedia
        component="img"
        loading="eager"
        sx={{
          height: "100%",
          width: "100%",
          opacity: opacity,
          ...sx,
        }}
        image={imageSrc}
        alt="Banner background"
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: { xs: 3, md: 8 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%)",
          // Add padding to ensure content doesn't hide behind navbar
          pt: { xs: "76px", sm: "84px" }
        }}
      >
        <Box sx={{ position: "relative" }}>{content && content}</Box>
      </Box>
    </Box>
  );
};

export default memo(Banner);