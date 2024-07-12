"use client";
import { motion } from "framer-motion";
import { ArrowCircleDown, ArrowCircleRight2 } from "iconsax-react";
import Link from "next/link";
import { Logo } from "./logo";

export const Landing = () => {
  return (
    <div
      className="h-dvh w-dvw relative "
      style={{
        backgroundImage: "url('/farm-bg-2.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="fixed p-5 flex w-dvw justify-between z-10">
        <div
          className="flex gap-4"
          style={{ lineHeight: "10px", height: "20px" }}
        >
          <Link
            href={"#products"}
            className=" text-xs text-slate-100 uppercase hover:border-b-2 transition-all ease-in-out duration-400"
          >
            products
          </Link>
          <Link
            href={"#team"}
            className=" text-xs text-slate-100 uppercase  hover:border-b-2 transition-all ease-in-out duration-400"
          >
            team
          </Link>
          <Link
            href={"#"}
            className=" text-xs text-slate-100 uppercase  hover:border-b-2 transition-all ease-in-out duration-400"
          >
            more
          </Link>
        </div>
        <div className="-mt-3">
          <Logo />
        </div>
        <div>
          <p className=" bg-green-400 p-2 rounded-[200px] text-xs text-slate-900 hover:bg-slate-200 transition-all ease-in-out duration-500 cursor-pointer">
            Contact Us
          </p>
        </div>
      </div>
      <div className="bg-zinc-900 bg-opacity-90 box-border h-[100%] w-[100%] flex items-center justify-center  lg:flex-row md:flex-row sm:flex-col gap-10 p-10 ">
        <div className="relative ">
          {["Farm - Fresh", "Produce,", "Everyday."].map((s, index) => (
            <motion.p
              key={index}
              className="font-bold text-slate-100 mb-3 overflow-hidden md:text-[70px] lg:text-[80px] md:h-[80px] lg:h-[90px] sm:text-[80px] "
              style={{ lineHeight: 1.1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {" "}
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0" }}
                className="inline-block overflow-hidden"
              >
                {s}
              </motion.span>
            </motion.p>
          ))}

          <p className=" text-xs font-sans  text-slate-300 break-words lg:w-[500px] md:w-[300px] leading-6 mt-4 sm:w-[400px]">
            At La Davy&apos;s Venture, we are passionate about bringing you the
            freshest, highest-quality produce straight from our fields to your
          </p>

          <button className="text-slate-100 border-2 p-3  rounded-[200px] mt-8  text-xs sm:w-[180px] hover:bg-white hover:text-slate-900 transition-all ease-in-out duration-700 flex gap-2 items-center justify-center">
            <p>contact us</p>{" "}
            <ArrowCircleRight2 size="22" className="text-green-600" />
          </button>
        </div>
        <div className="flex place-items-end relative">
          <motion.div
            initial={{
              scale: 0,
              width: "0px",
              height: "0px",
              position: "inherit",
            }}
            animate={{
              scale: 1,
              height: "300px",
              width: "300px",
              position: "absolute",
            }}
            transition={{ duration: 0.4, delay: 0.2, staggerChildren: 0.8 }}
            // md:-top-[60px] md:left-[10px]
            className=" animate-spin  z-10  lg:-top-[60px] lg:-right-[20px] sm:-right-[350px] sm:-top-[650px] md:hidden sm:block"
          >
            <motion.div
              className="relative flex  items-center justify-center"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              {" "}
              <p className="text-2xl absolute">🌼</p>{" "}
              <svg viewBox="0 0 100 100">
                <path
                  fill="none"
                  color="#fff"
                  id="circlePath"
                  d="M 30, 50 a 20,20 0 1,1 40,0 20,20 0 1,1 -40,0"
                />

                <text fill="white">
                  <textPath href="#circlePath" fontSize={3.95} className="">
                    quality farm fresh produce daily · quality farm fresh
                    produce daily ·
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </motion.div>
          <motion.img
            initial={{
              rotateZ: 0,
              scale: 0.8,
              objectFit: "cover",
              borderRadius: "20px",
              overflow: "hidden",
            }}
            animate={{
              rotateZ: 7,
              transition: { type: "spring", stiffness: 100, damping: 8 },
            }}
            transition={{ duration: 0.4, delay: 0.6 }}
            src={"/farmer-3.jpg"}
            alt="farm"
            className="h-[600px] md:h-[400px] lg:h-[600px] sm:hidden lg:block md:block"
          />
        </div>
      </div>
      <div className="flex justify-center items-center absolute bottom-9 w-full ">
        <a
          href="#product"
          className="text-white text-xs w-fit border-green-500  sm:border-none border rounded-xl  bottom-8 font-medium px-3 py-2 animate-bounce flex items-center justify-center gap-2"
        >
          <p>scroll up</p>
          <ArrowCircleDown size={15} color="#fff" />
        </a>
      </div>
    </div>
  );
};
