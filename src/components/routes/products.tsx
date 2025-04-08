import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import MainLayout from "~/layout/MainLayout";
import Banner from "~/components/ui/Banner";
import HomeContent from "~/components/home/HomeContent";
import BG from "~/assets/products_bg.jpg";
import Content from "~/components/ui/Content";
import ProductBanner from "~/components/products/ProductBanner";
import ProductContent from "~/components/products/ProductContent";

export function meta({}: Route.MetaArgs) {
  const env = import.meta.env;

  return [
    { title: "我們的產品 - 譽寶專業公程有限公司" },
    {
      name: `${env.REACT_APP_NAME_TC} - ${env.REACT_APP_NAME_EN}`,
      content: env.REACT_APP_SITE_CONTENT,
    },
  ];
}

export default function Products() {
  return (
    <MainLayout
      banner={{
        src: BG,
        size: "dense",
        content: <ProductBanner />,
      }}
    >
      <Content>
        <ProductContent />
      </Content>
    </MainLayout>
  );
}
