import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PopupForm = ({ onSubmit, onAdminLogin }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminCode, setAdminCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // ✅ Show popup only if not submitted before
  useEffect(() => {
    const alreadySubmitted = localStorage.getItem("popupSubmitted");
    if (!alreadySubmitted) {
      setShowPopup(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:5000/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        localStorage.setItem("popupSubmitted", "true"); // ✅ immediately mark as submitted
        setSubmitted(true);
        if (onSubmit) onSubmit(formData);

        // ✅ close popup right away after success
        setTimeout(() => {
          setShowPopup(false);
        }, 1500);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminCode === "ADMIN123") {
      localStorage.setItem("popupSubmitted", "true"); // ✅ also hide forever for admin
      setShowPopup(false);
      if (onAdminLogin) onAdminLogin();
    } else {
      alert("❌ Wrong Admin Password!");
    }
  };

  // ✅ Do not render popup if already submitted
  if (!showPopup) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Welcome 👋</h2>

          {!showAdminLogin ? (
            <>
              {!submitted ? (
                <>
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    Please enter your details to continue
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-3 py-2 border rounded-lg"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full px-3 py-2 border rounded-lg"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      className="w-full px-3 py-2 border rounded-lg"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500 disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </form>

                  <button
                    onClick={() => setShowAdminLogin(true)}
                    className="mt-4 w-full bg-gray-700 text-white font-bold py-2 rounded-lg hover:bg-gray-800"
                  >
                    Admin Login
                  </button>
                </>
              ) : (
                <p className="text-center text-green-600 font-semibold">
                  ✅ Submitted! Redirecting...
                </p>
              )}
            </>
          ) : (
            <form onSubmit={handleAdminLogin} className="space-y-3">
              <input
                type="password"
                placeholder="Enter Admin Password"
                className="w-full px-3 py-2 border rounded-lg"
                value={adminCode}
                onChange={(e) => setAdminCode(e.target.value)}
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500"
              >
                Login as Admin
              </button>
              <button
                type="button"
                onClick={() => setShowAdminLogin(false)}
                className="w-full bg-gray-400 text-black font-bold py-2 rounded-lg hover:bg-gray-500"
              >
                Back
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopupForm;
