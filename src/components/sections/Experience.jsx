import { motion } from "framer-motion";

const experiences = [
  {
    title: "AI Software Development (AI-SDLC)",
    company: "Contour Software",
    duration: "Nov 2025 – Present",
    description: [
      "Built software using an AI-assisted Software Development Life Cycle.",
      "Generated functional and non-functional requirements with AI.",
      "Used AI for planning, coding, documentation and pull request reviews.",
      "Worked with enterprise applications using .NET, Azure and modern development practices."
    ]
  },
  {
    title: "Full Stack .NET Developer",
    company: "Contour Software",
    duration: "May 2023 – Nov 2025",
    description: [
      "Developed enterprise web applications using ASP.NET Core and Blazor.",
      "Built REST APIs and SQL Server integrations.",
      "Worked with Azure services, CI/CD pipelines and Azure DevOps.",
      "Collaborated with product owners, QA and international teams."
    ]
  },
  {
    title: ".NET Software Engineer",
    company: "Previous Experience",
    duration: "2020 – 2023",
    description: [
      "Developed business applications using C# and .NET.",
      "Fixed production issues and optimized application performance.",
      "Designed reusable components and maintained existing systems."
    ]
  }
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-black text-center text-slate-900">
            Experience
          </h2>

          <p className="text-center text-slate-500 mt-4 mb-16 text-lg">
            My professional journey
          </p>

        </motion.div>

        <div className="relative">

          <div className="absolute left-4 top-0 h-full w-1 bg-blue-200"></div>

          <div className="space-y-12">

            {experiences.map((job, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-14"
              >

                <div className="absolute left-0 top-2 h-8 w-8 rounded-full bg-blue-600 border-4 border-white shadow-lg"></div>

                <div className="bg-slate-50 rounded-2xl shadow-lg p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                    <div>

                      <h3 className="text-2xl font-bold text-slate-900">
                        {job.title}
                      </h3>

                      <p className="text-blue-600 font-semibold mt-2">
                        {job.company}
                      </p>

                    </div>

                    <span className="mt-4 md:mt-0 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                      {job.duration}
                    </span>

                  </div>

                  <ul className="mt-6 space-y-3">

                    {job.description.map((item) => (

                      <li
                        key={item}
                        className="flex items-start gap-3 text-slate-600"
                      >
                        <span className="text-blue-600 mt-1">✔</span>
                        <span>{item}</span>
                      </li>

                    ))}

                  </ul>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;