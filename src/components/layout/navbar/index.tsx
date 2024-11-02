import MainNavbar from "@/components/layout/navbar/main-navbar";
import { docsConfig } from "@/configs/docs.config";

const Navbar = () => {
  return (
    <div className="mr-10 flex">
      <MainNavbar navItems={docsConfig.mainNav} />
    </div>
  );
};

export default Navbar;
