import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Links (matching ids in Home.jsx)
  const links = ["Home", "Services", "Projects", "Skills", "Contact"];

  const handleScroll = (id) => {
    setIsOpen(false);
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-35 w-full max-w-3xl px-1 font-poppins">
      {/* Desktop Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
        className="hidden md:flex justify-center items-center bg-white/30 backdrop-blur-sm border border-gray-400/40 rounded-xl px-6 py-4 shadow-[0_0_15px_rgba(0,0,0,0.3)]"
      >
        {links.map((link, index) => (
          <motion.button
            key={index}
            onClick={() => handleScroll(link)}
            whileHover={{ scale: 1.1, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="relative cursor-pointer text-black transition-all duration-300 mx-5 hover:text-black hover:drop-shadow-[0_0_8px_rgb(255,215,0)] hover:bg-yellow-100/40 px-2 py-1 rounded-md"
          >
            {link}
            <motion.span
              className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 rounded origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        ))}
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
        className="md:hidden flex justify-between items-center bg-white/50 backdrop-blur-md border border-gray-400/40 rounded-xl px-6 py-4 shadow-[0_0_15px_rgba(0,0,0,0.3)]"
      >
        <motion.img
          src={logo}
          alt="Logo"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-10 h-10 rounded-full border-2 border-gray-500 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
        />
        <h1 className="text-lg font-sans text-black">
          Web <span className="text-yellow-400">Crafters</span>
        </h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="md:hidden mt-2 bg-white/50 backdrop-blur-md rounded-xl p-4 flex flex-col items-center space-y-4 border border-gray-400/40 shadow-[0_0_15px_rgba(0,0,0,0.3)]"
          >
            {links.map((link, index) => (
              <motion.button
                key={index}
                onClick={() => handleScroll(link)}
                whileHover={{ scale: 1.1, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="relative text-black text-lg transition-all duration-300 hover:text-black hover:bg-black px-2 py-1 rounded-md"
              >
                {link}
                <motion.span
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 rounded origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
