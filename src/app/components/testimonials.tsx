import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

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
        "With Looper, I no longer worry about leftover pastries. What used to be waste now brings in extra revenue — and my customers love the transparency.",
      persona: "Bakery owner",
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Adjust stagger time as needed
      },
    },
  };

  const itemVariants = {
    // Initial state (hidden) for when they first appear
    hidden: { y: 50, opacity: 0, rotate: -5 },
    // Animation for when they become visible (on initial load, if parent has whileInView)
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    // Animation on hover
    whileHover: {
      scale: 1.05, // Slightly grow
      rotate: 0, // Ensure no rotation on hover if it was rotated
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    // Animation on click/tap
    whileTap: {
      scale: 0.95, // Slightly shrink
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <div className="w-full bg-orange-50 py-12 flex flex-col items-center justify-center">
      <h2 className="font-ginger text-gray-800 text-center text-6xl md:text-7xl lg:text-8xl mb-12">
        User feedback
      </h2>
      
      <motion.div
        className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto px-5"
        // Removed variants={containerVariants}, initial="hidden", whileInView="visible", viewport={{ once: true, amount: 0.5 }}
      >
        {data.map((c, i) => (
          <motion.div
            key={i}
            variants={itemVariants} // Apply item variants
            initial="visible" // Start in visible state if no initial load animation is desired
            whileHover="whileHover" // Apply hover animation
            whileTap="whileTap" // Apply tap animation
            className="rounded-xl bg-white border border-gray-200 p-6 shadow-lg flex flex-col items-center justify-between text-center w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(20%-1.5rem)]"
          >
            <Image
              src={c?.img}
              alt={c.name}
              width={80} // Slightly larger image for card
              height={80}
              quality={50}
              className="object-cover rounded-full mb-4"
            />
            <p className="text-base text-gray-600 mb-4">{`"${c.comment}"`}</p>
            <div>
              <p className="text-lg text-black font-semibold">{c.name}</p>
              <p className="text-sm text-gray-500">{c.persona}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};