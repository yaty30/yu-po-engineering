import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface MenuOptionProps {
  label: string;
  link: string;
}

interface InitialState {
  drawerOpen: boolean;
  menuOptions: Array<MenuOptionProps>;
}

const initialState: InitialState = {
  drawerOpen: false,
  menuOptions: [
    { label: "公司簡介", link: "/" },
    { label: "我們的產品", link: "/products" },
    { label: "案例分享", link: "/projects" },
    { label: "聯絡我們", link: "/contactUs" },
  ],
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
  },
});

export const { toggleDrawer } = generalSlice.actions;
export default generalSlice.reducer;
