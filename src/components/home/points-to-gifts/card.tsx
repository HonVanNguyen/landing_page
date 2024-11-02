import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PointToGift } from "@/data/points-to-gifts.data";
import { cn } from "@/lib/utils";
import Image from "next/image";

const PointToGiftCard = ({ title, description, imageUrl, colSpan, width, height }: PointToGift) => {
  const customClassName = colSpan === 3 ? "md:col-span-3 flex-col md:flex-row" : "col-span-1 flex-col";
  return (
    <Card className={cn(customClassName, "flex w-full justify-between border-none bg-[#90FEFF]")}>
      <CardHeader>
        <CardTitle className="text-xl leading-8">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className={cn("flex items-center p-5", colSpan === 3 ? "justify-end" : "justify-center")}>
        <Image src={imageUrl} width={width || 250} height={height || 250} alt={title} className="rounded-lg" />
      </CardContent>
    </Card>
  );
};

export default PointToGiftCard;
