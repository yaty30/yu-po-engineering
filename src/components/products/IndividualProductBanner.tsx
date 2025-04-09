import { Container, Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default () => {
  const { name } = useParams();

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          // minHeight: "50vh",
          // bgcolor: "rgba(188, 188, 188, 0.1)",
          // backdropFilter: "blur(10px)",
          // border: "1px solid rgba(163, 163, 163, 0.2)",
          // boxShadow: "0px 0px 40px 10px rgba(123, 123, 123, 0.2)",
          // borderRadius: 4,
          // transition: "all 0.5s ease-in-out",
          // "&:hover": {
          //   // transform: "scale(1.01)",
          // },
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
          {name ?? "所有產品"}
        </Typography>
      </Box>
    </Container>
  );
};
