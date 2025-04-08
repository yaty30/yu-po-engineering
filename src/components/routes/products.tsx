import BG from "~/assets/products_bg.jpg";
import ProductBanner from "../products/ProductBanner";
import ProductContent from "../products/ProductContent";
import Banner from "../ui/Banner";
import Content from "../ui/Content";

const Products = () => {
  return (
    <Content>
      <Banner imageSrc={BG} content={<ProductBanner />} size="dense" />
      <Content maxWidth="xl">
        <ProductContent />
      </Content>
    </Content>
  );
};

export default Products;
