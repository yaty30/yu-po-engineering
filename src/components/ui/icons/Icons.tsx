import InstagramIcon from "@mui/icons-material/Instagram";
import SvgIcon from "@mui/material/SvgIcon";

export const InstagramGradientIcon = () => {
  return (
    <SvgIcon>
      <defs>
        <linearGradient
          id="instagramGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="10%" stopColor="#FCAF45" />
          <stop offset="20%" stopColor="#F77737" />
          <stop offset="30%" stopColor="#F56040" />
          <stop offset="40%" stopColor="#FD1D1D" />
          <stop offset="50%" stopColor="#E1306C" />
          <stop offset="60%" stopColor="#C13584" />
          <stop offset="70%" stopColor="#833AB4" />
          <stop offset="80%" stopColor="#5851DB" />
          <stop offset="90%" stopColor="#405DE6" />
        </linearGradient>
      </defs>
      <InstagramIcon sx={{ fill: "url(#instagramGradient)" }} />
    </SvgIcon>
  );
};
