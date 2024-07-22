import {
  ArrowCircleRight2,
  Facebook,
  Instagram,
  Send,
  Shop,
} from "iconsax-react";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  const routes = [
    { label: "product", link: "#product" },
    { label: "team", link: "#team" },
    { label: "shop", link: "" },
    { label: "email us", link: "" },
  ];

  const contacts = [
    { label: "Instagram", link: "#product", icon: <Instagram size={18} /> },
    { label: "facebook", link: "#team", icon: <Facebook size={18} /> },
    // { label: "shop", link: "" },
    // { label: "email us", link: "" },
  ];

  const year = new Date().getFullYear();
  return (
    <div>
      <div className="bg-slate-900 px-10 py-5 pb-10 text-white justify-between pt-8 grid  lg:grid-cols-6  sm:grid-cols-4 xs:grid-cols-1 xs:gap-4">
        <div className="lg:col-span-1 md:col-span-1">
          <img src="logo-2.png" className="w-[200px]  box-border" />

          <p className="font-medium text-xs -mt-4">
            farm-fresh produce, everyday.
            <span className="text-purple-600 text-sm">*</span>
          </p>
          <p className="font-light text-slate-300 text-xs mt-1">
            At La Davy&apos;s Venture, we are passionate about bringing you the
            freshest,
            <br></br>
            highest-quality produce straight from our fields to you
          </p>
          <button className="text-slate-100 p-2 rounded-[100px] mt-8 text-xs  bg-green-600 hover:bg-white hover:text-slate-900 transition-all ease-in-out duration-700 flex gap-2 items-center justify-center">
            <p>Join Our Whatsapp Group</p>{" "}
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
            <div className="flex gap-1">
              <Shop size="50" color="#FF8A65" />
              <p className="flex mt-2 text-sm">
                {" "}
                <Link
               target="_blank"
                  href={
                    "https://www.google.com/maps/dir/6.5241088,3.3554432/1+Ifa+Atai+Street,+Uyo/@5.9565055,4.3189548,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x105d57e9ef7f420b:0xa69b340b4adda150!2m2!1d7.938192!2d5.0262944?entry=ttu" }
                >1 Ifa atai, big junction, Uyo,<br></br> Akwa ibom state</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2   md:col-span-2 sm:col-span-4 sm:mt-2 flex flex-col">
          <p className="font-medium text-xs text-slate-300 mb-2">
            Feedback
            <span className="text-purple-600 text-sm">*</span>
          </p>
          <div className=" relative w-full box-border">
            <textarea
              className=" p-3 rounded-md bg-slate-100 outline-none border-none text-slate-600 h-40 min-w-full"
              placeholder="hey, don't you want to say something..."
            />
            <button className="bg-green-700 mt-3 font-sm p-3 hover:scale-105 ease-in-out duration-500  rounded-full w-fit absolute -bottom-4 -right-4">
              <Send />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 text-slate-100 font-light p-4 text-center text-xs">
        © la davy&apos;s venture, {year}
      </div>
    </div>
  );
};
