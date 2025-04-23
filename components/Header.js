import { useState, useEffect } from 'react';
import Link from 'next/link';

const itemsRight = [
  { icon: 'fab fa-github', link: 'https://github.com/rngnnn' },
  { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/rengin-forbes/' },
  { icon: 'fa fa-envelope', link: 'mailto:rngnnnclk@gmail.com' },
  { icon: 'fa fa-user', link: 'https://who-am-i-eight.vercel.app/#' },
];

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blogs', href: 'https://blog.codeshare.me', external: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-400 ${
        isScrolled ? 'backdrop-blur-0 bg-white/40 dark:bg-black/20 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Empty div for spacing */}
        <div className="w-1/3 hidden md:block"></div>

        {/* CENTERED NAV ITEMS */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700 dark:text-gray-300 mx-auto absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <a
                className="hover:text-red-600 dark:hover:text-white transition"
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noopener noreferrer' : undefined}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* RIGHT ICONS */}
        <div className="hidden md:flex items-center space-x-4 w-1/3 justify-end">
          {itemsRight.map((item) => (
            <a
              key={item.link}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="text-lg text-gray-600 dark:text-gray-300 hover:text-red-600 transition"
            >
              <i className={item.icon}></i>
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-800 dark:text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700">
          <ul className="space-y-3 text-gray-800 dark:text-gray-200">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>
                  <a
                    className="block text-base hover:text--600 transition"
                    target={item.external ? '_blank' : '_self'}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
            <li className="flex space-x-4 pt-2 border-t border-gray-300 dark:border-gray-700">
              {itemsRight.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg hover:text-blue-600"
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
