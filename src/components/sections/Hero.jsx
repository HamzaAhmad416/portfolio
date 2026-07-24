import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";

import profile from "../../assets/images/profile.jpg";
import resume from "../../assets/documents/resume.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 min-h-[calc(100vh-96px)] flex items-center">

        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-6">
              👋 Welcome to my portfolio
            </span>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900">
              Hamza Ahmad
            </h1>

            <div className="mt-6 text-3xl font-bold text-blue-600 h-12">

              <TypeAnimation
                sequence={[
                  "Full Stack .NET Developer",
                  2000,
                  "Azure Developer",
                  2000,
                  "React Developer",
                  2000,
                  "AI Software Developer",
                  2000,
                ]}
                speed={45}
                repeat={Infinity}
              />

            </div>

            <p className="mt-8 text-lg text-slate-600 leading-8 max-w-xl">
              I build scalable enterprise software using ASP.NET Core,
              Blazor, React, Azure and AI-powered development workflows.
              Passionate about clean architecture, performance and building
              software that solves real business problems.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href={resume}
                download
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-semibold transition"
              >
                <FaDownload />
                Download CV
              </a>

              <a
                href="#projects"
                className="px-7 py-4 rounded-xl border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 font-semibold transition"
              >
                View Projects
              </a>

            </div>

            {/* SOCIALS */}

            <div className="flex items-center gap-6 mt-10">

              <a
                href="https://github.com/HamzaAhmad416"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-600 transition hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/hamza-ahmad-pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-600 transition hover:scale-110"
              >
                <FaLinkedin />
              </a>

            </div>

            {/* BADGES */}

            <div className="flex flex-wrap gap-3 mt-12">

              {[
                ".NET",
                "ASP.NET Core",
                "Blazor",
                "React",
                "Azure",
                "Microservices",
                "SQL Server",
                "AI-SDLC",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-white shadow px-4 py-2 rounded-full font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-20 rounded-full"></div>

              <img
                src={profile}
                alt="Hamza Ahmad"
                className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover border-8 border-white shadow-2xl hover:scale-110 hover:rotate-2 transition duration-500"
              />

            </div>

          </motion.div>

        </div>

      </div>

      {/* STATS */}

      <div className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-4 gap-6">

          {[
            ["5+", "Years Experience"],
            ["20+", "Enterprise Features"],
            ["15+", "REST APIs"],
            ["100%", "Passion"],
          ].map(([value, title]) => (

            <div
              key={title}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <h2 className="text-4xl font-black text-blue-600">
                {value}
              </h2>

              <p className="mt-3 text-slate-600">
                {title}
              </p>
            </div>

          ))}

        </div>

      </div>

      <div className="flex justify-center pb-10 animate-bounce">

        <a href="#experience">
          <FaArrowDown className="text-2xl text-blue-600" />
        </a>

      </div>

    </section>
  );
}

export default Hero;