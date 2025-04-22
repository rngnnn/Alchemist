import Link from 'next/link';

export default function Navbar() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">My Website</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="text-gray-300 hover:text-white">Home</a>
            </Link>
          </li>
          <li>
            <button
              onClick={scrollToProjects}
              className="text-gray-300 hover:text-white"
            >
              Projects
            </button>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-gray-300 hover:text-white">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}