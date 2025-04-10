import Banner from "~/components/ui/Banner";
import HomeContent from "~/components/home/HomeContent";
import BannerBG from "~/assets/banner.jpg";
import HomeBanner from "~/components/home/HomeBanner";

const Home = () => {
  return (
    <>
      <Banner imageSrc={BannerBG} content={<HomeBanner />} />
      <HomeContent />
    </>
  );
};

export default Home;
