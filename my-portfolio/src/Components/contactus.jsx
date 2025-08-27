import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import contactAnim from "../assets/contact.json";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      const res = await fetch("https://portfolio94.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus("❌ Server error. Try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex flex-col justify-between"
    >
      <div className="flex flex-col items-center py-16 px-6 flex-grow">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-fancy text-gray-900 mb-4"
        >
          Contact Us
        </motion.h1>

        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">
          Have questions or want to work with us? 🚀 Fill out the form below or reach us directly!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full items-center">
          {/* Left - Lottie */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Lottie animationData={contactAnim} loop={true} className="w-80 h-80" />
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 w-full"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSending}
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg shadow-md hover:bg-yellow-500 transition-colors disabled:opacity-50"
            >
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>

            {status && (
              <p className="text-center mt-4 font-medium text-gray-700">{status}</p>
            )}
          </motion.form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-8 mt-12 text-gray-700">
          <div className="flex items-center gap-3">
            <Mail className="text-yellow-500" /> orugantinavadeep@gmail.com
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-yellow-500" /> +91 9494704280
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-yellow-500" /> Kurnool, India
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-yellow-400 text-black py-4 text-center font-medium">
        © {new Date().getFullYear()} Oruganti Navadeep. All rights reserved.
      </footer>
    </section>
  );
};

export default ContactUs;
