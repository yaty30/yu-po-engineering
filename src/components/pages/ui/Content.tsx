import React from "react";
import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

interface DividerProps {
  enabled?: boolean;
  id?: string;
  label: string;
  color?: string;
}

interface ContentProps {
  children?: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  paddingY?: number;
  paddingX?: number;
  articleImage?: string;
  articleImagePosition?: "left" | "right";
  divider?: DividerProps;
  direction?: "column" | "row";
}

export default function Content({
  children,
  maxWidth = "xl",
  paddingY = 4,
  articleImage,
  articleImagePosition = "left",
  divider,
  direction = "column",
}: ContentProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery(theme.breakpoints.up("md"));

  // Determine container styles based on direction prop
  const containerSx: SxProps<Theme> = {
    width: "100%",
    maxWidth: maxWidth ? theme.breakpoints.values[maxWidth] : "100%",
    margin: "0 auto", // Center the container
    py: isMobile ? 2 : paddingY,
  };

  if (isLarge && direction === "row") {
    containerSx.overflowX = "auto";
    containerSx.display = "flex";
    // containerSx.flexDirection = { xs: "column", md: "row" };
    // containerSx["&::-webkit-scrollbar"] = { display: "none" };
    containerSx.msOverflowStyle = "none";
    containerSx.scrollbarWidth = "none";
  }

  return (
    <Box sx={{ width: "100%" }}>
      {divider?.enabled && (
        <Divider
          id={divider?.id || undefined}
          variant="middle"
          sx={{
            my: 4,
            userSelect: "none",
            maxWidth: theme.breakpoints.values["xl"],
            margin: "0 auto",
          }}
        >
          <Typography
            sx={{
              color: divider?.color ?? "rgba(0, 0, 0, 0.5)",
              mx: 2,
              fontWeight: 500,
            }}
          >
            {divider?.label}
          </Typography>
        </Divider>
      )}

      <Box sx={containerSx}>{children}</Box>
    </Box>
  );
}
