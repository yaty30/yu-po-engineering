import {
  // BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import "./App.css";

import ContactUs from "~/components/routes/ContactUs";
import Products from "~/components/routes/Products";
import Projects from "~/components/routes/Projects";
import MainLayout from "~/components/layout/MainLayout";
import Home from "~/components/routes/Home";
import ProductIntro from "./components/routes/IndividualProduct";
import ProjectArticle from "./components/routes/ProjectArticle";

function App() {
  // const basename = import.meta.env.BASE_URL;

  return (
    // <BrowserRouter
    //   basename={"/yu-po-engineering"}
    //   basename={""}
    // >
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            index
            // path="/"
            element={<Home />}
          />

          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":id/:name" element={<ProductIntro />} />
          </Route>

          <Route path="/projects">
            <Route index path="/projects" element={<Projects />} />
            <Route
              path=":id/:subject/:location/:date"
              element={<ProjectArticle />}
            />
          </Route>

          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="*"
            element={<div> Not Found or You do not have permission.</div>}
          />
        </Route>
      </Routes>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
