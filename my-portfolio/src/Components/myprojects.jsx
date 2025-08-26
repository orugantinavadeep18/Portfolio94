import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Import your local images
import inv1 from "../assets/inv1.png";
import inv2 from "../assets/inv2.png";
import inv3 from "../assets/inv3.png";

import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";

import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const projects = [
  {
    title: "My Blog Website",
    description:
      "A personal blogging platform where I share articles and insights. Built with React and styled for a clean, minimal reading experience.",
    images: [blog1, blog2, blog3],
    link: "https://nike-blog.vercel.app/",
  },
  {
    title: "Used Car Marketplace (Vehicle Verse)",
    description:
      "An e-commerce platform where users can browse, filter, and buy used cars online. Designed for speed, responsiveness, and ease of use.",
    images: [car1, car2, car3, car4],
    link: "https://used-car-marketplace-kappa.vercel.app/",
  },
  {
    title: "Inventory Management System",
    description:
      "(Site is available for admin & customer only and admin only can add customers) A full-stack system to manage products, categories, suppliers, and stock efficiently. Built with React, Node.js, and MongoDB.",
    images: [inv1, inv2, inv3],
    // link: "https://inventry-management-system-ndte.vercel.app/login",
  },
  {
    title: "Coming Soon",
    description:
      "Another exciting project is under development. Stay tuned for updates 🚀",
    images: [],
    link: "#",
  },
];

// ✨ Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -80, scale: 0.9 },
};

const ProjectCard = ({ project }) => {
  const [current, setCurrent] = useState(0);

  const nextImage = () =>
    setCurrent((prev) => (prev + 1) % project.images.length);

  const prevImage = () =>
    setCurrent((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all flex flex-col w-full max-w-sm mx-auto"
    >
      {/* 🔥 Image Carousel with Arrows */}
      {project.images.length > 0 ? (
        <div className="relative w-full h-56 overflow-hidden">
          <img
            src={project.images[current]}
            alt={`${project.title}-${current}`}
            className="w-full h-full object-cover"
          />

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      ) : (
        <div className="h-56 w-full flex items-center justify-center bg-gray-200 text-gray-500">
          Preview Coming Soon
        </div>
      )}

      {/* Project Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {project.title}
        </h2>
        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-block px-4 py-2 mt-auto font-semibold rounded-md shadow-md text-center transition-colors ${
            project.link === "#"
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-yellow-400 text-black hover:bg-yellow-500"
          }`}
        >
          {project.link === "#" ? "Coming Soon" : "Visit Site"}
        </motion.a>
      </div>
    </motion.div>
  );
};

const MyProjects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex flex-col items-center py-16 px-6"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-fancy text-gray-900 mb-4"
      >
        My Projects
      </motion.h1>

      <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">
        Here are some of my live running projects 🚀 Click on them to explore!
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
