"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import browseImage from "../../../public/top-view-table-full-delicious-food-assortment.jpg";
import enjoyImage from "../../../public/display-image.jpg"
import orderPayImage from "../../../public/bio-food-market-woman-stand.jpg";
import pickUpImage from "../../../public/front-view-man-delivering-groceries.jpg";
import partnerJoinImage from "../../../public/registration.jpg";
import partnerReachImage from "../../../public/women-holding-fresh-lemons-counter.jpg";
import partnerReduceImage from "../../../public/restuarant-food.jpg";
import partnerEarnImage from "../../../public/bio-food-market-woman-stand.jpg";

export const HowItWorks = () => {
  const consumerData = [
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
      img: enjoyImage,
      decr: "Enjoy & Share your food Loop experience",
    },
  ];

  const partnerData = [
    {
      value: "Create & Verify",
      img: partnerJoinImage,
      decr: "Create an account, verify your business, and start listing your extra food.",
    },
    {
      value: "Reach New Customers",
      img: partnerReachImage,
      decr: "Connect with a growing community that values sustainable and affordable meals.",
    },
    {
      value: "Reduce Waste",
      img: partnerReduceImage,
      decr: "Minimise food waste and make a positive impact on the environment.",
    },
    {
      value: "Earn Revenue",
      img: partnerEarnImage,
      decr: "Turn surplus meals into extra income — no waste, just gains.",
    },
  ];

  return (
    <>
      <div className="w-full bg-orange-50 py-10 px-5 md:px-10 flex flex-col items-center justify-center">
        <h2
          className="font-ginger text-gray-800 mb-8 text-center text-5xl md:text-7xl lg:text-8xl leading-tight"
        >
          How Looper works?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5 md:p-10 w-full max-w-7xl">
          {consumerData.map((c, i) => (
            <motion.div
              key={i}
              initial={{ y: "20%", opacity: "0" }}
              whileInView={{
                y: "0",
                opacity: "1",
                transition: { duration: 0.6, delay: 0.2 * i },
              }}
              className="rounded-xl bg-white border border-gray-200 w-full overflow-hidden shadow-lg flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 w-full">
                <Image
                  src={c?.img}
                  alt={c.value}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                  priority
                />
              </div>
              <div className="p-6 md:w-3/5 w-full flex flex-col justify-center">
                <p className="p-3 bg-orange-100 text-orange-400 font-bold rounded-full inline-flex items-center justify-center text-lg mb-4 w-fit">
                  {i + 1}
                </p>
                <h3 className="text-2xl text-orange-400 font-bold mb-2">{c.value}</h3>
                <p className="text-base text-gray-600">{c.decr}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full bg-white py-10 px-5 md:px-10 flex flex-col items-center justify-center">
        <h2
          className="font-ginger text-gray-800 mb-8 text-center text-5xl md:text-7xl lg:text-8xl leading-tight"
        >
          Joining Looper as a Partner
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5 md:p-10 w-full max-w-7xl">
          {partnerData.map((c, i) => (
            <motion.div
              key={i}
              initial={{ y: "20%", opacity: "0" }}
              whileInView={{
                y: "0",
                opacity: "1",
                transition: { duration: 0.6, delay: 0.2 * i },
              }}
              className="rounded-xl bg-orange-50 border border-gray-200 w-full overflow-hidden shadow-lg flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 w-full">
                <Image
                  src={c?.img}
                  alt={c.value}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                  priority
                />
              </div>
              <div className="p-6 md:w-3/5 w-full flex flex-col justify-center">
                <p className="p-3 bg-orange-100 text-orange-400 font-bold rounded-full inline-flex items-center justify-center text-lg mb-4 w-fit">
                  {i + 1}
                </p>
                <h3 className="text-2xl text-orange-400 font-bold mb-2">{c.value}</h3>
                <p className="text-base text-gray-600">{c.decr}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

