import React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useNavigate } from "react-router-dom";

interface DividerProps {
  enabled?: boolean;
  id?: string;
  label: string;
  color?: string;
}

interface BreadcrumbsProps {
  label: string;
  link: string;
}

interface ContentProps {
  children?: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  paddingY?: number;
  paddingX?: number;
  divider?: DividerProps;
  direction?: "column" | "row";
  breadcrumbs?: Array<BreadcrumbsProps>;
}

const sx = {
  clickable: {
    "&:hover": {
      color: "var(--primary-hover)",
    },
  },
};

export default function Content({
  children,
  maxWidth = "xl",
  paddingY = 1,
  divider,
  direction = "column",
  breadcrumbs,
}: ContentProps) {
  const theme = useTheme();
  const { isMobile, isLarge } = useBreakpoint();

  const navigate = useNavigate();

  // Determine container styles based on direction prop
  const containerSx: SxProps<Theme> = {
    width: "100%",
    maxWidth: maxWidth ? theme.breakpoints.values[maxWidth] : "100%",
    margin: "0 auto", // Center the container
    py: isMobile ? 2 : paddingY, // Center the container
  };

  if (isLarge && direction === "row") {
    containerSx.overflowX = "auto";
    containerSx.display = "flex";
    containerSx.msOverflowStyle = "none";
    containerSx.scrollbarWidth = "none";
  }

  return (
    <Container maxWidth={maxWidth} sx={{ pt: 2 }}>
      {divider?.enabled && (
        <Box sx={{ mt: 8, mb: 6 }}>
          {" "}
          {/* Add significant spacing around the divider */}
          <Divider
            id={divider?.id || undefined}
            variant="middle"
            sx={{
              userSelect: "none",
              maxWidth: "90%", //theme.breakpoints.values["xl"],
              mx: "auto", // Use mx instead of margin to preserve vertical margins
              "&::before, &::after": {
                borderColor: divider?.color
                  ? `${divider.color}40`
                  : "rgba(0, 0, 0, 0.2)",
              },
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
        </Box>
      )}

      {breadcrumbs && (
        <Box sx={{ mb: 3, userSelect: "none" }}>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              fontSize: 12,
              "& .MuiBreadcrumbs-separator": {
                fontSize: { xs: 14, sm: 16 },
              },
            }}
          >
            <Button
              onClick={() => navigate("/")}
              color="inherit"
              sx={{
                ...sx.clickable,
                p: { xs: 0, sm: 1 },
                m: { xs: 0, sm: 0.25 },
                minWidth: { xs: "auto", sm: "64px" },
                display: "flex",
                alignItems: "center",
                gap: 0.4,
              }}
            >
              <span>首頁</span>
            </Button>
            {breadcrumbs.map((breadcrum, index) =>
              index === breadcrumbs.length - 1 || breadcrum.link == "" ? (
                <Button
                  key={breadcrum.label}
                  disabled
                  sx={{
                    p: { xs: 0, sm: 1 },
                    m: { xs: 0, sm: 0.25 },
                    minWidth: { xs: "auto", sm: "64px" },
                  }}
                >
                  <span
                    style={{ color: "var(--primary-hover)", fontWeight: 600 }}
                  >
                    {breadcrum.label}
                  </span>
                </Button>
              ) : (
                <Button
                  color="inherit"
                  key={breadcrum.label}
                  onClick={() => navigate(`/${breadcrum.link}`)}
                  sx={{
                    ...sx.clickable,
                    p: { xs: 0, sm: 1 },
                    m: { xs: 0, sm: 0.25 },
                    minWidth: { xs: "auto", sm: "64px" },
                  }}
                >
                  {breadcrum.label}
                </Button>
              )
            )}
          </Breadcrumbs>
        </Box>
      )}
      {children}
    </Container>
  );
}
