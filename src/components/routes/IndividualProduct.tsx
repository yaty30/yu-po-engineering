import BG from "~/assets/individual_product_bg.avif";
import Banner from "../ui/Banner";
import Content from "../ui/Content";
import IndividualProductBanner from "../products/IndividualProductBanner";
import IndividualProductContent from "../products/IndividualProductContent";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ProductIntro = () => {
  const { id, name } = useParams();

  const breadcrumbs = [
    { label: "所有產品", link: "products" },
    { label: name ?? "", link: "" },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Banner
        imageSrc={BG}
        content={<IndividualProductBanner />}
        size="dense"
        opacity={0.8}
        sx={{ filter: "grayscale(0.2) brightness(1.7) " }}
      />
      <Content maxWidth="xl" breadcrumbs={breadcrumbs}>
        <IndividualProductContent id={id ?? ""} />
      </Content>
    </>
  );
};

export default ProductIntro;
