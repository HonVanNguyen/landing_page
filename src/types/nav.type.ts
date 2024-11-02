import { ReactNode } from "react";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface MainNavItem extends NavItemWithChildren {}

export interface SidebarNavItem extends NavItemWithChildren {}

export interface FooterNavItem extends NavItemWithChildren {}

