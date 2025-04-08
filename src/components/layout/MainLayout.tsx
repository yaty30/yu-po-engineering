import React, { memo, useMemo, type ReactNode } from "react";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import { store } from "~/stores/store";
import { Box } from "@mui/material";
import NavBar from "~/components/ui/NavBar";
import Footer from "~/components/ui/Footer";
import ContactDial from "~/components/home/ContactDial";
import Banner from "~/components/ui/Banner";

interface BannerProps {
  src: string;
  content?: ReactNode;
  size?: "dense" | "max" | "normal";
}

interface LayoutProps {
  children?: ReactNode;
  banner?: BannerProps;
}

const Layout = ({ children, banner }: LayoutProps) => {
  // Use useMemo for constants and calculations
  const navbarHeight = useMemo(() => "64px", []);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => {
    return { navbarHeight: 64 };
  }, []);

  return (
    <Provider store={store}>
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        {/* Navbar fixed at the top */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1100, // Higher than normal content
          }}
        >
          <NavBar />
        </Box>

        {/* Banner with full height if present */}
        {banner && (
          <Banner
            imageSrc={banner.src}
            content={banner?.content ?? undefined}
            size={banner?.size}
          />
        )}

        {/* Main content area */}
        <Box
          sx={{
            width: "100%",
            // Only add padding if banner is not present
            pt: banner ? 0 : navbarHeight,
            minHeight: banner ? "auto" : `calc(100vh - ${navbarHeight})`,
          }}
        >
          <Box
            sx={{
              py: 4,
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            {children}
          </Box>
        </Box>

        <Footer />
        <ContactDial />
      </Box>
    </Provider>
  );
};

export default memo(Layout);
