function Navbar() {
  return (
    <nav className="w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <a
          href="#"
          className="text-xl font-bold text-gray-800"
        >
          PORTFOLIO
        </a>

        <div className="hidden md:flex space-x-8">

          <a
            href="#home"
            className="text-gray-700 hover:text-gray-900"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-gray-700 hover:text-gray-900"
          >
            About
          </a>

          <a
            href="#work"
            className="text-gray-700 hover:text-gray-900"
          >
            Work
          </a>

          <a
            href="#contact"
            className="text-gray-700 hover:text-gray-900"
          >
            Contact
          </a>

        </div>

        <button className="md:hidden text-gray-700">
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;