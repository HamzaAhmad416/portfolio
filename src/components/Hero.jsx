function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 pb-10"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Hello, I'm <span className="text-blue-600">Hamza Ahmad</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Full Stack .NET Developer building robust web applications.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#work"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;