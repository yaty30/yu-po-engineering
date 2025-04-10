import {
  Box,
  Typography,
  Tab,
  Tabs,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";
import React, { useState, useEffect, type ReactNode, useRef } from "react";
import Content from "~/components/ui/Content";
import { useBreakpoint } from "~/components/hooks/useBreakpoint";
import ProductCard from "./ProductCard";
import { RootState } from "~/stores/store";
import { useSelector, useDispatch } from "react-redux";
import type { ProductProps } from "~/stores/productStores";
import { filterByCategory, clearFilters } from "~/stores/productStores";

interface TabPanelProps {
  tabIndex: number;
  title?: string;
  children: ReactNode;
}

// Category mapping - can be used to filter products by category
const productCategories = {
  doors: ["fire-doors", "security-gates"],
  structures: ["steel-structures"],
  insulation: ["sound-insulation"],
  equipment: ["equipment"],
  software: ["software"],
  packaging: ["packaging"],
};

const productStores = (state: RootState) => state.productStores.products;
const filteredProductStores = (state: RootState) =>
  state.productStores.filteredProducts;

const ProductsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { currentBreakpoint } = useBreakpoint();
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();
  const products = useSelector(productStores);
  const filteredProducts = useSelector(filteredProductStores);

  // Create refs for the content panel and title level
  const contentRef = useRef<HTMLDivElement>(null);
  const titleLevelRef = useRef<HTMLDivElement>(null);

  // Initialize filtered products
  useEffect(() => {
    if (filteredProducts.length === 0 && products.length > 0) {
      dispatch(clearFilters());
    }
  }, [dispatch, products, filteredProducts.length]);

  useEffect(() => {
    setValue(0);
    dispatch(clearFilters());
  }, []);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    // Apply category filter based on tab selection
    if (newValue === 0) {
      dispatch(clearFilters());
    } else {
      const categoryKeys = Object.keys(productCategories);
      if (newValue - 1 < categoryKeys.length) {
        dispatch(filterByCategory(categoryKeys[newValue - 1]));
      }
    }

    // Scroll to the title level position when tab changes
    if (!isMobile && titleLevelRef.current) {
      // Use setTimeout to ensure the scroll happens after the tab content renders
      setTimeout(() => {
        // Calculate a position that's slightly above the title level
        const yOffset = -80; // Adjust this value to control how much higher
        const element = titleLevelRef.current;
        if (element) {
          const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  const styles = (val: number) => {
    return {
      tabs: {
        btn:
          val === value
            ? {
                color: "var(--primary)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  color: "var(--primary-hover)",
                },
              }
            : {
                color: "var(--dark-grey)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  color: "var(--primary-hover)",
                },
              },
      },
    };
  };

  const TabPanel = ({ tabIndex, title, children }: TabPanelProps) => {
    const shouldShowTitle =
      title && !["xs", "sm", "md"].includes(currentBreakpoint);

    return tabIndex === value ? (
      <Box sx={{ px: 4, py: 2, flexGrow: 1 }}>
        {shouldShowTitle && (
          <Typography
            variant="h4"
            sx={{ mb: 3, color: "#000", fontWeight: 600 }}
          >
            {title}
          </Typography>
        )}
        {children}
      </Box>
    ) : null;
  };

  const ProductList = ({ products }: { products: ProductProps[] }) => (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        width: "100%",
        minHeight: "100vh", // Ensure container takes up at least full viewport height
      }}
    >
      {/* Sticky Tabs for desktop */}
      <Box
        component="aside"
        sx={{
          display: "flex",
          position: isMobile ? "relative" : "sticky",
          top: isMobile ? "auto" : 80,
          alignSelf: "flex-start",
          zIndex: 1,
          ...(isMobile
            ? {
                // These styles position the element relative to the viewport
                // regardless of the parent container's padding
                left: "50%",
                right: "50%",
                marginLeft: "-50vw",
                marginRight: "-50vw",
                width: "100vw",
                overflowX: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }
            : {
                height: "fit-content",
                width: "auto",
                px: 1,
              }),
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="product category tabs"
          variant="scrollable"
          scrollButtons={isMobile ? false : "auto"} // Disable scroll buttons on mobile
          orientation={isMobile ? "horizontal" : "vertical"}
          sx={{
            minWidth: isMobile ? "auto" : 200,
            width: isMobile ? "max-content" : "100%", // Make tab container fit content width on mobile
            borderRight: isMobile ? 0 : 1,
            borderBottom: isMobile ? 1 : 0,
            borderColor: "divider",
            bgcolor: "background.paper",
            "& .MuiTabs-indicator": {
              bgcolor: "var(--primary)",
            },
            "& .MuiTabs-flexContainer": {
              ...(isMobile && {
                width: "max-content",
              }),
            },
            "& .Mui-selected": {
              color: "var(--primary) !important",
              fontWeight: 600,
            },
            "& .MuiTabs-scroller": {
              ...(isMobile && {
                overflow: "auto !important",
                scrollbarWidth: "none", // Firefox
                "&::-webkit-scrollbar": {
                  // Chrome/Safari/Edge
                  display: "none",
                },
                msOverflowStyle: "none", // IE
              }),
            },
          }}
        >
          <Tab label="所有產品" sx={styles(0).tabs.btn} />
          <Tab label="門類產品" sx={styles(1).tabs.btn} />
          <Tab label="結構產品" sx={styles(2).tabs.btn} />
          <Tab label="隔音產品" sx={styles(3).tabs.btn} />
          <Tab label="設備" sx={styles(4).tabs.btn} />
          <Tab label="軟件" sx={styles(5).tabs.btn} />
          <Tab label="包裝" sx={styles(6).tabs.btn} />
        </Tabs>
      </Box>

      {/* Title level reference element */}
      <Box
        ref={titleLevelRef}
        sx={{ position: "relative", height: 0, visibility: "hidden" }}
      />

      {/* Content panels */}
      <Box
        ref={contentRef}
        sx={{ flexGrow: 1, overflow: "auto", pt: isMobile ? 2 : 0 }}
      >
        <TabPanel tabIndex={0} title="所有產品">
          <ProductList products={filteredProducts} />
        </TabPanel>

        <TabPanel tabIndex={1} title="門類產品">
          <ProductList products={filteredProducts} />
        </TabPanel>

        <TabPanel tabIndex={2} title="結構產品">
          <ProductList products={filteredProducts} />
        </TabPanel>

        <TabPanel tabIndex={3} title="隔音產品">
          <ProductList products={filteredProducts} />
        </TabPanel>

        <TabPanel tabIndex={4} title="設備">
          <ProductList products={filteredProducts} />
        </TabPanel>

        <TabPanel tabIndex={5} title="軟件">
          <ProductList products={filteredProducts} />
        </TabPanel>

        <TabPanel tabIndex={6} title="包裝">
          <ProductList products={filteredProducts} />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default ProductsPage;
