import experience from "../data/experience";

function Experience() {
  return (
    <section id="about" className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Experience
        </h2>

        <div className="space-y-8">

          {experience.map((job) => (

            <div
              key={job.id}
              className="bg-gray-100 rounded-xl p-6 shadow"
            >

              <h3 className="text-2xl font-bold">
                {job.title}
              </h3>

              <p className="text-blue-600 font-semibold">
                {job.company}
              </p>

              <p className="text-gray-500">
                {job.duration}
              </p>

              <p className="text-gray-500 mb-4">
                {job.location}
              </p>

              <ul className="list-disc pl-5 space-y-2">

                {job.responsibilities.map((item, index) => (

                  <li key={index}>
                    {item}
                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;