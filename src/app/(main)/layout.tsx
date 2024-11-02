import React from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ScrollToTopButton from "@/components/scroll-to-top-button";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-averta relative w-full">
      <Header />
      {children}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
