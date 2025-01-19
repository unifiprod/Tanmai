"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FeaturedProject {
  id: number;
  name: string;
  location: string;
  projectType: string;
  bedrooms: string;
  size: string;
  units: string;
  image: string;
  route: string;
  brochureLink: string;
}

interface FeaturedProjectsProps {
  featured: FeaturedProject[];
}

export default function FeaturedProjects({ featured }: FeaturedProjectsProps) {
  const router = useRouter();

  return (
    <section className="w-full min-h-screen py-24 text-black flex flex-col justify-center">
      <div className="flex items-center px-5 sm:px-36 justify-between mb-8">
        <div>
          <h2 className="font-prata text-4xl">Featured projects</h2>
          <div className="border-t-2 my-4 w-64 border-[#BF7E32]"></div>
        </div>
      </div>
      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent>
          {featured.map((item) => (
            <CarouselItem key={item.id}>
              <Card className="bg-white rounded-lg cursor-pointer">
                <CardContent className="p-0">
                  <div
                    onClick={() => router.push(item.route)}
                    className="w-full h-[50vh] bg-black text-white rounded-t-lg overflow-hidden"
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      width={1000}
                      height={500}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-10 flex w-full  justify-between">
                    <div className="w-full">
                      <h3 className="text-[#BF7E32] font-prata text-2xl mb-1">
                        {item.name}
                      </h3>
                      <p className="font-poppins text-sm mb-4">
                        {item.location}
                      </p>
                      <div className="grid grid-cols-2 font-poppins gap-4">
                        <div>
                          <h4 className="text-sm font-semibold">
                            Project Type
                          </h4>
                          <p className="text-[#BF7E32]">{item.projectType}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold">Bedrooms</h4>
                          <p className="text-[#BF7E32]">{item.bedrooms}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold">
                            Development Size
                          </h4>
                          <p className="text-[#BF7E32]">{item.size}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold">Total Units</h4>
                          <p className="text-[#BF7E32]">{item.units} Units</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 p-5 w-1/2">
                      <Button
                        asChild
                        className="w-full bg-[#BF7E32] hover:bg-[#A66D2B] text-white"
                      >
                        <a href={item.brochureLink} target="_blank" download>
                          Download Brochure
                        </a>
                      </Button>
                      <Button
                        className="w-full bg-[#BF7E32] hover:bg-[#A66D2B] text-white"
                        onClick={() => {
                          /* Add enquiry logic here */
                          router.push(item.route);
                        }}
                      >
                        Enquire
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border border-[#BF7E32] bg-[#BF7E32] text-white hover:bg-inherit" />
        <CarouselNext className="border border-[#BF7E32] bg-[#BF7E32] text-white hover:bg-inherit" />
      </Carousel>
    </section>
  );
}
