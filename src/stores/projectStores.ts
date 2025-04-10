import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Project {
  id: number;
  date: string;
  subject: string;
  location: string;
  image: any; // Assuming BG is an imported image
  details: string;
}

interface ProjectsState {
  projects: Project[];
  selectedProject: Project | null;
  filteredProjects: Project[];
  searchTerm: string;
}

// Initialize with your projects data
const initialState: ProjectsState = {
  projects: [
    {
      id: 1,
      date: "2019-10-21",
      subject: "更換辦公室木門工程",
      location: "中環明珠行",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details:
        "為客戶完成整棟辦公大樓的木門更換工程，包括防火門安裝及相關安全認證。",
    },
    {
      id: 2,
      date: "2020-03-15",
      subject: "住宅樓層翻新計劃",
      location: "太古城中心",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: "高級住宅小區的全面翻新工程，包括室內設計、材料選擇及施工管理。",
    },
    {
      id: 3,
      date: "2020-07-08",
      subject: "商場地板鋪設工程",
      location: "尖沙咀海港城",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: "為大型商場完成高耐磨地板鋪設，使用先進材料確保長久耐用性。",
    },
    {
      id: 4,
      date: "2021-01-12",
      subject: "酒店浴室翻新工程",
      location: "灣仔港灣酒店",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details:
        "為五星級酒店完成200間客房浴室的全面翻新，包括防水工程及高級裝修。",
    },
    {
      id: 5,
      date: "2021-05-30",
      subject: "辦公樓LED照明系統安裝",
      location: "中環國際金融中心",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: "為大型辦公樓安裝節能LED照明系統，降低能源消耗並提升工作環境。",
    },
    {
      id: 6,
      date: "2021-11-19",
      subject: "餐廳廚房設備更新工程",
      location: "銅鑼灣時代廣場",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: "為高級餐廳完成廚房設備的全面更新，提升運營效率及安全標準。",
    },
    {
      id: 7,
      date: "2022-02-28",
      subject: "學校體育設施改造",
      location: "沙田香港中文大學",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: "為大學完成體育館設施改造，包括木地板翻新及運動設備安裝。",
    },
    {
      id: 8,
      date: "2022-06-14",
      subject: "醫院病房隔音工程",
      location: "將軍澳醫院",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: "為醫院完成專業隔音工程，提升病房環境品質及病患隱私保護。",
    },
    {
      id: 9,
      date: "2022-09-07",
      subject: "綠色屋頂花園建設",
      location: "九龍灣國際展貿中心",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details:
        "為商業建築設計並建造環保屋頂花園，提供休閒空間並改善建築能源效率。",
    },
    {
      id: 10,
      date: "2023-01-24",
      subject: "智能家居系統安裝",
      location: "山頂豪宅區",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details:
        "為高端住宅安裝全屋智能控制系統，包括燈光、溫度、安全及娛樂系統整合。",
    },
    {
      id: 11,
      date: "2023-05-18",
      subject: "古蹟建築修復工程",
      location: "中環荷李活道",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details:
        "為百年歷史建築進行專業修復工程，保留歷史特色同時提升結構安全性。",
    },
    {
      id: 12,
      date: "2023-08-29",
      subject: "購物中心電梯更換工程",
      location: "旺角朗豪坊",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: "為繁忙購物中心完成電梯系統全面更新，提高運載效率及安全性。",
    },
  ],
  selectedProject: null,
  filteredProjects: [],
  searchTerm: "",
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setSelectedProject: (state, action: PayloadAction<number>) => {
      state.selectedProject =
        state.projects.find((project) => project.id === action.payload) || null;
    },
    clearSelectedProject: (state) => {
      state.selectedProject = null;
    },
    searchProjects: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      if (action.payload.trim() === "") {
        state.filteredProjects = [];
      } else {
        const searchTerm = action.payload.toLowerCase();
        state.filteredProjects = state.projects.filter(
          (project) =>
            project.subject.toLowerCase().includes(searchTerm) ||
            project.location.toLowerCase().includes(searchTerm) ||
            project.details.toLowerCase().includes(searchTerm)
        );
      }
    },
    addProject: (state, action: PayloadAction<Omit<Project, "id">>) => {
      const newId = Math.max(...state.projects.map((p) => p.id)) + 1;
      state.projects.push({
        id: newId,
        ...action.payload,
      });
    },
    updateProject: (state, action: PayloadAction<Project>) => {
      const index = state.projects.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.projects[index] = action.payload;

        // Update selectedProject if it's the one being edited
        if (
          state.selectedProject &&
          state.selectedProject.id === action.payload.id
        ) {
          state.selectedProject = action.payload;
        }

        // Update filteredProjects if needed
        if (state.searchTerm) {
          state.filteredProjects = state.filteredProjects.map((p) =>
            p.id === action.payload.id ? action.payload : p
          );
        }
      }
    },
    deleteProject: (state, action: PayloadAction<number>) => {
      state.projects = state.projects.filter((p) => p.id !== action.payload);

      // Clear selectedProject if it's the one being deleted
      if (
        state.selectedProject &&
        state.selectedProject.id === action.payload
      ) {
        state.selectedProject = null;
      }

      // Update filteredProjects if needed
      if (state.searchTerm) {
        state.filteredProjects = state.filteredProjects.filter(
          (p) => p.id !== action.payload
        );
      }
    },
  },
});

export const {
  setSelectedProject,
  clearSelectedProject,
  searchProjects,
  addProject,
  updateProject,
  deleteProject,
} = projectsSlice.actions;

export default projectsSlice.reducer;
