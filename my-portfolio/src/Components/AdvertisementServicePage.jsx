import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import adImage from "../assets/advertisement.png"; // Replace with your advertisement image
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function AdvertisementServicePage() {
  return (
    <section
      id="advertisement"
      className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex flex-col items-center py-12 px-4 md:px-6 scroll-smooth"
    >
      <div className="w-full text-gray-900">
        {/* ================= HERO ================= */}
        <section
          className="relative bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 text-white py-16 px-6 md:py-20 md:px-8 text-center md:text-left flex flex-col lg:flex-row items-center lg:items-start justify-between rounded-b-[40px] md:rounded-b-[60px] shadow-2xl gap-10"
        >
          {/* Back Button */}
          <a
            href="/"
            className="absolute top-4 left-4 flex items-center gap-2 text-white hover:text-yellow-200 transition-colors text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span>Back to Home</span>
          </a>

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl w-full lg:w-auto mt-12 md:mt-0"
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-snug">
              Advertisement Services
            </h1>
            <p className="mt-4 text-base md:text-lg opacity-90">
              Create impactful advertisements with stunning visuals, animation, and strategy to boost your brand visibility.
            </p>
          </motion.div>

          {/* Device Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex flex-row items-center justify-center gap-6 md:gap-10 w-auto"
          >
            {/* Desktop */}
            <div className="relative flex-shrink-0 w-[240px] md:w-[360px]">
              <div className="bg-gray-900 rounded-lg shadow-2xl border-[6px] md:border-[8px] border-gray-800 overflow-hidden relative">
                <img
                  src={adImage}
                  alt="Advertisement Desktop"
                  className="w-full h-[160px] md:h-[240px] object-cover"
                />
              </div>
              <div className="w-20 h-5 md:w-24 md:h-6 bg-gray-700 mx-auto rounded-b-md mt-1"></div>
              <div className="w-32 h-2.5 md:w-40 md:h-3 bg-gray-800 mx-auto rounded-t-md"></div>
            </div>

            {/* Laptop */}
            <div className="relative flex-shrink-0 w-[220px] md:w-[320px]">
              <div className="bg-gray-900 rounded-lg shadow-xl border-[5px] md:border-[6px] border-gray-800 overflow-hidden">
                <img
                  src={adImage}
                  alt="Advertisement Laptop"
                  className="w-full h-[140px] md:h-[200px] object-cover"
                />
              </div>
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 w-[92%] h-8 md:h-10 mx-auto rounded-b-xl shadow-lg relative -top-1">
                <div className="absolute bottom-1.5 md:bottom-2 left-1/2 -translate-x-1/2 w-12 md:w-16 h-3 md:h-4 bg-gray-700 rounded-md"></div>
              </div>
            </div>

            {/* Phone */}
            <div className="relative flex-shrink-0 w-[100px] h-[200px] md:w-[120px] md:h-[240px] bg-gray-900 rounded-2xl md:rounded-3xl shadow-lg border-[5px] md:border-[6px] border-gray-800 overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 md:w-16 h-4 md:h-5 bg-black rounded-b-xl"></div>
              <img
                src={adImage}
                alt="Advertisement Phone"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Mobile Slider */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="block lg:hidden w-full max-w-sm mx-auto"
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              loop={true}
              className="w-full"
            >
              {[adImage, adImage, adImage].map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative flex justify-center">
                    <div className="relative flex-shrink-0 w-[260px]">
                      <div className="bg-gray-900 rounded-lg shadow-2xl border-[6px] border-gray-800 overflow-hidden relative">
                        <img src={img} alt={`Ad Slide ${i}`} className="w-full h-[180px] object-cover"/>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="px-4 md:px-16 py-12 md:py-16 bg-white text-gray-900">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-16 md:mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">About</h2>
              <p className="text-base md:text-lg leading-relaxed">
                Advertisement is all about capturing attention quickly. I provide creative ad designs optimized for web and mobile that deliver maximum engagement and brand awareness.
              </p>
            </div>
            <div className="space-y-6 md:space-y-8">
              <div>
                <h4 className="text-gray-500 text-base md:text-lg">Services Provided</h4>
                <p className="font-semibold text-lg md:text-xl">Creative Design</p>
                <p className="font-semibold text-lg md:text-xl">Campaign Strategy</p>
                <p className="font-semibold text-lg md:text-xl">Ad Development</p>
              </div>
              <div>
                <h4 className="text-gray-500 text-base md:text-lg">Duration of Development</h4>
                <p className="font-semibold text-lg md:text-xl">1 – 2 weeks</p>
              </div>
            </div>
          </div>

          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">The Challenge</h3>
            <p className="text-base md:text-lg leading-relaxed">
              The biggest challenge with advertisements is making them visually engaging while conveying the message clearly. I focus on catchy visuals, concise messaging, and multi-device compatibility.
            </p>
          </motion.div>

          {/* Goals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center mb-20 md:mb-28"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10 relative z-10">Goals</h2>
            <div className="absolute text-[80px] md:text-[180px] font-extrabold text-gray-100 z-0">
              GOALS
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500"></div>
                <p className="mt-4 text-base md:text-lg">Brand Visibility</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-pink-400 to-red-500"></div>
                <p className="mt-4 text-base md:text-lg">Engagement Boost</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500"></div>
                <p className="mt-4 text-base md:text-lg">Creative Impact</p>
              </div>
            </div>
          </motion.div>

          {/* Sprint */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10">Sprint</h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Advertisement campaigns are created in sprints, focusing on design, animation, and deployment with thorough testing for all platforms.
            </p>
            <div className="relative bg-white shadow-xl rounded-xl p-4 md:p-6">
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="w-full md:w-40 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white">Design</div>
                  <span className="mt-2 md:mt-0 md:ml-4 text-gray-700">2 days</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="w-full md:w-60 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white">Animation</div>
                  <span className="mt-2 md:mt-0 md:ml-4 text-gray-700">3 days</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="w-full md:w-48 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white">Deployment</div>
                  <span className="mt-2 md:mt-0 md:ml-4 text-gray-700">2 days</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  );
}
