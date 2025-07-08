"use client";
import { motion } from "framer-motion";

export const MobileAppAd = () => {
  return (
    <div className="w-full">
      {" "}
      <div className="grid  bg-black sm:grid-cols-2 xs:grid-cols-1 items-center justify-between gap-24 py-20 relative overflow-hidden">
        <div className="flex flex-col items-center justify-center  gap-4 w-full box-border text-center">
          <p className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-semibold">
            coming soon ✨
          </p>
          <p
            className="font-ginger sm:text-[20rem] xs:text-[10rem] text-white p-0 m-0 "
            style={{ lineHeight: 0.75 }}
          >
            Join Our <br />
            Waitlist
          </p>
          <p
            className=" text-sm text-slate-300 p-0 m-0 "
            style={{ lineHeight: 1.5 }}
          >
            <span className="font-bold text-white">
              Big foodie energy? Same here.
            </span>{" "}
            <br></br> Be the first to know when Looper drops — early access,{" "}
            <br></br>secret perks, and delicious surprises await!
          </p>
          <motion.button
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: { duration: 0.3, delay: 0.2 * 6 },
            }}
            className=" bg-orange-400  text-black font-semibold p-2 rounded-[120px] mt-4 text-lg hover:bg-slate-200 transition-all ease-in-out duration-500 cursor-pointer whitespace-nowrap flex items-center justify-between gap-x-1"
          >
            <p>Join Our Waitlist</p>
          </motion.button>
        </div>
        <motion.img
          initial={{ y: "50%" }}
          whileInView={{
            y: "0",
            transition: { duration: 0.3, delay: 0.2 * 0 },
          }}
          src="./closeup-hand-holding-blank-screen-smartphone-plain-background.png"
          alt="mobile app ad"
          className="h-full box-border w-full object-cover absolute bottom-0 xs:hidden md:block"
        />
      </div>
      <div className="flex items-center justify-center overflow-hidden  gap-16 w-full box-border">
        {" "}
        <div className="animate-scroll flex gap-24 ">
          {" "}
          {Array(50)
            .fill("")
            .map((i) => (
              <p
                key={i}
                className=" font-ginger border-orange-400 text-gray-600 mb-8  xs:mb-2 text-center sm:text-[8rem] xs:text-[3rem] font-light whitespace-nowrap"
                style={{ lineHeight: 1 }}
              >
                Join Our waitlist <span className="text-green-400">* </span>
                Coming Soon
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};
