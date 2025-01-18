"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
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
  const router = useRouter();
  return (
    <footer className="relative w-full sm:h-[90vh] h-full">
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
          <h3 className="font-medium" onClick={() => router.push("/")}>
            Home
          </h3>
          <h3 className="font-medium" onClick={() => router.push("/")}>
            About us
          </h3>
          <h3 className="font-medium" onClick={() => router.push("/")}>
            Projects
          </h3>
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
  );
}

export default Footer;
