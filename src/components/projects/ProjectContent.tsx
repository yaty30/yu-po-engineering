import { useState, useMemo } from "react";
import {
  Container,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
  IconButton,
} from "@mui/material";
import ProjectCard from "./ProjectCard";
import ProjectsFilter, { type Project } from "./ProjectsFilter";
import FilterListIcon from "@mui/icons-material/FilterList";
import BG from "~/assets/projects/project_1.avif";

const projects: Project[] = [
  {
    id: 1,
    date: "2019-10-21",
    subject: "更換辦公室木門工程",
    location: "中環明珠行",
    image: BG,
    details:
      "為客戶完成整棟辦公大樓的木門更換工程，包括防火門安裝及相關安全認證。",
  },
  {
    id: 2,
    date: "2020-03-15",
    subject: "住宅樓層翻新計劃",
    location: "太古城中心",
    image: BG,
    details: "高級住宅小區的全面翻新工程，包括室內設計、材料選擇及施工管理。",
  },
  {
    id: 3,
    date: "2020-07-08",
    subject: "商場地板鋪設工程",
    location: "尖沙咀海港城",
    image: BG,
    details: "為大型商場完成高耐磨地板鋪設，使用先進材料確保長久耐用性。",
  },
  {
    id: 4,
    date: "2021-01-12",
    subject: "酒店浴室翻新工程",
    location: "灣仔港灣酒店",
    image: BG,
    details:
      "為五星級酒店完成200間客房浴室的全面翻新，包括防水工程及高級裝修。",
  },
  {
    id: 5,
    date: "2021-05-30",
    subject: "辦公樓LED照明系統安裝",
    location: "中環國際金融中心",
    image: BG,
    details: "為大型辦公樓安裝節能LED照明系統，降低能源消耗並提升工作環境。",
  },
  {
    id: 6,
    date: "2021-11-19",
    subject: "餐廳廚房設備更新工程",
    location: "銅鑼灣時代廣場",
    image: BG,
    details: "為高級餐廳完成廚房設備的全面更新，提升運營效率及安全標準。",
  },
  {
    id: 7,
    date: "2022-02-28",
    subject: "學校體育設施改造",
    location: "沙田香港中文大學",
    image: BG,
    details: "為大學完成體育館設施改造，包括木地板翻新及運動設備安裝。",
  },
  {
    id: 8,
    date: "2022-06-14",
    subject: "醫院病房隔音工程",
    location: "將軍澳醫院",
    image: BG,
    details: "為醫院完成專業隔音工程，提升病房環境品質及病患隱私保護。",
  },
  {
    id: 9,
    date: "2022-09-07",
    subject: "綠色屋頂花園建設",
    location: "九龍灣國際展貿中心",
    image: BG,
    details:
      "為商業建築設計並建造環保屋頂花園，提供休閒空間並改善建築能源效率。",
  },
  {
    id: 10,
    date: "2023-01-24",
    subject: "智能家居系統安裝",
    location: "山頂豪宅區",
    image: BG,
    details:
      "為高端住宅安裝全屋智能控制系統，包括燈光、溫度、安全及娛樂系統整合。",
  },
  {
    id: 11,
    date: "2023-05-18",
    subject: "古蹟建築修復工程",
    location: "中環荷李活道",
    image: BG,
    details: "為百年歷史建築進行專業修復工程，保留歷史特色同時提升結構安全性。",
  },
  {
    id: 12,
    date: "2023-08-29",
    subject: "購物中心電梯更換工程",
    location: "旺角朗豪坊",
    image: BG,
    details: "為繁忙購物中心完成電梯系統全面更新，提高運載效率及安全性。",
  },
];

export default () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [locationFilter, setLocationFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesLocation =
        locationFilter === "all" || project.location === locationFilter;
      const matchesYear =
        yearFilter === "all" ||
        new Date(project.date).getFullYear().toString() === yearFilter;
      return matchesLocation && matchesYear;
    });
  }, [locationFilter, yearFilter]);

  const toggleMobileFilter = () => {
    setMobileFilterOpen(!mobileFilterOpen);
  };

  return (
    <Container sx={{ display: "flex", minHeight: "100%" }} maxWidth="xl">
      {/* Mobile filter button */}
      {isMobile && (
        <Box
          sx={{
            position: "fixed",
            bottom: 20,
            left: 20,
            zIndex: 1100,
            boxShadow: 3,
            borderRadius: "50%",
          }}
        >
          <IconButton
            color="primary"
            onClick={toggleMobileFilter}
            sx={{
              backgroundColor: theme.palette.background.paper,
              color: "var(--primary)",
              "&:hover": {
                backgroundColor: theme.palette.background.paper,
              },
            }}
          >
            <FilterListIcon />
          </IconButton>
        </Box>
      )}

      {/* Filter Component */}
      <ProjectsFilter
        projects={projects}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        yearFilter={yearFilter}
        setYearFilter={setYearFilter}
        filteredProjectsCount={filteredProjects.length}
        mobileFilterOpen={mobileFilterOpen}
        toggleMobileFilter={toggleMobileFilter}
        isMobile={isMobile}
      />

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: "100%", md: "calc(100% - 250px)" },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              px: { xs: 3, sm: 4 },
              py: 3,
            }}
          >
            <Grid container spacing={{ xs: 3, sm: 4 }}>
              {filteredProjects.map((project, index) => (
                <Grid
                  size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
                  key={project.id}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ProjectCard
                    key={index}
                    subject={project.subject}
                    date={project.date}
                    location={project.location}
                    image={project.image}
                  />
                </Grid>
              ))}

              {filteredProjects.length === 0 && (
                <Grid size={12}>
                  <Box
                    sx={{
                      textAlign: "center",
                      py: 6,
                      border: `1px dashed ${theme.palette.divider}`,
                      borderRadius: 1,
                    }}
                  >
                    <Typography variant="h6" color="text.secondary">
                      沒有符合條件的項目
                    </Typography>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};
