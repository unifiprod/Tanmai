"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  return (
    <header className="sticky top-0 left-0 flex w-full justify-between items-center sm:px-10 px-2 py-2 backdrop-blur-sm bg-white/40 border-b border-[#ffffff23]">
      <div onClick={() => router.push("/")} className="cursor-pointers">
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
          className="text-black hover:text-[#BF7E32] transition-all duration-200 cursor-pointer"
          onClick={() => router.push("/")}
        >
          Home
        </p>
        <p
          className="text-black hover:text-[#BF7E32] transition-all duration-200 cursor-pointer"
          onClick={() => router.push("/")}
        >
          About Us
        </p>
        <p
          className="text-black hover:text-[#BF7E32] transition-all duration-200 cursor-pointer"
          onClick={() => router.push("/")}
        >
          Project
        </p>
        <p
          className="text-black hover:text-[#BF7E32] transition-all duration-200 cursor-pointer"
          onClick={() => router.push("/")}
        >
          Contact Us
        </p>
      </div>
    </header>
  );
}

export default Header;
