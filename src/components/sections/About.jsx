import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black text-center">
            About Me
          </h2>

          <p className="text-center text-slate-500 mt-4 mb-16">
            Passionate about building enterprise software.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-6">
              Full Stack .NET Developer
            </h3>

            <p className="text-slate-600 leading-8 mb-6">
              I have 5+ years of experience building enterprise software
              using .NET, ASP.NET Core, Blazor, React, SQL Server and Azure.
            </p>

            <p className="text-slate-600 leading-8">
              Recently I've been working with AI-assisted software
              development workflows, improving development speed,
              documentation quality and software architecture.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;