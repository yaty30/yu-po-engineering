import BG from "~/assets/products_bg.jpg";
import ProductBanner from "../products/ProductBanner";
import ProductContent from "../products/ProductContent";
import Banner from "../ui/Banner";
import Content from "../ui/Content";

const breadcrumbs = [{ label: "所有產品", link: "" }];

const Products = () => {
  return (
    <>
      <Banner imageSrc={BG} content={<ProductBanner />} size="dense" />
      <Content maxWidth="lg" breadcrumbs={breadcrumbs}>
        <ProductContent />
      </Content>
    </>
  );
};

export default Products;
