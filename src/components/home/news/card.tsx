import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { News } from "@/data/news.data";
import Image from "next/image";

const NewsCard = ({ title, content, imageUrl, tags, pushlishDate }: News) => {
  return (
    <Card>
      <CardHeader className="h-[250px] w-full p-0">
        <Image
          src={imageUrl}
          width={0}
          height={0}
          alt={title}
          sizes="100vw"
          className="h-full w-full rounded-t-lg object-cover"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-5 p-5">
        <CardTitle className="text-xl uppercase">{title}</CardTitle>
        <CardDescription>{content}</CardDescription>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {new Date(pushlishDate).toLocaleDateString()} - {tags.join(", ")}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
