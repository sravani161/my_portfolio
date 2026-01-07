import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-black text-white">
      {/* Section Heading */}
      <h2
        className="
          text-4xl font-bold text-center mb-12
          bg-gradient-to-r
          from-cyan-400
          via-teal-500
          to-emerald-600
          bg-clip-text
          text-transparent
        "
      >
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              bg-gray-900
              border border-gray-700
              rounded-xl
              p-6
              transition
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]
            "
          >
            {/* Project Title */}
            <h3 className="text-2xl font-semibold text-white">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mt-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex gap-3 mt-4 flex-wrap">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="
                    text-sm font-medium
                    bg-gradient-to-r
                    from-cyan-400
                    via-teal-500
                    to-emerald-600
                    bg-clip-text
                    text-transparent
                  "
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-6">
              <a
                href={project.github}
                target="_blank"
                className="
                  font-medium
                  bg-gradient-to-r
                  from-cyan-400
                  via-teal-500
                  to-emerald-600
                  bg-clip-text
                  text-transparent
                  hover:underline
                "
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
