import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

function EnquireButton() {
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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="sticky top-1/2  left-[100%] h-14 w-16">
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
  );
}

export default EnquireButton;
