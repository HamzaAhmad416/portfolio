import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-black text-center">
            Let's Work Together
          </h2>

          <p className="text-center text-slate-500 mt-5 text-lg mb-16">
            I'm always interested in new opportunities and exciting projects.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5 items-center">

                <div className="bg-blue-100 p-4 rounded-xl">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>

                <div>
                  <h4 className="font-bold">
                    Email
                  </h4>

                  <p className="text-slate-600">
                    hamzaahmed416@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex gap-5 items-center">

                <div className="bg-blue-100 p-4 rounded-xl">
                  <FaPhone className="text-blue-600 text-xl" />
                </div>

                <div>
                  <h4 className="font-bold">
                    Phone
                  </h4>

                  <p className="text-slate-600">
                    +92 313 5581862
                  </p>
                </div>

              </div>

              <div className="flex gap-5 items-center">

                <div className="bg-blue-100 p-4 rounded-xl">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>

                <div>
                  <h4 className="font-bold">
                    Location
                  </h4>

                  <p className="text-slate-600">
                    Islamabad, Pakistan
                  </p>
                </div>

              </div>

            </div>

            <div className="flex gap-6 mt-10">

              <a
                href="https://github.com/HamzaAhmad416"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/hamza-ahmad-pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl p-4 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-xl p-4 outline-none focus:border-blue-600"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-xl p-4 outline-none focus:border-blue-600"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border rounded-xl p-4 outline-none focus:border-blue-600"
            ></textarea>

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;