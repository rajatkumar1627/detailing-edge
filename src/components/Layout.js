import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['HOME', 'ABOUT US', 'SERVICES', 'TRAININGS', 'SUPPORT'];

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">DetailingEdge</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((text, index) => (
            <li key={index} className="list-none">
              <Link href={`/${text.toLowerCase().replace(' ', '')}`} className="hover:text-yellow-400">
                {text}
              </Link>
            </li>
          ))}
        </nav>

        {/* Contact Info for Desktop */}
        <div className="hidden md:block text-yellow-400 font-bold">
          +1-976037-987
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((text, index) => (
              <li key={index}>
                <Link href={`/${text.toLowerCase().replace(' ', '')}`} className="hover:text-yellow-400">
                  {text}
                </Link>
              </li>
            ))}
            <li className="text-yellow-400 font-bold">+1-976037-987</li>
          </ul>
        </nav>
      )}

      {/* Main content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
