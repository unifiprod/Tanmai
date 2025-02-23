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
  badge: string;
}

interface FeaturedProjectsProps {
  featured: FeaturedProject[];
}

export default function FeaturedProjects({ featured }: FeaturedProjectsProps) {
  const router = useRouter();

  return (
    <section className="w-full min-h-screen sm:py-24 py-0 px-2 text-black flex flex-col justify-center">
      <div className="flex items-center px-2 sm:px-36 justify-between mb-8">
        <div>
          <h2 className="font-Arimo text-4xl">Featured projects</h2>
          <div className="border-t-2 my-4 w-64 border-[#BF7E32]"></div>
        </div>
      </div>
      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent>
          {featured.map((item) => (
            <CarouselItem key={item.id}>
              <Card className="bg-white rounded-lg cursor-pointer overflow-hidden">
                <CardContent className="p-0 relative">
                  <div className="w-full h-[50vh] bg-black text-white rounded-t-lg overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      width={1000}
                      height={500}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="sm:p-10 p-4 flex sm:flex-row flex-col  w-full  justify-between">
                    <div className="w-full">
                      <h3
                        onClick={() => router.push(item.route)}
                        className="text-[#BF7E32] font-Arimo text-2xl mb-1 cursor-pointer"
                      >
                        {item.name}
                      </h3>
                      <p className="font-poppins text-sm mb-4">
                        {item.location}
                      </p>

                      {/* <p className="bg-[#BF7E32] text-sm text-white py-2 px-4 mt-6 rounded-sm">
                          {item.badge}
                        </p> */}

                      <div className="grid grid-cols-2 font-Arimo gap-4">
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
                    {item.badge === "Sales Open" ? (
                      <div className="flex flex-col gap-2 p-5 sm:w-1/2 w-full">
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
                    ) : (
                      <div className="flex flex-col gap-2 p-5 sm:w-1/2 w-full">
                        <Button className="w-full bg-[#BF7E32] hover:bg-[#A66D2B] text-white">
                          Upcomming
                        </Button>
                      </div>
                    )}
                  </div>
                  <div
                    className={`absolute top-8 right-[-40px] ${
                      item.badge === "Sales Open"
                        ? "bg-red-600"
                        : "bg-[#A66D2B]"
                    } w-44 text-center text-white py-2 px-6 text-sm font-bold rotate-45 shadow-lg`}
                  >
                    {item.badge}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border border-[#BF7E32] bg-[#BF7E32] text-white hover:bg-inherit sm:block hidden" />
        <CarouselNext className="border border-[#BF7E32] bg-[#BF7E32] text-white hover:bg-inherit  sm:block hidden" />
      </Carousel>
    </section>
  );
}
