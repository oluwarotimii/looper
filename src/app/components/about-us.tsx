"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import olympusDigitalCamera from "../../../public/olympus-digital-camera.jpg";

export const Aboutus = () => {
  return (
    <div
      className="p-5 md:p-10 h-auto bg-orange-50 text-black flex justify-center items-center"
      id="about-us"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 max-w-6xl w-full">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={olympusDigitalCamera}
            alt="about us"
            className="rounded-xl -rotate-[2deg] w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.p
            className="font-ginger text-6xl md:text-8xl text-gray-800 mb-5 text-center md:text-left"
            style={{ lineHeight: 0.75 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            About Us
          </motion.p>
          <p className="text-sm md:text-base leading-relaxed text-center md:text-left">
            We are Looper! Nigeria&apos;s first surplus food platform Looper was born
            from a simple but powerful observation: at the end of every day, so
            much delicious, fresh food is lost. <br />
            That didn&apos;t sit right with us; so, we decided to do something about
            it.
            <br />
            <br /> At Looper, we connect restaurants, hotels, supermarkets, and
            food vendors that have surplus food with people that need food.
            We&apos;re not just another food company; we&apos;re here to provide amazing
            food at the best prices.
            <br />
            <br /> Our mission is to make sustainability feel easy and familiar,
            help people access good food at low prices and support local
            businesses.
            <br /> Our success isn&apos;t measured in profit but in the strength of
            the positive feedback loop we create for our society. <br />
            We are here to ensure that yummy food completes its journey—into the
            bellies of people. : )
          </p>
        </div>
      </div>
    </div>
  );
};
