import { motion } from "framer-motion";
import { ArrowCircleRight2, Verify } from "iconsax-react";
import Image from "next/image";
import React from "react";
import broiler from "../../../public/broiler.png";
import eggs from "../../../public/eggs.png";
import product1 from "../../../public/product-1.jpg";
import product5 from "../../../public/product-5.jpg";
import product7 from "../../../public/product-7.png";
import product8 from "../../../public/product-8.png";
import product9 from "../../../public/product-9.png";

export const Products = () => {
  const prds = [
    { name: "Eggs", image: eggs },
    { name: "Broilers (Live)", image: broiler },
    { name: "Broilers (Processed)", image: product7 },
    { name: "Cucumbers", image: product8 },
    { name: "Peppers", image: product9 },
  ];

  const ref = React.useRef(null);

  return (
    <div
      className="pb-80 flex items-start lg:p-40 md:wp-20 sm:p-10  gap-10"
      id="product"
    >
      {" "}
      <motion.div
        ref={ref}
        className={"sticky lg:top-[200px] md:top-[50px] sm:top-[100px]"}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <p className="text-sm font-semibold text-purple-600">-Products</p>
        <p className="lg:text-5xl md:text-2xl  sm:text-5xl sm:w-[350px] lg:w-[600px] md:w-[300px]">
          Only the freshest produce for our esteemed customers.{" "}
          <span className="text-purple-600 lg:text-6xl md:text-2xl">*</span>
        </p>

        <div className="mt-3">
          <div className="overflow-hidden">
            {" "}
            <motion.img
              src={"/product-2.jpg"}
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ duration: 0.2 }}
              alt={"broiler"}
              className="rounded-lg  lg:w-[600px] md:w-[400px] sm:w-[450px]"
            />
          </div>

          <div className="flex gap-1 lg:w-[600px] md:w-[400px] sm:w-[450px] mt-3">
            {" "}
            <Image
              src={product1}
              alt={"broiler"}
              className="rounded-lg box-border w-full object-cover lg:h-[200px]  md:h-[150px]"
            />
            <Image
              src={product5}
              alt={"broiler"}
              className="rounded-lg box-border w-full object-cover lg:h-[200px]  md:h-[150px]"
            />
          </div>
        </div>
      </motion.div>
      <div className="grid lg:grid-cols-2  md:grid-cols-2  sm:grid-cols-1  lg:w-[70%] md:w-[50%] md:gap-1 lg:gap-5 md:ml-[100px] sm:ml-[100px] justify-center items-center">
        {prds.map((product, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial={{
              y: 200,
            }}
            whileInView={{
              y: 50,
              rotateZ: index % 2 === 0 ? -20 : 20,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
              },
            }}
            viewport={{ once: true, amount: 0.8 }}
            whileHover={{
              originX: 0,
              rotateZ: 0,
              // zIndex: 20000000,
              y: 0,
              scale: 1.1,
              cursor: "pointer",
            }}
            className=" mb-10  lg:w-[300px] lg:h-[250px] md:w-[260px] md:h-[280px] sm:w-[300px] sm:h-[280px] flex  bg-white rounded-xl relative shadow-sm shadow-slate-400"
          >
            <Image
              style={{
                WebkitFilter: "drop-shadow(1px 1px 10px #ccc)",
                filter: "drop-shadow(1px 1px 10px #ccc)",
              }}
              src={product.image}
              alt={product.name}
              className="absolute lg:-top-[90px] md:-top-16 shadow-slate-400 md:w-[150px] lg:w-[200px] sm:w-[100px]"
            />
            <div className=" text-slate-800  box-border w-full  absolute top-[20%] h-[50%] rounded-b-3xl flex flex-col items-center p-3">
              <p className=" font-semibold  w-full mb-2 md:text-lg lg:text-xl">
                {product.name}
              </p>
              <p className="text-xs text-center font-medium  w-full flex items-center gap-1">
                <Verify size={18} className="text-yellow-600" />
                100% Organic
              </p>
              <p className="text-xs  font-light  w-full opacity-60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className=" border-2 p-2 w-[90%] rounded-[200px] mt-4 text-xs  box-border hover:bg-green-600 hover:text-white transition-all ease-in-out duration-400 flex gap-2 items-center justify-center"
              >
                <p>place order</p>{" "}
                <ArrowCircleRight2 size="22" className="text-inherit " />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
