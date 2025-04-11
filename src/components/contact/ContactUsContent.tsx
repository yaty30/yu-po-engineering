import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Stack,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Content from "../../components/ui/Content";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Copy from "../../components/ui/Copy";
import { useBreakpoint } from "../hooks/useBreakpoint";
import ContentMap from "./ContentMap";

const styles = {
  container: {
    my: 5,
  },
  link: {
    color: "var(--primary)",
    textDecoration: "underline",
    mb: 1,
    fontSize: 14,
  },
  bodyText: { color: "var(--body-text)", fontSize: 14 },
  formField: {
    mb: 3,
  },
  submitButton: {
    backgroundColor: "var(--primary)",
    color: "white",
    py: 1.5,
    px: 4,
    "&:hover": {
      backgroundColor: "var(--primary-hover)",
    },
  },
};

export default () => {
  const { isMobile } = useBreakpoint();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });
  const mapRef = useRef<HTMLDivElement>(null);
  const [expandMap, setExpandMap] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleMapExpand = () => {
    setTimeout(() => {
      const element = mapRef.current;
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY + -80;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }, 200);
    const handleScrollEnd = () => {
      setExpandMap(true);
      window.removeEventListener("scrollend", handleScrollEnd);
    };

    window.addEventListener("scrollend", handleScrollEnd);
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const newErrors = {
      name: formData.name.trim() === "",
      email: !validateEmail(formData.email),
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);

    // If no errors, submit form
    if (!Object.values(newErrors).some(Boolean)) {
      // Here you would normally send the data to your backend
      console.log("Form submitted:", formData);

      // Show success message
      setSnackbar({
        open: true,
        message: "您的訊息已成功提交，我們將盡快回覆您。",
        severity: "success",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      // Show error message
      setSnackbar({
        open: true,
        message: "請檢查表單中的錯誤並重試。",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const element = mapRef.current;
      if (element) {
        const top = element.getBoundingClientRect().top;

        // Only set expandMap to false if it's currently true
        if (expandMap && window.scrollY < top) {
          setExpandMap(false);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this only runs once on mount

  return (
    <>
      <Content maxWidth="lg">
        <Box sx={{ px: { xs: 0, md: 5 }, mb: 5 }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <Grid size={{ xs: 12, md: 4 }}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  聯絡我們
                </Typography>

                <Box
                  sx={{
                    display: { xs: "flex", md: "block" },
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: { xs: 3, sm: 4 },
                  }}
                >
                  <Box
                    sx={{
                      ...styles.container,
                      my: { xs: 0, md: 5 },
                      mb: 1,
                      textAlign: { xs: "center", md: "left" },
                      minWidth: { sm: "30%" },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: isMobile ? "center" : "flex-start",
                        alignItems: "center",
                        gap: 1,
                        color: "var(--dark-grey)",
                      }}
                    >
                      <WhatsAppIcon />
                      <Typography sx={{ fontWeight: 600 }}>WhatsApp</Typography>
                    </Box>
                    <Box
                      sx={{
                        px: 2,
                        py: 1,
                      }}
                    >
                      <Button
                        sx={{
                          ...styles.bodyText,
                          color: "var(--primary)",
                          borderColor: "var(--primary)",
                          "&:hover": {
                            backgroundColor: "var(--primary-hover-opacity-10)",
                            borderColor: "var(--primary-hover)",
                            color: "var(--primary-hover)",
                          },
                        }}
                        variant="outlined"
                      >
                        <Typography>+852 6222 0110</Typography>
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      ...styles.container,
                      my: { xs: 0, md: 5 },
                      textAlign: { xs: "center", md: "left" },
                      minWidth: { sm: "30%" },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: isMobile ? "center" : "flex-start",
                        alignItems: "center",
                        gap: 1,
                        color: "var(--dark-grey)",
                      }}
                    >
                      <AlternateEmailIcon />
                      <Typography sx={{ fontWeight: 600 }}>電子郵件</Typography>
                    </Box>
                    <Box sx={{ px: 2, py: 1 }}>
                      <Typography sx={styles.link}>
                        <a href="mailto:mail@example.com">mail@example.com</a>
                      </Typography>
                      <Typography sx={styles.link}>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </Typography>
                      <Typography sx={styles.link}>
                        <a href="mailto:support@example.com">
                          support@example.com
                        </a>
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      ...styles.container,
                      my: { xs: 0, md: 5 },
                      textAlign: { xs: "center", md: "left" },
                      minWidth: { sm: "30%" },
                    }}
                  >
                    {" "}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: isMobile ? "center" : "flex-start",
                        alignItems: "center",
                        gap: 1,
                        color: "var(--dark-grey)",
                      }}
                    >
                      <LocationOnIcon />
                      <Typography sx={{ fontWeight: 600 }}>地址</Typography>
                      <Box sx={{ ml: 1, width: "fit-content" }}>
                        <Copy textToCopy="香港九龍觀塘道123號創業中心大廈15樓1501-1502室" />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        py: 1,
                        px: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: isMobile ? "center" : "flex-start",
                        gap: 1,
                      }}
                    >
                      <Button
                        sx={{
                          color: "var(--primary)",
                          textAlign: isMobile ? "center" : "left",
                          "&:hover": {
                            bgcolor: "var(--primary-hover-opacity-10)",
                          },
                        }}
                        onClick={handleMapExpand}
                      >
                        <Stack>
                          <span>香港九龍觀塘道123號</span>
                          <span>創業中心大廈15樓</span>
                          <span>1501-1502室</span>
                        </Stack>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  border: "1px solid rgba(230, 230, 230, 0.6)",
                  boxShadow: "0px 0px 60px 10px rgba(230, 230, 230, 0.3)",
                  borderRadius: 4,
                  p: 4,
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
                  發送訊息
                </Typography>

                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="姓名"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      helperText={errors.name ? "請輸入您的姓名" : ""}
                      sx={styles.formField}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="電子郵件"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      helperText={
                        errors.email ? "請輸入有效的電子郵件地址" : ""
                      }
                      sx={styles.formField}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="電話號碼"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      sx={styles.formField}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="主題"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      sx={styles.formField}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="訊息內容"
                      name="message"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                      helperText={errors.message ? "請輸入您的訊息" : ""}
                      sx={styles.formField}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={styles.submitButton}
                      >
                        提交
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Content>
      <ContentMap expandMap={expandMap} mapRef={mapRef} />
    </>
  );
};
