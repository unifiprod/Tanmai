"use client";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Header() {
  const router = useRouter();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
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
          onClick={() => router.push("/")}
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
              onClick={() => router.push("")}
              className="text-black hover:text-[#BF7E32] transition-all duration-200"
            >
              Home
            </p>
            <p
              onClick={() => router.push("")}
              className="text-black hover:text-[#BF7E32] transition-all duration-200"
            >
              About Us
            </p>
            <p
              onClick={() => router.push("/")}
              className="text-black hover:text-[#BF7E32] transition-all duration-200"
            >
              Project
            </p>
            <p
              onClick={() => router.push("/")}
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
                    router.push("/");
                  }}
                  className="text-black hover:text-[#BF7E32] transition-all duration-200"
                >
                  Home
                </p>
                <p
                  onClick={() => {
                    setIsDrawerOpen(false);
                    router.push("/");
                  }}
                  className="text-black hover:text-[#BF7E32] transition-all duration-200"
                >
                  About Us
                </p>
                <p
                  onClick={() => {
                    setIsDrawerOpen(false);
                    router.push("/");
                  }}
                  className="text-black hover:text-[#BF7E32] transition-all duration-200"
                >
                  Project
                </p>
                <p
                  onClick={() => {
                    setIsDrawerOpen(false);
                    router.push("/");
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
  );
}

export default Header;
