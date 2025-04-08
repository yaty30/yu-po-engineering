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
        <Typography
          sx={{ color: "#fff", fontWeight: "bold", fontSize: "2.67rem" }}
        >
          所有產品
        </Typography>
      </Box>
    </Container>
  );
};
