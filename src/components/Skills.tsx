"use client";

import { skills } from "../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div key={skill.name}>
              {/* Skill Header */}
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-cyan-400" />

                  {/* Rich Gradient Text */}
                  <span
                    className="
                      text-lg font-medium
                      bg-gradient-to-r
                      from-cyan-400
                      via-teal-500
                      to-emerald-600
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {skill.name}
                  </span>
                </div>

                <span className="text-sm text-gray-400">
                  {skill.level}%
                </span>
              </div>

              {/* Background Bar */}
              <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                {/* Animated Rich Gradient Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    via-teal-500
                    to-emerald-600
                  "
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
