import { memo, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "~/stores/store";
import { Box, CircularProgress } from "@mui/material";
import NavBar from "~/components/ui/NavBar";
import Footer from "~/components/ui/Footer";
import ContactDial from "~/components/ui/ContactDial";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

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
      <Box sx={{ position: "relative", minHeight: "100vh", overflowX: 'none' }}>
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
            {/* <Box
              sx={{
                width: 200,
                height: 200,
              }}
            >
              <CardMedia
                component="image"
                sx={{
                  maxWidth: "70%",
                }}
                image="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Box> */}
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
                  // py: 4,
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
          </>
        )}
      </Box>
    </Provider>
  );
};

export default memo(Layout);
