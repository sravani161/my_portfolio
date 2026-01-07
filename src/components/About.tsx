"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-black text-white"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          text-4xl font-bold text-center mb-8
          bg-gradient-to-r
          from-cyan-400
          via-teal-500
          to-emerald-600
          bg-clip-text
          text-transparent
        "
      >
        About Me
      </motion.h2>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          max-w-4xl mx-auto
          bg-gray-900
          border border-gray-700
          rounded-2xl
          p-8 md:p-10
          text-gray-300
          leading-relaxed
        "
      >
        <p>
          I am a <span className="text-white font-medium">Software Engineer</span>{" "}
          with a strong interest in building scalable, high-performance
          applications and modern web experiences. I enjoy working across the
          full stack and turning complex problems into clean, user-friendly
          solutions.
        </p>

        <p className="mt-4">
          I have hands-on experience with{" "}
          <span className="text-white">
            JavaScript, TypeScript, React, Next.js, Node.js, and Python
          </span>, and I am continuously learning new technologies to stay
          up-to-date in a fast-moving industry.
        </p>

        <p className="mt-4">
          What excites me most is combining{" "}
          <span className="text-white">
            problem-solving, system design, and AI-powered ideas
          </span>{" "}
          to create products that are both technically strong and impactful in
          the real world.
        </p>

        <p className="mt-6 text-sm text-gray-400">
          Outside of coding, I enjoy learning about system design, improving my
          problem-solving skills, and building projects that challenge me to
          grow as an engineer.
        </p>
      </motion.div>
    </section>
  );
}
