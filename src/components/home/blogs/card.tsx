import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blog } from "@/data/blogs.data";
import Image from "next/image";

const BlogCard = ({ title, content, imageUrl }: Blog) => {
  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardHeader className="h-[250px] w-full p-0">
        <Image
          src={imageUrl}
          width={0}
          height={0}
          alt={title}
          sizes="100vw"
          className="h-full w-full rounded-lg object-cover"
        />
      </CardHeader>
      <CardContent className="mt-5 flex flex-col gap-3 p-0">
        <CardTitle className="text-xl uppercase">{title}</CardTitle>
        <CardDescription>{content}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
