import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SaveIcon from "@mui/icons-material/Save";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

const actions = [
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
  { icon: <WhatsAppIcon />, name: "Whatsapp" },
];

export default function ContactDial() {
  return (
    <Box sx={{ height: 0, flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          "& .MuiFab-primary": {
            bgcolor: "var(--primary)",
            transition: "all 0.3s ease-in-out",
            "&:hover": { bgcolor: "var(--primary-hover)" },
          },
        }}
        icon={
          <SpeedDialIcon
            sx={{ color: "#fff", position: "relative", bottom: 1 }}
          />
        }
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
