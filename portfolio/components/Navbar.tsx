export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-16 py-5 flex justify-between items-center backdrop-blur-md bg-[#faf7f2]/90 border-b border-[#dcc9b3]">
      <a
        href="#"
        className="text-2xl font-serif tracking-wide text-[#2a1f12]"
      >
        P.S.
      </a>

      <ul className="flex gap-10 text-xs uppercase tracking-[0.2em]">
        <li>
          <a href="#about" className="hover:text-[#8c6b3a] transition">
            About
          </a>
        </li>

        <li>
          <a href="#projects" className="hover:text-[#8c6b3a] transition">
            Projects
          </a>
        </li>

        <li>
          <a href="#experience" className="hover:text-[#8c6b3a] transition">
            Experience
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-[#8c6b3a] transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}