import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heart from "../src/assets/hearticon.png";

const LoveLetter = () => {
  const [showLetter, setShowLetter] = useState(false);

  const handleToggleLetter = () => {
    setShowLetter((prev) => !prev);
  };

  return (
    <motion.div
      className="bg-[#F1DCDE] great-vibes-regular italic flex flex-col h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Logo at the top */}
           <motion.div 
               className="w-[100px] md:w-[150px] py-8 self-start ml-2 md:ml-4  overflow-hidden"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1 }}
             >
               <motion.div
                 className="absolute inset-0 bg-[#F1DCDE]"
                 initial={{ x: 0 }}
                 animate={{ x: "100%" }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
               />
               <img src={heart} alt="" className="w-full h-auto" />
             </motion.div>

      <div className="flex-1 flex flex-col items-center translate-y-[40px] md:translate-y-[40px]">
        <AnimatePresence mode="wait">
          {!showLetter ? (
            <motion.div
              key="closed"
              className="flex flex-col items-center gap-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <svg
                onClick={handleToggleLetter}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-50 h-50 text-[#CA4F7E] cursor-pointer hover:scale-110 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.375 5.25h17.25M3.375 5.25l8.25 6.75 8.25-6.75M3.375 5.25v13.5h17.25V5.25"
                />
              </svg>
              <p className="text-xl text-[#CA4F7E]">Click to Open the Letter</p>
            </motion.div>
          ) : (
            <motion.div
              key="open"
              className="bg-white p-6 m-6 rounded-lg shadow-lg max-w-[550px] text-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <motion.h2
                className="text-2xl md:text-3xl text-[#CA4F7E] mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                My Dearest Tes,
              </motion.h2>
              <motion.p
                className="text-[20px] md:text-[30px] text-gray-700 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                From the moment I saw you, my world became brighter. Every day with you
                is a gift, and I’m endlessly grateful for your love and kindness.
                You are my everything, and I can’t wait to create more beautiful
                memories with you. Will you be mine forever?
              </motion.p>
              <motion.button
                onClick={handleToggleLetter}
                className="mt-6 bg-[#CA4F7E] text-white py-2 px-4 rounded-lg hover:bg-[#b8406c] transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Close Letter
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LoveLetter;