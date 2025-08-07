"use client";
import { motion } from "framer-motion";
import Carousel from "./carousel";
import Image from "next/image";

import testimonialImage from "../../../public/top-view-table-full-delicious-food-assortment.jpg";

export const Testimonials = () => {
  const data = [
    {
      name: "Mr. Emeka",
      img: testimonialImage,
      comment:
        "Before Looper, my end-of-day surplus was a 100% loss. Now, it's a new, revenue stream. It has turned a problem into a small profit center",
      persona: "Restaurant Owner, Ikeja",
    },
    {
      name: "Aisha Hassan",
      img: testimonialImage,
      comment:
        "With Looper, I no longer worry about leftover meals. What used to be waste now brings in extra revenue — and my customers love the transparency.",
      persona: "Student (Yaba tech) & Profesional Foodie",
    },
    {
      name: "Jide Samuel",
      img: testimonialImage,
      comment:
        "I schedule my lunch pickups through Looper — no queues, no stress. It saves me time and money every week.",
      persona: "Banker - Providus Bank",
    },
    {
      name: "Jide Samuel",
      img: testimonialImage,
      comment:
        "I schedule my lunch pickups through Looper — no queues, no stress. It saves me time and money every week.",
      persona: "Banker - Providus Bank",
    },
    {
      name: "Ngozi Okonkwo",
      img: testimonialImage,
      comment:
        "Looper helps me clear out near-expiry items quickly. I get live notifications and can adjust prices throughout the day — it’s a game-changer for waste reduction.",
      persona: "Supermarket Manager",
    },
  ];
  return (
    <div className="w-full bg-orange-50 py-12 flex flex-col items-center justify-center">
      <h2 className="font-ginger text-gray-800 text-center text-6xl md:text-7xl lg:text-8xl mb-12">
        User feedback
      </h2>
      
      <Carousel
        slides={data.map((c, i) => (
          <motion.div
            key={i}
            className="rounded-xl bg-white border border-gray-200 w-full max-w-sm mx-auto h-full flex flex-col items-center justify-between p-6 shadow-lg"
          >
            <Image
              src={c?.img}
              alt={c.name}
              width={50}
              height={50}
              className="object-cover rounded-full mb-4"
            />
            <p className="text-base text-gray-600 text-center mb-4">{`"${c.comment}"`}</p>
            <div className="text-center">
              <p className="text-lg text-black font-semibold">{c.name}</p>
              <p className="text-sm text-gray-500">{c.persona}</p>
            </div>
          </motion.div>
        ))}
      />
    </div>
  );
};