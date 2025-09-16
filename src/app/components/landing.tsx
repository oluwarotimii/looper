"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const content = [
  {
    subtext: "Join the movement. Sell your surplus, reduce waste, and earn extra income. It's a win-win for you and the planet.",
    headline_part1: "Loop the",
    headline_part2: "SURPLUS",
    image: "/hero/vegs.png",
    bgColor: "bg-orange-500",
    textColor: "text-white",
    buttonColor: "bg-green-500",
    buttonHoverColor: "hover:bg-green-600",
    highlightColor: "text-zinc-900"
  },
  {
    subtext: "Delicious meals at unbeatable prices. Get access to tasty surplus food from your favorite local spots and help fight food waste.",
    headline_part1: "Eat the",
    headline_part2: "SURPLUS",
    image: "/hero/food.png",
    bgColor: "bg-green-600",
    textColor: "text-white",
    buttonColor: "bg-orange-500",
    buttonHoverColor: "hover:bg-orange-600",
    highlightColor: "text-orange-400"
  },
  {
    subtext: "Be a hero. Every meal you rescue is a step towards a more sustainable future. Save food, save money, save the planet.",
    headline_part1: "Rescue the ",
    headline_part2: "SURPLUS",
    image: "/hero/past.png",
    bgColor: "bg-zinc-900",
    textColor: "text-white",
    buttonColor: "bg-orange-500",
    buttonHoverColor: "hover:bg-orange-600",
    highlightColor: "text-orange-400"
  },
  // {
  //   subtext: "Discover amazing deals and unique finds from local vendors. Your next favorite thing is just a click away.",
  //   headline_part1: "Shop",
  //   headline_part2: "SURPLUS",
  //   image: "/hero/food.png",
  //   bgColor: "bg-gray-100",
  //   textColor: "text-zinc-900",
  //   buttonColor: "bg-green-500",
  //   buttonHoverColor: "hover:bg-green-600",
  //   highlightColor: "text-orange-400"
  // }
];

const glitchVariants = {
  initial: { opacity: 0, x: -10, skewX: "10deg" },
  animate: { opacity: 1, x: 0, skewX: "0deg", transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, x: 10, skewX: "-10deg", transition: { duration: 0.2, ease: "easeIn" } },
};

const imageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: "easeIn" } },
}

export const Landing = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentContent = content[index];

  return (
    // Wave design added below
    <div className="relative min-h-screen w-full">
      <AnimatePresence>
        <motion.div
          key={index + "bg"}
          className={`absolute inset-0 ${currentContent.bgColor}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        />
      </AnimatePresence>
      {/* Scattered SVGs */}
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Original set with more varied positions and sizes */}
        <Image src="/svg/asian-bowl.svg" alt="asian bowl" width={60} height={60} className="absolute top-5 left-[10%] rotate-12" />
        <Image src="/svg/banana.svg" alt="banana" width={45} height={45} className="absolute top-[20%] right-[15%] -rotate-45" />
        <Image src="/svg/bowl.svg" alt="bowl" width={70} height={70} className="absolute bottom-[10%] left-[25%] rotate-90" />
        <Image src="/svg/bowl2.svg" alt="bowl2" width={50} height={50} className="absolute top-[30%] right-[5%] rotate-6" />
        <Image src="/svg/donut.svg" alt="donut" width={65} height={65} className="absolute bottom-[5%] left-[5%] -rotate-12" />
        <Image src="/svg/pizza.svg" alt="pizza" width={80} height={80} className="absolute top-[15%] right-[30%] rotate-180" />
        <Image src="/svg/prawn.svg" alt="prawn" width={40} height={40} className="absolute bottom-[20%] right-[10%] rotate-30" />
        <Image src="/svg/tacos.svg" alt="tacos" width={75} height={75} className="absolute top-[40%] left-[5%] -rotate-90" />

        {/* Additional instances for more distribution */}
        <Image src="/svg/asian-bowl.svg" alt="asian bowl" width={55} height={55} className="absolute top-[60%] left-[15%] rotate-45" />
        <Image src="/svg/banana.svg" alt="banana" width={35} height={35} className="absolute bottom-[30%] right-[25%] rotate-15" />
        <Image src="/svg/bowl.svg" alt="bowl" width={60} height={60} className="absolute top-[5%] left-[40%] -rotate-60" />
        <Image src="/svg/bowl2.svg" alt="bowl2" width={40} height={40} className="absolute bottom-[5%] right-[40%] rotate-20" />
        <Image src="/svg/donut.svg" alt="donut" width={50} height={50} className="absolute top-[70%] right-[5%] -rotate-30" />
        <Image src="/svg/pizza.svg" alt="pizza" width={70} height={70} className="absolute bottom-[15%] left-[45%] rotate-10" />
        <Image src="/svg/prawn.svg" alt="prawn" width={30} height={30} className="absolute top-[25%] left-[30%] -rotate-75" />
        <Image src="/svg/tacos.svg" alt="tacos" width={60} height={60} className="absolute bottom-[40%] left-[50%] rotate-50" />
      </div>
      <div className={`relative grid grid-cols-4 gap-6 max-w-6xl mx-auto p-8 items-center min-h-screen overflow-hidden ${currentContent.textColor}`}>
        {/* Left: Subtext */}
        <div className="col-span-1 lg:text-left text-center">
          <AnimatePresence mode="wait">
            <motion.p key={index + "subtext"} variants={glitchVariants} initial="initial" animate="animate" exit="exit">
              {currentContent.subtext}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Center: Headline + Image */}
        <div className="col-span-2 text-center">
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1 key={index + "headline"} variants={glitchVariants} initial="initial" animate="animate" exit="exit" className="inline-block"> 
                <text className="font-ginger text-6xl leading-none m-3">{currentContent.headline_part1}</text>
              </motion.h1>{" "}
            </AnimatePresence>
            <span className={`${currentContent.highlightColor} font-ginger uppercase text-7xl`}>{currentContent.headline_part2}</span>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index + "image"}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mx-auto"
            >
              <Image 
                src={currentContent.image} 
                alt={currentContent.headline_part2}
                width={400} 
                height={400} 
                className="mx-auto object-contain w-96 h-96"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: CTA */}
        <div className="col-span-1 flex justify-center lg:justify-end">
          <div className="flex flex-col items-center mt-20 lg:items-end">
             <p className="text-xs opacity-80 mt-2 mb-5 ">Free to join & no commitments.</p>
            <button className={`text-white px-6 py-2 rounded-lg shadow-lg transition-colors ${currentContent.buttonColor} ${currentContent.buttonHoverColor}`}>
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Wave Divider */}
   {/* Bottom Wave Divider */}
<div className="absolute bottom-0 left-0 w-full z-10 overflow-hidden">
  <svg
    id="visual"
    viewBox="0 0 900 600"
    width="100%"
    height="300"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 515L5.2 514.8C10.3 514.7 20.7 514.3 31 520.2C41.3 526 51.7 538 62 541.3C72.3 544.7 82.7 539.3 93 539.7C103.3 540 113.7 546 124 538.8C134.3 531.7 144.7 511.3 155 507.5C165.3 503.7 175.7 516.3 186 511.5C196.3 506.7 206.7 484.3 217 480.5C227.3 476.7 237.7 491.3 248 492C258.3 492.7 268.7 479.3 279 484.8C289.3 490.3 299.7 514.7 310 526C320.3 537.3 330.7 535.7 341 525.8C351.3 516 361.7 498 372 500.7C382.3 503.3 392.7 526.7 403 538.2C413.3 549.7 423.7 549.3 434.2 549.3C444.7 549.3 455.3 549.7 465.8 537.2C476.3 524.7 486.7 499.3 497 499.3C507.3 499.3 517.7 524.7 528 538.5C538.3 552.3 548.7 554.7 559 546.8C569.3 539 579.7 521 590 505.3C600.3 489.7 610.7 476.3 621 480.8C631.3 485.3 641.7 507.7 652 519C662.3 530.3 672.7 530.7 683 528.8C693.3 527 703.7 523 714 520.5C724.3 518 734.7 517 745 524.2C755.3 531.3 765.7 546.7 776 540.3C786.3 534 796.7 506 807 500.8C817.3 495.7 827.7 513.3 838 516.5C848.3 519.7 858.7 508.3 869 511.2C879.3 514 889.7 531 894.8 539.5L900 548L900 600H0Z"
      fill="#FFF"
      strokeLinecap="round"
      strokeLinejoin="miter"
    />
  </svg>
</div>

    </div>
  );
};