import BG from "~/assets/projects_bg.jpg";
import ProjectBanner from "../projects/ProjectBanner";
import ProjectContent from "../projects/ProjectContent";
import Banner from "../ui/Banner";
import Content from "../ui/Content";

const Projects = () => {
  return (
    <Content>
      <Banner imageSrc={BG} content={<ProjectBanner />} size="dense" />
      <Content maxWidth="xl">
        <ProjectContent />
      </Content>
    </Content>
  );
};

export default Projects;
