import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Enterprise Workforce Management",
    description:
      "Enterprise application for managing employees, scheduling, reporting and business workflows.",

    technologies: [
      ".NET",
      "Blazor",
      "SQL Server",
      "Azure"
    ],

    github: "https://github.com/HamzaAhmad416",
    live: "#"
  },

  {
    title: "AI Software Development Platform",

    description:
      "AI-assisted SDLC platform used for planning, requirements, coding and documentation using modern AI workflows.",

    technologies: [
      "AI",
      ".NET",
      "Azure",
      "OpenAI"
    ],

    github: "https://github.com/HamzaAhmad416",
    live: "#"
  },

  {
    title: "React Portfolio",

    description:
      "Modern developer portfolio built using React, Tailwind CSS, Framer Motion and reusable components.",

    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Vite"
    ],

    github: "https://github.com/HamzaAhmad416",
    live: "#"
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-black text-center">
            Projects
          </h2>

          <p className="text-center text-slate-500 mt-4 mb-16 text-lg">
            A few projects I've worked on
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:-translate-y-3 hover:shadow-2xl">

              <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">

                <h3 className="text-white text-2xl font-bold text-center px-4">
                  {project.title}
                </h3>

              </div>

              <div className="p-6">

                <p className="text-slate-600 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-lg hover:bg-black transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;