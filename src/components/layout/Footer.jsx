function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold">
          Hamza Ahmad
        </h2>

        <p className="text-slate-400 mt-3">
          Full Stack .NET Developer • React • Azure • AI
        </p>

        <p className="text-slate-500 mt-8 text-sm">
          © {new Date().getFullYear()} Hamza Ahmad. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;