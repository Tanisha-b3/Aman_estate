import { useState } from 'react';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/image5.jpg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-black bg-opacity-80 text-[#f0d27a] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold">
<img src={logo} style={{ height: '60px', width: '140px', background:'black' }} />
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#daa520] px-3 py-2 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center space-x-4">
                <a href="tel:+686858866" className="flex items-center text-sm">
                  <FaPhone className="mr-2" />
                  +68 685 8866
                </a>
                <button className="border border-[#daa520] px-4 py-1 rounded-full text-sm hover:bg-[#daa520] hover:text-black transition">
                  Partner Here
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#daa520] hover:text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:bg-[#daa520] hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-3 border-t border-[#daa520]">
              <div className="flex items-center px-5 py-2">
                <FaPhone className="mr-2" />
                <span className="text-sm">+68 685 8866</span>
              </div>
              <button className="w-full mt-2 border border-[#daa520] px-4 py-2 rounded-full text-sm hover:bg-[#daa520] hover:text-black">
                Partner Here
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
