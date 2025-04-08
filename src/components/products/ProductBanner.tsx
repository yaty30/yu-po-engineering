import { Container, Box, Typography } from "@mui/material";

export default () => {
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
