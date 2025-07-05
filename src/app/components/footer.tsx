import {
  ArrowCircleRight2,
  Facebook,
  Instagram,
  Send,
  Shop,
} from "iconsax-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  const routes = [
    { label: "product", link: "#product" },
    { label: "team", link: "#team" },
    { label: "shop", link: "" },
  ];

  const contacts = [
    { label: "Instagram", link: "#product", icon: <Instagram size={18} /> },
    { label: "facebook", link: "#team", icon: <Facebook size={18} /> },
    // { label: "shop", link: "" },
    // { label: "email us", link: "" },
  ];

  const year = new Date().getFullYear();

  interface IFormData {
    email: string;
    message: string;
  }
  interface IFormResponse {
    status: "success" | "failure";
    message: string;
  }

  interface FormError {
    code: string;
    message: string;
  }

  interface FormResponse {
    error: string;
    errors: FormError[];
  }

  const initialData: IFormData = { email: "", message: "" };
  const [formData, setFormData] = useState<IFormData>(initialData);
  const [responseMessage, setResponseMessage] = useState<null | IFormResponse>(
    null
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mjkbgyna", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage({
          status: "success",
          message: "Thank you for your message!",
        });
        setFormData(initialData);
      } else {
        setResponseMessage({
          status: "failure",
          message:
            "Oops! There was a problem. Kindly crosscheck values entered",
        });
      }
    } catch (error: any) {
      setResponseMessage({
        status: "failure",
        message: (error as FormResponse)?.error,
      });
    }
  };

  return (
    <div className="">
      <div className="bg-slate-900 px-10 py-5 pb-10 text-white justify-between pt-8 grid  lg:grid-cols-6  sm:grid-cols-4 xs:grid-cols-1 xs:gap-4">
        <div className="lg:col-span-1 md:col-span-1">
          <p className="font-semibold text-xs mb-1">
            Looper - <span className="font-light text-slate-300 italic text-orange-200">sell the surplus.&quot;</span>
          </p>
          <p className="font-light text-slate-300 text-xs mt-1">
          Sell extra groceries, restaurant leftovers, <br></br>and more — reduce waste, earn effortlessly.
          </p>
          <button className="text-slate-100 p-2 rounded-[100px] mt-4 text-xs  bg-green-600 hover:bg-white hover:text-slate-900 transition-all ease-in-out duration-700 flex gap-2 items-center justify-center">
            <p>Join Our Whatsapp Community</p>{" "}
            <ArrowCircleRight2 size="22" className="text-inherit" />
          </button>
        </div>

        <div className="lg:col-span-1 sm:items-end  md:col-span-1 flex flex-col">
          <div className="flex flex-col items-start mb-4">
            <p className="font-medium text-xs text-slate-300">
              Quick Links
              <span className="text-purple-600 text-sm">*</span>
            </p>
            <div className="flex flex-col gap-1">
              {routes.map((route, index) => (
                <p key={index}>
                  <a
                    href={route.link}
                    key={index}
                    className="font-light text-white text-sm  hover:underline"
                  >
                    {route.label}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 flex flex-col  md:col-span-1 sm:items-center">
          <div className="flex flex-col items-start mb-4">
            <p className="font-medium text-xs text-slate-300">
              Contact Us
              <span className="text-purple-600 text-sm">*</span>
            </p>
            {contacts.map((c, index) => (
              <p className="flex text-sm gap-1 justify-center mt-2" key={index}>
                {c.icon}
                <a
                  href={c.link}
                  key={index}
                  className="font-light  text-sm hover:underline"
                >
                  {c.label}
                </a>
              </p>
            ))}
          </div>
        </div>
        <div className="lg:col-span-1   md:col-span-1 flex flex-col   lg:mt-0 lg:items-center">
          <div>
            <p className="font-medium text-xs text-slate-300 mb-2">
              Our Physical Store
              <span className="text-purple-600 text-sm">*</span>
            </p>
            <div className="flex gap-1 items-center">
              <Shop size="20" color="#FF8A65" />
              <p className="flex  text-xs">
                {" "}
                <Link
                  target="_blank"
                  href={
                    "https://www.google.com/maps/dir/6.5241088,3.3554432/1+Ifa+Atai+Street,+Uyo/@5.9565055,4.3189548,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x105d57e9ef7f420b:0xa69b340b4adda150!2m2!1d7.938192!2d5.0262944?entry=ttu"
                  }
                >
                 22 Akinwunmi, Maryland Lagos.
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="lg:col-span-2   md:col-span-2 sm:col-span-4 sm:mt-2 flex flex-col">
          <p className="font-medium text-xs text-slate-300 mb-2">
            Feedback
            <span className="text-purple-600 text-sm">*</span>
          </p>
          <div className=" relative w-full box-border">
            {responseMessage && (
              <div
                className={`${
                  responseMessage?.status === "success"
                    ? "bg-green-400"
                    : "bg-red-400"
                } text-white mb-2 rounded-md p-2 text-xs`}
              >
                {responseMessage.message}
              </div>
            )}
            <input
              placeholder="kindly provode your email address"
              className="p-3 rounded-md bg-slate-100 outline-none border-none text-slate-600 h-10 min-w-full mb-2"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target?.value })
              }
            />
            <textarea
              className=" p-3 rounded-md bg-slate-100 outline-none border-none text-slate-600 h-40 min-w-full"
              placeholder="hey, don't you want to say something..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target?.value })
              }
            />
            <motion.button
              className="bg-green-700 mt-3 font-sm p-3 hover:scale-105 ease-in-out duration-500  rounded-full w-fit absolute -bottom-4 -right-4 overflow-hidden"
              onClick={handleSubmit}
              whileHover={{
                rotateZ: "320deg",
                scale: 1.1,
                transition: {
                  type: "tween",
                  stiffness: 200,
                  damping: 10,
                  duration: 0.1,
                  // delay: 3,
                  // staggerChildren: 5,
                },
              }}
            >
              <motion.div whileTap={{ y: -100, x: 200 }}>
                <Send />
              </motion.div>
            </motion.button>
          </div>
        </div> */}
      </div>
      <div className="bg-slate-950 text-slate-100 font-light p-4 text-center text-xs">
        © looper , {year}
      </div>
    </div>
  );
};
