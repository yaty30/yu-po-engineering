import React, { useState } from "react";
import { Box, Grid, Typography, Dialog, DialogContent } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useParams } from "react-router-dom";

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

  const handleImageClick = (item: ProjectImage): void => {
    setSelectedImage(item);
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 12, md: 8 }}>
          <Box sx={{ height: "80vh", overflowY: "scroll" }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {[...itemData, ...itemData].map((item) => (
                <ImageListItem
                  key={item.img}
                  onClick={() => handleImageClick(item)}
                >
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    position="below"
                    sx={{ color: "var(--dark-grey)" }}
                    title={item.subtitle}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 4 }}
          sx={{ color: "var(--dark-grey)" }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
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
            <p>
              由於發展規模龐大，當初地鐵招標時要求將整個項目分為四期，並分期磋商補地價，較早前地政總署便批出第二期的補地價為26億，平均每呎5,100元﹐雖然對1998年前批出的金額大幅下降四成，相以當時市道而言，補地價金額仍然偏高。
              到1999年12月，因地產商提出香港站二至四期的公共樓面補地價過多的上訴理據合理，上訴得直，地政總署決定將原本63億的補地價降低至55億元﹐每呎樓面補地價亦由1,800元調低至1,571元，減幅一成三。當時地政總署署長布培指出，地鐵公司於1999年12月9日與政府達成削減香港站三期補地價協議，主要由於地鐵提出上蓋項目涉及的公共樓面太多的理由合理，果亦獲政府調減金額至55億元，他表示，有關金額反映樓市前景依然樂觀正面，但發展商在傾談補地價的過程中，態度仍然保守。[8]
            </p>
          </Typography>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
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
                <img
                  src={`${selectedImage.img}?w=800&fit=crop&auto=format`}
                  alt={selectedImage.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "70vh",
                    objectFit: "contain",
                  }}
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
