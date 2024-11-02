import { Text } from "@/components/ui/text";
import Link from "next/link";
import { Button } from "@/components//ui/button";
import { ArrowRightIcon } from "lucide-react";
import { POINTS_TO_GIFTS_DATA } from "@/data/points-to-gifts.data";
import PointToGiftCard from "./card";

const PointsToGifts = () => {
  return (
    <section className="h-full w-full rounded-t-2xl bg-primary md:rounded-t-[80px]">
      <div className="container flex h-full w-full flex-col items-center justify-center gap-10 p-5 md:p-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <Text as="h2" size="5xl" className="text-center font-bold text-white">
            Tích điểm miễn phí - Đổi quà hấp dẫn
          </Text>
          <Text as="h3" size="2xl" className="text-center text-gray-200">
            Đồng hành cùng siêu trợ thủ tích hợp trí tuệ nhân tạo [AI]
          </Text>
        </div>
        <div className="grid-col-1 grid w-full max-w-[1280px] gap-3 md:grid-cols-3">
          {POINTS_TO_GIFTS_DATA?.map((pointToGift, index) => (
            <PointToGiftCard key={index} {...pointToGift} />
          ))}
        </div>
        <Link href={"#"}>
          <Button variant="outline" className="py-5 text-primary">
            Liên hệ hợp tác
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PointsToGifts;
