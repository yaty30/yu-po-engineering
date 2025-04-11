import { Box, CircularProgress, IconButton } from "@mui/material";
import React, { useState } from "react";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";

interface MapProps {
  expandMap: boolean;
  mapRef: React.RefObject<HTMLDivElement | null>;
}

const styles = {
  mapContainer: {
    width: "100%",
    height: 400,
    mt: 8,
    overflow: "hidden",
    transition: "all .3s ease-in-out",
    px: { xs: 2, sm: 5, md: 0 },
    borderRadius: 2,
    boxShadow: "0 4px 10px 4px rgba(190, 190, 190, 0.4)",
    border: "1.2px solid rgba(180, 180, 180, 0.7)",
  },
};

const ContentMap = ({ expandMap, mapRef }: MapProps) => {
  // Use a key state to force iframe re-render
  const [reloadKey, setReloadKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Map URL constant
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0496723782558!2d114.2162845!3d22.3139611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404013c60021801%3A0xbb8eb4282e33df25!2sNEO!5e0!3m2!1sen!2suk!4v1744094671273!5m2!1sen!2suk";

  // Function to reload the iframe
  const handleReload = () => {
    setIsLoading(true);
    setReloadKey((prevKey) => prevKey + 1);
  };

  // Function to handle iframe load completion
  const handleIframeLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <Box
      sx={{
        ...styles.mapContainer,
        height: expandMap ? 800 : 400,
        position: "relative",
      }}
      ref={mapRef}
    >
      {isLoading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            zIndex: 998,
          }}
        >
          <CircularProgress sx={{ color: "var(--primary)" }} />
        </Box>
      )}

      <iframe
        key={reloadKey} // This key change will trigger a re-render
        src={mapUrl}
        style={{
          border: 0,
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        onLoad={handleIframeLoad}
      ></iframe>

      <Box
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 10,
        }}
      >
        <IconButton
          onClick={handleReload}
          sx={{
            boxShadow: "0 2px 8px 2px rgba(33, 33, 33, 0.6)",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(6px)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
            },
          }}
        >
          <ReplayRoundedIcon
            sx={{ color: "var(--dark-grey)", fontSize: "1.72rem" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ContentMap;
