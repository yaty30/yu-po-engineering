import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import ContactUs from "~/components/routes/ContactUs";
import Products from "~/components/routes/Products";
import Projects from "~/components/routes/Projects";
import MainLayout from "~/components/layout/MainLayout";
import Home from "~/components/routes/Home";
import ProductIntro from "./components/routes/IndividualProduct";

function App() {
  const basename = import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            index
            // path="/"`
            element={<Home />}
          />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="*"
            element={<div> Not Found or You do not have permission.</div>}
          />
          <Route path="/products/:id/:name" element={<ProductIntro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
