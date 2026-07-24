import skills from "../../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((group) => (

            <div
              key={group.category}
              className="bg-white rounded-xl shadow-md p-6"
            >

              <h3 className="text-2xl font-bold mb-6 text-blue-600">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.items.map((skill) => (

                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;