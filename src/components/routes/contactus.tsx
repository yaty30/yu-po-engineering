import BG from "~/assets/contactus_bg.avif";
import Content from "~/components/ui/Content";
import ContactUsBanner from "../contact/ContactUsBanner";
import ContactUsContent from "../contact/ContactUsContent";
import Banner from "../ui/Banner";

const breadcrumbs = [{ label: "聯絡我們", link: "" }];

const ContactUs = () => {
  return (
    <>
      <Banner imageSrc={BG} content={<ContactUsBanner />} size="dense" />
      <Content breadcrumbs={breadcrumbs} maxWidth="xl">
        <ContactUsContent />
      </Content>
    </>
  );
};

export default ContactUs;
