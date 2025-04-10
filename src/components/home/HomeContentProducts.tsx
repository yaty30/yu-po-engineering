import { Box, Button } from "@mui/material";
import Content from "../../components/ui/Content";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { randomProductList } from "~/stores/productStores";
import { RootState } from "~/stores/store";
import MiniProductCard from "../ui/MiniProductCard";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useNavigate } from "react-router-dom";

const listState = (state: RootState) => state.productStores.randomProducts;

export default () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const randomList = useSelector(listState);
  useEffect(() => {
    dispatch(randomProductList());
  }, []);
  return (
    <Content
      direction="row"
      maxWidth="xl"
      divider={{
        enabled: true,
        label: "我們的產品",
        id: "products",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          bottom: 20,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            columnGap: 6,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "70vw",
            overflowY: "scroll",
            // height: 400,
            py: 3,
            px: 3,
          }}
        >
          {[...randomList].map((product) => (
            <Box key={product.id}>
              <MiniProductCard {...product} />
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          endIcon={<KeyboardArrowRightOutlinedIcon />}
          sx={{
            ml: 1,
            color: "var(--primary)",
            borderColor: "var(--primary)",
            "&:hover": {
              bgcolor: "var(--primary-hover-opacity-10)",
              borderColor: "var(--primary)",
            },
            transition: "all 0.3s ease",
            padding: "8px 16px",
            borderRadius: "4px",
            fontWeight: 500,
          }}
          onClick={() => navigate("/products")}
        >
          查看所有產品
        </Button>
      </Box>
    </Content>
  );
};
