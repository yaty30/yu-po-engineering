import { memo, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "~/stores/store";
import { Box } from "@mui/material";
import NavBar from "~/components/ui/NavBar";
import Footer from "~/components/ui/Footer";
import ContactDial from "~/components/ui/ContactDial";
import { Outlet, useLocation } from "react-router-dom";

// ScrollToTop component that uses the useLocation hook to detect route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = () => {
  return (
    <Provider store={store}>
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        {/* ScrollToTop component */}
        <ScrollToTop />

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

        {/* Main content area */}
        <Box
          sx={{
            width: "100%",
            // Only add padding if banner is not present
            pt: 0,
            minHeight: "auto",
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
            <Outlet />
          </Box>
        </Box>

        <Footer />
        <ContactDial />
      </Box>
    </Provider>
  );
};

export default memo(Layout);
