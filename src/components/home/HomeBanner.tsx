import {
  Container,
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "70%" },
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
            p: { xs: 3, md: 4 },
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              backgroundColor: { xs: "rgba(0,0,0,0.5)", md: "transparent" },
              p: { xs: 3, md: 0 },
              borderRadius: 1,
              maxWidth: { xs: "100%", md: 600 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                maxWidth: "600px", // Control width of text block
              }}
            >
              與我們攜手建設更美好的世界
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontSize: { xs: "1rem", md: "1.1rem" },
                textAlign: { xs: "center", md: "left" },
                mb: 3,
                opacity: 0.9,
              }}
            >
              與我們合作，共創可持續發展的未來解決方案。
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", sm: "auto" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              mt: { xs: 2, md: 4 },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Button
              variant="contained"
              size="large"
              fullWidth={isSmallScreen}
              sx={{
                py: { xs: 1.5, md: 1 },
                px: { xs: 3, md: 4 },
                fontWeight: "bold",
                bgcolor: "var(--primary)",
                "&:hover": {
                  bgcolor: "var(--primary-hover)",
                },
              }}
            >
              了解更多
            </Button>
            <Button
              variant="contained"
              size="large"
              fullWidth={isSmallScreen}
              sx={{
                py: { xs: 1.5, md: 1 },
                px: { xs: 3, md: 4 },
                fontWeight: "bold",
                backgroundColor: "rgba(255,255,255,0.15)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.25)",
                },
              }}
            >
              獲取報價
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
