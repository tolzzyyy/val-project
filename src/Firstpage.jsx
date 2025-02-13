import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";

const Firstpage = () => {
  const { width, height } = useWindowSize();
  const navigate = useNavigate();

  const questions = [
    {
      question: "What movie series would i  watch a Decillion times?",
      options: [
        { text: "The Last Airbender", gif: "https://media2.giphy.com/media/7p3e2WCM0VEnm/giphy.gif" },
        { text: "The Office", gif: "https://media0.giphy.com/media/tlGD7PDy1w8fK/200.webp" },
        { text: "Invincible", gif: "https://media.giphy.com/media/ZbE122VAmvzl3ijeHi/giphy.gif" },
      ],
      correct: "The Office",
    },
    {
      question: "What is the second item on my Instagram bio? ( i no go give you work ke 😂 )",
      options: [
        { text: "Sports fan", gif: "https://media.giphy.com/media/26BRO9GJSoQbIx0f6/giphy.gif" },
        { text: "Introvert", gif: "https://media.giphy.com/media/xTiIzqGTwTdZTJEhGw/giphy.gif" },
        { text: "Stubborn 🐐", gif: "https://media.giphy.com/media/Y3G8Mgonb9eIQn8z1A/giphy.gif" },
      ],
      correct: "Stubborn 🐐",
    },
    {
      question: "What is my biggest weakness?",
      options: [
        { text: "Chocolate 🍫", gif: "https://media.giphy.com/media/SZnqDUxE0gvJACkoo5/giphy.gif" },
        { text: "Your smile 😊", gif: "https://media.giphy.com/media/QTrG6mjkHEkpFR3DqX/giphy.gif" },
        { text: "WiFi 🔌", gif: "https://media.giphy.com/media/RhYTVGghZHjX33SNFO/giphy.gif?cid=790b76113hkq9j02ccwjn0gxac4kjn10tb4y02wgu6m7fr22&ep=v1_gifs_search&rid=giphy.gif&ct=g" },
      ],
      correct: "Your smile 😊",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAnswer = (answer) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer.text === questions[currentQuestion].correct) {
      if (currentQuestion + 1 === questions.length) {
        setShowConfetti(true);
      }
    }
  };

  const handleNext = () => {
    if (selectedAnswer?.text === questions[currentQuestion].correct) {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setShowConfetti(false); // Stop confetti on next question
      } else {
        setQuizCompleted(true);
        setShowConfetti(false); // Stop confetti when quiz completes
      }
    }
  };
  

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setShowConfetti(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FF4081] text-white p-6">
         {!quizCompleted && (

          
        <h1 className="lg:text-[30px] py-[20px] text-center my-[30px] ">
          The Secret's Out.... if you pass (Not really a secret btw 😆 😂)
        </h1>
      )}
      

      {showConfetti && <Confetti width={width} height={height} />}
      {!quizCompleted ? (
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white text-black p-[50px] rounded-xl shadow-lg max-w-md text-center"
        >
          <h2 className="text-[12px] font-semibold">{questions[currentQuestion].question}</h2>
          <div className="mt-4 space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
                className={`block w-full py-2 px-4 rounded-lg transition duration-200 ${
                  isAnswered && option.text === questions[currentQuestion].correct
                    ? " text-green-500 border-2 border-[#D1C4E9]"
                    : isAnswered && option.text === selectedAnswer?.text
                    ? "bg-red-500 text-white"
                    : "bg-[#F8BBD0] hover:bg-[#D1C4E9] text-white"
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>

          {isAnswered && selectedAnswer && selectedAnswer.gif && (
            <motion.img
              src={selectedAnswer.gif}
              alt="Sticker"
              className="mt-6 mx-auto flex  text-[8px] items-center justify-center w-32 h-32 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}

          <div className="mt-4 flex justify-center space-x-2">

          
            {currentQuestion > 0 && (
              <button
                onClick={handlePrevious}
                className="bg-gray-500 hover:bg-gray-700 text-white  text-[12px] md:text-[30px] py-2 px-4 rounded-lg transition duration-200"
              >
                Previous 
              </button>
            )}

            {selectedAnswer && selectedAnswer.text === questions[currentQuestion].correct ? (
              currentQuestion + 1 < questions.length ? (
                <button
                  onClick={handleNext}
                  className="bg-[#E57373] hover:bg-[#C62828] text-white  text-[12px] md:text-[30px] py-2 px-4 rounded-lg transition duration-200"
                >
                  Next 
                </button>
              ) : (
                <button
                onClick={() => {
                  setQuizCompleted(true);
                  setShowConfetti(false); // Stop confetti when clicking "End"
                }}
                className="bg-green-600 hover:bg-green-800 text-white text-[12px] md:text-[30px] py-2 px-4 rounded-lg transition duration-200"
              >
                Winner(next)
              </button>
              
              )
            ) : (
              selectedAnswer && (
                <button
                  onClick={() => {
                    setSelectedAnswer(null);
                    setIsAnswered(false);
                  }}
                  className="bg-red-500 hover:bg-red-700 text-[12px] md:text-[30px] text-white py-2 px-4 rounded-lg transition duration-200"
                >
                  😭 Try Again
                </button>
              )
            )}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-start text-white mt-8 fancy-font " 
        >

          <h1 className="text-start my-[50px] text-[30px] ">heyyyyyyy 🤗❤️ ,</h1>
          {[
            "I, uh, I have something for you to read 😊 ....",
            "I know you love handwritten letters  (although this isn't exactly one ) so I wanted to surprise you with one. But, I made it a bit more exciting and different 😜.",
            "It’s not a love letter, but it's close 😉"].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 1.2, duration: 0.8 }}
              className="text-white lg:w-[900px] text-center text-[20px] font-semibold mt-[30px]"
            >
              {text}
            </motion.p>
          ))}
   
   <div className="flex items-center justify-center mt-[60px] ">
          <motion.button
            onClick={() => navigate("/letter")}
            className="mt-[30px] bg-red-500    hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Read the Letter 💌
          </motion.button>

   </div>
        </motion.div>
      )}
    </div>
  );
};

export default Firstpage ;