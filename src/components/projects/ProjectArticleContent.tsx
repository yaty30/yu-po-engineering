import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Container, Skeleton } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useParams } from "react-router-dom";
import ProjectArticleDialog from "./ProjectArticleDialog";
import { useBreakpoint } from "../hooks/useBreakpoint";

interface ProjectImage {
  img: string;
  title: string;
  subtitle: string;
}

const itemData: ProjectImage[] = [
  {
    img: "https://plus.unsplash.com/premium_photo-1670315264879-59cc6b15db5f?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "現代客廳設計",
    subtitle: "開放式空間規劃",
  },
  {
    img: "https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "書房設計",
    subtitle: "個性化工作空間",
  },
  {
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "客廳佈置",
    subtitle: "自然光線與原木色調",
  },
  {
    img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "廚房改造",
    subtitle: "智能家電與簡約設計",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1683880731792-39c07ceea617?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "臥室設計",
    subtitle: "落地窗與自然元素",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1677529499096-44340a3ae633?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "浴室裝修",
    subtitle: "現代簡約衛浴",
  },
];

export default function ProjectArticleContent(): React.ReactElement {
  const { subject, location, date } = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const { isSmallScreen, isTablet } = useBreakpoint();
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

  // Initialize loading state for all images
  useEffect(() => {
    const initialLoadState: Record<string, boolean> = {};
    const images = [...itemData, ...itemData];
    images.forEach((item, index) => {
      initialLoadState[`${item.img}-${index}`] = false;
    });
    setImagesLoaded(initialLoadState);
  }, []);

  const handleImageClick = (item: ProjectImage): void => {
    setSelectedImage(item);
    setOpen(true);
  };

  const handleImageLoad = (key: string): void => {
    setImagesLoaded((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  // Determine columns based on screen size
  const getColumns = () => {
    if (isSmallScreen) return 1;
    if (isTablet) return 2;
    return 3;
  };

  return (
    <>
      <Grid
        container
        spacing={4}
        sx={{ pt: { xs: 4, md: 8 } }}
        direction={isSmallScreen ? "column-reverse" : "row"}
      >
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              height: { xs: "70vh", md: "80vh" },
              overflowY: "scroll",
              mb: { xs: 4, md: 0 },
            }}
          >
            <ImageList
              variant="masonry"
              cols={getColumns()}
              gap={isSmallScreen ? 4 : 8}
            >
              {[...itemData, ...itemData].map((item, index) => {
                const imageKey = `${item.img}-${index}`;
                const isLoaded = imagesLoaded[imageKey];

                return (
                  <ImageListItem
                    key={imageKey}
                    onClick={() => handleImageClick(item)}
                    sx={{
                      cursor: "pointer",
                      position: "relative",
                      "&::-webkit-scrollbar": {
                        display: "none",
                      },
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                  >
                    {!isLoaded && (
                      <Skeleton
                        variant="rectangular"
                        width={isSmallScreen ? "100%" : 140}
                        height={isSmallScreen ? 40 : 140}
                        sx={{
                          borderRadius: "4px",
                          position: "absolute",
                          top: 0,
                          left: 0,
                        }}
                      />
                    )}
                    <img
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        borderRadius: "4px",
                        display: isLoaded ? "block" : "block",
                        opacity: isLoaded ? 1 : 0,
                        transition: "opacity 0.3s ease-in-out",
                      }}
                      onLoad={() => handleImageLoad(imageKey)}
                    />

                    <ImageListItemBar
                      position="below"
                      sx={{ color: "var(--dark-grey)" }}
                      title={isLoaded ? item.subtitle : ""}
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }} sx={{ color: "var(--dark-grey)" }}>
          <Box
            sx={{
              border: "1px solid #ccc",
              p: 2,
              borderRadius: 2,
              boxShadow: "0 3px 8px 4px rgba(190, 190, 190, 0.2)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              項目介紹
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                lineHeight: 2,
                display: "flex",
                flexDirection: "column",
                rowGap: 2,
                fontSize: { xs: "0.9rem", md: "1rem" },
                mb: { xs: 3, md: 0 },
              }}
            >
              <p>
                <strong>項目名稱：</strong>
                {subject}
                <br />
                <strong>項目地點：</strong>
                {location}
                <br />
                <strong>項目規模：</strong>120平方公尺
                <br />
                <strong>項目日期：</strong>
                {date}
              </p>
              <p>
                國際金融中心（簡稱國金；英語：International Finance
                Centre；縮寫方式：ifc）是香港作為世界級金融中心的著名地標，位於香港島中環港景街1號及金融街8號，面向維多利亞港。由港鐵公司及新鴻基地產、恒基兆業地產、香港中華煤氣及中銀香港屬下的新中地產所組成的IFC
                Development
                Limited發展公司、由美國建築師西薩·佩里擔任設計建築師及由著名香港建築師嚴迅奇擔任項目建築師，其總樓面面積達43萬6千平方米。現為恒基兆業地產和香港金融管理局總部的所在地。現時為全港香港第二高的建築物及香港島最高的大廈，國際金融中心二期於2003年落成時，成為當時全球第五高、大中華地區第二高及香港第一高的建築物（現為全球第35高摩天大樓），後來位於香港西九龍，高484米的環球貿易廣場於2011年建成，以72米之差取代其香港第一高的地位。
              </p>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <ProjectArticleDialog
        selectedImage={selectedImage}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
