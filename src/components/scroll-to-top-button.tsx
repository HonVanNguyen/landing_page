"use client";

import { Button } from "@/components/ui/button";
import { ChevronUpIcon, MoveRightIcon, MoveUpIcon } from "lucide-react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      className="fixed bottom-5 right-5 h-16 w-16 rounded-full"
      variant="outline"
      onClick={scrollToTop}
    >
      <ChevronUpIcon className="h-10 w-10 animate-bounce" />
    </Button>
  );
};

export default ScrollToTopButton;
