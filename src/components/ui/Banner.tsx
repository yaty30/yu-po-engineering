import CardMedia from "@mui/material/CardMedia";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { memo, type ReactNode } from "react";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
        top: -80,
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
          padding: { xs: 3, md: 8 }, // Proper spacing from edges
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%)",
          paddingTop: "64px", // Add this to account for navbar height
        }}
      >
        <Box sx={{ position: "relative", top: 20 }}>{content && content}</Box>
      </Box>
    </Box>
  );
};

export default memo(Banner);
