import { Text } from "@/components/ui/text";
import { siteConfig } from "@/configs/site.config";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col gap-5">
      <Text as="h3" size="xl" className="font-bold">
        Liên hệ hỗ trợ
      </Text>
      <div className="flex flex-col gap-2">
        <Text as="h4" size="md" className="font-semibold">
          Dành cho doanh nghiệp & đối tác
        </Text>
        <Text as="p" size="sm">
          Email:{" "}
          <Link
            className="underline"
            href={`mailto:${siteConfig.contact.forPartner.email}`}
          >
            {siteConfig.contact.forPartner.email}
          </Link>
        </Text>
        <Text as="p" size="sm">
          Hotline: {siteConfig.contact.forPartner.hotline}
        </Text>
      </div>
      <div className="flex flex-col gap-2">
        <Text as="h4" size="md" className="font-semibold">
          Dành cho doanh người dùng ứng dụng
        </Text>
        <Text as="p" size="sm">
          Email:{" "}
          <Link
            className="underline"
            href={`mailto:${siteConfig.contact.forUser.email}`}
          >
            {siteConfig.contact.forUser.email}
          </Link>
        </Text>
        <Text as="p" size="sm">
          Hotline: {siteConfig.contact.forUser.hotline}
        </Text>
      </div>
      <div className="flex items-center gap-5">
        <Link href={siteConfig.social.facebook}>
          <FacebookIcon className="h-8 w-8" />
        </Link>
        <Link href={siteConfig.social.instagram}>
          <InstagramIcon className="h-8 w-8" />
        </Link>
        <Link href={siteConfig.social.linkedin}>
          <LinkedinIcon className="h-8 w-8" />
        </Link>
        <Link href={siteConfig.social.youtube}>
          <YoutubeIcon className="h-8 w-8" />
        </Link>
        <Link href={siteConfig.social.twitter}>
          <TwitterIcon className="h-8 w-8" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
