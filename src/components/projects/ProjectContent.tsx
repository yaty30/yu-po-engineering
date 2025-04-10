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
import ProjectsFilter from "./ProjectsFilter";
import FilterListIcon from "@mui/icons-material/FilterList";
import { RootState } from "~/stores/store";
import { useSelector } from "react-redux";

const projectStates = (state: RootState) => state.projectStores.projects;

export default () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const projects = useSelector(projectStates);

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
    <Box sx={{ display: "flex", minHeight: "100%" }}>
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
    </Box>
  );
};
