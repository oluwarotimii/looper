"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export const Aboutus = () => {
  return (
        <div
      className="relative p-5 md:p-10 h-auto  text-black flex flex-col justify-center items-center pt-[150px]" 
      id="about-us"
    >
      {/* Scattered SVGs for About Us */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image src="/svg/asian-bowl.svg" alt="asian bowl" width={40} height={40} className="absolute top-10 left-[5%] rotate-12" />
        <Image src="/svg/banana.svg" alt="banana" width={30} height={30} className="absolute top-[25%] right-[10%] -rotate-45" />
        <Image src="/svg/bowl.svg" alt="bowl" width={50} height={50} className="absolute bottom-[15%] left-[20%] rotate-90" />
        <Image src="/svg/bowl2.svg" alt="bowl2" width={35} height={35} className="absolute top-[50%] right-[20%] rotate-6" />
        <Image src="/svg/donut.svg" alt="donut" width={45} height={45} className="absolute bottom-[5%] left-[15%] -rotate-12" />
        <Image src="/svg/pizza.svg" alt="pizza" width={60} height={60} className="absolute top-[5%] right-[25%] rotate-180" />
        <Image src="/svg/prawn.svg" alt="prawn" width={25} height={25} className="absolute bottom-[30%] right-[5%] rotate-30" />
        <Image src="/svg/tacos.svg" alt="tacos" width={55} height={55} className="absolute top-[70%] left-[10%] -rotate-90" />
        <Image src="/svg/asian-bowl.svg" alt="asian bowl" width={35} height={35} className="absolute top-[40%] left-[40%] rotate-45" />
        <Image src="/svg/banana.svg" alt="banana" width={25} height={25} className="absolute bottom-[10%] right-[30%] rotate-15" />
        <Image src="/svg/bowl.svg" alt="bowl" width={40} height={40} className="absolute top-[60%] left-[30%] -rotate-60" />
        <Image src="/svg/donut.svg" alt="donut" width={30} height={30} className="absolute top-[15%] right-[5%] -rotate-30" />
      </div>
      {/* Top Wave Divider for About Us */}
      <div className="absolute top-0 left-0 w-full z-10 overflow-hidden transform rotate-180">
        <svg
          id="about-us-top-wave"
          viewBox="0 0 900 600"
          width="100%"
          height="150" // Reduced height for a border effect
          preserveAspectRatio="none"
        >
          <path
            d="M0 515L5.2 514.8C10.3 514.7 20.7 514.3 31 520.2C41.3 526 51.7 538 62 541.3C72.3 544.7 82.7 539.3 93 539.7C103.3 540 113.7 546 124 538.8C134.3 531.7 144.7 511.3 155 507.5C165.3 503.7 175.7 516.3 186 511.5C196.3 506.7 206.7 484.3 217 480.5C227.3 476.7 237.7 491.3 248 492C258.3 492.7 268.7 479.3 279 484.8C289.3 490.3 299.7 514.7 310 526C320.3 537.3 330.7 535.7 341 525.8C351.3 516 361.7 498 372 500.7C382.3 503.3 392.7 526.7 403 538.2C413.3 549.7 423.7 549.3 434.2 549.3C444.7 549.3 455.3 549.7 465.8 537.2C476.3 524.7 486.7 499.3 497 499.3C507.3 499.3 517.7 524.7 528 538.5C538.3 552.3 548.7 554.7 559 546.8C569.3 539 579.7 521 590 505.3C600.3 489.7 610.7 476.3 621 480.8C631.3 485.3 641.7 507.7 652 519C662.3 530.3 672.7 530.7 683 528.8C693.3 527 703.7 523 714 520.5C724.3 518 734.7 517 745 524.2C755.3 531.3 765.7 546.7 776 540.3C786.3 534 796.7 506 807 500.8C817.3 495.7 827.7 513.3 838 516.5C848.3 519.7 858.7 508.3 869 511.2C879.3 514 889.7 531 894.8 539.5L900 548L900 600H0Z"
            fill="#FFF"
            strokeLinecap="round"
            strokeLinejoin="miter"
          />
        </svg>
      </div>
      <div className="max-w-6xl w-full"> {/* Single column container */}
        <div className="flex items-center justify-between mb-5"> {/* Container for title and SVG */}
          <motion.p
            className="font-ginger text-6xl md:text-8xl text-gray-800" // Removed text-center/left
            style={{ lineHeight: 0.75 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Get to Know Us
          </motion.p>
          <Image
            src="/svg/loop.svg"
            alt="Looper Logo"
            width={50} // Tiny size
            height={50} // Tiny size
            className="rotate-45" // Keep tilt
          />
        </div>

        <p className="text-sm md:text-base leading-relaxed"> {/* Full width text */}
          We are Looper! Nigeria&apos;s first surplus food platform. <br />
          Looper was born from a simple but powerful observation: at the end of every day, so
          much delicious, fresh food is lost. <br />
          That didn&apos;t sit right with us; so, we decided to do something about
          it.<br />
          <br /> At Looper, we connect restaurants, hotels, supermarkets, and
          food vendors that have surplus food with people that need food.
          We&apos;re not just another food company; we&apos;re here to provide amazing
          food at the best prices.<br />
          <br /> Our mission is to make sustainability feel easy and relatable,
          help people access good food at low prices and support local
          businesses.<br /> Our success isn&apos;t measured in profit but in the strength of
          the positive feedback loop we create for our society. <br />
          We are here to ensure that yummy food completes its journey—into the
          bellies of people. : )
        </p>
      </div>
      
    </div>
  );
};
