import { memo, useState, useCallback } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Box, Chip, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ProductProps } from "~/stores/productStores";
import { useBreakpoint } from "../hooks/useBreakpoint";

const getContent = (content: string): string => {
  return content && content.length > 50
    ? `${content.slice(0, 20)}...`
    : content || "";
};

// Using memo to prevent unnecessary re-renders
const MiniProductCard = memo(function MiniProductCard(props: ProductProps) {
  const navigate = useNavigate();
  const { isMobile } = useBreakpoint();
  const [slideIn, setSlideIn] = useState<boolean>(false);

  // Using useCallback to memoize these functions
  const handleMouseEnter = useCallback(() => setSlideIn(true), []);
  const handleMouseLeave = useCallback(() => setSlideIn(false), []);
  const handleNavigate = useCallback(
    () => navigate(`/products/${props.id}/${props.title}`),
    [navigate, props.id, props.title]
  );

  return (
    <Card
      sx={{
        width: { xs: 260, md: 300 },
        height: { xs: 440, md: 480 },
        position: "relative",
        borderRadius: 4,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)", // Lighter shadow
        transition: "transform 0.2s ease", // Simplified transition
        "&:hover": {
          transform: "scale(1.02)", // Smaller scale for better performance
        },
        overflow: "hidden", // Ensure child elements don't overflow
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image as a separate element for better performance */}
      <Box
        component="img"
        src={props?.image}
        alt={props?.title || "Product image"}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
        loading="lazy" // Add lazy loading
      />

      {/* Simplified overlay with better performance */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(rgba(30, 30, 30, 0.1), rgba(30, 30, 30, 0.8))",
          zIndex: 1,
        }}
      />

      {/* Conditionally render share button only when visible */}
      {slideIn && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 3,
            display: "flex",
            right: 4,
            flexDirection: "column",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <IconButton
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "var(--dark-grey)",
              transition: "all .3s ease-in-out",
              "&:hover": {
                borderColor: "rgba(255, 255, 255)",
                bgcolor: "rgba(236, 236, 236, 0.8)",
              },
            }}
          >
            <ShareOutlinedIcon />
          </IconButton>
        </Box>
      )}

      {/* Content on top of the overlay */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Box
          sx={{
            background: "rgba(80, 80, 80, 0.2)",
            p: 2,
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: 2,
            height: 170,
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            gutterBottom
            variant={isMobile ? "h6" : "h5"}
            component="div"
            sx={{ color: "white", fontWeight: 600 }}
          >
            {props?.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "rgba(255, 255, 255, 0.8)", mt: 2 }}
          >
            {getContent(props?.content ?? "")}
          </Typography>
        </Box>
        {props.category && (
          <Box sx={{ width: "fit-content", mt: 2 }}>
            <Chip
              size="small"
              label={props.category}
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.4)",
                color: "rgba(0, 0, 0, 0.8)",
                backdropFilter: "blur(5px)",
              }}
            />
          </Box>
        )}

        <Button
          sx={{
            width: "100%",
            bgcolor: "rgba(255, 255, 255)",
            borderRadius: 10,
            mt: 2,
            color: "var(--dark-grey)",
            fontWeight: 600,
          }}
          onClick={handleNavigate}
        >
          更多資訊
        </Button>
      </Box>
    </Card>
  );
});

export default MiniProductCard;
