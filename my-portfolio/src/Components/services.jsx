import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

// ✅ Services list
const services = [
  {
    title: "E-commerce Website",
    description: "Boost sales with a secure, scalable, and modern e-commerce site.",
    icon: "🛒",
    link: "/ecommerce",  // ✅ corrected to hash link
  },
  {
    title: "Blog Website",
    description: "Engage your audience with a clean and responsive blog platform.",
    icon: "📝",
    link: "/blog",
  },
  {
    title: "Portfolio",
    description: "Showcase your skills, work, and creativity in style.",
    icon: "💼",
    link: "/portfolio",
  },
  {
    title: "Advertisement Website",
    description: "Promote your products/services with impactful ad websites.",
    icon: "📢",
    link: "/advertisement",
  },
];

// ✨ Animation Variants for scroll effects
const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -80, scale: 0.9 },
};

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex flex-col items-center py-16 px-6"
    >
      {/* <Navbar/> */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-fancy text-gray-900 mb-4"
      >
        Our Services
      </motion.h1>

      <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">
        We craft modern, scalable, and user-friendly websites tailored to your needs 🚀
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center cursor-pointer hover:shadow-2xl transition-all"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 mb-4">{service.description}</p>

            {/* ✅ Simple anchor tag for section scrolling */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href={service.link}
                className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-colors"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
