import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  CardMedia,
  Grid,
} from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

interface ActionButtonProps {
  label: string;
  variant?: "contained" | "outlined" | "text";
  color?: string;
  bgcolor?: string;
  hoverBGcolor?: string;
  onClick?: () => void;
}

interface ArticleProps {
  title: string;
  subheading: string;
  content: string;
  actionButton?: ActionButtonProps;
  articleImage?: string;
  articleImagePosition?: "left" | "right";
}

const Article: React.FC<ArticleProps> = ({
  title,
  subheading,
  content,
  actionButton,
  articleImage,
  articleImagePosition = "left",
}) => {
  const sharedTypographyStyles: SxProps<Theme> = {
    maxWidth: { xs: "100%", md: "800px" },
    width: "100%",
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        minWidth: { xs: "fit-content", md: 960 },
      }}
      direction={articleImagePosition === "left" ? "row" : "row-reverse"}
    >
      {articleImage && (
        <Grid
          size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            userSelect: "none",
            px: 4,
          }}
        >
          <CardMedia
            component="img"
            image={articleImage}
            sx={{
              pointerEvents: "none",
              borderRadius: 4,
              boxShadow: "0 0 60px 8px rgba(20, 20, 20, 0.2)",
            }}
          />
        </Grid>
      )}
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 7 }} sx={{ px: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: { xs: "100%", md: "800px" },
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              ...sharedTypographyStyles,
              fontWeight: 600,
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              color: "#2c364a",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{
              ...sharedTypographyStyles,
              color: "#fb8c00",
              fontWeight: 500,
            }}
          >
            {subheading}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              ...sharedTypographyStyles,
              lineHeight: 1.7,
              color: "text.secondary",
            }}
          >
            {content}
          </Typography>

          {actionButton && (
            <Button
              variant={actionButton.variant}
              onClick={actionButton.onClick}
              sx={{
                alignSelf: "flex-start",
                color: actionButton.color,
                bgcolor: actionButton.bgcolor,
                fontWeight: "bold",
                px: 3,
                py: 1,
                "&:hover": {
                  bgcolor:
                    actionButton.hoverBGcolor || actionButton.hoverBGcolor,
                },
              }}
            >
              {actionButton.label}
            </Button>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Article;
