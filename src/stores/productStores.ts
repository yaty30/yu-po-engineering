import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductProps {
  id: string;
  title: string;
  subheading: string;
  image: string;
  content: string;
  link: string;
  category: string;
}

interface FilterOptions {
  category: string | null;
  searchTerm: string;
}

interface InitialState {
  products: Array<ProductProps>;
  filteredProducts: Array<ProductProps>;
  currentProduct: ProductProps | null;
  isLoading: boolean;
  error: string | null;
  filterOptions: FilterOptions;
}

const initialState: InitialState = {
  products: [
    // Initial products from paste.txt converted to match our schema
    {
      id: "fire-doors",
      title: "防火門",
      subheading: "安全第一解決方案",
      image:
        "https://i.pinimg.com/736x/70/f5/b1/70f5b14f2bcc727bc84409128f100af6.jpg",
      content:
        "我們的防火門提供經認證的防火等級，提供卓越的保護。每扇門都按照國際安全標準製造。",
      link: "/products/fire-doors",
      category: "doors",
    },
    {
      id: "steel-structures",
      title: "鋼結構",
      subheading: "耐用工程解決方案",
      image:
        "https://i.pinimg.com/736x/b8/45/38/b84538fa2aa5f4eb83bc8d2b69e69021.jpg",
      content:
        "為商業和工業應用定制的鋼結構。專為強度、耐久性和長期性能而設計。",
      link: "/products/steel-structures",
      category: "structures",
    },
    {
      id: "sound-insulation",
      title: "隔音設施",
      subheading: "聲學控制系統",
      image:
        "https://i.pinimg.com/736x/2e/4a/65/2e4a65976158aba796fd8838b60a10cd.jpg",
      content:
        "先進的聲學解決方案，為各種環境提供有效的隔音效果。適合辦公室、錄音室和公共場所。",
      link: "/products/sound-insulation",
      category: "insulation",
    },
    {
      id: "security-gates",
      title: "安全閘",
      subheading: "增強保護解決方案",
      image:
        "https://i.pinimg.com/736x/86/30/1b/86301b1af4e7722af48ff8da58e73e48.jpg",
      content:
        "高安全性閘門，提供保護和美觀兼備的方案。可定制設計以配合您建築的風格。",
      link: "/products/security-gates",
      category: "doors",
    },
    // Keep existing products from the Redux store
    {
      id: "equipment",
      title: "高效能生產設備",
      subheading: "提高您的生產效率",
      image: "/images/product-1.jpg",
      content:
        "我們的高效能生產設備採用先進技術，幫助您簡化生產流程，提高工作效率。",
      link: "/products/1",
      category: "equipment",
    },
    {
      id: "software",
      title: "智能監控系統",
      subheading: "實時監控您的生產線",
      image: "/images/product-2.jpg",
      content:
        "智能監控系統提供實時數據分析，讓您隨時掌握生產狀況，迅速做出決策。",
      link: "/products/2",
      category: "software",
    },
    {
      id: "packaging",
      title: "環保包裝解決方案",
      subheading: "可持續發展的包裝選擇",
      image: "/images/product-3.jpg",
      content:
        "我們的環保包裝解決方案使用可回收材料，減少環境影響，同時保持高品質的產品保護。",
      link: "/products/3",
      category: "packaging",
    },
  ],
  filteredProducts: [],
  currentProduct: null,
  isLoading: false,
  error: null,
  filterOptions: {
    category: null,
    searchTerm: "",
  },
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Array<ProductProps>>) => {
      state.products = action.payload;
      applyFilters(state);
    },
    setCurrentProduct: (state, action: PayloadAction<string>) => {
      state.currentProduct =
        state.products.find((product) => product.id === action.payload) || null;
    },
    clearCurrentProduct: (state) => {
      state.currentProduct = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    filterByCategory: (state, action: PayloadAction<string | null>) => {
      state.filterOptions.category = action.payload;
      applyFilters(state);
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.filterOptions.searchTerm = action.payload;
      applyFilters(state);
    },
    clearFilters: (state) => {
      state.filterOptions = { category: null, searchTerm: "" };
      state.filteredProducts = state.products;
    },
    addProduct: (state, action: PayloadAction<ProductProps>) => {
      state.products.push(action.payload);
      applyFilters(state);
    },
    updateProduct: (state, action: PayloadAction<ProductProps>) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
      applyFilters(state);
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      applyFilters(state);
    },
  },
});

// Helper function to apply filters
const applyFilters = (state: InitialState) => {
  const { category, searchTerm } = state.filterOptions;

  state.filteredProducts = state.products.filter((product) => {
    const matchesCategory = !category || product.category === category;
    const matchesSearch =
      !searchTerm ||
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.content.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });
};

export const {
  setProducts,
  setCurrentProduct,
  clearCurrentProduct,
  setLoading,
  setError,
  filterByCategory,
  setSearchTerm,
  clearFilters,
  addProduct,
  updateProduct,
  deleteProduct,
} = productSlice.actions;

export default productSlice.reducer;
