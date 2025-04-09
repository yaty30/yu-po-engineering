import BG from "~/assets/projects_bg.jpg";
import ProjectBanner from "../projects/ProjectBanner";
import ProjectContent from "../projects/ProjectContent";
import Banner from "../ui/Banner";
import Content from "../ui/Content";

const breadcrumbs = [{ label: "案例分享", link: "" }];

const Projects = () => {
  return (
    <Content>
      <Banner imageSrc={BG} content={<ProjectBanner />} size="dense" />
      <Content maxWidth="xl" breadcrumbs={breadcrumbs}>
        <ProjectContent />
      </Content>
    </Content>
  );
};

export default Projects;
