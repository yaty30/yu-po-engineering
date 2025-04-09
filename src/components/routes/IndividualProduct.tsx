import BG from "~/assets/individual_product_bg.avif";
import Banner from "../ui/Banner";
import Content from "../ui/Content";
import IndividualProductBanner from "../products/IndividualProductBanner";
import IndividualProductContent from "../products/IndividualProductContent";
import { useParams } from "react-router-dom";

const ProductIntro = () => {
  const { id, name } = useParams();

  const breadcrumbs = [
    { label: "所有產品", link: "/products" },
    { label: name ?? "", link: "" },
  ];

  return (
    <Content>
      <Banner
        imageSrc={BG}
        content={<IndividualProductBanner />}
        size="dense"
        opacity={0.8}
        sx={{ filter: "grayscale(0.2) brightness(1.7) " }}
      />
      <Content maxWidth="lg" breadcrumbs={breadcrumbs}>
        <IndividualProductContent id={id ?? ""} />
      </Content>
    </Content>
  );
};

export default ProductIntro;
