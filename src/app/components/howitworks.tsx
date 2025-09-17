"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

import browseImage from "../../../public/top-view-table-full-delicious-food-assortment.jpg";
import enjoyImage from "../../../public/display-image.jpg"
import orderPayImage from "../../../public/bio-food-market-woman-stand.jpg";
import pickUpImage from "../../../public/front-view-man-delivering-groceries.jpg";
import partnerJoinImage from "../../../public/registration.jpg";
import partnerReachImage from "../../../public/women-holding-fresh-lemons-counter.jpg";
import partnerReduceImage from "../../../public/restuarant-food.jpg";
import partnerEarnImage from "../../../public/bio-food-market-woman-stand.jpg";

export const HowItWorks = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('customer'); // 'customer' or 'partner'

  const consumerData = [
    {
      title: "Browse",
      description: "Browse nearby surplus meals in real-time",
      image: browseImage,
    },
    {
      title: "Order & Pay",
      description: "Order & Pay securely.",
      image: orderPayImage,
    },
    {
      title: "Pick Up",
      description: "Pick Up at your convenience or choose delivery",
      image: pickUpImage,
    },
    {
      title: "Enjoy & Share",
      description: "Enjoy & Share your food Loop experience",
      image: enjoyImage,
    },
  ];

  const partnerData = [
    {
      title: "Create & Verify",
      description: "Create an account, verify your business, and start listing your extra food.",
      image: partnerJoinImage,
    },
    {
      title: "Reach New Customers",
      description: "Connect with a growing community that values sustainable and affordable meals.",
      image: partnerReachImage,
    },
    {
      title: "Reduce Waste",
      description: "Minimise food waste and make a positive impact on the environment.",
      image: partnerReduceImage,
    },
    {
      title: "Earn Revenue",
      description: "Turn surplus meals into extra income — no waste, just gains.",
      image: partnerEarnImage,
    },
  ];

  const currentSteps = activeTab === 'customer' ? consumerData : partnerData;

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepIndex((prevIndex) => (prevIndex + 1) % currentSteps.length);
    }, 5000); // Change step every 5 seconds
    return () => clearInterval(interval);
  }, [activeTab, currentSteps.length]); // Reset interval on tab change

  return (
    <div className="w-full bg-orange-50 py-5 px-1 md:px-10 flex flex-col md:flex-row items-start justify-center h-full" id="how-it-works">
      <h2 className="font-ginger text-gray-800 mb-8 text-center text-5xl md:text-7xl lg:text-8xl leading-tight">How Looper works?</h2>
      

      {/* Left Column: Image Area */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-5 md:p-10 md:pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStepIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={currentSteps[activeStepIndex].image}
              alt={currentSteps[activeStepIndex].title}
              className="w-full h-auto object-cover aspect-[4/3] mt-10"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Column: Steps List */}
      <div className="w-full md:w-1/2 p-5 md:p-10">
        
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-6 py-2 rounded-l-lg font-bold transition-colors duration-300 ${activeTab === 'customer' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => { setActiveTab('customer'); setActiveStepIndex(0); }}
          >
            Customer
          </button>
          <button
            className={`px-6 py-2 rounded-r-lg font-bold transition-colors duration-300 ${activeTab === 'partner' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => { setActiveTab('partner'); setActiveStepIndex(0); }}
          >
            Partner
          </button>
        </div>

        <div className="flex flex-col gap-3"> {/* Reduced gap */}
          {currentSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`p-3 rounded-xl cursor-pointer transition-all duration-300 ${index === activeStepIndex ? 'bg-orange-100 shadow-md' : 'bg-white hover:bg-gray-50'}`} // Reduced padding
              onClick={() => setActiveStepIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }} 
            >
              <div className="flex items-center mb-1"> {/* Reduced margin-bottom */}
                <span className="text-lg mr-3 p-2 bg-orange-200 text-orange-700 rounded-full font-bold flex items-center justify-center w-8 h-8">{index + 1}</span> {/* Replaced emoji with number, adjusted size */}
                <h3 className={`text-lg font-bold ${index === activeStepIndex ? 'text-orange-600' : 'text-gray-800'}`}> {/* Reduced text size */}
                  {step.title}
                </h3>
              </div>
              <p className={`text-xs ${index === activeStepIndex ? 'text-orange-700' : 'text-gray-600'}`}> {/* Reduced text size */}
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

