"use client";
import { motion } from "framer-motion";
import {
  ArrowRight
} from "iconsax-react";

export const Landing = () => {
  return (
    <div className="h-dvh w-full  box-border ">
      <div className="bg-black box-border h-[100%] w-[100%] flex items-center justify-center  lg:flex-row md:flex-row sm:flex-col xs:flex-col">
        <div className=" w-full xs:min-h-[70dvh] box-border pl-10 xs:p-10 mt-0 xs:mt-40 flex items-center flex-col">
          <div className="w-fit text-justify">
            {" "}
            <motion.p
              className=" text-slate-100 m-0 p-0 overflow-hidden text-[1.5rem]  gap-4  xs:w-full flex  justify-between"
              style={{ lineHeight: 1, padding: 0, margin: 0 }}
              transition={{ duration: 1, delay: 0.3, staggerChildren: 0.4 }}
            >
              {" "}
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{
                  y: "0",
                  transition: { duration: 0.3, delay: 0.2 * 0 },
                }}
                className="inline-block overflow-hidden"
              >
               Loop
              </motion.span>
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{
                  y: "0",
                  transition: { duration: 0.3, delay: 0.2 * 1 },
                }}
                className="inline-block overflow-hidden "
              >
                THE
              </motion.span>
            </motion.p>
            <motion.p
              className="text-slate-100 m-0 p-0 overflow-hidden md:text-[20rem] box-border xs:text-[15rem] w-full flex gap-2 font-ginger"
              style={{ lineHeight: 0.8, padding: 0, margin: 0 }}
              transition={{ duration: 1, delay: 0.3, staggerChildren: 0.4 }}
            >
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{
                  y: "0",
                  transition: { duration: 0.3, delay: 0.2 * 2 },
                }}
                className="inline-block overflow-hidden text-orange-100"
              >
                SURPLUS
              </motion.span>{" "}
            </motion.p>
          </div>

          {/* <p className="border-l-slate-500 p-0 pl-2 mb-1 border-l-2 text-xs font-sans font-semibold text-slate-500  break-words italic leading-6 mt-4 sm:w-[400px]">
            Turn Surplus Food into Cash.&quot;
          </p> */}
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{
              y: "0",
              opacity: 1,
              transition: { duration: 0.3, delay: 0.2 * 5 },
            }}
            className="mt-2 text-sm font-sans text-slate-300  break-words font-normal leading-6  sm:w-[400px] text-left xs:text-center"
          >
            Sell extra groceries, restaurant leftovers, and more — reduce waste,
            earn effortlessly.
          </motion.p>
          <motion.a
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: { duration: 0.3, delay: 0.2 * 6 },
            }}
            href="#partner"
            className=" bg-orange-400 w-[120px] text-black font-semibold p-2 rounded-[120px] mt-4 text-xs hover:bg-slate-200 transition-all ease-in-out duration-500 cursor-pointer whitespace-nowrap flex items-center justify-between gap-x-1"
          >
            <p>Get Started</p> <ArrowRight size={"14px"} />
          </motion.a>
        </div>
        <div
          className="w-full h-full xs:bg-no-repeat bg-cover  xs:bg-center"
          style={{
            backgroundImage: "url('/vegetables-basket.jpg')",
            // backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
};
