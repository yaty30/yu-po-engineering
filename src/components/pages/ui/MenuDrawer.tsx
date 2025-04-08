import * as React from "react";
import { useCallback, memo } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CategoryIcon from "@mui/icons-material/Category";
import ContactsIcon from "@mui/icons-material/Contacts";
import { IconButton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "~/stores/store";
import { useLocation, useNavigate } from "react-router";

// Create a memoized selector
const selectMenuOptions = (state: RootState) => state.generalStores.menuOptions;

const getIconForPath = (path: string) => {
  switch (path) {
    case "/":
      return <HomeIcon />;
    case "/about":
      return <InfoIcon />;
    case "/products":
      return <CategoryIcon />;
    case "/contact":
      return <ContactsIcon />;
    default:
      return <MailIcon />;
  }
};

const MenuDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const menuOptions = useSelector(selectMenuOptions);
  const location = useLocation();
  const navigate = useNavigate();

  // Memoize toggle function
  const toggleDrawer = useCallback(
    (newOpen: boolean) => () => {
      setOpen(newOpen);
    },
    []
  );

  // Memoize navigation handler
  const handleNavigation = useCallback(
    (path: string) => () => {
      navigate(path);
      setOpen(false);
    },
    [navigate]
  );

  // Function to check if a menu option is active
  const isActive = useCallback(
    (link: string) => {
      return (
        location.pathname === link ||
        (link !== "/" && location.pathname.startsWith(link))
      );
    },
    [location.pathname]
  );

  // Memoize drawer content
  const DrawerList = React.useMemo(
    () => (
      <Box
        sx={{
          width: 280,
          pt: 2,
        }}
        role="presentation"
      >
        <Typography
          variant="h6"
          sx={{
            pl: 3,
            pb: 2,
            fontWeight: "bold",
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          功能表
        </Typography>
        <Divider />
        <List>
          {menuOptions.map((option, index) => {
            const active = isActive(option.link);

            return (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={handleNavigation(option.link)}
                  sx={{
                    bgcolor: active ? "rgba(251, 140, 0, 0.2)" : "none",
                    "&:hover": {
                      bgcolor: active ? "rgba(251, 140, 0, 0.3)" : "none",
                    },
                    borderLeft: active ? "4px solid #fb8c00" : "none",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: active ? "#fb8c00" : "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {getIconForPath(option.link)}
                  </ListItemIcon>
                  <ListItemText
                    primary={option.label}
                    primaryTypographyProps={{
                      fontWeight: active ? "bold" : "regular",
                      color: active ? "#fb8c00" : "rgba(255, 255, 255, 0.9)",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    ),
    [menuOptions, isActive, handleNavigation]
  );

  return (
    <>
      <IconButton onClick={toggleDrawer(true)} edge="end" color="inherit">
        <MenuIcon sx={{ color: "#fff" }} />
      </IconButton>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            boxShadow: 3,
            bgcolor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(40px)",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </>
  );
};

export default memo(MenuDrawer);
