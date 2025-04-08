import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Button, useMediaQuery, useTheme } from "@mui/material";

interface Props {
  date: string;
  subject: string;
  location?: string;
  image: string;
  key: number;
}

export default ({ date, subject, location, image, key = 0 }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      key={key}
      sx={{
        width: "100%",
        height: 500,
        position: "relative",
        overflow: "hidden",
        color: "white",
        borderRadius: isMobile ? 2 : 4,
        border: "1px solid rgba(160, 160, 160, 0.2)",
        boxShadow: "0 0 60px 10px rgba(60,60,60,0.34)",
        transition: "all 0.5s ease-in-out",
        "&:hover": {
          transform: "scale(1.026)",
          boxShadow: "0 0 30px 10px rgba(60,60,60,0.34)",
        },
      }}
    >
      {/* Background image layer */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("${image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay layer - bottom to top */}
      <Box
        className="gradient-overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 1,
          background:
            "linear-gradient(to top, rgba(124,123,126,0.44) 12%, rgba(124,123,126,0.18) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content layer */}
      <CardContent
        sx={{
          position: "relative",
          zIndex: 2, // Above the overlay
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 4,
          userSelect: "none",
        }}
      >
        {/* Top content section */}
        <Box>
          <Typography
            variant={isMobile ? "h6" : "h3"}
            component="div"
            sx={{
              mb: 2,
              fontWeight: "bold",
              textShadow: "1px 1px 3px rgba(0,0,0)",
            }}
          >
            {subject}
          </Typography>
          <Typography
            gutterBottom
            sx={{
              color: "white",
              textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
            }}
            variant={isMobile ? "body1" : "h6"}
          >
            {date}
          </Typography>
          {location && (
            <Typography
              variant={isMobile ? "body1" : "h6"}
              sx={{
                textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
              }}
            >
              {location}
            </Typography>
          )}
        </Box>

        {/* Spacer to push button to bottom */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Bottom button section */}
        <Button
          variant="text"
          fullWidth
          sx={{
            mt: 2,
            color: "#fff",
            fontWeight: "bold",
            textShadow: "0px 1px 1px rgba(0,0,0,0.5)",
            border: "1px solid rgba(255, 255,255, 0.2)",
            backdropFilter: "blur(8px)",
            bgcolor: "rgba(255, 255, 255, 0.08)",
            py: 1,
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.035)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // Ensures vertical alignment
              justifyContent: "center",
              width: "100%",
              height: 60,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                textShadow: "0px 1px 1px rgba(0,0,0,0.5)",
                display: "flex", // Make Typography a flex container
                alignItems: "center", // Align text and icon vertically
              }}
            >
              更多
              <ArrowForwardIosIcon
                sx={{
                  ml: 0.4,
                  fontSize: 16,
                  textShadow: "0px 1px 1px rgba(0,0,0,0.5)",
                  display: "inline-flex", // Keep icon vertically aligned
                  alignSelf: "center", // Center itself within parent
                }}
              />
            </Typography>
          </Box>
        </Button>
      </CardContent>
    </Card>
  );
};
