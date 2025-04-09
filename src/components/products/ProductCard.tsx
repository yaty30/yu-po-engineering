import {
  Box,
  Typography,
  CardMedia,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentProduct } from "~/stores/productStores";

interface ProductProps {
  id: string;
  title: string;
  subheading: string;
  image: string;
  content: string;
  link: string;
}

// Consolidated styles
const styles = {
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    maxWidth: 345,
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: 6,
    },
  },
  cardAction: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  imageContainer: {
    position: "relative",
    paddingTop: "100%", // 1:1 aspect ratio
    overflow: "hidden",
    width: "100%",
    display: "flex",
  },
  media: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  fallbackImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#666",
  },
  content: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    p: 2,
  },
  truncatedText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
  },
  title: {
    WebkitLineClamp: 1,
    color: "var(--dark-grey)",
    fontWeight: "bold",
  },
  subheading: {
    WebkitLineClamp: 1,
    mb: 1,
  },
  description: {
    WebkitLineClamp: 3,
    flexGrow: 1,
  },
};

export default function ProductCard({ product }: { product: ProductProps }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  return (
    <Card sx={styles.card}>
      <CardActionArea
        sx={{
          ...styles.cardAction,
        }}
        onClick={(event: React.SyntheticEvent) => {
          event.preventDefault();
          dispatch(setCurrentProduct(product.id))
          navigate(`/products/${product.id}/${product.title}`);
        }}
      >
        {/* Image container with fixed aspect ratio */}
        <Box sx={styles.imageContainer}>
          {imageError ? (
            <Box sx={styles.fallbackImage}>
              <QuizOutlinedIcon sx={{ fontSize: 64, mb: 1 }} />
              <Typography variant="caption">圖片無法顯示</Typography>
            </Box>
          ) : (
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              sx={styles.media}
              onError={() => setImageError(true)}
            />
          )}
        </Box>

        <CardContent sx={styles.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ ...styles.truncatedText, ...styles.title }}
          >
            {product.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ ...styles.truncatedText, ...styles.subheading }}
          >
            {product.subheading}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ ...styles.truncatedText, ...styles.description }}
          >
            {product.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
