import { useState } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const navItems = [
  "home",
  "experience",
  "skills",
  "projects",
  "contact",
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">

      <div className="max-w-7xl mx-auto h-20 px-6 flex justify-between items-center">

        <Link
          to="home"
          smooth
          duration={500}
          className="text-3xl font-black text-blue-600 cursor-pointer"
        >
          HA
        </Link>

        <nav className="hidden md:flex gap-8">

          {navItems.map((item) => (

            <Link
              key={item}
              to={item}
              smooth
              spy
              duration={500}
              offset={-80}
              activeClass="text-blue-600"
              className="capitalize cursor-pointer font-semibold hover:text-blue-600 transition"
            >
              {item}
            </Link>

          ))}

        </nav>

        <div className="hidden md:flex gap-5">

          <a
            href="https://github.com/HamzaAhmad416"
            target="_blank"
          >
            <FaGithub className="text-2xl hover:text-blue-600 transition" />
          </a>

          <a
            href="YOUR_LINKEDIN"
            target="_blank"
          >
            <FaLinkedin className="text-2xl hover:text-blue-600 transition" />
          </a>

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {open && (

        <div className="bg-white md:hidden">

          {navItems.map((item) => (

            <Link
              key={item}
              to={item}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 capitalize border-b cursor-pointer hover:bg-slate-100"
            >
              {item}
            </Link>

          ))}

        </div>

      )}

    </header>
  );
}

export default Navbar;