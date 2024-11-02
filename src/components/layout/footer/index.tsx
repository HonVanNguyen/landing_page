import FooterNavbar from "@/components/layout/footer/footer-navbar";
import CompanyInformation from "@/components/layout/footer/company-infomation";
import Copyright from "@/components/layout/footer/copyright";
import Contact from "./contact";

const Footer = () => {
  return (
    <footer className="rounded-t-2xl bg-primary md:rounded-t-[80px]">
      <div className="container flex flex-col gap-10 py-10">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <FooterNavbar />
          <Contact />
        </div>
        <CompanyInformation />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
