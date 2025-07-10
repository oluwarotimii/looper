"use client";

import { motion } from "framer-motion";

export const Aboutus = () => {
  return (
    <div
      className="p-10 h-auto bg-orange-50 text-black flex justify-center"
      id="about-us"
    >
      <div className="grid grid-cols-2 gap-5 justify-center max-w-4xl ">
        <div className="col-span-1">
          <img
            src="./olympus-digital-camera.jpg"
            alt="about us"
            className="rounded-xl -rotate-[2deg] sm:block xs:hidden "
          />
        </div>

        <div className=" sm:col-span-1 xs:col-span-2">
          <motion.p
            className="font-ginger sm:text-[8rem] xs:text-[5rem] text-gray-800 p-0 mb-5 text-left"
            style={{ lineHeight: 0.75 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            About Us
          </motion.p>
          <p className="text-sm col-span-2 ">
            We are Looper! Nigeria’s first surplus food platform Looper was born
            from a simple but powerful observation: at the end of every day, so
            much delicious, fresh food is lost. <br />
            That didn’t sit right with us; so, we decided to do something about
            it.
            <br />
            <br /> At Looper, we connect restaurants, hotels, supermarkets, and
            food vendors that have surplus food with people that need food.
            We’re not just another food company; we’re here to provide amazing
            food at the best prices.
            <br />
            <br /> Our mission is to make sustainability feel easy and familiar,
            help people access good food at low prices and support local
            businesses.
            <br /> Our success isn't measured in profit but in the strength of
            the positive feedback loop we create for our society. <br />
            We are here to ensure that yummy food completes its journey—into the
            bellies of people. : )
          </p>
        </div>
      </div>
    </div>
  );
};
