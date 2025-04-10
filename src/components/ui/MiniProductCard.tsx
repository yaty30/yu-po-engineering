import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { ProductProps } from "~/stores/productStores";
import { Box, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const getContent = (content: string) => {
  const res = `${content.slice(0, 50)}...`;
  return res;
};

export default function MiniProductCard(props: ProductProps) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: { xs: 260, md: 300 },
        height: { xs: 440, md: 480 },
        position: "relative",
        backgroundImage: `url("${props?.image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 4,
        boxShadow: "0 4px 16px 2px rgba(0, 0, 0, 0.4)",
        transition: "all 0.4s ease-in-out",
        "&:hover": {
          transform: "scale(1.025)",
        },
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(rgba(30, 30, 30, 0.1), rgba(30, 30, 30, 0.8))",
        }}
      />

      {/* Content on top of the overlay */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Box
          sx={{
            backdropFilter: "blur(5px)",
            p: 2,
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: 2,
            minHeight: 140,
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
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

          <Box sx={{ width: "fit-content", mt: 2 }}>
            <Chip
              size="small"
              label={props.category}
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.4)",
                color: "rgba(0, 0, 0, 0.8)",
                backdropFilter: "blur(10px)",
              }}
            />
          </Box>
        </Box>

        <Button
          sx={{
            width: "100%",
            bgcolor: "rgba(255, 255, 255)",
            borderRadius: 10,
            mt: 2,
            color: "var(--dark-grey)",
            fontWeight: 600,
          }}
          onClick={() => navigate(`/products/${props.id}/${props.title}`)}
        >
          更多資訊
        </Button>
      </Box>
    </Card>
  );
}
