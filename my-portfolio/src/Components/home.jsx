import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import bg from "../assets/bg.png";
import logo from "../assets/logo.png";
import Lottie from "lottie-react";
import devAnimation from "../assets/dev.json";
import PopupForm from "./PopupForm";
import Services from "./services";
import { ChevronDown } from "lucide-react";
import Skills from "./skills";
import MyProjects from "./myprojects";
import ContactUs from "./contactus";
import programmingAnimation from "../assets/programming.json"
// ✅ Scroll Indicator Component (inline)
const ScrollDownIndicator = ({ targetId }) => {
  const handleScroll = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2 }}
      className="absolute bottom-6 w-full flex justify-center cursor-pointer"
      onClick={handleScroll}
    >
      <ChevronDown size={40} className="text-yellow-500 animate-bounce" />
    </motion.div>
  );
};

const quotes = [
  "Design that speaks louder than words ✨",
  "Transforming ideas into digital reality 💡",
  "Where creativity meets technology ⚡",
  "Crafting solutions that inspire 🚀",
];

const questions = [
  "Want an amazing website for yourself? 🌟",
  "Looking to boost your online presence? 🚀",
  "Need a website that stands out? 💡",
  "Ready to transform your ideas into digital reality? ⚡",
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const qInterval = setInterval(() => {
      setQIndex((prev) => (prev + 1) % questions.length);
    }, 3000);
    return () => clearInterval(qInterval);
  }, []);

  const handleFormSubmit = async (data) => {
    console.log("Form Data:", data);

    await fetch("http://localhost:5000/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setShowPopup(false);
  };

  const handleAdminLogin = () => {
    setShowPopup(false);
  };

  return (
    <div
      className="h-full w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {showPopup && (
        <PopupForm onSubmit={handleFormSubmit} onAdminLogin={handleAdminLogin} />
      )}

      <Navbar />

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        
       {/* Desktop View */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="hidden md:flex flex-col items-center justify-center h-full text-center px-6 relative"
>
  {/* Heading */}
  <motion.h1
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="text-6xl md:text-7xl font-fancy text-black drop-shadow-2xl mb-6"
  >
    Welcome to <span className="text-yellow-400">Web Crafters</span>
  </motion.h1>

  {/* ✅ Centered Animation with Shadow */}
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.8, duration: 1 }}
    className="flex justify-center items-center"
  >
    <Lottie
      animationData={programmingAnimation}
      loop={true}
      className="max-w-[400px] md:max-w-[480px] drop-shadow-[0_35px_60px_rgba(0,0,0,0.5)]"
    />
  </motion.div>

  {/* Quotes */}
 

  {/* Questions */}
  <AnimatePresence mode="wait">
    <motion.p
      key={`q-${qIndex}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6 }}
      className="mt-3 text-md md:text-3xl font-sans text-gray-800"
    >
      {questions[qIndex]}
    </motion.p>
  </AnimatePresence>
</motion.div>


       {/* Mobile View */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="flex md:hidden items-center justify-center min-h-[calc(100vh-80px)] px-0 py-6 relative overflow-x-hidden w-full"
>
  <div className="flex flex-col items-center text-center w-full max-w-xs sm:max-w-sm mx-auto overflow-x-hidden">
    {/* Heading */}
    <motion.h1
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="text-2xl sm:text-3xl font-fancy text-black drop-shadow-lg leading-snug"
    >
      Welcome to <span className="text-yellow-600">Web Crafters</span>
    </motion.h1>

    {/* Quotes */}
    <AnimatePresence mode="wait">
      <motion.p
        key={index}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.6 }}
        className="mt-3 text-sm sm:text-base font-sans text-black px-2"
      >
        {quotes[index]}
      </motion.p>
    </AnimatePresence>

    {/* Lottie Animation */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="w-full flex justify-center mt-6 overflow-x-hidden"
    >
      <Lottie
        animationData={devAnimation}
        loop={true}
        className="w-[160px] sm:w-[200px] max-w-full mx-auto drop-shadow-2xl"
      />
    </motion.div>

    {/* Questions */}
    <AnimatePresence mode="wait">
      <motion.p
        key={qIndex}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.6 }}
        className="mt-3 text-sm sm:text-base font-sans text-black px-3 text-center"
      >
        {questions[qIndex]}
      </motion.p>
    </AnimatePresence>
  </div>
</motion.div>



        {/* 🔽 Scroll Indicator to Services */}
        <ScrollDownIndicator targetId="services" />
      </section>

      {/* Services Section */}
      <section id="services" className="relative">
        <Services />
        <ScrollDownIndicator targetId="projects" />
      </section>

      {/* Projects Section */}
      <MyProjects/>

      {/* Skills Section */}
  <Skills/>
      {/* Contact Section */}
      <ContactUs/>
    </div>
  );
};

export default Home;
