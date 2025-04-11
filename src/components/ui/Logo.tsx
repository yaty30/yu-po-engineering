import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";

export default () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        my: 1,
        userSelect: "none",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Optional: Add logo image */}
      {/* <Box component="img" src="/logo.png" alt="Company Logo" sx={{ height: 40, mr: 1 }} /> */}
      <Typography
        sx={{
          fontSize: { xs: "1rem", md: "1.275rem" },
          fontWeight: "bold",
          whiteSpace: "nowrap",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          columnGap: 1,
          textShadow: `
            -1px -1px 0 rgba(0, 0, 0, 0.25),
            1px -1px 0 rgba(0, 0, 0, 0.25),
            -1px 1px 0 rgba(0, 0, 0, 0.25),
            1px 1px 0 rgba(0, 0, 0, 0.25)
          `,
        }}
        onClick={() => navigate("/")}
      >
        <Box>
          <BlurCircularIcon />
        </Box>
        <Box>譽寶專業公程有限公司</Box>
      </Typography>
    </Box>
  );
};
