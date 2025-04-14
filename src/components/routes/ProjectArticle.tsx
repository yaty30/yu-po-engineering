import BG from "~/assets/projects_bg.jpg";

import Banner from "../ui/Banner";
import Content from "../ui/Content";
import ProjectBanner from "../projects/ProjectBanner";
import { useParams } from "react-router-dom";
import ProjectArticleContent from "../projects/ProjectArticleContent";

const Products = () => {
  const { subject, location } = useParams();

  const breadcrumbs = [
    { label: "案例分享", link: "projects" },
    { label: `${location} - ${subject}`, link: "" },
  ];
  return (
    <>
      <Banner imageSrc={BG} content={<ProjectBanner />} size="dense" />
      <Content maxWidth="lg" breadcrumbs={breadcrumbs}>
        <ProjectArticleContent />
      </Content>
    </>
  );
};

export default Products;
