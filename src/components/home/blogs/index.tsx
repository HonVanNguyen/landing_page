import { Button } from "@/components//ui/button";
import { Text } from "@/components/ui/text";
import { BLOGS_DATA } from "@/data/blogs.data";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import BlogCard from "./card";

const Blogs = () => {
  return (
    <section className="h-full w-full rounded-t-2xl bg-primary md:rounded-t-[80px]">
      <div className="container flex h-full w-full flex-col items-center justify-center gap-10 p-5 md:p-10">
        <div className="flex w-full flex-row items-center justify-between gap-5">
          <Text as="h2" size="5xl" className="text-center font-bold text-white">
            "Không thể bỏ lỡ" từ KICITI
          </Text>
          <Link href={"#"}>
            <Button
              variant="outline"
              className="border-white bg-transparent py-5 text-white"
            >
              Xem thêm
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid-col-1 grid w-full max-w-[1280px] gap-5 md:grid-cols-3">
          {BLOGS_DATA?.map((blog, index) => <BlogCard key={index} {...blog} />)}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
