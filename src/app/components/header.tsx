// "use client";
import { motion } from "framer-motion";
import { Facebook, HambergerMenu, Instagram } from "iconsax-react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Logo } from "./logo";

export const Header = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollHeight(window?.scrollY);
      };

      window?.addEventListener("scroll", handleScroll);

      // Cleanup event listener on component unmount
      return () => {
        window?.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const links = [
    { label: "products", path: "#products" },
    { label: "team", path: "#team" },
    { label: "more", path: "#footer" },
  ];

  const [isOpen, setisOpen] = useState(false);

  return (
    <div>
      <div
        className={`fixed p-5 flex w-dvw justify-between  xs:hidden sm:flex  max-h-[90px] z-20 ${
          scrollHeight && "bg-gray-950"
        } `}
      >
        <div
          className="flex gap-4"
          style={{ lineHeight: "10px", height: "20px" }}
        >
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className="text-[10.5px] text-slate-100 uppercase hover:border-b-2 transition-all ease-in-out duration-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Logo />
        <div>
          <Link
            href="tel:+2347010576009"
            className=" bg-green-400 p-2 rounded-[200px] text-xs text-slate-900 hover:bg-slate-200 transition-all ease-in-out duration-500 cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* small scrren header */}
      <div
        className={`flex justify-between items-center fixed w-dvw p-3 sm:hidden smallPhone:flex z-[20000001] ${
          scrollHeight && "bg-gray-950"
        } `}
      >
        <HambergerMenu
          onClick={() => setisOpen(true)}
          size="32"
          className="text-green-600 hover:cursor-pointer"
        />
        <Logo />
        <div>
          <Link
            href="tel:+2347010576009"
            className=" bg-green-400 p-2 rounded-[200px] text-xs text-slate-900 hover:bg-slate-200 transition-all ease-in-out duration-500 cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </div>
      {isOpen && (
        <div
          className="bg-gray-800 bg-opacity-80 flex justify-center items-center w-dvw h-dvh fixed z-30"
          onClick={() => setisOpen(false)}
        >
          <motion.div
            className="bg-slate-50 rounded-lg  w-[80%] p-5"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            whileInView={{
              y: "0",
            }}
          >
            <div className="w-full flex items-end box-border justify-end ">
              <button
                className="border rounded-[200px] border-gray-800 px-5 py-2"
                onClick={() => setisOpen(false)}
              >
                close
              </button>
            </div>
            <div className=" pb-5 flex items-center justify-center flex-col  gap-6">
              {" "}
              <img src="/logo-2.png" alt="logo" className="invert w-[300px]" />
              <hr className="border border-slate-300 w-full border-dashed"></hr>
              <p className="text-[1rem] text-gray-300 font-semibold">MENU</p>
              {links.map((link, index) => (
                <motion.div className="overflow-hidden " key={index}>
                  <motion.button
                    className="text-3xl font-semibold hover:underline"
                    onClick={() => {
                      setisOpen(false);
                    }}
                    initial={{ y: "100%" }}
                    whileInView={{
                      y: "0",
                      transition: { duration: 0.3, delay: 0.2 * index },
                    }}
                  >
                    <Link href={link.path}>#{link.label.toUpperCase()}</Link>
                  </motion.button>
                </motion.div>
              ))}
              <p className="text-[3rem] text-gray-500 font-semibold flex">
                <Instagram size={30} /> <Facebook size={30} />
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
