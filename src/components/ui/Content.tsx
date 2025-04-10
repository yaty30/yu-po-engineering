import React from "react";
import {
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Link,
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

export default function Content({
  children,
  maxWidth = "xl",
  paddingY = 1,
  divider,
  direction = "column",
  breadcrumbs,
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
    containerSx.msOverflowStyle = "none";
    containerSx.scrollbarWidth = "none";
  }

  return (
    <Container maxWidth={maxWidth}>
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
        <Box sx={{ mb: 3, ml: 3, userSelect: "none" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              首頁
            </Link>
            {breadcrumbs.map((breadcrum, index) =>
              index === breadcrumbs.length - 1 ? (
                <Typography
                  sx={{ color: "text.primary" }}
                  key={breadcrum.label}
                >
                  {breadcrum.label}
                </Typography>
              ) : (
                <Link
                  underline="hover"
                  color="inherit"
                  href={breadcrum.link}
                  key={breadcrum.label}
                >
                  {breadcrum.label}
                </Link>
              )
            )}
          </Breadcrumbs>
        </Box>
      )}
      {children}
    </Container>
  );
}
