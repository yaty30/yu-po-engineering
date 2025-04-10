import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProduct } from "~/stores/productStores";
import { RootState } from "~/stores/store";
import {
  Box,
  Grid,
  Divider,
  Paper,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tab,
} from "@mui/material";
import { useState } from "react";

export default function IndividualProductContent({ id }: { id: string }) {
  const currentProductStore = (state: RootState) =>
    state.productStores.currentProduct;

  const dispatch = useDispatch();
  const currentProduct = useSelector(currentProductStore);
  const [materialTab, setMaterialTab] = useState(0);

  useEffect(() => {
    if (id) {
      dispatch(setCurrentProduct(id));
    }

    return () => {
      dispatch(setCurrentProduct(""));
    };
  }, [dispatch, id]);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setMaterialTab(newValue);
  };

  if (!currentProduct) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h5">產品載入中...</Typography>
      </Box>
    );
  }

  return (
    <Box
      key={currentProduct?.id}
      sx={{
        border: "1px solid rgba(190,190,190,0.4)",
        borderRadius: 2,
        overflow: "hidden",
        mx: 2,
      }}
    >
      {/* Product Header Section */}
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid size={{ xs: 12, sm: 12, md: 5 }}>
          <CardMedia
            sx={{
              height: 400,
              borderRadius: 2,
              boxShadow: "0 0 40px 10px rgba(240, 240, 240, 0.5)",
            }}
            image={currentProduct?.image}
            title={currentProduct?.title}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 7 }}>
          <Box sx={{ color: "var(--dark-grey)", p: 2 }}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {currentProduct?.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ mb: 3, color: "text.secondary" }}
            >
              {currentProduct?.subheading}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" sx={{ my: 2, lineHeight: 1.8 }}>
              {currentProduct?.content}
            </Typography>

            {/* Display category as a chip */}
            <Box sx={{ mt: 3 }}>
              <Chip
                label={currentProduct?.category}
                variant="outlined"
                color="primary"
                sx={{
                  mr: 1,
                  borderColor: "var(--primary)",
                  color: "var(--primary)",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Product Details Section */}
      {currentProduct?.details && (
        <Box sx={{ mt: 3, p: 2, color: "var(--body-text)" }}>
          <Divider sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ px: 2, fontWeight: 500 }}>
              產品規格
            </Typography>
          </Divider>

          {/* Dimensions Table */}

          {currentProduct?.details?.dimension && (
            <>
              <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>
                尺寸規格
              </Typography>
              <TableContainer
                component={Paper}
                elevation={0}
                sx={{ mb: 4, border: "1px solid rgba(224, 224, 224, 1)" }}
              >
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}>
                      <TableCell>單位</TableCell>
                      <TableCell>寬度 (W)</TableCell>
                      <TableCell>高度 (H)</TableCell>
                      <TableCell>長度 (L)</TableCell>
                      <TableCell>深度 (D)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        {currentProduct.details.dimension?.unit}
                      </TableCell>
                      <TableCell>
                        {currentProduct.details.dimension?.w}
                      </TableCell>
                      <TableCell>
                        {currentProduct.details.dimension?.h}
                      </TableCell>
                      <TableCell>
                        {currentProduct.details.dimension?.l}
                      </TableCell>
                      <TableCell>
                        {currentProduct.details.dimension?.d}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}

          {/* Materials Section */}
          {currentProduct.details.materials &&
            currentProduct.details.materials.length > 0 && (
              <>
                <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: 500 }}>
                  材質選項
                </Typography>

                {/* Material Tabs */}
                <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
                  <Tabs
                    value={materialTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                      borderColor: "divider",
                      bgcolor: "background.paper",
                      "& .MuiTabs-indicator": {
                        bgcolor: "var(--primary)",
                      },
                      "& .Mui-selected": {
                        color: "var(--primary) !important",
                        fontWeight: 600,
                      },
                    }}
                  >
                    {currentProduct.details.materials.map((material, index) => (
                      <Tab key={index} label={material.type} />
                    ))}
                  </Tabs>
                </Box>

                {/* Material Options */}
                {currentProduct.details.materials.map((material, index) => (
                  <Box
                    key={index}
                    role="tabpanel"
                    hidden={materialTab !== index}
                    id={`material-tabpanel-${index}`}
                    aria-labelledby={`material-tab-${index}`}
                    sx={{ mb: 4 }}
                  >
                    {materialTab === index && (
                      <Grid container spacing={2}>
                        {material.options.map((option, optIndex) => (
                          <Grid
                            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                            key={optIndex}
                          >
                            <Paper
                              elevation={2}
                              sx={{
                                p: 2,
                                transition: "transform 0.2s, box-shadow 0.2s",
                                "&:hover": {
                                  transform: "translateY(-5px)",
                                  boxShadow: 4,
                                  cursor: "pointer",
                                },
                              }}
                            >
                              <Box
                                sx={{
                                  height: 120,
                                  width: "100%",
                                  mb: 1,
                                  backgroundImage: option.img
                                    ? `url(${option.img})`
                                    : "none",
                                  backgroundColor: option.img
                                    ? "transparent"
                                    : "rgba(0, 0, 0, 0.08)",
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  borderRadius: 1,
                                }}
                              />
                              <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 500 }}
                              >
                                {option.label}
                              </Typography>
                            </Paper>
                          </Grid>
                        ))}
                      </Grid>
                    )}
                  </Box>
                ))}
              </>
            )}
        </Box>
      )}

      {/* Call to Action Section */}
      <Box sx={{ bgcolor: "rgba(0, 0, 0, 0.03)", p: 3, mt: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ color: "var(--dark-grey)" }}>
              <Typography variant="h6">
                需要更多 <b>{currentProduct?.title}</b> 的資訊?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: 1 }}
              >
                我們的專業團隊隨時準備為您提供更詳細的產品資訊和定制化解決方案。
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ textAlign: { xs: "left", md: "right" } }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "var(--primary)",
                "&:hover": {
                  bgcolor: "var(--primary-hover)",
                },
                fontWeight: "bold",
              }}
            >
              聯繫我們
            </Button>
            <Button
              variant="outlined"
              sx={{
                ml: 1,
                color: "var(--primary)",
                borderColor: "var(--primary)",
                "&:hover": {
                  bgcolor: "var(--primary-hover-opacity-10)",
                  borderColor: "var(--primary)",
                },
                fontWeight: "bold",
              }}
            >
              下載規格書
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
