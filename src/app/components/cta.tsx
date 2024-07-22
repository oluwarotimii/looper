import { ArrowCircleRight2 } from "iconsax-react";
import React from "react";
import { motion } from "framer-motion";

export const Cta = () => {
  return (
    <div>
      {" "}
      <div className="bg-green-700 p-3 text-white font-sans  font-normal overflow-x-hidden  whitespace-nowrap flex">
        {[...Array(10)].map((s, key) => (
          <span className="animate-scroll " style={{ display: "inline-block" }} key={key}>
            100% Organic, farm fresh produce
            <span
              className="text-purple-600 text-6xl"
              style={{ lineHeight: "1px" }}
            >
              *
            </span>
          </span>
        ))}
      </div>
      <div
        className="h-[400px] flex justify-center items-center flex-col"
        style={{
          backgroundImage: "url('/cta-bg.png')",
          backgroundSize: "cover",
        }}
      >
        <p className="lg:text-5xl md:text-3xl xs:text-5xl xs:w-[80%] xs:text-center text-slate-800 font-semibold sm:text-5xl">
          Nothing but the best prices &<br></br> the freshest produce
          <span className="text-purple-600 text-6xl">*</span>
        </p>{" "}
        <motion.button
          initial={{ scale: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          whileHover={{
            originX: 0,
            scale: 1.1,
          }}
          whileInView={{
            scale: 1,
            transition: {
              // type: "spring",
              type:"tween",
              bounce: 9,
              duration: 0.2,
            },
          }}
          className="text-slate-100 bg-purple-700 p-3  rounded-[200px] mt-8  text-xs  hover:bg-white hover:text-slate-900 transition-all ease-in-out duration-700 flex gap-2 items-center justify-center"
        >
          <p>Order Now</p>{" "}
          <ArrowCircleRight2 size="22" className="text-inherit" />
        </motion.button>
      </div>
    </div>
  );
};
