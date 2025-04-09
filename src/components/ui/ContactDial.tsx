import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import { InstagramGradientIcon } from "./icons/Icons";

const actions = [
  {
    icon: <FacebookIcon sx={{ color: "var(--facebook-blue)" }} />,
    name: "Facebook",
  },
  {
    icon: <InstagramGradientIcon />,
    name: "Instagram",
  },
  {
    icon: <EmailOutlinedIcon sx={{ color: "var(--outlook-blue)" }} />,
    name: "電郵",
  },
  {
    icon: <WhatsAppIcon sx={{ color: "var(--whatsapp-green)" }} />,
    name: "Whatsapp",
  },
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
        icon={<SpeedDialIcon sx={{ position: "relative", bottom: 1 }} />}
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
