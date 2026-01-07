"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-5xl md:text-6xl font-bold
          bg-gradient-to-r
          from-cyan-400
          via-teal-500
          to-emerald-600
          bg-clip-text
          text-transparent
        "
      >
        Hi, I'm Sravani Balguri
      </motion.h1>

      <p className="mt-6 text-gray-400 max-w-xl">
        Software Engineer • AI Enthusiast • Full Stack Developer
      </p>

      {/* Resume Button */}
      <a
        href="/SRAVANI RESUME.pdf"
        target="_blank"
        className="
          mt-8 px-8 py-3 rounded-full font-medium
          bg-gradient-to-r
          from-cyan-400
          via-teal-500
          to-emerald-600
          text-black
          hover:scale-105 transition
        "
      >
        View Resume
      </a>
    </section>
  );
}
