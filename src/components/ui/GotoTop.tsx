import React, { useState, useEffect } from "react";
import { Fab, Zoom, useScrollTrigger, Box, Tooltip } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface GoToTopProps {
  threshold?: number;
  position?: {
    bottom: number | string;
    right: number | string;
  };
  zIndex?: number;
  size?: "small" | "medium" | "large";
}

const GoToTop: React.FC<GoToTopProps> = ({
  threshold = 100,
  position = { bottom: 100, right: 24 },
  zIndex = 1000,
  size = "medium",
}) => {
  const trigger = useScrollTrigger({
    threshold,
    disableHysteresis: true,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={trigger}>
      <Tooltip title="回到頁首" placement="top">
        <Box
          role="presentation"
          sx={{
            position: "fixed",
            bottom: position.bottom,
            right: position.right,
            zIndex: zIndex,
          }}
        >
          <Fab
            onClick={handleClick}
            size={size}
            aria-label="scroll back to top"
            sx={{
              color: "#fff",
              bgcolor: "var(--primary)",
              "&:hover": {
                bgcolor: "var(--primary-hover)",
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Tooltip>
    </Zoom>
  );
};

export default GoToTop;
