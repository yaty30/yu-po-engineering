import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
        }}
        onClick={() => navigate("/")}
      >
        譽寶專業公程有限公司
      </Typography>
    </Box>
  );
};
