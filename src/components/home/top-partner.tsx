"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Text } from "@/components/ui/text";
import { LOGO_PARTNERS } from "@/data/partners.data";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const TopPartner = () => {
  return (
    <section className="flex min-h-[400px] w-full items-center justify-center">
      <div className="container flex h-full w-full flex-col items-center justify-center gap-10 px-20 py-10">
        <Text as="h2" size="2xl" className="text-center font-bold">
          Đối tác hàng đầu của chúng tôi
        </Text>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm md:max-w-2xl"
        >
          <CarouselContent>
            {LOGO_PARTNERS.map((logoPartner, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                <div className="flex h-full items-center justify-center p-1">
                  <Image
                    src={logoPartner.imageUrl}
                    width={200}
                    height={200}
                    alt={logoPartner.name}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TopPartner;
