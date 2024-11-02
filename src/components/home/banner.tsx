import Image from "next/image";
import { Text } from "@/components/ui/text";
import { Button } from "../ui/button";
import Link from "next/link";
import { ClipboardPlusIcon } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative h-[700px] w-full">
      <div className="absolute bottom-0 left-0 h-[200px] w-full bg-gradient-to-t from-primary to-transparent"></div>
      <div className="container flex h-full flex-col items-center justify-center gap-10 p-10 md:flex-row">
        <div className="flex flex-col gap-10">
          <Text as="h1" size="5xl" className="flex flex-col gap-5 font-bold">
            <p>
              Trợ thủ <span className="text-primary">Loyalty</span>{" "}
            </p>
            <p>
              <span className="text-primary">đắc lực</span>, nâng
            </p>
            <p>tầm thương hiệu</p>
          </Text>
          <Link href={"#"}>
            <Button variant="default" className="font-bold italic">
              <ClipboardPlusIcon className="mr-2 h-4 w-4" />
              Đăng ký tư vấn
            </Button>
          </Link>
        </div>
        <div>
          <Image
            src="/assets/banner.png"
            width={500}
            height={500}
            alt="banner"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
