"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import browseImage from "../../../public/top-view-table-full-delicious-food-assortment.jpg";
import orderPayImage from "../../../public/bio-food-market-woman-stand.jpg";
import pickUpImage from "../../../public/front-view-man-delivering-groceries.jpg";
import enjoyShareImage from "../../../public/closeup-businessman-using-laptop-lunch-break.jpg";

export const HowItWorks = () => {
  const data = [
    {
      value: "Browse",
      img: browseImage,
      decr: "Browse nearby surplus meals in real-time",
    },
    {
      value: "Order & Pay",
      img: orderPayImage,
      decr: "Order & Pay securely via Paystack",
    },
    {
      value: "Pick Up",
      img: pickUpImage,
      decr: "Pick Up at your convenience or choose delivery",
    },
    {
      value: "Enjoy & Share",
      img: enjoyShareImage,
      decr: "Enjoy & Share your food Loop experience",
    },
  ];
  return (
    <div className="w-full bg-orange-50 py-10 px-5 md:px-10 flex flex-col items-center justify-center">
      <h2
        className="font-ginger text-gray-800 mb-8 text-center text-5xl md:text-7xl lg:text-8xl leading-tight"
      >
        How does Looper work?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5 md:p-10 w-full max-w-7xl">
        {data.map((c, i) => (
          <motion.div
            key={i}
            initial={{ y: "20%", opacity: "0" }}
            whileInView={{
              y: "0",
              opacity: "1",
              transition: { duration: 0.6, delay: 0.2 * i },
            }}
            className="rounded-xl bg-white border border-gray-200 w-full overflow-hidden shadow-lg"
          >
            <Image
              src={c?.img}
              alt={c.value}
              className="h-48 object-cover w-full"
              priority
            />
            <div className="p-6">
              <p className="p-3 bg-orange-100 text-orange-400 font-bold rounded-full inline-flex items-center justify-center text-lg mb-4">
                {i + 1}
              </p>
              <h3 className="text-2xl text-orange-400 font-bold mb-2">{c.value}</h3>
              <p className="text-base text-gray-600">{c.decr}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

