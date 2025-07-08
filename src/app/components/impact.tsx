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
      value: "80+",
      icon: <ArrowRight size={18} />,
      decr: "Partner Businesses across Lagos",
    },
    {
      value: "5,000+",
      icon: <ArrowRight size={18} />,
      decr: "App Downloads, and growing",
    },
  ];
  return (
    <div className=" w-full box-border pl-10  sm:p-10 xs:p-5 mt-0  flex items-center justify-center sm:flex-row  xs:text-center sm:gap-24  xs:gap-10 xs:flex-col ">
      {impact.map((c, i) => (
        <motion.div key={i}>
          <p className="text-xl text-orange-400 font-bold">{c.value}</p>
          <p className="text-sm text-gray-600">{c.decr}</p>
        </motion.div>
      ))}
    </div>
  );
};
