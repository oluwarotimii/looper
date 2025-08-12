"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Logo = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  const pathVariants = {
    hidden: { strokeDashoffset: pathLength, opacity: 0 },
    visible: {
      strokeWidth: 0,
      strokeDashoffset: pathLength,
      opacity: 1,
      transition: {
        duration: 6,
        ease: "easeInOut",
      },
    },
  };

  const [screenWidth, setscreenWidth] = useState(0);

  useEffect(() => {
    if (window != undefined) {
      setscreenWidth(window.innerWidth);
      console.log(screenWidth);
    }
  }, [screenWidth]);

  return (
    <motion.svg
      initial={{
        width: screenWidth < 900 ? "100pt" : "800pt",
        height: screenWidth < 900 ? "50px" : "200pt",
        marginTop: 0,
      }}
      whileInView={{
        type: "bounce",
        // scale: 0.2,
        marginTop: screenWidth < 900 ? 0 : -20,
        width: screenWidth < 900 ? "100pt" : "200pt",
        height: screenWidth < 900 ? "50px" : "70pt",
        transition: {
          duration: 0.4,
          ease: "easeInOut",
          delay: 6,
          type: "spring",
          stiffness: 200,
          damping: 10,
        },
      }}
      viewBox="0 0 300.000000 76.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <motion.g
        transform="translate(0.000000,76.000000) scale(0.100000,-0.100000)"
        //   fill="#fff"
        initial={{ fill: "transparent" }}
        whileInView={{
          fill: "#fff",
          transition: {
            duration: 5,
            ease: "easeInOut",
            delay: 5,
          },
        }}
      >
        <motion.path
          strokeWidth="10"
          stroke="#ffff"
          ref={pathRef}
          d="M2191 646 c-32 -34 -22 -50 13 -20 18 16 25 29 19 35 -6 6 -18 0 -32
   -15z"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
        />
        <motion.path
          strokeWidth="10"
          stroke="#ffff"
          //  fill="#fff"
          ref={pathRef}
          d="M374 526 c-59 -28 -121 -85 -130 -122 -5 -18 0 -32 17 -50 29 -31 69
   -31 137 1 63 29 62 29 62 11 0 -26 16 -26 53 0 34 22 37 23 37 6 0 -23 19 -42
   43 -42 27 0 198 81 195 92 -5 14 -7 14 -100 -31 -109 -53 -138 -50 -113 12 10
   25 -10 22 -49 -8 -35 -26 -46 -30 -46 -16 0 16 76 61 103 61 15 0 27 5 27 10
   0 22 -50 8 -145 -41 -111 -56 -173 -71 -194 -46 -24 29 -6 47 99 100 65 32
   106 59 108 70 5 25 -42 22 -104 -7z m81 4 c-8 -13 -146 -83 -152 -77 -7 8 56
   48 105 68 57 22 55 21 47 9z"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
        />
        <motion.path
          strokeWidth="10"
          stroke="#ffff"
          ref={pathRef}
          d="M1113 535 c-17 -7 -50 -32 -73 -55 -22 -22 -45 -38 -51 -34 -15 9
   -86 -41 -94 -67 -12 -36 9 -44 54 -18 l40 22 21 -26 c27 -34 53 -34 116 -2 58
   29 54 29 54 11 0 -25 27 -25 61 0 38 28 43 29 36 10 -6 -16 22 -46 44 -46 8 0
   43 14 77 30 70 33 82 36 64 18 -17 -17 -15 -48 3 -48 8 0 45 23 83 50 38 28
   72 50 76 50 4 0 20 -9 34 -20 19 -15 34 -19 55 -14 27 6 28 5 15 -15 -10 -17
   -10 -23 0 -33 14 -14 9 -16 126 56 33 20 63 36 68 36 15 0 8 -48 -9 -68 -10
   -11 -55 -36 -101 -55 -163 -69 -233 -125 -202 -162 7 -8 21 -15 32 -15 38 0
   143 65 213 133 51 50 89 76 140 98 73 31 93 45 83 55 -3 3 -25 -4 -47 -16 -23
   -11 -53 -25 -67 -30 -23 -9 -25 -8 -19 10 3 11 4 29 0 39 -13 42 -50 33 -147
   -36 -52 -38 -81 -37 -36 2 15 12 33 25 40 28 7 2 10 8 6 12 -4 4 -29 -1 -57
   -10 -56 -18 -86 -13 -111 17 -16 20 -17 19 -82 -29 -81 -62 -88 -66 -88 -55 0
   5 17 25 37 45 20 21 34 39 31 42 -2 3 -45 -15 -95 -40 -107 -53 -153 -66 -153
   -41 0 10 5 26 10 37 16 28 -4 24 -56 -11 -47 -33 -59 -28 -21 8 26 25 92 54
   101 45 3 -4 6 -1 6 5 0 24 -44 11 -153 -43 -117 -59 -160 -67 -165 -29 -2 16
   11 29 55 56 71 44 108 82 100 102 -8 19 -13 19 -54 1z m37 -14 c0 -4 -27 -27
   -60 -50 -59 -42 -81 -44 -37 -4 19 18 87 63 95 63 1 0 2 -4 2 -9z m-150 -100
   c0 -11 -66 -51 -83 -51 -7 1 4 14 23 30 34 30 60 39 60 21z m844 -132 c-41
   -43 -156 -118 -193 -125 -74 -15 -9 48 114 110 50 25 94 46 99 46 6 0 -3 -14
   -20 -31z"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
        />
        <motion.path
          strokeWidth="10"
          stroke="#ffff"
          d="M2290 459 c-30 -16 -64 -28 -74 -26 -16 2 -21 -5 -24 -36 -2 -21 2
   -45 8 -53 16 -18 54 -18 70 1 8 10 30 15 62 15 48 0 168 43 168 60 0 18 -15
   15 -63 -10 -50 -27 -137 -49 -137 -35 0 4 14 27 30 52 30 43 37 64 23 62 -5
   -1 -33 -15 -63 -30z m20 -24 c0 -3 -7 -17 -16 -31 -12 -18 -22 -23 -38 -19
   -15 5 -17 4 -7 -3 17 -12 6 -32 -20 -32 -13 0 -19 7 -19 23 0 17 11 29 43 44
   44 23 57 27 57 18z"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
        />
      </motion.g>
    </motion.svg>
  );
};
