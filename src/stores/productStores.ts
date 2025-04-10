import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MaterialProps {
  type: string; // e.g. door paint
  options: Array<{
    label: string; // option label
    img?: string;
  }>;
}

interface DetailsProps {
  dimension?: {
    unit: string;
    w: number; // width
    h: number; // height
    l: number; // length
    d: number; // depth
  };
  materials?: Array<MaterialProps>;
}

export interface ProductProps {
  id: string;
  title: string;
  subheading: string;
  image: string;
  content: string;
  link: string;
  category: string;
  details?: DetailsProps;
}

interface FilterOptions {
  category: string | null;
  searchTerm: string;
}

interface InitialState {
  products: Array<ProductProps>;
  randomProducts: Array<ProductProps>;
  filteredProducts: Array<ProductProps>;
  currentProduct: ProductProps | null;
  isLoading: boolean;
  error: string | null;
  filterOptions: FilterOptions;
}

const initialState: InitialState = {
  products: [
    {
      id: "fire-doors-premium",
      title: "高級防火門",
      subheading: "超高安全防護標準",
      image:
        "https://i.pinimg.com/736x/70/f5/b1/70f5b14f2bcc727bc84409128f100af6.jpg",
      content:
        "我們的高級防火門提供90分鐘防火等級，適用於商業建築和高風險區域。採用特殊複合材料，具有優異的隔熱性能。",
      link: "/products/2001",
      category: "doors",
      details: {
        dimension: {
          unit: "cm",
          w: 90,
          h: 210,
          l: 0,
          d: 5,
        },
        materials: [
          {
            type: "門框材質",
            options: [
              { label: "鋼質防火框", img: "/images/steel-frame.jpg" },
              { label: "鋁合金加強框", img: "/images/aluminum-frame.jpg" },
            ],
          },
          {
            type: "門面板材質",
            options: [
              { label: "防火耐燃板", img: "/images/fire-resistant-panel.jpg" },
              { label: "鋼質門板", img: "/images/steel-panel.jpg" },
              { label: "防火玻璃複合板", img: "/images/glass-composite.jpg" },
            ],
          },
          {
            type: "門把手",
            options: [
              { label: "標準防火把手", img: "/images/standard-handle.jpg" },
              { label: "緊急推桿", img: "/images/push-bar.jpg" },
              { label: "防火不鏽鋼把手", img: "/images/steel-handle.jpg" },
            ],
          },
        ],
      },
    },
    {
      id: "steel-structure-industrial",
      title: "工業鋼結構系統",
      subheading: "重型負載支撐框架",
      image:
        "https://i.pinimg.com/736x/b8/45/38/b84538fa2aa5f4eb83bc8d2b69e69021.jpg",
      content:
        "專為工業廠房設計的高強度鋼結構系統，可承受極端氣候條件和重型設備負載。採用Q345B高強度鋼材，抗震設計。",
      link: "/products/2002",
      category: "structures",
      details: {
        dimension: {
          unit: "cm",
          w: 1200,
          h: 800,
          l: 2400,
          d: 40,
        },
        materials: [
          {
            type: "鋼材類型",
            options: [
              { label: "Q235B普通碳素結構鋼", img: "/images/q235b-steel.jpg" },
              {
                label: "Q345B低合金高強度結構鋼",
                img: "/images/q345b-steel.jpg",
              },
              { label: "SN490B耐候性鋼", img: "/images/sn490b-steel.jpg" },
            ],
          },
          {
            type: "表面處理",
            options: [
              { label: "熱浸鍍鋅", img: "/images/hot-dip-galvanized.jpg" },
              {
                label: "噴砂除鏽+環氧樹脂底漆",
                img: "/images/epoxy-primer.jpg",
              },
              { label: "防火塗層", img: "/images/fire-resistant-coating.jpg" },
            ],
          },
          {
            type: "連接方式",
            options: [
              { label: "高強度螺栓連接", img: "/images/bolt-connection.jpg" },
              { label: "焊接連接", img: "/images/welded-connection.jpg" },
              { label: "組合連接", img: "/images/combined-connection.jpg" },
            ],
          },
        ],
      },
    },
    {
      id: "sound-insulation-premium",
      title: "專業級隔音板",
      subheading: "高效聲學控制板材",
      image:
        "https://i.pinimg.com/736x/2e/4a/65/2e4a65976158aba796fd8838b60a10cd.jpg",
      content:
        "專為錄音室、會議室和多媒體空間設計的專業級隔音板。NRC值達0.95以上，有效隔絕中低頻噪音。模組化設計，安裝簡便。",
      link: "/products/2003",
      category: "insulation",
      details: {
        dimension: {
          unit: "cm",
          w: 60,
          h: 60,
          l: 0,
          d: 5,
        },
        materials: [
          {
            type: "隔音材質",
            options: [
              { label: "聚酯纖維吸音板", img: "/images/polyester-panel.jpg" },
              { label: "玻璃纖維吸音板", img: "/images/fiberglass-panel.jpg" },
              { label: "木質穿孔吸音板", img: "/images/perforated-wood.jpg" },
            ],
          },
          {
            type: "表面材質",
            options: [
              { label: "環保布藝面層", img: "/images/fabric-finish.jpg" },
              { label: "木皮飾面", img: "/images/wood-veneer.jpg" },
              {
                label: "防火抗菌面層",
                img: "/images/antibacterial-finish.jpg",
              },
            ],
          },
          {
            type: "安裝方式",
            options: [
              { label: "壁掛式安裝", img: "/images/wall-mounting.jpg" },
              { label: "天花板懸吊式", img: "/images/ceiling-suspension.jpg" },
              { label: "自立式隔音屏障", img: "/images/free-standing.jpg" },
            ],
          },
        ],
      },
    },
    {
      id: "security-gates-electronic",
      title: "電子安全閘系統",
      subheading: "智能訪問控制解決方案",
      image:
        "https://i.pinimg.com/736x/86/30/1b/86301b1af4e7722af48ff8da58e73e48.jpg",
      content:
        "結合機械與電子技術的高安全性閘門系統，提供生物識別、卡片讀取和遠程控制功能。適用於高安全性需求的商業和政府設施。",
      link: "/products/2004",
      category: "doors",
      details: {
        dimension: {
          unit: "cm",
          w: 120,
          h: 220,
          l: 0,
          d: 15,
        },
        materials: [
          {
            type: "閘門材質",
            options: [
              { label: "304不鏽鋼", img: "/images/304-stainless.jpg" },
              { label: "316不鏽鋼", img: "/images/316-stainless.jpg" },
              {
                label: "防彈玻璃複合材質",
                img: "/images/bulletproof-glass.jpg",
              },
            ],
          },
          {
            type: "識別系統",
            options: [
              { label: "指紋識別", img: "/images/fingerprint.jpg" },
              { label: "面部識別", img: "/images/facial-recognition.jpg" },
              { label: "智能卡識別", img: "/images/smart-card.jpg" },
              { label: "密碼鍵盤", img: "/images/keypad.jpg" },
            ],
          },
          {
            type: "電源系統",
            options: [
              { label: "標準市電供電", img: "/images/main-power.jpg" },
              { label: "太陽能輔助供電", img: "/images/solar-power.jpg" },
              { label: "UPS不間斷電源", img: "/images/ups-power.jpg" },
            ],
          },
        ],
      },
    },
    {
      id: "equipment-cnc",
      title: "高精度CNC加工中心",
      subheading: "工業4.0智能製造設備",
      image:
        "https://i.pinimg.com/736x/1e/90/e7/1e90e75594bd50f18edc685bdbc95bea.jpg",
      content:
        "五軸聯動高精度CNC加工中心，具備智能監控和自動調整功能。適用於航空、精密模具和醫療器械等高精度零件加工。",
      link: "/products/2005",
      category: "equipment",
      details: {
        dimension: {
          unit: "cm",
          w: 250,
          h: 220,
          l: 350,
          d: 0,
        },
        materials: [
          {
            type: "機床結構",
            options: [
              { label: "鑄鐵機身", img: "/images/cast-iron-body.jpg" },
              { label: "礦物鑄造複合材料", img: "/images/mineral-casting.jpg" },
            ],
          },
          {
            type: "控制系統",
            options: [
              { label: "FANUC控制系統", img: "/images/fanuc-control.jpg" },
              { label: "西門子控制系統", img: "/images/siemens-control.jpg" },
              {
                label: "海德漢控制系統",
                img: "/images/heidenhain-control.jpg",
              },
            ],
          },
          {
            type: "主軸類型",
            options: [
              { label: "高速電主軸", img: "/images/electric-spindle.jpg" },
              {
                label: "帶齒輪傳動主軸",
                img: "/images/gear-driven-spindle.jpg",
              },
            ],
          },
        ],
      },
    },
    {
      id: "industrial-robot-arm",
      title: "工業機器人臂",
      subheading: "高效率自動化操作系統",
      image:
        "https://i.pinimg.com/736x/79/d2/5e/79d25e6c9727f635bda6f16f617a834b.jpg",
      content:
        "六軸工業機器人臂，具備精確定位和複雜軌跡規劃能力。適用於各類生產線的自動化操作，包括焊接、噴塗、搬運和組裝等工序。",
      link: "/products/2006",
      category: "equipment",
      details: {
        dimension: {
          unit: "cm",
          w: 180,
          h: 210,
          l: 220,
          d: 0,
        },
        materials: [
          {
            type: "機身結構",
            options: [
              { label: "高強度鋁合金", img: "/images/aluminum-alloy.jpg" },
              { label: "碳纖維複合材料", img: "/images/carbon-fiber.jpg" },
            ],
          },
          {
            type: "控制系統",
            options: [
              { label: "ABB控制系統", img: "/images/abb-control.jpg" },
              {
                label: "發那科控制系統",
                img: "/images/fanuc-robot-control.jpg",
              },
              { label: "庫卡控制系統", img: "/images/kuka-control.jpg" },
            ],
          },
          {
            type: "末端執行器",
            options: [
              { label: "通用夾爪", img: "/images/universal-gripper.jpg" },
              { label: "真空吸盤", img: "/images/vacuum-gripper.jpg" },
              { label: "焊接頭", img: "/images/welding-head.jpg" },
            ],
          },
        ],
      },
    },
    {
      id: "laser-cutting-machine",
      title: "高功率激光切割機",
      subheading: "精密金屬加工設備",
      image:
        "https://i.pinimg.com/736x/29/bd/ac/29bdac153ce1070b5efcd50b91a78074.jpg",
      content:
        "10千瓦光纖激光切割機，具備自動上下料系統和智能排版功能。適用於各類金屬板材的高速、高精度切割加工。",
      link: "/products/2007",
      category: "equipment",
      details: {
        dimension: {
          unit: "cm",
          w: 320,
          h: 200,
          l: 650,
          d: 0,
        },
        materials: [
          {
            type: "激光源類型",
            options: [
              { label: "IPG光纖激光源", img: "/images/ipg-laser.jpg" },
              { label: "銳科光纖激光源", img: "/images/raycus-laser.jpg" },
            ],
          },
          {
            type: "切割台面",
            options: [
              { label: "蜂窩式工作台", img: "/images/honeycomb-table.jpg" },
              { label: "刀條式工作台", img: "/images/blade-table.jpg" },
            ],
          },
          {
            type: "控制系統",
            options: [
              { label: "德國PA控制系統", img: "/images/pa-control.jpg" },
              {
                label: "日本三菱控制系統",
                img: "/images/mitsubishi-control.jpg",
              },
            ],
          },
        ],
      },
    },
    {
      id: "automatic-warehouse-system",
      title: "自動化立體倉儲系統",
      subheading: "智能物流解決方案",
      image:
        "https://i.pinimg.com/474x/61/0d/f6/610df6d617eed039c9022988709084af.jpg",
      content:
        "全自動立體倉儲系統，集成堆垛機、AGV小車和智能揀選系統。支持RFID識別和雲端倉儲管理，大幅提升存取效率和庫存管理水平。",
      link: "/products/2008",
      category: "equipment",
      details: {
        dimension: {
          unit: "m",
          w: 30,
          h: 15,
          l: 60,
          d: 0,
        },
        materials: [
          {
            type: "貨架類型",
            options: [
              { label: "高位重型貨架", img: "/images/heavy-duty-rack.jpg" },
              { label: "穿梭車貨架", img: "/images/shuttle-rack.jpg" },
              { label: "自動化料箱貨架", img: "/images/bin-rack.jpg" },
            ],
          },
          {
            type: "輸送設備",
            options: [
              { label: "滾筒輸送線", img: "/images/roller-conveyor.jpg" },
              { label: "AGV無人搬運車", img: "/images/agv-system.jpg" },
              { label: "堆垛機", img: "/images/stacker-crane.jpg" },
            ],
          },
          {
            type: "識別系統",
            options: [
              { label: "RFID識別系統", img: "/images/rfid-system.jpg" },
              { label: "條碼識別系統", img: "/images/barcode-system.jpg" },
              { label: "視覺識別系統", img: "/images/vision-system.jpg" },
            ],
          },
        ],
      },
    },
  ],
  filteredProducts: [],
  randomProducts: [],
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
    randomProductList: (state) => {
      // Make a copy to avoid modifying the original array
      const products = state.products;
      const count = 6;
      const productsCopy = [...products];
      const result = [];

      // Handle edge cases
      if (!products || products.length === 0) {
        state.randomProducts = [];
      }

      // If we're asking for more items than available, return all shuffled
      if (count >= productsCopy.length) {
        state.randomProducts = productsCopy.sort(() => Math.random() - 0.5);
      }

      // Fisher-Yates shuffle algorithm (more efficient than multiple splice operations)
      for (let i = 0; i < count; i++) {
        const randomIndex =
          i + Math.floor(Math.random() * (productsCopy.length - i));
        // Swap elements
        [productsCopy[i], productsCopy[randomIndex]] = [
          productsCopy[randomIndex],
          productsCopy[i],
        ];
        result.push(productsCopy[i]);
      }

      state.randomProducts = result.slice(0, count);
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
  randomProductList,
  filterByCategory,
  setSearchTerm,
  clearFilters,
  addProduct,
  updateProduct,
  deleteProduct,
} = productSlice.actions;

export default productSlice.reducer;
