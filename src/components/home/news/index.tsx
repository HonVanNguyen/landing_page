import { Button } from "@/components//ui/button";
import { Text } from "@/components/ui/text";
import { LIST_NEWS_DATA } from "@/data/news.data";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import NewsCard from "./card";

const News = () => {
  return (
    <section className="h-full w-full items-center justify-center bg-gray-100">
      <div className="container flex h-full w-full flex-col items-center justify-center gap-10 p-5 md:p-10">
        <div className="flex w-full flex-row items-center justify-between gap-5">
          <Text as="h2" size="5xl" className="text-center font-bold">
            Tin tức
          </Text>
          <Link href={"#"}>
            <Button
              variant="outline"
              className="border-black bg-transparent py-5"
            >
              Xem thêm
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid-col-1 grid w-full max-w-[1280px] gap-5 md:grid-cols-3">
          {LIST_NEWS_DATA?.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
