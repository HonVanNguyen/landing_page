import { Button } from "@/components/ui/button";
import * as React from "react";
import Link from "next/link";
import { CircleUserRoundIcon, PhoneIcon } from "lucide-react";

const HeaderActions = () => {
  return (
    <div className="flex h-full flex-1 flex-col justify-between gap-2 md:justify-end lg:flex-row lg:items-center">
      <Link href={"#"}>
        <Button
          variant="outline"
          className="border-primary font-bold italic text-primary hover:border-secondary"
        >
          <CircleUserRoundIcon className="mr-2 h-4 w-4" />
          Dành cho người dùng của Kiciti
        </Button>
      </Link>
      <Link href={"#"}>
        <Button variant="default" className="font-bold italic">
          <PhoneIcon className="mr-2 h-4 w-4" />
          Liên hệ
        </Button>
      </Link>
    </div>
  );
};

export default HeaderActions;
