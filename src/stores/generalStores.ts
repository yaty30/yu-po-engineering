import { createSlice } from "@reduxjs/toolkit";

interface MenuOptionProps {
  label: string;
  link: string;
}

interface InitialState {
  drawerOpen: boolean;
  navbarSolid: boolean;
  menuOptions: Array<MenuOptionProps>;
}

const initialState: InitialState = {
  drawerOpen: false,
  navbarSolid: false,
  menuOptions: [
    { label: "首頁", link: "/" },
    { label: "所有產品", link: "/products" },
    { label: "案例分享", link: "/projects" },
    { label: "聯絡我們", link: "/contact-us" },
  ],
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
    setNavbarSolid: (state, action) => {
      state.navbarSolid = action.payload;
    },
  },
});

export const { toggleDrawer, setNavbarSolid } = generalSlice.actions;
export default generalSlice.reducer;
