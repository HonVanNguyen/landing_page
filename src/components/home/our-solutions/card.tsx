import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OurSolution } from "@/data/our-solutions.data";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OurSolutionCard = ({
  title,
  descriptions,
  imageUrl,
  color,
  href,
}: OurSolution) => {
  return (
    <Card
      className={cn("flex w-full flex-col")}
      style={{
        backgroundColor: color,
      }}
    >
      <CardHeader className="flex flex-row items-start gap-5">
        <Image src={imageUrl} width={64} height={64} alt={title} />
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {descriptions.map((description, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="bg- flex items-center rounded-full bg-white/10 p-1 shadow-md">
                <CheckIcon className="h-4 w-4" />
              </div>
              <CardDescription>{description}</CardDescription>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex w-full items-center justify-center">
        <Link href={href}>
          <Button variant="outline" className="bg-transparent py-5 text-white">
            Khám phá thêm
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default OurSolutionCard;
