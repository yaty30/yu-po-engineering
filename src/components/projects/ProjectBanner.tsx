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
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "2.67rem",
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
