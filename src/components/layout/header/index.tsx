import Navbar from "@/components/layout/navbar";
import HeaderActions from "./header-actions";
import { AppSidebar } from "../sidebar/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Logo from "@/components/logo";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background backdrop-blur">
      <div className="container flex h-20 flex-row items-center justify-between">
        <Logo />
        <div className="hidden h-full w-full flex-row items-center justify-between lg:flex">
          <Navbar />
          <HeaderActions />
        </div>
        <div className="flex h-full items-center lg:hidden">
          <AppSidebar />
          <SidebarTrigger />
        </div>
      </div>
    </header>
  );
};

export default Header;
