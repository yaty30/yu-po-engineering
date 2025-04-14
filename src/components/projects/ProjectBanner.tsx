import { Container, Box, Typography } from "@mui/material";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { useParams } from "react-router-dom";

export default () => {
  const { isMobile } = useBreakpoint();
  const { id, subject, location, date } = useParams();

  const textShadow = `
            -1px -1px 0 rgba(0, 0, 0, 0.25),
            1px -1px 0 rgba(0, 0, 0, 0.25),
            -1px 1px 0 rgba(0, 0, 0, 0.25),
            1px 1px 0 rgba(0, 0, 0, 0.25)
          `;

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          flexDirection: "column",
          rowGap: 2,
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: isMobile ? "2rem" : "2.67rem",
            textShadow: textShadow,
          }}
        >
          {subject ?? "案例分享"}
        </Typography>

        {subject && (
          <>
            <Typography
              variant="h6"
              sx={{
                textShadow: textShadow,
              }}
            >
              {location}
            </Typography>
            <Typography
              sx={{
                textShadow: textShadow,
              }}
            >
              {date}
            </Typography>
          </>
        )}
      </Box>
    </Container>
  );
};
