"use client";

import Image from "next/image";
// import { why } from "@/config/why";
import { useRef, useState } from "react";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
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
import { SmoothScrollHero } from "@/components/SmoothScrollHero";
import TextReveal from "@/components/textReveal";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { WhySection } from "@/components/WhySection";
import { AnimatePresence, motion } from "framer-motion";
import { SiGooglemaps } from "react-icons/si";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Stagger child animations
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const about = `
            At Tanmai ventures, we believe that every project is more than just a structure it's a reflection of dreams, aspirations, and a vision brought to life. Established with a passion for creating exceptional spaces, we are a new name in the construction industry, driven by innovation, quality, and a deep commitment to our clients.`;
  return (
    <div className="relative bg-[#E6E6E6]">
      {/* navbar */}

      <header className="sm:sticky w-full  top-0 z-20 flex justify-center items-center ">
        <nav
          data-layername="menu"
          className={`flex justify-between items-center w-full bg-[#E6E6E6]  sm:px-10 sm:py-2 px-5 py-5`}
        >
          {/* Logo */}
          <Image
            src={"/logo.png"}
            alt="Exterview logo"
            width={200}
            height={40}
            className="object-contain shrink-0"
          />

          {/* Hamburger Icon */}
          <div className="sm:hidden  block">
            <button
              className="p-2 focus:outline-none"
              onClick={toggleDrawer}
              aria-label="Toggle Menu"
            >
              {isDrawerOpen ? (
                <Cross1Icon width={24} height={24} />
              ) : (
                <HamburgerMenuIcon width={24} height={24} />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:flex-wrap gap-3.5 items-center px-5 ">
            <div className="flex items-center font-Arimo gap-16 text-lg text-neutral-900 text-opacity-40">
              <p
                onClick={() => scrollToSection(homeRef)}
                className="text-black hover:text-[#BF7E32] transition-all duration-200"
              >
                Home
              </p>
              <p
                onClick={() => scrollToSection(aboutRef)}
                className="text-black hover:text-[#BF7E32] transition-all duration-200"
              >
                About Us
              </p>
              <p
                onClick={() => scrollToSection(projectRef)}
                className="text-black hover:text-[#BF7E32] transition-all duration-200"
              >
                Project
              </p>
              <p
                onClick={() => scrollToSection(contactRef)}
                className="text-black hover:text-[#BF7E32] transition-all duration-200"
              >
                Contact Us
              </p>
            </div>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {isDrawerOpen && (
              <motion.div
                className="absolute top-0 left-0 w-full h-screen bg-white z-30 flex flex-col p-5 sm:hidden  transition-all duration-200"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                <div className="flex justify-between items-center">
                  <Image
                    src={"/logo.png"}
                    alt="Exterview logo"
                    width={120}
                    height={30}
                    className="object-contain"
                  />
                  <button
                    className="p-2 focus:outline-none"
                    onClick={toggleDrawer}
                    aria-label="Close Menu"
                  >
                    <Cross1Icon width={24} height={24} />
                  </button>
                </div>
                <div className="flex flex-col mt-5 gap-5">
                  <p
                    onClick={() => {
                      setIsDrawerOpen(false);
                      scrollToSection(homeRef);
                    }}
                    className="text-black hover:text-[#BF7E32] transition-all duration-200"
                  >
                    Home
                  </p>
                  <p
                    onClick={() => {
                      setIsDrawerOpen(false);
                      scrollToSection(aboutRef);
                    }}
                    className="text-black hover:text-[#BF7E32] transition-all duration-200"
                  >
                    About Us
                  </p>
                  <p
                    onClick={() => {
                      setIsDrawerOpen(false);
                      scrollToSection(projectRef);
                    }}
                    className="text-black hover:text-[#BF7E32] transition-all duration-200"
                  >
                    Project
                  </p>
                  <p
                    onClick={() => {
                      setIsDrawerOpen(false);
                      scrollToSection(contactRef);
                    }}
                    className="text-black hover:text-[#BF7E32] transition-all duration-200"
                  >
                    Contact Us
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
      {/* enquire button */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="sticky top-1/2 z-50 left-[100%] h-14 w-16">
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

      <div className="sm:block hidden" ref={homeRef}>
        <SmoothScrollHero />
      </div>
      <div className="w-full h-[90vh] bg-black -mt-16 sm:hidden block">
        <Image
          src={"/tanmai_m.jpg"}
          alt="hero image"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      <WhySection />

      {/* about */}
      <section
        ref={aboutRef}
        className="relative w-full h-full text-black  py-0 sm:px-36 px-5  flex flex-col sm:justify-center justify-start"
      >
        <div className="bg-[#bf7d3264] absolute blur-3xl sm:top-0 top-28 left-0 rounded-full w-48 h-48">
          .
        </div>

        <div className=" sm:pb-10 pb-2 flex flex-col justify-center items-start">
          <h2 className="font-Arimo text-4xl">About us</h2>
          <div className="border-t-2 my-4 w-28 border-[#BF7E32]"></div>
        </div>

        <div className="font-arimo">
          <TextReveal value={about} />
        </div>
      </section>

      {/* upcoming projects */}
      <ScrollAnimation />
      <div ref={projectRef}>
        <FeaturedProjects featured={featured} />
      </div>
      {/* footer */}
      <motion.footer
        ref={contactRef}
        className="relative w-full sm:h-[90vh] h-full font-Arimo"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div
          className="absolute top-0 left-0 w-full sm:h-[90vh] h-full object-cover bg-black"
          variants={footerVariants}
        >
          <Image
            src={"/lavender/4.webp"}
            width={1400}
            height={1080}
            alt="footer"
            className="w-full sm:h-[90vh] h-full object-cover opacity-40 "
          />
        </motion.div>
        <motion.div className=" w-full h-[80%] flex flex-wrap  items-start justify-between sm:px-20 px-5 py-10 font-Arimo sm:gap-48 gap-5">
          <motion.div
            className="flex flex-col gap-5 text-white z-10"
            variants={footerVariants}
          >
            <h2 className="font-Arimo text-2xl text-[#BF7E32]">Reach Us</h2>
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
              <p className="font-light text-sm">+91 9090093939</p>
            </div>

            <div>
              <h3 className="font-medium">Email:</h3>
              <p className="font-light text-sm">Sales@thetanmai.com</p>
            </div>
            <div className="flex gap-5 items-center">
              <motion.div variants={iconVariants}>
                <FaInstagram className="text-white h-5 w-5 cursor-pointer hover:text-[#BF7E32]" />
              </motion.div>
              <motion.div variants={iconVariants}>
                <FaFacebook className="text-white h-5 w-5 cursor-pointer hover:text-[#BF7E32]" />
              </motion.div>
              <motion.div variants={iconVariants}>
                <FaSquareXTwitter className="text-white h-5 w-5 cursor-pointer hover:text-[#BF7E32]" />
              </motion.div>
              <motion.div variants={iconVariants}>
                <FaYoutube className="text-white h-5 w-5 cursor-pointer hover:text-[#BF7E32]" />
              </motion.div>
              <motion.div variants={iconVariants}>
                <SiGooglemaps
                  onClick={() =>
                    router.push("https://goo.gl/maps/fX9Ag3UYC2o95F7x8")
                  }
                  className="text-white h-5 w-5 cursor-pointer hover:text-[#BF7E32]"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-5 text-white z-10"
            variants={footerVariants}
          >
            <h2 className="font-Arimo text-2xl text-[#BF7E32]">Menu</h2>
            <h3
              className="font-medium"
              onClick={() => scrollToSection(homeRef)}
            >
              Home
            </h3>
            <h3
              className="font-medium"
              onClick={() => scrollToSection(aboutRef)}
            >
              About us
            </h3>
            <h3
              className="font-medium"
              onClick={() => scrollToSection(projectRef)}
            >
              Projects
            </h3>
          </motion.div>
          <motion.div
            className="sm:max-w-[40%] backdrop-blur-lg bg-[#ffffff24] w-full font-Arimo text-white rounded-lg px-10 py-10"
            variants={footerVariants}
          >
            <h2 className="text-3xl font-Arimo mb-3">Enquire</h2>
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
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute sm:bottom-5 bottom-0 sm:px-16 px-5 sm:py-0 py-2 text-white w-full text-[10px] font-Arimo"
          variants={footerVariants}
        >
          @ 2024 Official website of Tanmai ventures | All Rights Reserved
        </motion.div>
      </motion.footer>
    </div>
  );
}
