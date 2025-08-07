"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "iconsax-react";

export const Impact = () => {
  const impact = [
    {
      value: "12,300+",
      icon: <ArrowRight size={18} />,
      decr: " Meals Looped this month",
    },
    {
      value: "35+",
      icon: <ArrowRight size={18} />,
      decr: "Partner Businesses across Lagos",
    },
    {
      value: "₦5M+",
      icon: <ArrowRight size={18} />,
      decr: "Partner revenue",
    },
  ];
  return (
    <div className="w-full p-5 md:p-10 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-24 text-center">
      {impact.map((c, i) => (
        <motion.div key={i}>
          <p className="text-2xl md:text-3xl text-orange-400 font-bold">{c.value}</p>
          <p className="text-base md:text-lg text-gray-600">{c.decr}</p>
        </motion.div>
      ))}
    </div>
  );
};
