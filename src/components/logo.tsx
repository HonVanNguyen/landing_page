import { siteConfig } from "@/configs/site.config";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="mr-6 flex items-center justify-center space-x-2 md:justify-start"
    >
      <Image
        src={siteConfig.logo}
        alt={siteConfig.name}
        width={80}
        height={80}
      />
    </Link>
  );
};

export default Logo;
