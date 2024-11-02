import { FooterNavItem, MainNavItem, SidebarNavItem } from "@/types/nav.type";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  footerNav: FooterNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Giải pháp",
      href: "/",
      items: [
        { title: "Giải pháp loyolty toàn diện", href: "/solution-1" },
        { title: "Giải pháp chuyển đổi số doanh nghiệp", href: "/solution-2" },
      ],
    },
    {
      title: "Đối tác",
      href: "/blog",
      items: [
        { title: "Giải pháp loyolty toàn diện", href: "/" },
        { title: "Giải pháp chuyển đổi số doanh nghiệp", href: "/" },
      ],
    },
    {
      title: "Tin tức",
      href: "/news",
      items: [
        { title: "Giải pháp loyolty toàn diện", href: "/" },
        { title: "Giải pháp chuyển đổi số doanh nghiệp", href: "/" },
      ],
    },
    {
      title: "Về chúng tôi",
      href: "/about",
      items: [
        { title: "Giải pháp loyolty toàn diện", href: "/" },
        { title: "Giải pháp chuyển đổi số doanh nghiệp", href: "/" },
      ],
    },
  ],
  sidebarNav: [],
  footerNav: [
    {
      title: "Giới thiệu",
      href: "#",
      items: [
        { title: "Về Kiciti", href: "#" },
        { title: "Tin tức và Blog", href: "/news-and-blog" },
        { title: "Case study", href: "/case-study" },
      ],
    },
    {
      title: "Giải pháp",
      href: "#",
      items: [
        { title: "Giải pháp loyolty toàn diện", href: "/solution-1" },
        { title: "Giải pháp chuyển đổi số doanh nghiệp", href: "/solution-2" },
      ],
    },
  ],
};
