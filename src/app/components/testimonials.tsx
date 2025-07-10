"use client";
import { motion } from "framer-motion";
import Carousel from "./carousel";

export const Testimonials = () => {
  const data = [
    {
      name: "Mr. Emeka",
      img: "./top-view-table-full-delicious-food-assortment.jpg",
      comment:
        "Before Looper, my end-of-day surplus was a 100% loss. Now, it's a new, revenue stream. It has turned a problem into a small profit center",
      persona: "Restaurant Owner, Ikeja",
    },
    {
      name: "Aisha Hassan",
      img: "./top-view-table-full-delicious-food-assortment.jpg",
      comment:
        "With Looper, I no longer worry about leftover meals. What used to be waste now brings in extra revenue — and my customers love the transparency.",
      persona: "Student (Yaba tech) & Profesional Foodie",
    },
    {
      name: "Jide Samuel",
      img: "./top-view-table-full-delicious-food-assortment.jpg",
      comment:
        "I schedule my lunch pickups through Looper — no queues, no stress. It saves me time and money every week.",
      persona: "Banker - Providus Bank",
    },
    {
      name: "Jide Samuel",
      img: "./top-view-table-full-delicious-food-assortment.jpg",
      comment:
        "I schedule my lunch pickups through Looper — no queues, no stress. It saves me time and money every week.",
      persona: "Banker - Providus Bank",
    },
    {
      name: "Ngozi Okonkwo",
      img: "./top-view-table-full-delicious-food-assortment.jpg",
      comment:
        "Looper helps me clear out near-expiry items quickly. I get live notifications and can adjust prices throughout the day — it’s a game-changer for waste reduction.",
      persona: "Supermarket Manager",
    },
  ];
  return (
    <div className="w-full bg-orange-50 box-border   py-12 items-center justify-center gap-24">
      <div className="flex items-center justify-center overflow-hidden  gap-16 w-full box-border">
        <p className="  font-ginger text-gray-600 text-center text-[8rem]">
          User feedback
        </p>
      </div>
      
      <Carousel
        slides={data.map((c, i) => (
          <motion.div
            key={i}
            // initial={{ opacity: "0" }}
            // whileInView={{
            //   opacity: "1",
            //   transition: { duration: 0.6, delay: 0.4 },
            // }}
            className=" rounded-xl bg-white border-gray-200 sm:w-[560px] xs:w-full h-full items-center justify-between gap-4 overflow-hidden"
          >
            <div className="p-4">
              <img
                src={c?.img}
                alt={c.name}
                className="h-40 object-cover w-[50px] h-[50px] rounded-full mb-4 "
              />
              <p className="text-sm text-gray-600 ">{`${c.comment}`}&quot;</p>
              <p className="text-lg text-black-400 font-semibold mt-3">
                {c.name}
              </p>
              <p className="text-xs text-gray-400">{c.persona}</p>
            </div>
          </motion.div>
        ))}
      />
    </div>
  );
};
