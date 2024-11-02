"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Text } from "@/components/ui/text";
import { MainNavItem } from "@/types/nav.type";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

interface MainNavbarProps {
  navItems: MainNavItem[];
}

const MainNavbar = ({ navItems }: MainNavbarProps) => {
  return (
    <Menubar className="flex items-center border-none shadow-none">
      {navItems.map((item) => {
        return (
          <MenubarMenu key={item.title}>
            <MenubarTrigger className="flex cursor-pointer items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              <Text as="p" className="mr-3">
                {item.title}
              </Text>
              <ChevronDownIcon className="h-4 w-4" />
            </MenubarTrigger>
            <MenubarContent>
              {item.items?.map((subItem, subItemIndex) => {
                return (
                  <Fragment key={subItem.title}>
                    <MenubarItem>
                      <Link
                        href={subItem.href || "#"}
                        className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                      >
                        <Text as="p">{subItem.title}</Text>
                      </Link>
                    </MenubarItem>
                    {subItemIndex < (item.items?.length ?? 0) - 1 && (
                      <MenubarSeparator />
                    )}
                  </Fragment>
                );
              })}
            </MenubarContent>
          </MenubarMenu>
        );
      })}
    </Menubar>
  );
};

export default MainNavbar;
