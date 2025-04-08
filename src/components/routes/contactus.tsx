import BG from "~/assets/contactus_bg.avif";
import Content from "~/components/ui/Content";
import ContactUsBanner from "../contact/ContactUsBanner";
import ContactUsContent from "../contact/ContactUsContent";
import Banner from "../ui/Banner";

const ContactUs = () => {
  return (
    <Content>
      <Banner imageSrc={BG} content={<ContactUsBanner />} size="dense" />
      <ContactUsContent />
    </Content>
  );
};

export default ContactUs;
