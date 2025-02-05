"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { krushi } from "@/config/projects";
import Image from "next/image";
import { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
// import { HorizontalScrollCarousel } from "@/components/HorizontalScrollCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

function Krushi() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollToSection = (sectionRef: any) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const aboutRef = useRef(null);
  const planRef = useRef(null);
  const amenitiesRef = useRef(null);
  const galleryRef = useRef(null);
  return (
    <div className="relative bg-[#E6E6E6] w-full h-full text-black">
      <Header />
      {/* enquire */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="sticky top-1/2  left-[100%] h-14 w-16 z-50">
            <button className="w-fit bg-[#BF7E32] text-white px-5 py-4 rounded-t-lg -rotate-90">
              Enquire
            </button>
          </div>
        </DialogTrigger>
        <DialogContent className="text-white bg-[#ffffff56] backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-3xl text-[#BF7E32] font-Arimo">
              Enquire
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit} className=" text-white space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-whites text-sm mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#ffffff3c]  rounded-md text-white placeholder-gray-300 focus:ring-1 focus:ring-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#ffffff3c]  rounded-md text-white placeholder-gray-300 focus:ring-1 focus:ring-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#ffffff3c]  rounded-md text-white placeholder-gray-300 focus:ring-1 focus:ring-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm mb-1">
                    Project
                  </label>
                  <input
                    id="project"
                    name="project"
                    type="text"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#ffffff3c]  rounded-md text-white placeholder-gray-300 focus:ring-1 focus:ring-white focus:outline-none"
                  ></input>
                </div>
                <button
                  type="submit"
                  className="w-fit px-10 bg-[#BF7E32] text-white py-2 rounded-md hover:bg-[#966226] transition"
                >
                  Submit
                </button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {/* block */}
      <div className="sm:px-24 px-2 sm:-mt-[2%] -mt-0">
        {/* banner */}
        <div className="w-full h-[50vh]  text-black rounded-sm">
          <Image
            src={krushi.bannerImg}
            width={1000}
            height={500}
            alt="banner"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
        {/* details */}
        <div className="flex sm:flex-row flex-col sm:gap-0 gap-5 mt-5 px-5 py-2 ">
          <div className="flex flex-col gap-2 items-start w-3/4">
            <div className="w-72 h-40 ">
              <Image
                src={krushi.logo}
                width={400}
                height={400}
                alt="logo"
                className="w-full h-full object-cover rounded-mds"
              />
            </div>
            <h2 className="text-3xl font-Arimo text-[#BF7E32]">
              {krushi.title}
            </h2>
            <p className="text-sm font-Arimo w-3/4">{krushi.location}</p>
          </div>
          <div className="flex flex-col items-center gap-2 justify-center sm:border-l-2 border-l-0 border-[#BF7E32] px-10 py-5">
            <div className="grid grid-cols-2 font-Arimo gap-5">
              <div className="flex flex-col  items-start">
                <h2>Project Type</h2>
                <p className="text-[#BF7E32] font-semibold">{krushi.type}</p>
              </div>
              <div className="flex flex-col  items-start">
                <h2>Bedrooms</h2>
                <p className="text-[#BF7E32] font-semibold">{krushi.rooms}</p>
              </div>
              <div className="flex flex-col  items-start">
                <h2>Development Size</h2>
                <p className="text-[#BF7E32] font-semibold">
                  {krushi.area} Acres
                </p>
              </div>
              <div className="flex flex-col  items-start">
                <h2>Total Units</h2>
                <p className="text-[#BF7E32] font-semibold">
                  {krushi.units} Units
                </p>
              </div>
            </div>
            <a
              href={krushi.borchureLink}
              target="_blank"
              download
              className="bg-[#BF7E32] text-center w-full text-white px-5 py-3 rounded-sm"
            >
              Download Brochure
            </a>
            <button className="bg-[#BF7E32] w-full text-white px-5 py-3 rounded-sm">
              Enquire
            </button>
          </div>
        </div>
        {/* inner nav */}
        <nav className="flex items-center gap-5 font-Arimo text-lg py-5">
          <a
            className="border-b-2 border-[#BF7E32] cursor-pointer"
            onClick={() => scrollToSection(aboutRef)}
          >
            About
          </a>
          <a
            className="cursor-pointer"
            onClick={() => scrollToSection(planRef)}
          >
            Plans
          </a>
          <a
            className="cursor-pointer"
            onClick={() => scrollToSection(amenitiesRef)}
          >
            Amenities
          </a>
          <a
            className="cursor-pointer"
            onClick={() => scrollToSection(galleryRef)}
          >
            Gallery
          </a>
        </nav>
        <div ref={aboutRef} className="flex flex-col items-start gap-5 py-10">
          <h2 className="font-Arimo text-3xl border-b-2 border-[#BF7E32] w-fit">
            About Krushi Gardenia
          </h2>
          <p>{krushi.about}</p>
        </div>
        <div
          ref={planRef}
          className="flex flex-col items-start justify-start w-full gap-5 py-10"
        >
          <h2 className="font-Arimo text-3xl border-b-2 border-[#BF7E32] w-fit">
            Plan
          </h2>
          <div className="w-full h-[100vh] bg-gray-400 ">
            <Image
              src={krushi.planLink}
              width={1350}
              height={700}
              alt="plan"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
        <div
          ref={amenitiesRef}
          className="flex flex-col items-start justify-start w-full gap-5 py-10"
        >
          <h2 className="font-Arimo text-3xl border-b-2 border-[#BF7E32] w-fit">
            Amenities
          </h2>
          <ul className="font-Arimo gap-2 flex flex-col px-5">
            {krushi.amenities.map((amenity, index) => (
              <li key={index}>&#8226; {amenity}</li>
            ))}
          </ul>
        </div>
        <div
          ref={galleryRef}
          className="flex flex-col items-start justify-start w-full gap-5 py-10"
        >
          <h2 className="font-Arimo text-3xl border-b-2 border-[#BF7E32] w-fit">
            Gallery
          </h2>
        </div>
      </div>
      {/* <div className="w-full overflow-x-auto whitespace-nowrap mb-10">
        {krushi.gallery.map((image, index) => (
          <div key={index} className="mx-2 inline-block w-72 h-72 bg-gray-400">
            <Image
              src={image}
              width={500}
              height={100}
              alt={image}
              className="w-72 h-72 object-cover"
            />
          </div>
        ))}
      </div> */}
      <div className="w-full flex items-center justify-center mb-10 overflow-hidden">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-4xl"
        >
          <CarouselContent>
            {krushi.gallery.map((image, index) => (
              <CarouselItem key={index} className="sm:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="h-auto sm:w-72 w-full flex aspect-square items-center justify-center p-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Image
                            src={image}
                            width={100}
                            height={100}
                            alt={image}
                            className="w-full h-auto object-cover aspect-square rounded-md"
                          />
                        </DialogTrigger>
                        <DialogContent className="p-10">
                          <DialogTitle></DialogTitle>
                          <Image
                            src={image}
                            width={400}
                            height={400}
                            alt={image}
                            className="w-full h-auto object-cover aspect-square rounded-md"
                          />
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-[#BF7E32] text-white" />
          <CarouselNext className="bg-[#BF7E32] text-white" />
        </Carousel>
      </div>
      {/* <HorizontalScrollCarousel cards={krushi.gallery} /> */}
      <Footer />
    </div>
  );
}

export default Krushi;
