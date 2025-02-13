/* eslint-disable no-unused-vars */
import  React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import heart from "../src/assets/hearticon.png";
import circleheart from "../src/assets/circleheart.png";

const Home = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleYesClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      navigate('/playlist');
    }, 6000);
  };

  return (
    <div className="bg-[#F1DCDE] great-vibes-regular italic flex flex-col h-screen overflow-hidden">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={900}
          recycle={false}
          colors={['#FFD700', '#FF69B4', '#FF1493', '#FF6B6B', '#4169E1']}
        />
      )}

      <div className="flex-1 flex flex-col items-center justify-between py-8 px-4">
        <motion.div 
          className="w-[100px] md:w-[150px] self-start ml-2 md:ml-4 relative overflow-hidden"
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

        <div className="flex flex-col items-center justify-center gap-6 flex-1">
          <motion.div 
            className="w-[200px] md:w-[300px] relative overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="absolute inset-0 bg-[#F1DCDE]"
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
            <img src={circleheart} alt="" className="w-full h-auto" />
          </motion.div>

          <motion.div className="text-center">
  <TypeAnimation
    sequence={[
      'Will you be my Valentine?', // Text to type
      2000, // Pause for 2 seconds after typing
    ]}
    wrapper="h1"
    speed={70} // Adjust typing speed (lower = slower)
    className="md:text-[48px] text-[30px]"
    repeat={0} // Do not repeat
  />
</motion.div>


          <motion.div 
            className="gap-[40px] flex"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <motion.button 
              onClick={handleYesClick}
              className="bg-[#CA4F7E] w-[80px] h-[45px] text-white text-[24px] rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              yes
            </motion.button>
            <motion.button 
              className="bg-[#CA4F7E] w-[80px] h-[45px] text-white text-[24px] rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              no
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;