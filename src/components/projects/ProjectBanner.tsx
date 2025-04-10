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
            textShadow: `
            -1px -1px 0 rgba(0, 0, 0, 0.25),
            1px -1px 0 rgba(0, 0, 0, 0.25),
            -1px 1px 0 rgba(0, 0, 0, 0.25),
            1px 1px 0 rgba(0, 0, 0, 0.25)
          `,
          }}
        >
          案例分享
        </Typography>
      </Box>
    </Container>
  );
};
