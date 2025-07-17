import { useState } from 'react';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/image5.jpg';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: <Services /> },
    { name: 'Contact', href: <Contact /> },
  ];

  return (
    <nav className="bg-[#0a0a0a]/90 backdrop-blur-md text-[#f0d27a] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Aman Estate Logo"
              className="h-12 w-12 rounded-md object-cover border border-[#daa520] shadow-sm"
            />
            <span className="text-2xl font-elegant tracking-wide text-white">
  Aman <span className="text-[#daa520]">Estate</span>
</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-[#daa520] transition duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <a href="tel:+686858866" className="flex items-center text-sm hover:text-[#daa520] transition">
                <FaPhone className="mr-2" />
                +68 685 8866
              </a>
              <button className="border border-[#daa520] px-4 py-1 rounded-full text-sm hover:bg-[#daa520] hover:text-black transition">
                Partner With Us
              </button>
            </div>
          </div>

          {/* Mobile Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#daa520] hover:text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#daa520]">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-base font-medium hover:text-[#daa520] transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-[#daa520] pt-4">
              <div className="flex items-center text-sm space-x-2">
                <FaPhone />
                <span>+68 685 8866</span>
              </div>
              <button className="w-full mt-4 border border-[#daa520] px-4 py-2 rounded-full text-sm hover:bg-[#daa520] hover:text-black transition">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
