import React from "react";
import { Box, List, ListItem, CardMedia, Grid } from "@mui/material";
import Logo1 from "~/assets/logos/logo.png";
import Logo2 from "~/assets/logos/logo2.png";
import Logo3 from "~/assets/logos/logo3.png";
import Logo4 from "~/assets/logos/logo4.png";
import Logo5 from "~/assets/logos/logo5.png";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

export default () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {logos.map((logo, index) => (
        <Grid size={{ xs: 4, md: 2 }} key={logo}>
          <Box
            sx={{
              transition: "all .2s ease-in-out",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": { transform: "scale(1.25)" },
            }}
          >
            <CardMedia
              component="img"
              image={logo}
              sx={{
                width: 150,
                height: 150,
                minWidth: 80,
                minHeight: 80,
                objectFit: "contain",
                pointerEvents: "none",
                userSelect: "none",
              }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
