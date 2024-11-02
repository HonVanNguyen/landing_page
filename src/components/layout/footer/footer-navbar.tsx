"use client";

import { Text } from "@/components/ui/text";
import { docsConfig } from "@/configs/docs.config";
import Link from "next/link";

const FooterNavbar = () => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row">
      {docsConfig.footerNav.map((item) => {
        return (
          <div className="flex flex-col gap-5" key={item.title}>
            <Text as="h3" size="xl" className="font-bold">
              {item.title}
            </Text>
            {item.items?.map((subItem) => (
              <Link key={subItem.title} href={subItem.href || "#"}>
                <Text as="h4" size="md" className="hover:text-gray-700">
                  {subItem.title}
                </Text>
              </Link>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default FooterNavbar;
