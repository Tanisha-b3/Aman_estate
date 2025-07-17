import { useState } from 'react';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../assets/image5.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
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
              onClick={() => window.location.href = '/'}
            />
            <span className="text-2xl font-elegant tracking-wide text-white">
              Aman <span className="text-[#daa520]">Estate</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition duration-200 ${
                    isActive ? 'text-[#daa520] border-b-2 border-[#daa520]' : 'text-white hover:text-[#daa520]'
                  }`
                }
              >
                {link.name}
              </NavLink>
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
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-medium transition ${
                    isActive ? 'text-[#daa520]' : 'text-white hover:text-[#daa520]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="border-t border-[#daa520] pt-4">
              <div className="flex items-center text-sm space-x-2 text-white">
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

