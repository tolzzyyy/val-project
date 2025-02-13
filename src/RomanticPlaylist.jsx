/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heart from "../src/assets/hearticon.png"; // Import the heart logo

const RomanticPlaylist = () => {
  return (
    <div className="bg-[#F1DCDE] h-screen flex flex-col  overflow-hidden relative   px-4">
      {/* Logo at the top */}
      <motion.div
        className="w-[100px] md:w-[150px] py-8 self-start ml-2 md:ml-4 relative overflow-hidden"
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

      {/* Title */}
      <motion.div
        className="text-center mb-6 md:mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl md:text-5xl font-bold text-black great-vibes-regular">
          Here’s your favourit artist's playlist ❤️🎶
        </h1>
      </motion.div>

      {/* Spotify Playlist */}
      <motion.div
        className="w-full max-w-3xl bg-white mx-auto rounded-2xl shadow-lg p-2 md:p-6 overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ height: "auto" }} // Ensure the parent container can grow
      >
        <iframe
          className="w-full h-90 md:h-96 rounded-lg"
          src="https://open.spotify.com/embed/playlist/2L2KlutO6uv1MGojk7IRtL?utm_source=generator"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Lana Del Rey Playlist"
        ></iframe>
      </motion.div>

      {/* Surprise Letter Button and Quote */}
      <motion.div
        className="mt-4 md:mt-8 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Link
          to="/letter"
          className="bg-[#CA4F7E] great-vibes-regular italic text-white px-6 py-2 md:py-3 rounded-lg text-lg md:text-2xl shadow-md hover:bg-[#b43e6a] transition-all"
        >
          Surprise Letter
        </Link>
        <p className="text-gray-700 italic text-lg md:text-2xl great-vibes-regular text-center">
          “With every note, my heart beats for you. 💕”
        </p>
      </motion.div>
    </div>
  );
};

export default RomanticPlaylist;
