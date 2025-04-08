import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import MainLayout from "~/layout/MainLayout";
import Banner from "~/components/ui/Banner";
import HomeContent from "~/components/home/HomeContent";
import BG from "~/assets/projects_bg.jpg";
import Content from "~/components/ui/Content";
import ProjectContent from "~/components/projects/ProjectContent";
import ProjectBanner from "~/components/projects/ProjectBanner";

export function meta({}: Route.MetaArgs) {
  const env = import.meta.env;

  return [
    { title: "案例分享 - 譽寶專業公程有限公司" },
    {
      name: `${env.REACT_APP_NAME_TC} - ${env.REACT_APP_NAME_EN}`,
      content: env.REACT_APP_SITE_CONTENT,
    },
  ];
}

export default function Projects() {
  return (
    <MainLayout
      banner={{
        src: BG,
        size: "dense",
        content: <ProjectBanner />,
      }}
    >
      <Content>
        <ProjectContent />
      </Content>
    </MainLayout>
  );
}
