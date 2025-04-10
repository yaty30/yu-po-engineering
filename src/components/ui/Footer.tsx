import {
  Box,
  List,
  ListItemButton,
  TextField,
  Container,
  IconButton,
  Typography,
  Stack,
  ListItem,
  Grid,
} from "@mui/material";
import {
  Email,
  Facebook,
  LinkedIn,
  Send,
  WhatsApp,
  CancelRounded,
} from "@mui/icons-material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ReactNode, useState } from "react";
import CompanyLogo from "~/assets/logos/companylogo.png";
import { RootState } from "~/stores/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useBreakpoint } from "../hooks/useBreakpoint";

const styles = {
  container: {
    minHeight: 140,
    width: "100vw",
    bgcolor: "rgba(44, 54, 74, 0.95)",
    pt: 6,
    pb: 2,
    mt: 4,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 2,
  },
  column: {
    flex: { xs: "1 1 100%", sm: "1 1 45%" },
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 2,
  },
  divider: {
    my: 3,
  },
  email: {
    bgcolor: "rgba(28, 36, 52, 0.95)",
    borderRadius: 10,
    pl: 3,
    pr: 2,
    py: 1,
    border: "1px solid transparent",
    transition: "all .3s ease-in-out",

    // Better selector targeting
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "rgba(255, 255, 255, 0.7)",
      opacity: 1,
    },

    // Ensure underline is removed
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
    "&:focus": {
      borderColor: "#fff",
    },
  },
};

const icons = {
  sendEmail: {
    color: "rgba(255, 255, 255, 0.8)",
  },
  clearEmail: {
    color: "rgba(255, 255, 255, 0.2)",
  },
};

const contacts = [
  {
    name: "whatsapp",
    icon: <WhatsApp />,
  },
  {
    name: "email",
    icon: <Email />,
  },
  {
    name: "facebook",
    icon: <Facebook />,
  },
  {
    name: "linkedin",
    icon: <LinkedIn />,
  },
];

interface ListItemHeadProps {
  icon?: ReactNode;
  title: string;
}

const ListItemHead = ({ icon, title }: ListItemHeadProps) => {
  return (
    <ListItem sx={{ fontWeight: "bold" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 1,
          color: "#fff",
          userSelect: "none",
          fontWeight: "bold",
        }}
      >
        {icon}
        {title}
      </Box>
    </ListItem>
  );
};

// Create a memoized selector to prevent unnecessary re-renders
const selectMenuOptions = (state: RootState) => state.generalStores.menuOptions;

export default () => {
  const { isMobile, isSmallScreen } = useBreakpoint();

  const navigate = useNavigate();

  const menuOptions = useSelector(selectMenuOptions);

  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <Box sx={styles.container}>
      <Container>
        <Box sx={styles.content}>
          <Box sx={styles.column}>
            <TextField
              type="email"
              variant="standard"
              placeholder="歡迎電郵查詢"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              sx={{
                ...styles.email,
                borderColor:
                  focused || email ? "rgba(255, 255, 255, 0.6)" : "transparent",
                width: isSmallScreen ? "100%" : "80%",
              }}
              slotProps={{
                input: {
                  disableUnderline: true,
                  endAdornment: (
                    <>
                      <IconButton
                        disabled={!email}
                        onClick={() => setEmail("")}
                      >
                        <CancelRounded
                          sx={{
                            color: `rgba(255, 255, 255, ${email ? 0.2 : 0})`,
                            transition: "all .1s ease-in-out",
                          }}
                        />
                      </IconButton>
                      <IconButton disabled={!email}>
                        <Send sx={email ? icons.sendEmail : {}} />
                      </IconButton>
                    </>
                  ),
                },
              }}
            />
          </Box>
          {!isMobile && (
            <Box
              sx={{
                ...styles.column,
                justifyContent: isSmallScreen ? "center" : "flex-end",
                color: "#fff",
              }}
            >
              <Typography sx={{ mr: 3, fontWeight: 500 }}>
                關注我們:{" "}
              </Typography>
              <Stack direction="row" spacing={3}>
                {contacts.map((item) => (
                  <IconButton
                    key={item.name}
                    sx={{
                      color: "#fff",
                      transition: "all .3s ease-in-out",
                      "&:hover": {
                        color: "#fb8c00",
                      },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          )}
        </Box>

        <Grid
          container
          spacing={2}
          sx={{
            ...styles.content,
            display: "flex",
            color: "#fff",
            mt: 4,
          }}
        >
          {!isSmallScreen && (
            <Grid
              size={4}
              sx={{
                display: "flex",
                alignItems: "center",
                userSelect: "none",
              }}
            >
              {/* <AccountBalance sx={{ fontSize: "4rem" }} /> */}
              <img
                src={CompanyLogo}
                style={{
                  filter: "grayscale(1) brightness(10)",
                  transform: "scale(1.2)",
                  pointerEvents: "none",
                }}
              />
            </Grid>
          )}
          <Grid size={{ xs: 6, sm: 6, md: 2 }} sx={{ display: "flex" }}>
            <List>
              <ListItemHead title="地址" icon={<LocationOnIcon />} />
              <ListItem>香港九龍觀塘道123號</ListItem>
              <ListItem>創業中心大廈</ListItem>
              <ListItem>15樓 1501-1502室</ListItem>
            </List>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 2 }} sx={{ display: "flex" }}>
            <List>
              <ListItemHead title="電子郵件" icon={<AlternateEmailIcon />} />
              <ListItemButton
                onClick={() =>
                  (window.location.href = "mailto:example@example.com")
                }
              >
                mail@example.com
              </ListItemButton>
              <ListItemButton
                onClick={() =>
                  (window.location.href = "mailto:example@example.com")
                }
              >
                info@example.com
              </ListItemButton>
              <ListItemButton
                onClick={() =>
                  (window.location.href = "mailto:example@example.com")
                }
              >
                support@example.com
              </ListItemButton>
            </List>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 2 }} sx={{ display: "flex" }}>
            <List>
              <ListItemHead title="更多資訊" icon={<InfoRoundedIcon />} />
              {menuOptions.map((item, index) => (
                <ListItemButton key={index} onClick={() => navigate(item.link)}>
                  {item.label}
                </ListItemButton>
              ))}
            </List>
          </Grid>
          {isMobile && (
            <Grid size={{ xs: 6, sm: 6, md: 2 }}>
              <List>
                <ListItemHead title="關注我們" icon={<InfoRoundedIcon />} />

                {contacts.map((item) => (
                  <ListItemButton
                    key={item.name}
                    sx={{
                      color: "#fff",
                      transition: "all .3s ease-in-out",
                      "&:hover": {
                        color: "#fb8c00",
                      },
                    }}
                  >
                    <Stack
                      direction="row"
                      sx={{
                        display: "flex",
                        columnGap: 1,
                        textTransform: "capitalize",
                      }}
                    >
                      {item.icon}
                      {item.name}
                    </Stack>
                  </ListItemButton>
                ))}
              </List>
            </Grid>
          )}
        </Grid>

        <Box sx={styles.content}>
          <Box sx={{ ...styles.column, justifyContent: "center" }}>
            <Typography
              sx={{ color: "rgba(255, 255, 255, 0.4)", mt: 4, fontSize: 12 }}
            >
              Copyright © 2025 譽寶專業公程有限公司
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
