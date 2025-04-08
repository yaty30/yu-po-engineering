import React, { useState } from "react";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button } from "@mui/material";
import Snackbar from "./SnackBar";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

const Copy: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(textToCopy);
    setIsCopied(true);

    // Reset copied state after delay
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleCopy}
        sx={{
          width: "100%",
          color: "var(--primary)",
          borderColor: "var(--primary)",
          "&:hover": {
            backgroundColor: "var(--primary-hover-opacity-10)",
            borderColor: "var(--primary-hover)",
            color: "var(--primary-hover)",
          },
        }}
      >
        <ContentCopyIcon sx={{ fontSize: 18 }} />
      </Button>
      <Snackbar
        open={isCopied}
        title="複製成功！"
        icon={<CheckCircleOutlineRoundedIcon />}
        onClose={() => setIsCopied(false)}
      />
    </>
  );
};

export default Copy;
