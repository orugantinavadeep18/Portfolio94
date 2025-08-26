import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaWordpress, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb, SiMysql, SiOpenai } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-[#F06529] text-6xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#2965F1] text-6xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] text-6xl" /> },
  { name: "ReactJS", icon: <FaReact className="text-[#61DBFB] text-6xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#68A063] text-6xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400 text-6xl" /> },
  { name: "SQL", icon: <SiMysql className="text-[#00758F] text-6xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-6xl" /> },
  { name: "WordPress", icon: <FaWordpress className="text-[#21759B] text-6xl" /> },
  { name: "AI Tools", icon: <SiOpenai className="text-[#8A2BE2] text-6xl" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient from-yellow-100 via-yellow-500 to-yellow-50 text-white px-6 py-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-fancy text-black mb-6"
      >
      Work Skills Used
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center text-black max-w-3xl mb-12 leading-relaxed"
      >
        For building <span className="font-bold">Frontend </span> (HTML, CSS, JavaScript, ReactJS), for{" "}
        <span className="font-bold">Backend</span> (Node.js, Express.js, SQL & MongoDB), and also create websites using{" "}
        <span className="font-bold">WordPress</span>. I integrate <span className="font-bold">AI tools</span> to upgrade 
        websites for better efficiency and performance 🚀
      </motion.p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 1, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.2, rotate: 6 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex flex-col items-center justify-center bg-white px-6 py-6 rounded-2xl shadow-md hover:shadow-lg hover:shadow-gray-500 transition-all duration-300"
          >
            {skill.icon}
            <p className="mt-4 text-lg font-semibold text-black">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
