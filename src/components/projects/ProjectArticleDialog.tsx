import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  Skeleton,
  Stack,
} from "@mui/material";

interface ProjectImage {
  img: string;
  title: string;
  subtitle: string;
}

interface Props {
  selectedImage: ProjectImage | null;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ProjectArticleDialog({
  selectedImage,
  open,
  setOpen,
}: Props): React.ReactElement {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (open) {
      setLoaded(false);
    }
  }, [open, selectedImage]);

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent>
          {selectedImage && (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {!loaded && (
                  <Stack spacing={2}>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <Skeleton
                        variant="rectangular"
                        width={280}
                        height={18}
                        key={index}
                      />
                    ))}
                  </Stack>
                )}
                <img
                  src={`${selectedImage.img}?w=800&fit=crop&auto=format`}
                  alt={selectedImage.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "70vh",
                    objectFit: "contain",
                    display: loaded ? "block" : "none",
                  }}
                  onLoad={() => setLoaded(true)}
                />
              </Box>
              <Typography variant="h6" sx={{ mt: 2 }}>
                {selectedImage.title}
              </Typography>
              <Typography variant="subtitle1">
                {selectedImage.subtitle}
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
