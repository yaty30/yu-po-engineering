import { useState, useEffect, useCallback, memo } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/material";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import type { RootState } from "~/stores/store";
import NavSearch from "./NavSearch";
import { useNavigate, useLocation } from "react-router";
import MenuDrawer from "./MenuDrawer";
import { useBreakpoint } from "../hooks/useBreakpoint";

// Create a memoized selector to prevent unnecessary re-renders
const selectMenuOptions = (state: RootState) => state.generalStores.menuOptions;

const NavBar = () => {
  // Use a memoized selector
  const menuOptions = useSelector(selectMenuOptions);

  const navigate = useNavigate();
  const location = useLocation(); // Get current location
  const [scrolled, setScrolled] = useState(false);
  const { isMobile } = useBreakpoint();

  // Optimize navigation with useCallback
  const handleNavigate = useCallback(
    (link: string) => () => {
      navigate(link);
    },
    [navigate]
  );

  // Optimize scroll handler with requestAnimationFrame
  useEffect(() => {
    // Check initial scroll position
    if (window.scrollY > 0) setScrolled(true);

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 0) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to check if a menu option is active
  const isActive = useCallback(
    (link: string) => {
      // Check for exact match or if it's a sub-path
      return (
        location.pathname === link ||
        (link !== "/" && location.pathname.startsWith(link))
      );
    },
    [location.pathname]
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: scrolled ? "rgba(26, 33, 48, 0.85)" : "transparent",
        transition: "background-color .1s ease",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? 1 : "none",
        zIndex: 10,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: { xs: 1, md: 0 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: { xs: 1, md: 3 },
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            <Logo />
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {menuOptions.map((option, index) => {
              const active = isActive(option.link);

              return (
                <Button
                  key={index}
                  sx={{
                    cursor: "pointer",
                    color: active ? "var(--primary)" : "#fff", // Change text color when active
                    mx: { md: 0.5, lg: 1 },
                    px: { md: 1, lg: 2 },
                    fontSize: "0.85rem",
                    fontWeight: active ? "700" : "500", // Make font weight bolder when active
                    "&:hover": {
                      bgcolor: "transparent",
                      color: "var(--primary)",
                    },
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 8,
                      left: "50%",
                      width: active ? "50%" : 0, // Show underline when active
                      height: 2,
                      bgcolor: "var(--primary)",
                      transition: "all 0.3s ease",
                      transform: "translateX(-50%)",
                    },
                    "&:hover::after": {
                      width: "50%",
                    },
                  }}
                  onClick={handleNavigate(option.link)}
                >
                  {option.label}
                </Button>
              );
            })}
          </Box>

          {/* Right section with search and quote button */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: { xs: "auto", md: 0 },
            }}
          >
            <NavSearch />
            <Button
              variant="contained"
              sx={{
                bgcolor: "var(--primary)",
                "&:hover": {
                  bgcolor: "var(--primary-hover)",
                },
                fontWeight: "bold",
                px: { xs: 1.5, md: 2 },
                py: 1,
                display: { xs: "none", sm: "flex" },
              }}
            >
              免費報價
            </Button>
            {/* Mobile menu button */}
            {isMobile && <MenuDrawer />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

// Memoize the entire component
export default memo(NavBar);
