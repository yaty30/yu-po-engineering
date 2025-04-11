import { memo, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "~/stores/store";
import { Box, CircularProgress } from "@mui/material";
import NavBar from "~/components/ui/NavBar";
import Footer from "~/components/ui/Footer";
import ContactDial from "~/components/ui/ContactDial";
import { Outlet, useLocation } from "react-router-dom";
import GoToTop from "../ui/GotoTop";

// Define global styles interface
interface GlobalStyles {
  body: React.CSSProperties;
  "*": React.CSSProperties;
}

// Add a global style fix to prevent horizontal overflow but allow vertical scrolling
const globalStyles: GlobalStyles = {
  body: {
    margin: 0,
    padding: 0,
    overflowX: "hidden",
    overflowY: "auto",
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "100%",
  },
  "*": {
    boxSizing: "border-box",
  },
};

const Layout: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    // Apply global styles
    Object.entries(globalStyles.body).forEach(([property, value]) => {
      document.body.style[property as any] = value as string;
    });

    return () => {
      // Clean up styles when component unmounts
      Object.keys(globalStyles.body).forEach((property) => {
        document.body.style[property as any] = "";
      });
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [loading]);

  useEffect(() => {
    setLoading(true);
  }, [location]);

  return (
    <Provider store={store}>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          maxWidth: "100%",
          overflowX: "hidden",
          overflowY: "visible",
          m: 0,
          p: 0,
        }}
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
              height: "100vh",
            }}
          >
            <CircularProgress sx={{ color: "var(--primary)" }} />
          </Box>
        ) : (
          <>
            <Box
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 1100,
              }}
            >
              <NavBar />
            </Box>

            {/* Main content area with fixed padding for fixed navbar */}
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
                pt: { xs: "56px", sm: "64px" }, // Adjust based on NavBar height
                pb: { xs: "56px", sm: "64px" }, // Adjust based on Footer height
                minHeight: "100vh",
                overflowX: "hidden",
                overflowY: "visible",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  width: "100%",
                  maxWidth: "100%",
                  position: "relative",
                  bottom: 50,
                }}
              >
                <Outlet />
              </Box>
            </Box>

            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <Footer />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <GoToTop />
              <ContactDial />
            </Box>
          </>
        )}
      </Box>
    </Provider>
  );
};

export default memo(Layout);
