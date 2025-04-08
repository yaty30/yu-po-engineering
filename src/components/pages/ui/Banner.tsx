import CardMedia from "@mui/material/CardMedia";
import {
  Box,
  Button,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { memo, type ReactNode } from "react";

interface BannerProps {
  imageSrc: string;
  content?: ReactNode;
  size?: "dense" | "max" | "normal";
}

const Banner = ({ imageSrc, content, size = "normal" }: BannerProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const bannerSize = (size: string) => {
    switch (size) {
      case "dense":
        return 400;
      case "max":
        return "96vh";
      default:
        return 800;
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: bannerSize(size),
        maxHeight: bannerSize(size),
        // Height: "90vh",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <CardMedia
        component="img"
        loading="eager"
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
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
        {content && content}
      </Box>
    </Box>
  );
};

export default memo(Banner);
