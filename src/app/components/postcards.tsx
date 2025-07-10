"use client";

import { motion } from "framer-motion";

export default function PostcardStack() {
  const images = [
    {
      src: "./olympus-digital-camera.jpg",
      x: "-40px",
      rotate: -8,
      zIndex: 1,
    },
    {
      src: "./olympus-digital-camera.jpg",
      x: "0px",
      rotate: 0,
      zIndex: 2,
    },
    {
      src: "./olympus-digital-camera.jpg",
      x: "40px",
      rotate: 8,
      zIndex: 1,
    },
  ];

  return (
    <div className="relative w-[350px]  mx-auto mt-10">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img.src}
          alt="about us"
          className="absolute w-full h-auto  object-cover rounded-xl shadow-lg cursor-pointer transition-transform"
          style={{
            transform: `translateX(${img.x})`,
            zIndex: img.zIndex,
          }}
          initial={{ rotate: img.rotate, scale: 0.95 }}
          animate={{ rotate: img.rotate, scale: 1 }}
          whileHover={{
            scale: 1.05,
            y: -10,
            transition: { type: "spring", stiffness: 200 },
          }}
        />
      ))}
    </div>
  );
}
