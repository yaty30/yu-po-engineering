import { useState } from "react";
import { Box, IconButton, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export default () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "flex-end",
        pr: 2,
        display: { xs: "none", md: "flex" },
      }}
    >
      <TextField
        variant="standard"
        placeholder="搜尋..."
        sx={{
          display: { xs: "none", md: "block" },
          transition: "all .3s ease-in-out",
          width: open ? "100%" : 0,
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          overflow: "hidden",
          "& .MuiInput-underline:before": {
            borderBottom: "1px solid rgba(255, 255, 255, 0.42)",
          },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid white",
          },
          "& .MuiInput-underline:after": {
            borderBottom: "2px solid #fb8c00",
          },
          "& .MuiInputBase-input": {
            color: "white",
            px: 1,
          },
          "& .MuiInputBase-input::placeholder": {
            color: "rgba(255, 255, 255, 0.7)",
            opacity: 1,
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "white" }} />
            </InputAdornment>
          ),
          endAdornment: open && (
            <InputAdornment position="end">
              <IconButton
                size="small"
                onClick={toggleOpen}
                sx={{ color: "white", mr: -1 }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <IconButton
        color="inherit"
        sx={{
          ml: 1,
          display: { md: open ? "none" : "inline-flex" },
        }}
        onClick={toggleOpen}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};
