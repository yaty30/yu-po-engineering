import { Container, Box, Typography } from "@mui/material";
import { useBreakpoint } from "../hooks/useBreakpoint";

export default () => {
  const { isMobile } = useBreakpoint();

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
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: isMobile ? "2rem" : "2.67rem",
          }}
        >
          所有產品
        </Typography>
      </Box>
    </Container>
  );
};
