import React, { useMemo } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { type SetStateAction } from "react";

// Define the project type for better type checking
export interface Project {
  id: number;
  date: string;
  subject: string;
  location: string;
  image: string;
  details: string;
}

interface ProjectsFilterProps {
  projects: Project[];
  locationFilter: string;
  setLocationFilter: React.Dispatch<SetStateAction<string>>;
  yearFilter: string;
  setYearFilter: React.Dispatch<SetStateAction<string>>;
  filteredProjectsCount: number;
  mobileFilterOpen?: boolean;
  toggleMobileFilter?: () => void;
  isMobile?: boolean;
}

const ProjectsFilter: React.FC<ProjectsFilterProps> = ({
  projects,
  locationFilter,
  setLocationFilter,
  yearFilter,
  setYearFilter,
  filteredProjectsCount,
  mobileFilterOpen = false,
  toggleMobileFilter = () => {},
  isMobile = false,
}) => {
  const theme = useTheme();

  // Extract unique locations for filter
  const locations = useMemo(() => {
    const uniqueLocations = new Set(
      projects.map((project) => project.location)
    );
    return ["all", ...Array.from(uniqueLocations)];
  }, [projects]);

  // Extract unique years for filter
  const years = useMemo(() => {
    const uniqueYears = new Set(
      projects.map((project) => {
        const date = new Date(project.date);
        return date.getFullYear().toString();
      })
    );
    return ["all", ...Array.from(uniqueYears).sort()];
  }, [projects]);

  const handleLocationChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setLocationFilter(event.target.value);
  };

  const handleYearChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setYearFilter(event.target.value);
  };

  // Different styling based on mobile vs desktop
  const getStylesForContext = (isMobileView: boolean) => {
    return {
      typography: {
        color: isMobileView ? "#fff" : theme.palette.text.primary,
      },
      divider: {
        borderColor: isMobileView
          ? "rgba(255, 255, 255, 0.2)"
          : theme.palette.divider,
      },
      inputLabel: {
        color: isMobileView ? "#fff" : "#000",
      },
      inputLabelFocused: {
        color: isMobileView ? "#fff" : "var(--primary)",
      },
      select: {
        color: isMobileView ? "#fff" : "#000",
        outline: {
          borderColor: isMobileView
            ? "rgba(255, 255, 255, 0.5)"
            : "rgba(0, 0, 0, 0.23)",
          hoverBorderColor: isMobileView
            ? "rgba(255, 255, 255, 0.7)"
            : "rgba(0, 0, 0, 0.87)",
          focusedBorderColor: isMobileView ? "#fff" : "var(--primary)",
        },
        icon: {
          color: isMobileView ? "#fff" : "rgba(0, 0, 0, 0.54)",
        },
      },
      menuItem: {
        color: isMobileView ? "#fff" : theme.palette.text.primary,
      },
      menuPaper: {
        bgcolor: isMobileView
          ? "rgba(255, 255, 255, 0.15)"
          : theme.palette.background.paper,
        backdropFilter: isMobileView ? "blur(10px)" : "none",
      },
    };
  };

  const styles = getStylesForContext(isMobile);

  const filterContent = (
    <>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ color: styles.typography.color }}
      >
        項目篩選
      </Typography>

      <Divider sx={{ mb: 3, borderColor: styles.divider.borderColor }} />

      <Box sx={{ mb: 3 }}>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel
            id="location-filter-label"
            sx={{
              color: styles.inputLabel.color,
              "&.Mui-focused": {
                color: styles.inputLabelFocused.color,
              },
            }}
          >
            地點
          </InputLabel>
          <Select
            labelId="location-filter-label"
            id="location-filter"
            value={locationFilter}
            label="地點"
            onChange={handleLocationChange}
            size="small"
            sx={{
              color: styles.select.color,
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: styles.select.outline.borderColor,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: styles.select.outline.hoverBorderColor,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: styles.select.outline.focusedBorderColor,
              },
              ".MuiSvgIcon-root": {
                color: styles.select.icon.color,
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: styles.menuPaper.bgcolor,
                  backdropFilter: styles.menuPaper.backdropFilter,
                },
              },
            }}
          >
            <MenuItem value="all" sx={{ color: styles.menuItem.color }}>
              所有地點
            </MenuItem>
            {locations
              .filter((loc) => loc !== "all")
              .map((location) => (
                <MenuItem
                  key={location}
                  value={location}
                  sx={{ color: styles.menuItem.color }}
                >
                  {location}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel
            id="year-filter-label"
            sx={{
              color: styles.inputLabel.color,
              "&.Mui-focused": {
                color: styles.inputLabelFocused.color,
              },
            }}
          >
            年份
          </InputLabel>
          <Select
            labelId="year-filter-label"
            id="year-filter"
            value={yearFilter}
            label="年份"
            onChange={handleYearChange}
            size="small"
            sx={{
              color: styles.select.color,
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: styles.select.outline.borderColor,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: styles.select.outline.hoverBorderColor,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: styles.select.outline.focusedBorderColor,
              },
              ".MuiSvgIcon-root": {
                color: styles.select.icon.color,
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: styles.menuPaper.bgcolor,
                  backdropFilter: styles.menuPaper.backdropFilter,
                },
              },
            }}
          >
            <MenuItem value="all" sx={{ color: styles.menuItem.color }}>
              所有年份
            </MenuItem>
            {years
              .filter((year) => year !== "all")
              .map((year) => (
                <MenuItem
                  key={year}
                  value={year}
                  sx={{ color: styles.menuItem.color }}
                >
                  {year}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>

      <Typography
        variant="body2"
        sx={{ fontWeight: "medium", color: styles.typography.color }}
      >
        {filteredProjectsCount} 個項目
      </Typography>
    </>
  );

  // Render for mobile (drawer)
  if (isMobile) {
    return (
      <Drawer
        anchor="left"
        open={mobileFilterOpen}
        onClose={toggleMobileFilter}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            p: 2,
            boxSizing: "border-box",
            bgcolor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(40px)",
            color: "#fff",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ color: "#fff" }}>
            篩選
          </Typography>
          <IconButton
            onClick={toggleMobileFilter}
            edge="end"
            sx={{ color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        {filterContent}
      </Drawer>
    );
  }

  // Render for desktop (sticky sidebar)
  return (
    <Box
      component="aside"
      sx={{
        width: 250,
        flexShrink: 0,
        position: "sticky",
        top: 80, // Added spacing to prevent navbar overlap
        height: "100%",
        maxHeight: "calc(100vh - 80px)", // Adjusted to account for top offset
        overflowY: "auto",
        borderRight: `1px solid ${theme.palette.divider}`,
        p: 3,
        pt: 4,
        backgroundColor: "#fff",
        alignSelf: "flex-start",
      }}
    >
      {filterContent}
    </Box>
  );
};

export default ProjectsFilter;
