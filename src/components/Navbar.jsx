import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 text-white shadow-md bg-gradient-to-r from-black via-cyan-800 to-black">
        <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold tracking-wider">MyPortfolio</h1>

          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`hover:text-yellow-300 transition-all duration-300 ease-in-out ${
                    location.pathname === item.path ? 'border-b-2 border-yellow-400' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

 
    </>
  );
};

export default Navbar;
