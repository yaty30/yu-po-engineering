import {
  Box,
  Button,
  Typography,
  CardMedia,
  Tab,
  Tabs,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  CardActionArea,
  Grid,
} from "@mui/material";
import React, { useState, useEffect, type ReactNode } from "react";
import Content from "../ui/Content";
import { useBreakpoint } from "~/hooks/useBreakpoint";

interface TabPanelProps {
  tabIndex: number;
  title?: string;
  children: ReactNode;
}

const productData = [
  {
    id: "fire-doors",
    title: "防火門",
    subheading: "安全第一解決方案",
    image:
      "https://i.pinimg.com/736x/70/f5/b1/70f5b14f2bcc727bc84409128f100af6.jpg", // Steel fire door
    content:
      "我們的防火門提供經認證的防火等級，提供卓越的保護。每扇門都按照國際安全標準製造。",
    link: "/products/fire-doors",
  },
  {
    id: "steel-structures",
    title: "鋼結構",
    subheading: "耐用工程解決方案",
    image:
      "https://i.pinimg.com/736x/b8/45/38/b84538fa2aa5f4eb83bc8d2b69e69021.jpg", // Steel structure building
    content: "為商業和工業應用定制的鋼結構。專為強度、耐久性和長期性能而設計。",
    link: "/products/steel-structures",
  },
  {
    id: "sound-insulation",
    title: "隔音設施",
    subheading: "聲學控制系統",
    image:
      "https://i.pinimg.com/736x/2e/4a/65/2e4a65976158aba796fd8838b60a10cd.jpg", // Sound insulation panels
    content:
      "先進的聲學解決方案，為各種環境提供有效的隔音效果。適合辦公室、錄音室和公共場所。",
    link: "/products/sound-insulation",
  },
  {
    id: "security-gates",
    title: "安全閘",
    subheading: "增強保護解決方案",
    image:
      "https://i.pinimg.com/736x/86/30/1b/86301b1af4e7722af48ff8da58e73e48.jpg", // Security gate
    content:
      "高安全性閘門，提供保護和美觀兼備的方案。可定制設計以配合您建築的風格。",
    link: "/products/security-gates",
  },
];

const productCategories = {
  doors: ["fire-doors", "security-gates"],
  structures: ["steel-structures"],
  insulation: ["sound-insulation"],
};

export default () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { currentBreakpoint } = useBreakpoint();
  const [value, setValue] = useState(0);

  // Create refs for the content panel and title level
  const contentRef = React.useRef<HTMLDivElement>(null);
  const titleLevelRef = React.useRef<HTMLDivElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

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

  // Get products for the selected category
  const getFilteredProducts = (tabIndex: number) => {
    if (tabIndex === 0) return productData; // All products

    const categoryKeys = Object.keys(productCategories);
    if (tabIndex - 1 < categoryKeys.length) {
      const categoryKey = categoryKeys[tabIndex - 1];
      return productData.filter((product) =>
        productCategories[
          categoryKey as keyof typeof productCategories
        ].includes(product.id)
      );
    }
    return [];
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
          <Typography variant="h4" sx={{ mb: 3 }}>
            {title}
          </Typography>
        )}
        {children}
      </Box>
    ) : null;
  };

  const ProductCard = ({ product }: { product: (typeof productData)[0] }) => (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: 345,
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      <CardActionArea
        href={product.link}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* Image container with fixed aspect ratio */}
        <Box
          sx={{
            position: "relative",
            paddingTop: "100%", // 1:1 aspect ratio
            overflow: "hidden",
            width: "100%",
          }}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover", // Maintain aspect ratio while filling container
              objectPosition: "center", // Center the image
            }}
          />
        </Box>
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
            }}
          >
            {product.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              mb: 1,
            }}
          >
            {product.subheading}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              flexGrow: 1,
            }}
          >
            {product.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  const ProductList = ({ products }: { products: typeof productData }) => (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <>
      <Content>
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
              width: isMobile ? "100%" : "auto",
              position: isMobile ? "relative" : "sticky",
              top: isMobile ? "auto" : 80, // Same top spacing as ProjectsFilter
              alignSelf: "flex-start",
              zIndex: 1,
              ...(isMobile ? {} : { height: "fit-content" }), // Only set height on non-mobile
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="product category tabs"
              orientation={isMobile ? "horizontal" : "vertical"}
              sx={{
                width: "100%",
                minWidth: { md: 200 },
                borderRight: isMobile ? 0 : 1,
                borderBottom: isMobile ? 1 : 0,
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
              <Tab label="所有產品" sx={styles(0).tabs.btn} />
              <Tab label="門類產品" sx={styles(1).tabs.btn} />
              <Tab label="結構產品" sx={styles(2).tabs.btn} />
              <Tab label="隔音產品" sx={styles(3).tabs.btn} />
            </Tabs>
          </Box>

          {/* Title level reference element */}
          <Box
            ref={titleLevelRef}
            sx={{ position: "relative", height: 0, visibility: "hidden" }}
          />

          {/* Content panels */}
          <Box ref={contentRef} sx={{ flexGrow: 1, overflow: "auto" }}>
            <TabPanel tabIndex={0} title="所有產品">
              <ProductList products={getFilteredProducts(0)} />
            </TabPanel>

            <TabPanel tabIndex={1} title="門類產品">
              <ProductList products={getFilteredProducts(1)} />
            </TabPanel>

            <TabPanel tabIndex={2} title="結構產品">
              <ProductList products={getFilteredProducts(2)} />
            </TabPanel>

            <TabPanel tabIndex={3} title="隔音產品">
              <ProductList products={getFilteredProducts(3)} />
            </TabPanel>
          </Box>
        </Box>
      </Content>
    </>
  );
};
