"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "iconsax-react";

export const HowItWorks = () => {
  const data = [
    {
      value: "Browse",
      img: "./top-view-table-full-delicious-food-assortment.jpg",
      decr: "Browse nearby surplus meals in real-time",
    },
    {
      value: "Order & Pay",
      img: "./bio-food-market-woman-stand.jpg",
      decr: "Order & Pay securely via Paystack",
    },
    {
      value: "Pick Up",
      img: "./front-view-man-delivering-groceries.jpg",
      decr: "Pick Up at your convenience or choose delivery",
    },
    {
      value: "Enjoy & Share",
      img: "./closeup-businessman-using-laptop-lunch-break.jpg",
      decr: "Enjoy & Share your food Loop experience",
    },
  ];
  return (
    <div className="w-full bg-orange-50 box-border  mt-0 items-center justify-center gap-24">
      <div className="flex items-center justify-center overflow-hidden  gap-16 w-full box-border">
        {" "}
        <div className="animate-scroll flex gap-24">
          {" "}
          {Array(50)
            .fill("")
            .map((i) => (
              <p
                key={i}
                className=" font-ginger border-orange-400 text-gray-600 mb-8 text-center md:text-[18rem]  xs:text-[5rem] font-light whitespace-nowrap"
                style={{ lineHeight: 1 }}
              >
                How does Looper work?
              </p>
            ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-4 xs:grid-cols-1 gap-2 p-10">
        {" "}
        {data.map((c, i) => (
          <motion.div
            key={i}
            initial={{ y: "20%", opacity: "0" }}
            whileInView={{
              y: "0",
              opacity: "1",
              transition: { duration: 0.6, delay: 0.4 * i },
            }}
            className=" rounded-xl bg-white border-gray-200 w-full  items-center justify-between gap-4 overflow-hidden"
          >
            {" "}
            <img
              src={c?.img}
              alt={c.value}
              className="h-40 object-cover w-full"
            />
            <div className="p-4">
              {" "}
              <p className="p-4  bg-orange-100  w-10 h-10 flex justify-center items-center font-mono text-orange-400 font-bold rounded-full">
                {i + 1}
              </p>
              <p className="text-2xl text-orange-400 font-bold">{c.value}</p>
              <p className="text-sm text-gray-600">{c.decr}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
