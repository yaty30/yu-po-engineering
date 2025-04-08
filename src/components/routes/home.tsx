import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import MainLayout from "~/layout/MainLayout";
import Banner from "~/components/ui/Banner";
import HomeContent from "~/components/home/HomeContent";

import BannerBG from "/banner.jpg";
import HomeBanner from "~/components/home/HomeBanner";

export function meta({}: Route.MetaArgs) {
  const env = import.meta.env;

  return [
    { title: "譽寶專業公程有限公司" },
    {
      name: `${env.REACT_APP_NAME_TC} - ${env.REACT_APP_NAME_EN}`,
      content: env.REACT_APP_SITE_CONTENT,
    },
  ];
}

export default function Home() {
  return (
    <MainLayout
      banner={{
        src: BannerBG,
        content: <HomeBanner />,
      }}
    >
      <HomeContent />
    </MainLayout>
  );
}
