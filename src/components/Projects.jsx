import ProjectCard from "./ProjectCard";

function Projects() {

    const projects = [

        {
            title: "E-Commerce Platform",
            description: "A modern e-commerce platform.",
            image: "https://picsum.photos/600/400?1"
        },

        {
            title: "Medical Diagnostics",
            description: "Patient diagnosis application.",
            image: "https://picsum.photos/600/400?2"
        },

        {
            title: "National Grid Maps",
            description: "Maps application used in the UK.",
            image: "https://picsum.photos/600/400?3"
        }

    ];

    return (

        <section
            id="work"
            className="py-20 bg-gray-50"
        >

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {projects.map((project, index) => (

                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Projects;