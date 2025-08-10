"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Landing = () => {
  const [slideMaxLength] = useState(2);
  const [current, setCurrent] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const data = [
    {
      title: "Loop the",
      img: "./vegetables-basket.jpg",
      color: "bg-orange-600",
      description:
        "Sell extra food, restaurant surpluses and more — reduce waste, earn effortlessly.",
    },
    {
      title: "Eat the",
      img: "./display-image.jpg",
      color: "bg-[#18181b]",
      description:
        "Get in the loop to reduce waste – enjoy tasty meals from your favourite spots at unbelievable discount and our pockets",
    },
  ];

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideMaxLength);
      setElapsed(0);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideMaxLength]);

  // Update elapsed time
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed((prev) => Math.min(prev + 1, 5));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-dvh sm:w-full relative">
      <div
        className={`h-full sm:w-full flex items-center justify-center flex-col lg:flex-row md:flex-row xs:flex-col ${
          data[current]?.color
        }`}
      >
        <div className="w-full md:w-1/2 xs:min-h-[70dvh] pl-10 xs:p-10 mt-0 xs:mt-40 flex items-center flex-col">
          <div className="w-fit text-justify overflow-hidden">
            <motion.p
              key={`title-${current}`}
              className="text-white text-[3rem] font-bold text-center gap-4 xs:w-full flex justify-center"
              transition={{ duration: 1, delay: 0.3, staggerChildren: 0.4 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="inline-block overflow-hidden"
              >
                {data[current]?.title}
              </motion.span>
            </motion.p>

            <motion.p
              key={`surplus-${current}`}
              className="text-slate-100 md:text-[20rem] xs:text-[15rem] w-full flex gap-2 font-ginger"
              style={{ lineHeight: 0.8 }}
              transition={{ duration: 1, delay: 0.3, staggerChildren: 0.4 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="inline-block overflow-hidden text-orange-100"
              >
                SURPLUS
              </motion.span>
            </motion.p>
          </div>

          <motion.p
            key={`desc-${current}`}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="mt-2 text-sm font-sans text-slate-100 font-light leading-6 sm:w-[400px] text-left xs:text-center"
          >
            {data[current]?.description}
          </motion.p>

          {current === 0 && (
            <motion.a
              key={`cta-${current}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1.2 }}
              href="#partner"
              className="bg-[#009832] text-white font-semibold p-5 rounded-[120px] mt-4 text-lg hover:p-6 transition-all ease-in-out duration-500 cursor-pointer whitespace-nowrap flex items-center justify-between gap-x-1"
            >
              <p>Get Started</p>
            </motion.a>
          )}
        </div>

        <div
          className="w-1/2 h-full xs:bg-no-repeat bg-cover xs:bg-center hidden md:block"
          style={{
            backgroundImage: `url('${data[current]?.img}')`,
          }}
        ></div>
      </div>

      <div className="absolute bottom-7 w-full flex pl-10 justify-start items-center gap-4">
        <div className="flex gap-2">
          {Array(slideMaxLength)
            .fill("")
            .map((_, index) => {
              const progress = current === index ? Math.min(elapsed / 5, 1) : 0;
              const padding = 16 * progress;

              return (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setElapsed(0);
                  }}
                  className={`h-3 w-3 rounded-full transition-all bg-gray-300  ${
                    current === index ? "bg-opacity-100" : "bg-opacity-35"
                  }`}
                  style={
                    current === index
                      ? { paddingLeft: padding, paddingRight: padding }
                      : { paddingLeft: 0, paddingRight: 0 }
                  }
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
