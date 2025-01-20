"use client";

import Image from "next/image";
import { why } from "@/config/why";
import { useRef, useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { featured } from "@/config/featured";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FeaturedProjects from "@/components/featured-projects";
export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollToSection = (sectionRef: any) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

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

  return (
    <div className="relative bg-[#E6E6E6]">
      {/* navbar */}
      <div className="z-10 sticky top-0 left-0 flex w-full justify-between items-center sm:px-10 px-2 py-2 backdrop-blur-sm bg-[#00000040] border-b border-[#ffffff23]">
        <div>
          <Image
            src={"/logo.png"}
            width={200}
            height={50}
            alt="logo"
            className="hidden sm:block"
          />
          <Image
            src={"/logo.png"}
            width={50}
            height={50}
            alt="logo"
            className="block sm:hidden"
          />
        </div>
        <div className="flex font-prata sm:text-xl text-sm  gap-10">
          <p
            onClick={() => scrollToSection(homeRef)}
            className="text-white hover:text-[#BF7E32] transition-all duration-200"
          >
            Home
          </p>
          <p
            onClick={() => scrollToSection(aboutRef)}
            className="text-white hover:text-[#BF7E32] transition-all duration-200"
          >
            About Us
          </p>
          <p
            onClick={() => scrollToSection(projectRef)}
            className="text-white hover:text-[#BF7E32] transition-all duration-200"
          >
            Project
          </p>
          <p
            onClick={() => scrollToSection(contactRef)}
            className="text-white hover:text-[#BF7E32] transition-all duration-200"
          >
            Contact Us
          </p>
        </div>
      </div>
      {/* enquire button */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="sticky top-1/2 z-50  left-[100%] h-14 w-16">
            <button className="w-fit bg-[#BF7E32] text-white px-5 py-4 rounded-t-lg -rotate-90">
              Enquire
            </button>
          </div>
        </DialogTrigger>
        <DialogContent className="text-white bg-[#ffffff56] backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-3xl text-[#BF7E32] font-prata">
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

      {/* banner */}
      <div
        ref={homeRef}
        className="w-full h-[100vh] object-contain sm:-mt-[10%] -mt-[20%]"
      >
        <Image
          src={"/banner.png"}
          width={1350}
          height={1080}
          alt="banner"
          className="w-full object-fill h-[100vh] hidden sm:block"
        />
        <Image
          src={"/banner.png"}
          width={400}
          height={200}
          alt="banner"
          className="w-full object-cover h-[100vh] block sm:hidden"
        />
      </div>
      {/* why */}
      <section className="w-full sm:h-[100vh] h-full sm:py-24 py-10 flex flex-col items-center justify-center">
        <h2 className="font-prata text-black sm:text-4xl text-3xl text-center">
          Why TANMAI Constructions ?
        </h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:py-10 py-5 sm:px-20 px-5 sm:gap-10 gap-5">
          {why.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between sm:gap-5 gap-2 text-black"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={70}
                height={70}
                className="hidden sm:block"
              />
              <Image
                src={item.icon}
                alt={item.title}
                width={50}
                height={70}
                className="block sm:hidden"
              />
              <div>
                <h3 className="font-prata sm:text-3xl text-xl">{item.title}</h3>
                <p className="font-poppins text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* about */}
      <section
        ref={aboutRef}
        className="relative w-full sm:h-[100vh] h-full sm:py-24 py-10 sm:px-36 px-5 text-black flex flex-col justify-center"
      >
        <div className="bg-[#bf7d3264] absolute blur-3xl top-0 left-0 rounded-full w-48 h-48">
          .
        </div>
        <h2 className="font-prata text-4xl">About us</h2>
        <div className="border-t-2 my-4 w-28 border-[#BF7E32]"></div>
        <p className="font-poppins text-lg flex flex-col gap-10">
          {" "}
          <span>
            At Tanmai Constructions, we believe that every project is more than
            just a structure it&apos;s a reflection of dreams, aspirations, and
            a vision brought to life. Established with a passion for creating
            exceptional spaces, we are a new name in the construction industry,
            driven by innovation, quality, and a deep commitment to our clients.
          </span>
          <span>
            Our journey began with the successful completion of our first
            project, which stands as a proud testament to our dedication to
            excellence. While we may be at the start of our story, our approach
            is built on modern techniques, transparent operations, and a
            customer-first mindset. We are committed to transforming ideas into
            reality while maintaining the highest standards of design, safety,
            and sustainability.
          </span>
          <span>
            With a focus on building trust and delivering value, we aim to
            establish ourselves as a trusted name in the construction sector.
            Our mission is simple: to create spaces that inspire, endure, and
            enhance the lives of the people who inhabit them.
          </span>
        </p>
      </section>
      {/* mission */}
      <section className="relative w-full sm:h-[100vh] h-full sm:py-24 py-10 sm:px-36 px-5 text-black flex flex-col justify-center">
        <div className="bg-[#bf7d3264] absolute blur-3xl top-0 right-0 rounded-full w-48 h-48">
          .
        </div>
        <h2 className="font-prata text-4xl">Our Mission and Values</h2>
        <div className="border-t-2 my-4 w-80 border-[#BF7E32]"></div>
        <h3 className="text-2xl font-prata mt-5">Mission</h3>
        <p className="font-poppins text-lg flex flex-col gap-10">
          {" "}
          To redefine construction by delivering high-quality, customer-centric
          projects that inspire trust and set benchmarks in design and
          execution.
        </p>
        <h3 className="text-2xl font-prata mt-5"> Values</h3>
        <p className="font-poppins text-lg flex flex-col gap-2">
          <span>
            . Integrity: Honest and transparent dealings at every stage.
          </span>
          <span>. Innovation: Creative solutions for modern challenges.</span>
          <span>
            . Sustainability: Commitment to eco-friendly and energy-efficient
            construction practices.
          </span>
          <span>
            . Customer Satisfaction: Ensuring every project is a joyful and
            rewarding journey for our clients.
          </span>
        </p>
      </section>
      {/* chairman's message */}
      <section className=" w-full sm:h-[100vh] h-full sm:py-24 py-10 sm:px-36 px-5 text-black ">
        <div className="relative flex flex-col justify-center w-full h-full">
          <div className="w-full h-full bg-[#bf7d3222] absolute blur-3xl top-0 left-0 rounded-lg "></div>
          <h2 className="font-prata text-4xl">Chairman&apos;s Message</h2>
          <div className="border-t-2 my-4 w-64 border-[#BF7E32]"></div>
          <div className="flex sm:flex-row flex-col-reverse items-center justify-between gap-10">
            <p className="flex-1 font-poppins">
              {"  "}
              I am proud to introduce Tanmai Constructions, a new entrant in the
              construction industry with a bold vision to excel. We are
              dedicated to redefining construction by blending innovation,
              quality, and transparency into every project.
              <br /> Our journey began with our first completed project, a
              testament to our commitment to excellence and customer
              satisfaction. We recognize the importance of trust and reputation,
              and we aim to establish both by delivering sustainable spaces that
              meet the evolving needs of modern life.
              <br /> At Tanmai Constructions, we focus on creating value through
              innovative solutions, eco-friendly practices, and a
              customer-centric approach. Every detail matters to us because we
              know it matters to you.
              <br /> Thank you for trusting us to be part of your journey.
              Together, let&apos;s build not just structures but spaces that
              inspire and enrich lives.
              <br />
              Warm regards,
              <br />
              [Chairman&apos;s Name]
              <br />
              Chairman, Tanmai Constructions
            </p>
            <div className="sm:w-[30%] w-full h-full bg-gray-500 min-h-[200px] text-black flex items-center justify-center">
              <p className="text-4xl">Photo</p>
            </div>
          </div>
        </div>
      </section>
      {/* upcoming projects */}

      <FeaturedProjects featured={featured} />
      {/* footer */}
      <footer ref={contactRef} className="relative w-full sm:h-[90vh] h-full">
        <div className="absolute top-0 left-0  w-full sm:h-[90vh] h-full object-cover">
          <Image
            src={"/footer.png"}
            width={1400}
            height={1080}
            alt="footer"
            className="w-full sm:h-[90vh] h-full object-cover"
          />
        </div>
        <div className=" w-full h-[80%] flex flex-wrap  items-start justify-between sm:px-20 px-5 py-10 font-poppins sm:gap-48 gap-5">
          <div className="flex flex-col gap-5 text-white z-10">
            <h2 className="font-prata text-2xl text-[#BF7E32]">Reach Us</h2>
            <div className="flex flex-col gap-1">
              <h3 className="font-medium">Corporate address</h3>
              <p className="font-light text-sm">
                Trendz Trident, First Floor,
                <br /> H.No. 1-98/5/5/6,
                <br /> Jubilee Enclave, Madhapur,
                <br /> Hyderabad - 500081
                <br />
                Teleangana
              </p>
            </div>
            <div>
              <h3 className="font-medium">For sales enquiries:</h3>
              <p className="font-light text-sm">+91 40 48510705</p>
            </div>
            <div>
              <h3 className="font-medium">For other enquiries:</h3>
              <p className="font-light text-sm">+91 90 9009 3939</p>
            </div>
            <div>
              <h3 className="font-medium">Email:</h3>
              <p className="font-light text-sm">properties@tanmai.com</p>
            </div>
            <div className="flex gap-5 items-center">
              <FaInstagram className="text-white h-5 w-5" />
              <FaFacebook className="text-white h-5 w-5" />
              <FaSquareXTwitter className="text-white h-5 w-5" />
              <FaYoutube className="text-white h-5 w-5" />
            </div>
          </div>
          <div className="flex flex-col gap-5 text-white z-10">
            <h2 className="font-prata text-2xl text-[#BF7E32]">Menu</h2>
            <h3 className="font-medium">Home</h3>
            <h3 className="font-medium">About us</h3>
            <h3 className="font-medium">Projects</h3>
          </div>
          <div className="sm:max-w-[40%] backdrop-blur-lg bg-[#ffffff24] w-full  font-poppins text-white rounded-lg px-10 py-10">
            <h2 className="text-3xl font-prata mb-3">Enquire</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-1">
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
          </div>
        </div>
        <div className="absolute sm:bottom-5 bottom-0 sm:px-16 px-5 sm:py-0 py-2  text-white w-full text-[10px] font-poppins">
          @ 2024 Official website of Tanmai Constructions | All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
