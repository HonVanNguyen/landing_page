import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { OUR_SOLUTIONS_DATA } from "@/data/our-solutions.data";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import OurSolutionCard from "./card";

const OurSolutions = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="container flex h-full w-full flex-col items-center justify-center gap-10 p-5 md:gap-20 md:p-20">
        <div className="flex flex-col items-center justify-center gap-5">
          <Text as="h2" size="5xl" className="text-center font-bold">
            Giải pháp của chúng tôi
          </Text>
          <Text as="h3" size="2xl" className="text-center text-neutral-500">
            Thu hút, giữ chân và gia tăng lượng khách hàng trung thành mỗi ngày cho doanh nghiệp của bạn với các giải pháp loyalty đa dạng từ KICITI
          </Text>
        </div>
        <div className="grid-col-1 grid w-full max-w-[1280px] gap-3 md:grid-cols-2">
          {OUR_SOLUTIONS_DATA?.map((ourSolution, index) => <OurSolutionCard key={index} {...ourSolution} />)}
        </div>
        <Link href={"#"}>
          <Button variant="outline" className="bg-primary py-5 text-white">
            Liên hệ hợp tác
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OurSolutions;
