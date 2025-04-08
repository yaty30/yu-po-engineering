import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import ContactUs from "~/components/routes/ContactUs";
import Products from "~/components/routes/Products";
import Projects from "~/components/routes/Projects";
import MainLayout from "~/components/layout/MainLayout";
import Home from "~/components/routes/Home";

function App() {
  return (
    <BrowserRouter basename="/yu-po-engineering">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
