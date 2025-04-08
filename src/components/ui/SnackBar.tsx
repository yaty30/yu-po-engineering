import React, { type ReactNode } from "react";
import {
  Snackbar as MUISnackbar,
  styled,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const StyledSnackbar = styled(MUISnackbar)({
  "& .MuiSnackbarContent-root": {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    fontWeight: 600,
    color: "var(--primary-hover)",
    backdropFilter: "blur(10px)",
    // boxShadow: "0px 0px 10px 4px rgba(210, 210, 210, 0.3)",
    // textShadow: "0px 0px 1px rgba(0,0,0)",
  },
});

// Custom message component to display icon and text
const SnackbarMessage = ({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    {icon}
    <span>{title}</span>
  </Box>
);

interface SnackbarProps {
  open: boolean;
  title: string;
  icon: ReactNode;
  showCloseButton?: boolean;
  onClose?: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({
  open,
  title,
  icon,
  showCloseButton = true,
  onClose,
}) => {
  // Optional close action for the Snackbar
  const action = showCloseButton ? (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={onClose}
      sx={{
        color: "var(--primary-opacity-40)",
        "&:hover": {
          backgroundColor: "var(--primary-hover-opacity-10)",
        },
      }}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  ) : undefined;

  return (
    <StyledSnackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      message={<SnackbarMessage icon={icon} title={title} />}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      action={action}
    />
  );
};

export default Snackbar;
